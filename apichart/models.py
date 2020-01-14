from django.db import models

class Chart(models.Model):
    """Clase modelo principal"""
    Usuario = models.CharField(max_length=10)
    Tamanio = models.CharField(max_length=150)
    PromTiempoTotal = models.FloatField()
    PorcOrdenes = models.FloatField()
    PromCostoRep = models.DecimalField(max_digits=10, decimal_places=2)
    PorcTmpoRegistro =models.FloatField()
    PorcTmpoPlanRep = models.FloatField()
    PorcTmpoEsperaApr = models.FloatField()
    PorcTmpoEsperaPart = models.FloatField()
    PorcTmpoHojalateria = models.FloatField()
    PorcTmpoPintura = models.FloatField()
    PorcTmpoReensamble = models.FloatField()
    PorcTmpoSubalquiler = models.FloatField()
    PorcTmpoDetallado = models.FloatField()
    PorcTmpoCtrlCalidad = models.FloatField()
    PorcTmpoListoEntrega = models.FloatField()
    PorcTmpoPrecierre = models.FloatField()
    PorcTmpoContactoCte = models.FloatField()
    PorcTmpoProgEntrega = models.FloatField()
    Porc5DiasAntes = models.FloatField()
    Porc2a5DiasAntes = models.FloatField()
    Porc1DiaAntes = models.FloatField()
    PorcEnTiempo = models.FloatField()
    Porc1DiaDespues = models.FloatField()
    Porc2a5DiasDespues = models.FloatField()
    Porc5DiasDespues = models.FloatField()

    def __str__(self):
        return self.Usuario
    class Meta:
        db_table = "CA_HondaControlBPGraficaPorTamanioOS"