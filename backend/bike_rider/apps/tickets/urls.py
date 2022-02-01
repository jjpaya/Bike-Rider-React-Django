from .views import StaffListTicketViewSet, UserSendTicketViewSet, ChangeTicketStatusViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter(trailing_slash=False)
router.register(r'list', StaffListTicketViewSet, basename='StaffListTicket')  
router.register(r'user', UserSendTicketViewSet, basename='UserSendTicket')
router.register(r'status', ChangeTicketStatusViewSet, basename='ChageTicketStatus')
urlpatterns = [
    path('tickets/', include(router.urls))
]