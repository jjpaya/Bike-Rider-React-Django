# Generated by Django 3.0.2 on 2022-01-30 09:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('bikes', '0001_initial'),
        ('bstations', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='bike',
            name='station',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='bike', to='bstations.BStation'),
        ),
    ]
