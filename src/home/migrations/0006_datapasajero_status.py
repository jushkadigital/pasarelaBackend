# Generated by Django 5.1.3 on 2024-12-17 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_datapasajero__created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='datapasajero',
            name='status',
            field=models.CharField(choices=[('pendiente', 'Pendiente'), ('izipay', 'Izipay'), ('paypal', 'Paypal')], default='pendiente', max_length=20),
        ),
    ]