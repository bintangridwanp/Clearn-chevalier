@extends('layouts.app')

@section('content')
<h1>Data Mahasiswa</h1>
<a href="{{ route('mahasiswa.create') }}">Tambah Mahasiswa</a>
<table border="1">
    <tr>
        <th>NPM</th>
        <th>Nama</th>
        <th>Jurusan</th>
        <th>Tahun Masuk</th>
        <th>Kelas</th>
        <th>Aksi</th>
    </tr>
    @foreach ($mahasiswas as $mhs)
    <tr>
        <td>{{ $mhs->npm }}</td>
        <td>{{ $mhs->nama }}</td>
        <td>{{ $mhs->jurusan }}</td>
        <td>{{ $mhs->tahun_masuk }}</td>
        <td>{{ $mhs->kelas }}</td>
        <td>
            <a href="{{ route('mahasiswa.edit', $mhs->id) }}">Edit</a>
            <form action="{{ route('mahasiswa.destroy', $mhs->id) }}" method="POST" style="display:inline;">
                @csrf
                @method('DELETE')
                <button onclick="return confirm('Yakin?')">Hapus</button>
            </form>
        </td>
    </tr>
    @endforeach
</table>
@endsection
