from django.urls import path
from .views import register_student, students_list

urlpatterns = [
    path("register/", register_student, name="register_student"),
    path("students/", students_list, name="students_list"),
]
