<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Styles Mix-->
        <!-- link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}" -->
        <!-- script src="{{ asset(mix('js/app.js')) }}" defer></script -->
        <!-- Scripts -->
      
          <!-- Styles Mix-->
        @routes
        @vite(['resources/css/app.css', 'resources/js/app.js'])
      

    </head>
    @include('font-theme')
    <body class="font-sarabun">
        @inertia

       
        <script>
            const base_url = "{{ env('APP_URL') }}";
        </script>

    </body>
</html>
