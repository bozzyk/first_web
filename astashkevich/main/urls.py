from . import views
from django.urls import path, include

urlpatterns = [
    path(r'', views.index,  name="index"),
    path(r'contacts', views.contacts, name="contacts"),
    path(r'team', views.team, name="team"),
    path(r'press', views.press, name="press"),
    path(r'practices', views.practices, name="practices"),

]