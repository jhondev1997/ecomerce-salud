<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class HomeController extends Controller
{
  /**
   * Handle the incoming request.
   */
  public function __invoke(Request $request)
  {

    $list_products =  Product::orderBy('updated_at', 'desc')->take(3)->get();

    return Inertia::render('Start', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'laravelVersion' => Application::VERSION,
      'phpVersion' => PHP_VERSION,
      'list_products' => $list_products
    ]);
  }
}
