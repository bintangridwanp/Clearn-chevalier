@extends('layouts.app')

@section('content')
<h1>Tambah Mahasiswa</h1>

<form action="{{ route('mahasiswa.store') }}" method="POST">
    @csrf
    <label>NPM:</label><br>
    <input type="text" name="npm" required><br><br>

    <label>Nama:</label><br>
    <input type="text" name="nama" required><br><br>

    <label>Jurusan:</label><br>
    <input type="text" name="jurusan" required><br><br>

    <label>Tahun Masuk:</label><br>
    <input type="number" name="tahun_masuk" min="2000" max="{{ date('Y') }}" required><br><br>

    <label>Kelas:</label><br>
    <input type="text" name="kelas" required><br><br>

    <button type="submit">Simpan</button>
</form>

<a href="{{ route('mahasiswa.index') }}">Kembali</a>
@endsection
