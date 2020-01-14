from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from . import models

class ChartSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Chart
        fields = ['Usuario', 'Tamanio','PromTiempoTotal','PorcOrdenes','PromCostoRep','PorcTmpoRegistro','PorcTmpoPlanRep','PorcTmpoEsperaApr','PorcTmpoEsperaPart','PorcTmpoHojalateria','PorcTmpoPintura','PorcTmpoReensamble','PorcTmpoSubalquiler','PorcTmpoDetallado','PorcTmpoCtrlCalidad','PorcTmpoListoEntrega','PorcTmpoPrecierre','PorcTmpoContactoCte','PorcTmpoProgEntrega','Porc5DiasAntes','Porc2a5DiasAntes','Porc1DiaAntes','PorcEnTiempo','Porc1DiaDespues','Porc2a5DiasDespues','Porc5DiasDespues']
