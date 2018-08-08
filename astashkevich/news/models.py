from django.db import models


class Article(models.Model):
    type_ = None
    title = models.TextField(help_text="Title")
    quote = models.TextField(help_text="Post quote", blank=True)
    text = models.TextField(help_text="Post text")
    link = models.EmailField(help_text="More info link", blank=True)
    pub_date = models.DateTimeField(help_text="Publication date")
    photo = models.ImageField(blank=True)

    def __str__(self):
        return self.title


class NewsType(models.Model):
    name = models.CharField(max_length=50, help_text="Type name")
    articles = models.ManyToManyField(Article, help_text="Articles of this type", blank=True)

    def __str__(self):
        return self.name