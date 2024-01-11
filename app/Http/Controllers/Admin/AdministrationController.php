<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Event;
use App\Models\Product;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdministrationController extends Controller
{
  public function index() {

    $users_count = User::count();
    $blogs_count = Blog::count();
    $products_count = Product::count();
    $tags_count = Tag::count();
    $events_count = Event::count();

    $last_users = User::orderBy('id', 'desc')->take(5)->get();


    return Inertia::render('Admin/index',[
      'page_base' => 'dashboard',
      'users_count' => $users_count,
      'blogs_count' => $blogs_count,
      'products_count' => $products_count,
      'tags_count' => $tags_count,
      'events_count' => $events_count,
      'last_users' => $last_users
    ]);
  }

  // Todo======================0==== TAGs ===================================
  public function create_tag (Request $request) {
    $this->validate($request, [
      'name_tag' => ['required', 'unique:tags,name_tag'],
    ]);

    $tag = new Tag();
    $tag->name_tag = $request->name_tag;

    $tag->save();
  }


  public function update_tag (Tag $tag, Request $request){
    $this->validate($request, [
      'name_tag' => ['required', 'unique:tags,name_tag'],
    ]);

    if($tag->name_tag != $request->name_tag){
      $tag->name_tag = $request->name_tag;
      $tag->save();
    };

    redirect()->back();
  }

  public function destroy_tag (Tag $tag){
    $tag->delete();
  }
}
