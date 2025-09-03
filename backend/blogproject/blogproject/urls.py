from django.contrib import admin
from django.urls import path, include
from blog.views import BlogList, BlogDetail, CategoryList, home
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", home, name="home"),  # ✅ root path
    path("api/blogs/", BlogList.as_view(), name="blog-list"),
    path("api/blogs/<int:pk>/", BlogDetail.as_view(), name="blog-detail"),
    path("api/categories/", CategoryList.as_view(), name="category-list"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
