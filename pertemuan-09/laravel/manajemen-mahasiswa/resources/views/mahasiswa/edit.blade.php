@extends('layouts.app')

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-7">
            <div class="card shadow-sm">
                <div class="card-header bg-warning text-dark">
                    <h4 class="mb-0">Edit Mahasiswa</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('mahasiswa.update', $mahasiswa->id) }}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label class="form-label">NPM</label>
                            <input type="text" name="npm" class="form-control" value="{{ $mahasiswa->npm }}" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Nama</label>
                            <input type="text" name="nama" class="form-control" value="{{ $mahasiswa->nama }}" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Jurusan</label>
                            <input type="text" name="jurusan" class="form-control" value="{{ $mahasiswa->jurusan }}" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tahun Masuk</label>
                            <input type="number" name="tahun_masuk" class="form-control" value="{{ $mahasiswa->tahun_masuk }}" min="2000" max="{{ date('Y') }}" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Kelas</label>
                            <input type="text" name="kelas" class="form-control" value="{{ $mahasiswa->kelas }}" required>
                        </div>
                        <div class="d-flex justify-content-between">
                            <a href="{{ route('mahasiswa.index') }}" class="btn btn-secondary">Kembali</a>
                            <button type="submit" class="btn btn-warning">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
