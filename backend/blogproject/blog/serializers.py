from rest_framework import serializers
from .models import Blog, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class BlogSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)  # show category details

    class Meta:
        model = Blog
        fields = '__all__'
