from django.shortcuts import render
# Create your views here.


def index(request):
    return render(request, 'main/home.html')


def contacts(request):
    return render(request, 'main/contacts.html')


def practices(request):
    return render(request, 'main/practices.html')


def team(request):
    return render(request, 'main/team.html')


def press(request):
    return render(request, 'main/press.html')
