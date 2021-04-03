from . import views
from django.urls import path

urlpatterns = [
    path('api/core/', views.FeedLogListView.as_view())
]
