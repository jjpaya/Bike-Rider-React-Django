from rest_framework.routers import DefaultRouter
from django.conf.urls import include, url

from .views import BStationViewSet, BStationMaintenanceViewSet

router = DefaultRouter(trailing_slash=False)
router.register(r'client', BStationViewSet, basename='StClient')
router.register(r'maintenance', BStationMaintenanceViewSet, basename='StMaintenance')

urlpatterns = [
    url(r'stations/', include(router.urls)),
    #url(r'bstations', BStationViewSet.as_view({'post': 'create', 'get': 'list'})),
]