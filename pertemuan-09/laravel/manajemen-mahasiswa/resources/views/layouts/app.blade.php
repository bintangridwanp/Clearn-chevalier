<!DOCTYPE html>
<html>
<head>
    <title>Manajemen Mahasiswa</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        html, body {
            height: 100%;
        }
        body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #f8f9fa;
        }
        .main-content {
            flex: 1;
        }
        .main-card {
            margin-top: 40px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        footer {
            margin-top: 40px;
            padding: 20px 0;
            background: #343a40;
            color: #fff;
            text-align: center;
        }
    </style>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
        <a class="navbar-brand" href="{{ route('mahasiswa.index') }}">Manajemen Mahasiswa</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>

<div class="container main-content">
    <div class="card main-card">
        <div class="card-body">
            @yield('content')
        </div>
    </div>
</div>

<footer>
    &copy; {{ date('Y') }} Manajemen Mahasiswa. All rights reserved.
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
