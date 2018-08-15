from django.db import models

# Create your models here.




class Person(models.Model):
    name = models.CharField(max_length=100, help_text="Name")
    post = models.CharField(max_length=300, help_text="Post", default="HR")
    motto = models.TextField(help_text="Motto")
    email = models.EmailField(help_text="E-mail")
    exp = models.TextField(help_text="Experience", blank=True)
    edu = models.TextField(help_text="Education", blank=True)
    photo = models.ImageField(blank=True)

    def __str__(self):
        return self.name

    def get_practices(self):
        practices = []
        for i in Areas.objects.all():
            for j in i.persons.all():
                if self==j:
                    practices.append(i)
        return practices

    def get_exp_as_iter(self):
        return self.exp.split("\n")

    def get_edu_as_iter(self):
        return self.edu.split("\n")


class Areas(models.Model):
    name = models.CharField(max_length=100, help_text="Area name")
    desc = models.TextField(help_text="Area description", blank=True)
    services = models.TextField(help_text="Area services", blank=True)
    persons = models.ManyToManyField(Person, help_text="People in this area", blank=True)
    photo = models.ImageField(help_text="Practice photo", blank=True)

    def __str__(self):
        return self.name

    def get_services_as_iterable(self):
        return self.services.split("\n")
