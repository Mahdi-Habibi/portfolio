from django.http import JsonResponse
from django.urls import path

def hello(request):
    return JsonResponse({"message": "Hello from Django API"})


urlpatterns = [
    path('hello/', hello),
]
