from django.shortcuts import render
from rest_framework.response import generics
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class RegistrationView(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProfileView(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)


    def get_object(self):
        return self.request.user
