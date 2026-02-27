from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    student_class = serializers.SerializerMethodField()

    class Meta:
        model = Student
        fields = "__all__"

    def get_name(self, obj):
        return f"{obj.surname} {obj.firstname} {obj.othername}".strip()

    def get_student_class(self, obj):
        return obj.class_applying
