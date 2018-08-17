from django.shortcuts import render
from .models import *
from django.apps import apps

Areas = apps.get_model('main', 'Areas')

def all_news(request):
    return render(request, "news/press.html", {"news": Article.objects, "practices": Areas.objects})



def post_details(request, post_id):
    return render(request, "news/post.html", {"article": Article.objects.get(pk=post_id), "practices": Areas.objects})
