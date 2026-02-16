from .models import Student

def generate_admission_no(level, year):
    level_codes = {
        "Nursery": "NUR",
        "Primary": "PRM",
        "Junior Secondary": "JSS",
        "Senior Secondary": "SSS",
    }

    code = level_codes.get(level, "XXX")

    last_student = Student.objects.filter(level=level, year=year).order_by("-id").first()

    if last_student:
        last_number = int(last_student.admission_no.split("/")[-1])
        new_number = last_number + 1
    else:
        new_number = 1

    return f"AA/{year}/{code}/{new_number:04d}"
