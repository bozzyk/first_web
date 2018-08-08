from django.db import models

# Create your models here.




class Person(models.Model):
    name = models.CharField(max_length=100, help_text="Name")
    motto = models.TextField(help_text="Motto")
    email = models.EmailField(help_text="E-mail")
    exp = models.TextField(help_text="Experience", blank=True)
    edu = models.TextField(help_text="Education", blank=True)
    area = None
    photo = models.ImageField(blank=True)

    def __str__(self):
        return self.name


class Areas(models.Model):
    name = models.CharField(max_length=100, help_text="Area name")
    desc = models.TextField(help_text="Area description", blank=True)
    services = models.TextField(help_text="Area services", blank=True)
    persons = models.ManyToManyField(Person, help_text="People in this area", blank=True)

    def __str__(self):
        return self.name
