from rest_framework import generics
from rest_framework import viewsets

from . import models
from . import serializers

class ChartList(generics.ListCreateAPIView):
    queryset = models.Chart.objects.all()
    serializer_class = serializers.ChartSerializer
    #authentication_classes = [TokenAuthentication, ]
    #permission_classes = [IsAuthenticated, ]

class ChartDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Chart.objects.all()
    serializer_class = serializers.ChartSerializer