<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\Tag;
use App\Models\TagProduct;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    $products = Product::name($request->get('name'))->tagproduct($request->get('tags'))->with('tags')->paginate(10);
    $list_tags = Tag::all();

    return Inertia::render('products/index', [
      'format_product' => $products,
      'list_tags' => $list_tags
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $this->validate($request, [
      'image' => ['required', 'max:1024', 'file', 'mimes:jpeg,jpg,png,gif,svg'],
      'name_product' => ['required'],
      'plug_product' => ['required', 'unique:products,plug_product'],
      'available_product' => ['required'],
      'tags_product' => ['required'],
      'price_original_product' => ['required'],
      'description_product' => ['required'],
    ]);

    // ?????=========== in storage path
    $img = $request->image->store('public/uploads');
    $datos['imagen'] = str_replace('public/uploads/', '', $img);
    // ?????===========

    // ?????=========== in storage path
    $imgfinal = $request->image->move(public_path('uploads'), $datos['imagen']);
    if (Storage::exists($img)) {
      Storage::delete($img);
    }
    // ?????===========

    $product = new Product();
    $product->img_product = $datos['imagen'];
    $product->name_product = $request->name_product;
    $product->plug_product = $request->plug_product;
    $product->description_product = $request->description_product;
    $product->available_product = $request->available_product;
    $product->price_original_product = $request->price_original_product;

    if (!empty($request->price_offer_product)) {
      $product->price_offer_product = $request->price_offer_product;
    }

    $product->save();
    // Get id from product
    $id = $product->id;

    // Get the tags from request
    $tags = $request->tags_product;

    // Array Format
    $tags_product = [];

    foreach ($tags as $tag) {
      $tags_product = [
        'product_id' => $id,
        'tag_id' => $tag,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now()
      ];

      // Insert in DDBB
      TagProduct::insert($tags_product);
    };


    return Redirect::to('/');
  }

  /**
   * Display the specified resource.
   */
  public function show(Product $product)
  {
    return Inertia::render('products/product', ['product' => new ProductResource($product)]);
  }

  public function create()
  {
    $tags = Tag::orderBy('name_tag', 'ASC')->get();

    // return Inertia::render('products/create', [
    return Inertia::render('Admin/Products/Create',[
      'tags' => $tags,
      'page_base' => 'products'
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Product $product)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Product $product)
  {
    //
  }
}
