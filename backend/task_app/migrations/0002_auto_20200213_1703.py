# Generated by Django 3.0.3 on 2020-02-13 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='period',
            field=models.PositiveSmallIntegerField(choices=[(0, 'Daily'), (1, 'Weekly'), (2, 'Monthly')], default=0),
        ),
    ]
