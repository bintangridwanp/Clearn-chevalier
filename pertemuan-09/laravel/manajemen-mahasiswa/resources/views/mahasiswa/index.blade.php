@extends('layouts.app')

@section('content')
    <a href="{{ route('mahasiswa.create') }}" class="btn btn-primary mb-3">Tambah Mahasiswa</a>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <table class="table table-bordered">
        <thead>
        <tr>
            <th>NPM</th>
            <th>Nama</th>
            <th>Jurusan</th>
            <th>Tahun Masuk</th>
            <th>Kelas</th>
            <th>Aksi</th>
        </tr>
        </thead>
        <tbody>
        @foreach($mahasiswas as $mhs)
            <tr>
                <td>{{ $mhs->npm }}</td>
                <td>{{ $mhs->nama }}</td>
                <td>{{ $mhs->jurusan }}</td>
                <td>{{ $mhs->tahun_masuk }}</td>
                <td>{{ $mhs->kelas }}</td>
                <td>
                    <a href="{{ route('mahasiswa.edit', $mhs) }}" class="btn btn-warning btn-sm">Edit</a>
                    <form action="{{ route('mahasiswa.destroy', $mhs) }}" method="POST" style="display:inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger btn-sm">Hapus</button>
                    </form>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
