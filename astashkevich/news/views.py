from django.shortcuts import render
from .models import *


def all_news(request):
    return render(request, "news/press.html", {"news": Article.objects})



def post_details(request, post_id):
    return render(request, "news/post.html", {"article": Article.objects.get(pk=post_id)})

"""
def typed_news(request, type_='All'):
    return render(request, "news/press.html".format(type_), {"article": NewsType.news_filter(type_)})
"""