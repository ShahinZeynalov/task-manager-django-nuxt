from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):  # add this
    list_display = ('title','period','created_at')

# Register your models here.
admin.site.register(Task, TaskAdmin)
