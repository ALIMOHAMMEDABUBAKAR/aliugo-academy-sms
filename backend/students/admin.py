from django.contrib import admin
from .models import Student

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ("admission_no", "surname", "firstname", "level", "class_applying", "gender")
    search_fields = ("admission_no", "surname", "firstname", "guardian_phone")
    list_filter = ("level", "class_applying", "gender", "year")
