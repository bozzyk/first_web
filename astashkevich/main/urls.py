from . import views
from django.urls import path

urlpatterns = [
    path(r'', views.index,  name="index"),
    path(r'contacts', views.contacts, name="contacts"),
    path(r'team', views.all_team, name="team"),
    path(r'team/<int:person_id>', views.person_details, name="person_details"),
    path(r'practices', views.all_areas, name="practices"),
    path(r'practices/<int:area_id>', views.area_details, name="area_details")

]