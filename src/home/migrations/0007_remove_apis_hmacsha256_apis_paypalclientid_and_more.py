# Generated by Django 5.1.3 on 2024-12-26 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_datapasajero_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='apis',
            name='hmacSha256',
        ),
        migrations.AddField(
            model_name='apis',
            name='paypalClientId',
            field=models.CharField(default='aoeaoe', max_length=255, verbose_name='Client ID Paypal'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='apis',
            name='paypalSecret',
            field=models.CharField(default='aoeaoe', max_length=255, verbose_name='Secret Paypal'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='apis',
            name='paypalUrl',
            field=models.CharField(default='aoeaoe', max_length=255, verbose_name='URL Paypal'),
            preserve_default=False,
        ),
    ]