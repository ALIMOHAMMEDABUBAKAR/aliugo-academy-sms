from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    student_class = models.CharField(max_length=20)
    gender = models.CharField(max_length=10)

    def __str__(self):
        return self.name
