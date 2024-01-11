<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  use HasFactory;

  protected $fillable = [
    'name_product',
    'plug_product',
    'img_product',
    'description_product',
    'available_product',
    'price_original_product',
    'price_offer_product'
  ];

  public function tags()
  {
    return $this->belongsToMany(Tag::class, 'tag_products')->orderBy('id', 'DESC');
  }

  public function scopeName($query,  $busqueda)
  {
    return $query->where('name_product', 'like', '%'.$busqueda . '%');
  }

  public function scopeTagproduct($query, $busqueda)
  {
    $tag_ids = collect(explode(',', $busqueda))
    ->map(fn($i) => trim($i))
    ->all();

    if(!empty($busqueda)){

      return $query->whereHas('tags', fn($query)=>$query->whereIn('tags.id', $tag_ids));
    } else {
      return $query;
    }
  }
}
