<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
  use HasFactory;

  protected $fillable = [
    'imgEvent',
    'fakeAuthor',
    'linkEvent',
    'titleEvent',
    'platform',
    'descriptionEvent',
    'dateEvent',
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
