from django.urls import path
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from .models import Article

urlpatterns = [
   # path(r'', ListView.as_view(queryset=Article.objects.all().order_by("-date")), name="all_news"),
   # path(r'[1-9][0-9]*', )
]