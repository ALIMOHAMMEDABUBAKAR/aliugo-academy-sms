from django.db import models

class Student(models.Model):
    LEVEL_CHOICES = [
        ("Nursery", "Nursery"),
        ("Primary", "Primary"),
        ("Junior Secondary", "Junior Secondary"),
        ("Senior Secondary", "Senior Secondary"),
    ]

    admission_no = models.CharField(max_length=30, unique=True)
    level = models.CharField(max_length=30, choices=LEVEL_CHOICES)
    year = models.IntegerField()

    surname = models.CharField(max_length=100)
    firstname = models.CharField(max_length=100)
    othername = models.CharField(max_length=100, blank=True)

    gender = models.CharField(max_length=10)
    dob = models.DateField()
    nationality = models.CharField(max_length=50, default="Nigeria")
    state = models.CharField(max_length=50)
    lga = models.CharField(max_length=50)
    address = models.TextField()

    nin = models.CharField(max_length=11, blank=True, null=True)

    guardian_name = models.CharField(max_length=150)
    guardian_phone = models.CharField(max_length=20)
    guardian_alt_phone = models.CharField(max_length=20, blank=True)
    guardian_relationship = models.CharField(max_length=50)
    guardian_occupation = models.CharField(max_length=100, blank=True)
    guardian_address = models.TextField(blank=True)

    class_applying = models.CharField(max_length=50)
    previous_school = models.CharField(max_length=150, blank=True)
    last_class_completed = models.CharField(max_length=50, blank=True)
    department = models.CharField(max_length=50, blank=True)  # Science/Art/Commercial

    passport_photo = models.ImageField(upload_to="students/passports/", null=True, blank=True)
    birth_certificate = models.FileField(upload_to="students/documents/", null=True, blank=True)
    testimonial = models.FileField(upload_to="students/documents/", null=True, blank=True)
    transfer_certificate = models.FileField(upload_to="students/documents/", null=True, blank=True)
    bece_result = models.FileField(upload_to="students/documents/", null=True, blank=True)
    immunization_card = models.FileField(upload_to="students/documents/", null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.admission_no} - {self.surname} {self.firstname}"
