from django.urls import path, include
# from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

from .views import *
app_name = 'api'

# router = DefaultRouter()
# router.register(r'experts/', ExpertViewSet)
# router.register(r'staff-profile/', StaffViewSet)
# router.register(r'patient-profile/', PatientViewSet)

urlpatterns = [
    path('', Home.as_view(), name='home'),
    
    # path('api/user/register/', CreateUserView.as_view(), name='register-user'),
    # path('api/user/login/', sign_in, name='login-user'),

    # path('api/get-auth-data/', GetAuthUserView.as_view(), name='get-auth-user'),
    # path('api/get-patient/', GetPatientView.as_view(), name='get-patient'),
    
    # path('api/get-user/', GetPatientView.as_view(), name='get-patient'),
    
    # path("patient/register/", CreatePatientView.as_view(), name="register_patient"),
    # path("expert/register/", CreateExpertView.as_view(), name="register_expert"),
    # path("staff/register/", CreateStaffView.as_view(), name="register_staff"),
    # path("experts/", ExpertViewSet.as_view(), name="experts"),
    # path('expert/<int:pk>/', ExpertDetail.as_view(), name='expert_detail'),
    
    # path("patients/", PatientViewSet.as_view(), name="patients"),
    # path("api/predict/", PredictView.as_view(), name="predict"),
    
    # path('patient/<int:pk>/', PatientDetail.as_view(), name='patient_detail'),
    # path('staff/<int:pk>/', StaffDetail.as_view(), name='staff_detail'),

    # path('vulndb/', vulndb_view, name='vulndb'),
    # # path('api/', include(router.urls)),
]