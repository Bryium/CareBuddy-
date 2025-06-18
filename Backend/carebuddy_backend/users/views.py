from django.shortcuts import render
from rest_framework import generics
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class RegisterView(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProfileView(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)


    def get_object(self):
        return self.request.user
