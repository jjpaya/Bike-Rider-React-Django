# Generated by Django 3.0.2 on 2022-01-28 15:34

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_start', models.DateTimeField(default=django.utils.timezone.now)),
                ('time_end', models.DateTimeField()),
            ],
        ),
    ]