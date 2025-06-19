import requests
from rest_framework.response import APIView
from rest_framework.views import Response
from rest_framework import generics
from .models import Appointment
from .serializers import AppointmentSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class AppointmentList(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Appointment.objects.filter(patient=self.request.user)

class AppointmentUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]


class HealthCenterLocator(APIView):
    def get(self, request):
        lat = request.GET.get('lat')
        lon = request.GET.get('lon')

        if not lat or not lon:
            return Response({"error": "Latitude and longitude parameters are required"}, status=400)

        # OpenStreetMap Nominatim API for hospitals
        url = f"https://nominatim.openstreetmap.org/search.php?q=hospital&lat={lat}&lon={lon}&format=jsonv2"

        try:
            response = requests.get(url, headers={'User-Agent': 'YourAppName/1.0'})
            response.raise_for_status()  # Raise error for bad status codes

            # Process the results
            hospitals = []
            for result in response.json():
                hospitals.append({
                    'name': result.get('display_name', 'Unnamed Hospital'),
                    'latitude': result.get('lat'),
                    'longitude': result.get('lon'),
                    'address': result.get('display_name'),
                    'osm_id': result.get('osm_id')  # OpenStreetMap ID
                })

            return Response({
                'count': len(hospitals),
                'results': hospitals
            })

        except requests.exceptions.RequestException as e:
            return Response({"error": str(e)}, status=500)