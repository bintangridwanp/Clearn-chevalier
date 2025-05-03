@extends('layouts.app')

@section('content')
<h1>Detail Mahasiswa</h1>

<p><strong>NPM:</strong> {{ $mahasiswa->npm }}</p>
<p><strong>Nama:</strong> {{ $mahasiswa->nama }}</p>
<p><strong>Jurusan:</strong> {{ $mahasiswa->jurusan }}</p>
<p><strong>Tahun Masuk:</strong> {{ $mahasiswa->tahun_masuk }}</p>
<p><strong>Kelas:</strong> {{ $mahasiswa->kelas }}</p>

<a href="{{ route('mahasiswa.index') }}">Kembali</a>
@endsection

