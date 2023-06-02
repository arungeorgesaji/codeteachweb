from django.shortcuts import render
from django.http import HttpResponse

def favicon_view(request):
    return HttpResponse(status=204)

def home(request):
    return render(request, "codeteachweb/home.html")
