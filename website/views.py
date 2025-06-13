from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponseRedirect

def index(request):
	return render(request, "website/index.html", {})

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        full_message = f"Name: {name}\nEmail: {email}\nPhone: {phone}\nMessage: {message}"
        send_mail(
            subject=f'Contact Form Submission from {name}',
            message=full_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.DEFAULT_FROM_EMAIL],
        )
        return HttpResponseRedirect('/')
    return render(request, "website/index.html", {})
