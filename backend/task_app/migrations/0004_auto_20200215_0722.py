# Generated by Django 3.0.3 on 2020-02-15 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_app', '0003_auto_20200213_1744'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='end',
            field=models.CharField(default='Not defined', max_length=15),
        ),
        migrations.AddField(
            model_name='task',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='task',
            name='start',
            field=models.CharField(default='Not defined', max_length=15),
        ),
        migrations.AlterField(
            model_name='task',
            name='slug',
            field=models.SlugField(editable=False, unique=True),
        ),
    ]
