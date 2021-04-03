from rest_framework import serializers
from .models import FeedLog

class FeedLogSerializer(serializers.ModelSerializer):
    class Meta:
        model=FeedLog
        field='__all__'
