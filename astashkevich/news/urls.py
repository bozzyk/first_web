from django.urls import path

from . import views

urlpatterns = [
    path(r'<int:post_id>', views.post_details, name="post_details"),
    path(r'', views.all_news, name="all_news"),

]
