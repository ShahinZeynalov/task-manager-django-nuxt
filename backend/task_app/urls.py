from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSetAPI

router = DefaultRouter()

router.register(r'tasks',TaskViewSetAPI)



urlpatterns = [
    path('',include(router.urls)),
]
