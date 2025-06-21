@extends('layouts.app')

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-7">
            <div class="card shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Tambah Mahasiswa</h4>
                </div>
                <div class="card-body">
                    <form action="{{ route('mahasiswa.store') }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label">NPM</label>
                            <input type="text" name="npm" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Nama</label>
                            <input type="text" name="nama" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Jurusan</label>
                            <input type="text" name="jurusan" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tahun Masuk</label>
                            <input type="number" name="tahun_masuk" class="form-control" min="2000" max="{{ date('Y') }}" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Kelas</label>
                            <input type="text" name="kelas" class="form-control" required>
                        </div>
                        <div class="d-flex justify-content-between">
                            <a href="{{ route('mahasiswa.index') }}" class="btn btn-secondary">Kembali</a>
                            <button type="submit" class="btn btn-success">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
