# Generated by Django 5.1.3 on 2024-12-09 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_alter_datapasajero_finalprice_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='datapasajero',
            name='_created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
