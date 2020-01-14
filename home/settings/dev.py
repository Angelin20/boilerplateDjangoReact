'''Use this for development'''

from .base import *

ALLOWED_HOSTS += ['*']
DEBUG = True

WSGI_APPLICATION = 'home.wsgi.dev.application'

DATABASES = {
    'default': {
        'ENGINE': 'sql_server.pyodbc',
        'NAME': 'HONDARepControlBodyPaint',
        'USER': 'sa',
        'PASSWORD': '123456Qwerty',
        'HOST': '10.251.0.62',
        'PORT': '1430',
        'OPTIONS': {
            'driver': 'ODBC Driver 17 for SQL Server'
        },
    }
}

CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
    'http://192.168.0.32:3000'
)