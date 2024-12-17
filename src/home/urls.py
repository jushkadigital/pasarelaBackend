from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DataPasajeroViewSet

router = DefaultRouter()
router.register(r'datapasajero', DataPasajeroViewSet, basename='datapasajero')

urlpatterns = [
    path('', include(router.urls)),  # Incluye las rutas generadas por el router
]
