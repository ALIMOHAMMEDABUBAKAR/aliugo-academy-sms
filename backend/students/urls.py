from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.student_list),
    path('students/create/', views.student_create),
    path('students/delete/<int:id>/', views.student_delete),
]
