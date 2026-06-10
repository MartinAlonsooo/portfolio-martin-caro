from django.contrib import admin
from .models import Contacto

@admin.register(Contacto)
class ContactoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'correo', 'fecha')
    search_fields = ('nombre', 'correo', 'mensaje')
    list_filter = ('fecha',)
    readonly_fields = ('fecha',)