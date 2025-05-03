@extends('layouts.app')

@section('content')
<h1>Edit Mahasiswa</h1>

<form action="{{ route('mahasiswa.update', $mahasiswa->id) }}" method="POST">
    @csrf
    @method('PUT')
    
    <label>NPM:</label><br>
    <input type="text" name="npm" value="{{ $mahasiswa->npm }}" required><br><br>

    <label>Nama:</label><br>
    <input type="text" name="nama" value="{{ $mahasiswa->nama }}" required><br><br>

    <label>Jurusan:</label><br>
    <input type="text" name="jurusan" value="{{ $mahasiswa->jurusan }}" required><br><br>

    <label>Tahun Masuk:</label><br>
    <input type="number" name="tahun_masuk" value="{{ $mahasiswa->tahun_masuk }}" min="2000" max="{{ date('Y') }}" required><br><br>

    <label>Kelas:</label><br>
    <input type="text" name="kelas" value="{{ $mahasiswa->kelas }}" required><br><br>

    <button type="submit">Update</button>
</form>

<a href="{{ route('mahasiswa.index') }}">Kembali</a>
@endsection
