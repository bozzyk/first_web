# Generated by Django 2.0.7 on 2018-08-08 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='areas',
            name='desc',
            field=models.TextField(blank=True, help_text='Area description'),
        ),
        migrations.AddField(
            model_name='areas',
            name='services',
            field=models.TextField(blank=True, help_text='Area services'),
        ),
    ]