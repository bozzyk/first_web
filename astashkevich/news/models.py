from django.db import models


class Article(models.Model):
    title = models.TextField(help_text="Title")
    quote = models.TextField(help_text="Post quote", blank=True)
    text = models.TextField(help_text="Post text")
    link = models.EmailField(help_text="More info link", blank=True)
    pub_date = models.DateTimeField(help_text="Publication date")
    photo = models.ImageField(blank=True)

    def get_three_latest(self):
        return self.objects.order_by('-pub_date')[:3]

    def format_text(self):
        return self.text.split('\n')

    def get_type(self):
        for i in NewsType.objects.all():
            if self in i.articles.all():
                self.type_ = i.name
                return i.name

    def __str__(self):
        return self.title




class NewsType(models.Model):
    name = models.CharField(max_length=50, help_text="Type name")
    articles = models.ManyToManyField(Article, help_text="Articles of this type", blank=True)


    def __str__(self):
        return self.name

    def news_filter(self, type_):
        return self.objects.get(name=type_).articles
