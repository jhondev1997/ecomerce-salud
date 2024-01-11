<?php

namespace App\Http\Controllers;

use App\Models\Event;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EventController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $events = Event::with('user')->get();

    return Inertia::render('events/index', ['events' => $events]);
  }

  public function create()
  {
    return Inertia::render('Admin/Events/Create',[
      'page_base' => 'events'
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $this->validate($request, [
      'image' => ['required', 'max:1024', 'file', 'mimes:jpeg,jpg,png,gif,svg'],
      'titleEvent' => ['required'],
      'linkEvent' => ['required'],
      'platform' => ['required'],
      'fakeAuthor' => ['required'],
      'dateEvent' => ['required', 'date'],
      'descriptionEvent' => ['required']
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

    $event = new Event();
    $event->imgEvent = $datos['imagen'];
    $event->user_id = Auth::user()->id;
    $event->titleEvent = $request->titleEvent;
    $event->fakeAuthor = $request->fakeAuthor;
    $event->platform = $request->platform;
    $event->linkEvent = $request->linkEvent;
    $event->descriptionEvent = $request->descriptionEvent;


    if (empty($request->dateEvent)) {
      $event->dateEvent = date("Y-m-d H:i:s");
    } else {
      $d = DateTime::createFromFormat($format = 'Y-m-d H:i:s', $request->dateEvent);
      $isValidate = $d && $d->format($format) == $request->dateEvent;

      if ($isValidate) {
        $event->dateEvent = $request->dateEvent;
      } else {
        $event->dateEvent = date("Y-m-d H:i:s");
      }
    }

    $event->save();

    return Redirect::to('/events');
  }

  /**
   * Display the specified resource.
   */
  public function show(Event $event)
  {
    return Inertia::render('events/Event', ['event'=> $event]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Event $event)
  {
    $this->validate($request, [
      'image' => ['max:1024', 'file'],
    ]);

    if ($request->image) {
      $file_path = public_path('uploads').'/'.$event->imgEvent;
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

      $event->imgEvent = $datos['imagen'];
      // ?????===========
    }

    if($event->titleEvent != $request->titleEvent && $request->titleEvent){
      $event->titleEvent = $request->titleEvent;
    }

    if($event->dateEvent != $request->dateEvent && $request->dateEvent){
      $d = DateTime::createFromFormat($format = 'Y-m-d H:i:s', $request->dateEvent);
      $isValidate = $d && $d->format($format) == $request->dateEvent;

      if ($isValidate) {
        $event->dateEvent = $request->dateEvent;
      } else {
        $event->dateEvent = date("Y-m-d H:i:s");
      }
    }

    if($event->fakeAuthor != $request->fakeAuthor && $request->fakeAuthor){
      $event->fakeAuthor = $request->fakeAuthor;
    }

    if($event->platform != $request->platform && $request->platform){
      $event->platform = $request->platform;
    }


    if($event->linkEvent != $request->linkEvent && $request->linkEvent){
      $event->linkEvent = $request->linkEvent;
    }

    if($event->descriptionEvent != $request->descriptionEvent && $request->descriptionEvent){
      $event->descriptionEvent = $request->descriptionEvent;
    }

    $event->save();

    return Redirect::to('/events');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Event $event)
  {
    $file_path = public_path('uploads').'/'.$event->imgEvent;

    File::delete($file_path);

    $event->delete();

    return Redirect::to('/events');
  }
}
