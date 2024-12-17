from django.shortcuts import render

from rest_framework import viewsets
from .models import DataPasajero
from .serializers import DataPasajeroSerializer

class DataPasajeroViewSet(viewsets.ModelViewSet):
    queryset = DataPasajero.objects.all()
    serializer_class = DataPasajeroSerializer


