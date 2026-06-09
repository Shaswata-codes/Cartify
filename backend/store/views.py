from django.http import JsonResponse

# Create your views here.
def home(request):
    data = {
        'message': 'Welcome to the E-commerce API'
    }
    return jsonResponse(data)