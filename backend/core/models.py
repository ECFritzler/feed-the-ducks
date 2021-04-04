from django.db import models

# Create your models here.
class FeedLog(models.Model):
    feed_time = models.TimeField(auto_now=False)
    feed_date = models.DateField(auto_now_add=True)
    location = models.CharField(max_length=150)
    food_type = models.CharField(max_length=200)
    food_quantity = models.CharField(max_length=250)
    number_of_ducks=models.IntegerField()
