from django.db import models


class Article(models.Model):
    type_ = None
    title = models.TextField(help_text="Title")
    quote = models.TextField(help_text="Post quote", blank=True)
    text = models.TextField(help_text="Post text")
    link = models.EmailField(help_text="More info link", blank=True)
    pub_date = models.DateTimeField(help_text="Publication date")

    def __str__(self):
        return self.title


class Person(models.Model):
    name = models.CharField(max_length=100, help_text="Name")
    motto = models.TextField(help_text="Motto")
    email = models.EmailField(help_text="E-mail")
    exp = models.TextField(help_text="Experience", blank=True)
    edu = models.TextField(help_text="Education", blank=True)
    area = None

    def __str__(self):
        return self.name


class Areas(models.Model):
    name = models.CharField(max_length=100, help_text="Area name")
    persons = models.ManyToManyField(Person, help_text="People in this area", blank=True)

    def __str__(self):
        return self.name


class NewsType(models.Model):
    name = models.CharField(max_length=50, help_text="Type name")
    articles = models.ManyToManyField(Article, help_text="Articles of this type", blank=True)

    def __str__(self):
        return self.name