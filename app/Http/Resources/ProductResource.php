<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'name_product' => $this->name_product,
      'plug_product' => $this->plug_product,
      'img_product' => $this->img_product,
      'price_offer_product' => $this->price_offer_product,
      'price_original_product' => $this->price_original_product,
      'description_product' => $this->description_product,
      'tags' => $this->tags
    ];
  }
}
