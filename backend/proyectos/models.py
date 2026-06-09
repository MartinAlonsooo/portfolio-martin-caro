from django.db import models

class Proyecto(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    tecnologias = models.CharField(max_length=300)
    github = models.URLField()
    imagen = models.ImageField(upload_to='proyectos/')

    def __str__(self):
        return self.nombre