<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailimmController extends Controller
{
  public function storeImmetabolico(Request $request)
  {
    $request->validate([
      'name' => ['required', 'min:2'],
      'dni' => ['required', 'min:7'],
      'email' => ['required'],
      'telephone' => ['required', 'min:6']
    ]);

    try {
      $data = [
        'name' => $request->name,
        'dni' => $request->dni,
        'email' => $request->email,
        'telephone' => $request->telephone
      ];

      if (empty($request->name) || empty($request->dni) || empty($request->email) || empty($request->telephone)) {
        return response($content = ['state' => 'invalidate : empty variable'],  $status = 404);
      }

      Mail::send('mail.contact', $data, function ($message) {
        $timestamp3 = date('m-d-Y');
        $time = time();
        $message->to('jhcruz.imm@gmail.com',  'Contacto')
          ->subject('Mensaje de contacto: ' . $timestamp3 . ' Codigo:' . $time);
      });

      $return = [
        'state' => 'success'
      ];
    } catch (\Exception $e) {
      $return = [
        'state' => 'error',
        'message' => $e->getMessage()
      ];
    }
    return response()->json($return);
  }
}
