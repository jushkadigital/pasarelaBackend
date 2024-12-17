from rest_framework import serializers
from .models import DataPasajero  


class DataPasajeroSerializer(serializers.ModelSerializer):
    class Meta:
        model =DataPasajero
        fields = ['id','status']


