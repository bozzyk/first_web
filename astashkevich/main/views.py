from django.shortcuts import render
from .models import *
from django.apps import apps
# Create your views here.

Article = apps.get_model('news', 'Article')

def index(request):
    return render(request, 'main/home.html', {"practices": Areas.objects, "news": Article.objects.order_by('-pub_date')[:3]})


def contacts(request):
    return render(request, 'main/contacts.html', {"practices": Areas.objects})



def all_team(request):
    return render(request, 'main/team.html', {"staff": Person.objects, "practices": Areas.objects})


def person_details(request, person_id):
    return render(request, 'main/person.html', {"person": Person.objects.get(pk=person_id), "person_practices":Person.objects.get(pk=person_id).get_practices(), "practices": Areas.objects })


def all_areas(request):
    return render(request, 'main/practices.html', {"practices": Areas.objects})


def area_details(request, area_id):
    return render(request, 'main/practice_details.html', {"area": Areas.objects.get(pk=area_id), "practices": Areas.objects})
