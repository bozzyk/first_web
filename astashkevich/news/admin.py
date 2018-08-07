from django.contrib import admin

from .models import Person, Areas, Article, NewsType
# Register your models here.

admin.site.register(Person)
admin.site.register(Areas)
admin.site.register(Article)
admin.site.register(NewsType)
