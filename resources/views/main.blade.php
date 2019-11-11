<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Point Click & Design</title>
    
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js" defer></script> --}}
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/utils/Draggable.min.js" defer></script>
    <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ThrowPropsPlugin.min.js" defer></script>
    <script src="https://unpkg.com/konva@4.0.16/konva.min.js"></script> --}}
    <!-- Styles -->
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700&display=swap" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet">
   
    
</head>
<body>
    <div id="app">
        <router-view></router-view>
    </div>
</body>
</html>
