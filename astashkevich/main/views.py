from django.shortcuts import render
from .models import *
# Create your views here.


def index(request):
    return render(request, 'main/home.html')


def contacts(request):
    return render(request, 'main/contacts.html')



def all_team(request):
    return render(request, 'main/team.html', {"staff": Person.objects})


def person_details(request, person_id):
    return render(request, 'main/person.html', {"person": Person.objects.get(pk=person_id)})


def all_areas(request):
    return render(request, 'main/practices.html', {"practices": Areas.objects})


def area_details(request, area_id):
    return render(request, 'main/practice_details.html', {"area": Areas.objects.get(pk=area_id)})
