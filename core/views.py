from django.shortcuts import render
from .models import FeedLog
from .serializers import FeedLogSerializer
from rest_framework import generics

class FeedLogListView(generics.ListCreateAPIView):
    queryset = FeedLog.objects.all()
    serializer_class = FeedLogSerizlizer
    
