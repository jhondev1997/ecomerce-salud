<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogCollection;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Faker\Calculator\Inn;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BlogController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $blogs =  BlogResource::collection(Blog::with('user')->paginate(3));

    return Inertia::render('blogs/index', ['format_blogs' => $blogs]);
  }

  public function index_one(){
    $blogs =  BlogResource::collection(Blog::with('user')->take(3)->get());

    return $blogs;
  }

  public function create()
  {

    return Inertia::render('Admin/Blogs/Create', [
      'page_base' => 'blogs'
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $this->validate($request, [
      'image' => ['required', 'max:1024', 'file', 'mimes:jpeg,jpg,png,gif,svg'],
      'titleBlog' => ['required'],
      'fakeAuthor' => ['required'],
      'descriptionBlog' => ['required']
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

    $blog = new Blog();
    $blog->imgBlog = $datos['imagen'];
    $blog->user_id = Auth::user()->id;
    $blog->titleBlog = $request->titleBlog;
    $blog->fakeAuthor = $request->fakeAuthor;
    $blog->descriptionBlog = $request->descriptionBlog;

    $blog->save();

    return Redirect::to('/');
  }

  /**
   * Display the specified resource.
   */
  public function show(Blog $blog)
  {
    return Inertia::render('blogs/Blog', ['blog' => new BlogResource($blog)]);
  }

  public function show_api(Blog $blog)
  {
    return ['blog' => new BlogResource($blog)];
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Blog $blog)
  {
    $this->validate($request, [
      'image' => ['max:1024', 'file'],
    ]);

    if ($request->image) {
      $file_path = public_path('uploads').'/'.$blog->imgBlog;
      File::delete($file_path);
      // ?????=========== in storage path
      $img = $request->image->store('public/uploads');
      $datos['imagen'] = str_replace('public/uploads/', '', $img);
      // ?????===========

      // ?????=========== in storage path
      $imgfinal = $request->image->move(public_path('uploads'), $datos['imagen']);
      if (Storage::exists($img)) {
        Storage::delete($img);
      }

      $blog->imgBlog = $datos['imagen'];
      // ?????===========
    }

    if($blog->titleBlog != $request->titleBlog && $request->titleBlog){
      $blog->titleBlog = $request->titleBlog;
    }

    if($blog->fakeAuthor != $request->fakeAuthor && $request->fakeAuthor){
      $blog->fakeAuthor = $request->fakeAuthor;
    }

    if($blog->descriptionBlog != $request->descriptionBlog && $request->descriptionBlog){
      $blog->descriptionBlog = $request->descriptionBlog;
    }

    $blog->save();

    return Redirect::to('/blog/'.$blog->id.'#formedit');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Blog $blog)
  {
    $file_path = public_path('uploads').'/'.$blog->imgBlog;
    File::delete($file_path);

    $blog->delete();

    return Redirect::to('/blogs');
  }
}
