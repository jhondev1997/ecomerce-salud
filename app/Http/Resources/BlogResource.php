<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
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
      'titleBlog' => $this->titleBlog,
      'descriptionBlog' => $this->descriptionBlog,
      'imgBlog' => $this->imgBlog,
      'dateBlog' => $this->updated_at,
      'authorBlog' => $this->fakeAuthor,
      'emailAuthorBlog' => $this->user->email
    ];
  }
}
