from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Student
from .serializers import StudentSerializer
from .utils import generate_admission_no

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def register_student(request):

    # Allow only admin users
    if not request.user.is_staff:
        return Response(
            {"error": "Only admin can register students"},
            status=status.HTTP_403_FORBIDDEN
        )

    data = request.data
    level = data.get("level")
    year = data.get("year")

    if not level or not year:
        return Response({"error": "Level and Year are required"}, status=status.HTTP_400_BAD_REQUEST)

    admission_no = generate_admission_no(level, year)

    student_data = data.copy()
    student_data["admission_no"] = admission_no

    # NIN validation (SSS only)
    if level == "Senior Secondary":
        nin = student_data.get("nin")
        if not nin or len(nin) != 11 or not nin.isdigit():
            return Response(
                {"error": "Valid 11-digit NIN is required for SSS students"},
                status=status.HTTP_400_BAD_REQUEST
            )
    else:
        student_data["nin"] = None

    serializer = StudentSerializer(data=student_data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
