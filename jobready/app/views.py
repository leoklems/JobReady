from django.shortcuts import render
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework import viewsets, generics, status
from django.http import JsonResponse, FileResponse, HttpResponse, HttpResponseRedirect, HttpRequest
from django.views.generic import DetailView, View
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import *
from rest_framework.response import Response
from django.contrib.auth.models import User
# from djangorestframework_simplejwt import authentication
import joblib
from .serializers import *
import os
# from .vulndb_api import fetch_vulndb_data
from django.views.decorators.csrf import csrf_exempt


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    # serializer_class = User
    serializer_class = UserSerializer # kind of data you need to accept to make a new user
    permission_classes = [AllowAny]


class Home(View):
    # queryset = Expert.objects.all()
    # serializer_class = ExpertSerializer # kind of data you need to accept to make a new user
    # permission_classes = [AllowAny]
    # currennt_dir = os.path.dirname(__file__)
    # model_path = os.path.join(currennt_dir, 'chat-model.pkl')
    # ai_model = joblib.load(model_path)
    
    def get(self, request):
        welcome_message = "Welcome to JobReady!"
        # experts = Expert.objects.all().order_by('-date_joined')[:5]
        # items = [{"name": e.user.username, "specialty": e.specialty} for e in experts]
        print(welcome_message)
        
        # return render(request, "home.html")
        return JsonResponse({
            "message": welcome_message,
            # "recent_experts": items
        })
    
    # def predict(self, data, ai_model=ai_model):
    #     # Example input data, this should come from your request in a real scenario
    #     input_data = data
    #     data_dict = {1: 'Neutral', 2: 'Posetive', 0: 'Negative'}
    #     # Use the model to make predictions
    #     # ai_model = joblib.load(self.model_path)
    #     prediction = ai_model.predict([input_data])
    #     prediction = data_dict[list(prediction)[0]]
    #     print(f"the sentiment is {prediction}")

    #     # Return the prediction as a JSON response
    #     return JsonResponse({'prediction': prediction})
    
    # def post(self, request):
    #     # print("data : ",request.data)
    #     # text = request.data.get("content")
    #     text = request.POST.get("content")
        
    #     print("text : ", text)
    #     predict = self.predict(text)
        
    #     return predict

