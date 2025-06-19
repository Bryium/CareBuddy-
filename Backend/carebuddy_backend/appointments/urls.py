from django.urls import path
from .views import (
    AppointmentList,
    AppointmentUpdateDestroyView,
    HealthCenterLocator
)

urlpatterns = [
    path("nearby-health-centers/", HealthCenterLocator.as_view(), name="health-center-locator"),
    path("", AppointmentList.as_view(), name="appointment-list-create"),
    path("<int:pk>/", AppointmentUpdateDestroyView.as_view(), name="appointment-detail"),
]
