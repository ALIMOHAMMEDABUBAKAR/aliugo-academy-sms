from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Student

# GET all students + POST create student
@csrf_exempt
def student_list(request):
    if request.method == "GET":
        students = list(Student.objects.values())
        return JsonResponse(students, safe=False)

    if request.method == "POST":
        data = json.loads(request.body)
        student = Student.objects.create(
            name=data.get("name"),
            student_class=data.get("student_class"),
            gender=data.get("gender")
        )
        return JsonResponse({"message": "Student added successfully", "id": student.id})


# GET single student + PUT update + DELETE remove
@csrf_exempt
def student_detail(request, pk):
    try:
        student = Student.objects.get(id=pk)
    except Student.DoesNotExist:
        return JsonResponse({"error": "Student not found"}, status=404)

    if request.method == "GET":
        return JsonResponse({
            "id": student.id,
            "name": student.name,
            "student_class": student.student_class,
            "gender": student.gender
        })

    if request.method == "PUT":
        data = json.loads(request.body)
        student.name = data.get("name", student.name)
        student.student_class = data.get("student_class", student.student_class)
        student.gender = data.get("gender", student.gender)
        student.save()
        return JsonResponse({"message": "Student updated successfully"})

    if request.method == "DELETE":
        student.delete()
        return JsonResponse({"message": "Student deleted successfully"})
