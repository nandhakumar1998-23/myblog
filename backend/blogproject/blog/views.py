from django.http import HttpResponse
from rest_framework import generics
from .models import Blog, Category
from .serializers import BlogSerializer, CategorySerializer

# Your previous API views
class BlogList(generics.ListAPIView):
    queryset = Blog.objects.all().order_by("-created_at")
    serializer_class = BlogSerializer

class BlogDetail(generics.RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all().order_by("name")
    serializer_class = CategorySerializer

# Add this at the end
def home(request):
    return HttpResponse("Welcome to My Blog API!")
