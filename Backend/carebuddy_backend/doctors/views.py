from rest_framework import generics
from .models import Doctor
from .serializers import DoctorSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser

# Create your views here.
class DoctorListCreateView(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = (IsAuthenticated, IsAdminUser)


class DoctorRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = (IsAuthenticated, IsAdminUser)
