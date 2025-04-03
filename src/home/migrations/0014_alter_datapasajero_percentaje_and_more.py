# Generated by Django 5.1.3 on 2025-04-03 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0013_paquetemexico_unitarypricechildafter_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datapasajero',
            name='percentaje',
            field=models.IntegerField(verbose_name='Percentage'),
        ),
        migrations.AlterField(
            model_name='paquetemexico',
            name='unitaryPriceAdultAfter',
            field=models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Precio Adulto Despues'),
        ),
        migrations.AlterField(
            model_name='paquetemexico',
            name='unitaryPriceAdultBefore',
            field=models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Precio Adulto Antes'),
        ),
        migrations.AlterField(
            model_name='paquetemexico',
            name='unitaryPriceChildAfter',
            field=models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Precio Niño Despues'),
        ),
        migrations.AlterField(
            model_name='paquetemexico',
            name='unitaryPriceChildBefore',
            field=models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Precio Niño Antes'),
        ),
        migrations.AlterField(
            model_name='paquetemexico',
            name='unitaryPriceChildIn',
            field=models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Precio Niño Durante'),
        ),
        migrations.AlterField(
            model_name='paquetemexico',
            name='unitaryPriceMenorAfter',
            field=models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Precio Menor Despues'),
        ),
        migrations.AlterField(
            model_name='paquetemexico',
            name='unitaryPriceMenorBefore',
            field=models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Precio Menor Antes'),
        ),
    ]
