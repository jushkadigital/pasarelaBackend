# Generated by Django 5.1.3 on 2024-11-26 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_datapasajero_finalprice_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='datapasajero',
            name='link',
            field=models.CharField(blank=True, max_length=255, verbose_name='Link Creado'),
        ),
    ]
