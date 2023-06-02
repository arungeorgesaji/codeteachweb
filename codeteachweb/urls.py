from . import views 
from django.contrib import admin
from django.urls import path
from django.http import HttpResponse

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.home , name="home"),
    path('favicon.ico', views.favicon_view, name="favicon_view")
]
