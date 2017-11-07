from django.conf.urls import url, include
from . import views

urlpatterns = [
	url(r'^$',views.Index.as_view(),name='index'),
    url(r'^weblog/$', views.WidthEntryIndex.as_view(), name='width_entry_index'),
]
