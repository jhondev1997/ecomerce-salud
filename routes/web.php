<?php

use App\Http\Controllers\Admin\AdministrationController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MailimmController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// ?== No te olvides de quitar el endpoint de register cuando estes en producción
Route::get('/', HomeController::class);

Route::get('/for', function(){
  return Inertia::render('Welcome');
});


// Todo: =================== Admin ==========================
Route::middleware('admin')->group(function(){
  Route::get('/admin/dashboard', [AdministrationController::class, 'index'])->name('admin.dashboard');
  Route::get('/admin/products', [ProductController::class, 'create'])->name('admin.product');
  Route::post('/admin/tags', [AdministrationController::class, 'create_tag']);
  Route::patch('/admin/tags/{tag}', [AdministrationController::class, 'update_tag']);
  Route::delete('/admin/tags/{tag}', [AdministrationController::class, 'destroy_tag']);
  // *======================= blog admin ======
  Route::get('/admin/blogs ', [BlogController::class, 'create'])->name('admin.blog');
  Route::post('/admin/blogs', [BlogController::class, 'store']);
  Route::patch('/admin/blogs/{blog}', [BlogController::class, 'update']);
  Route::delete('/admin/blogs/{blog}', [BlogController::class, 'destroy']);
  // *====================== event admin ========
  Route::get('/admin/events ', [EventController::class, 'create'])->name('admin.event');
  Route::post('/admin/events ', [EventController::class, 'store']);
});


// *=========== Blog =================
// ?== No te olvides de agregar middleware de admin y otros
Route::controller(BlogController::class)->group(function() {
  Route::get('/blogs', 'index');
  Route::get('/blogs/create', 'create')->name('blogs.create');
  Route::middleware('auth')->post('/blog', 'store')->name('blog.store');
  Route::get('/blog/{blog}',  'show');
  Route::middleware('auth')->patch('/blog/{blog}',  'update');
  Route::middleware('auth')->delete('/blog/{blog}',  'destroy');
});

// *=========== Eventos ===============
Route::controller(EventController::class)->group(function() {
  Route::get('/events', 'index');
  Route::get('/events/create', 'create')->name('events.create');
  Route::middleware('auth')->post('/event', 'store')->name('event.store');
  Route::middleware('auth')->get('/event/{event}',  'show');
  Route::middleware('auth')->patch('/event/{event}',  'update');
  Route::middleware('auth')->delete('/event/{event}',  'destroy');
});


// *=========== Productos ================
Route::controller(ProductController::class)->group(function() {
  Route::get('/products', 'index');
  Route::get('/products/create', 'create')->name('product.create');
  Route::middleware('auth')->post('/product', 'store')->name('product.store');
  Route::get('/product/{product:plug_product}',  'show');
  Route::middleware('auth')->patch('/product/{product}',  'update');
  Route::middleware('auth')->delete('/product/{product}',  'destroy');
});

// *=========== MailImmm =================
Route::controller(MailimmController::class)->group(function () {
  Route::get('/mail/immetabolico', 'index');
  Route::post('/mail/immetabolico', 'storeImmetabolico');
});

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
