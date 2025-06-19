
<?php
use App\Http\Controllers\MahasiswaController;

Route::get('/', function () {
return response()->json(['message' => 'Welcome to the Mahasiswa API']);
});

Route::get('/mahasiswa', [MahasiswaController::class, 'indexApi']);
Route::get('/mahasiswa/{id}', [MahasiswaController::class, 'show']);
Route::post('/mahasiswa', [MahasiswaController::class, 'storeApi']);
Route::put('/mahasiswa/{id}', [MahasiswaController::class, 'updateApi']);
Route::delete('/mahasiswa/{id}', [MahasiswaController::class, 'destroyApi']);
