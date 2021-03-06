<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' =>  $this->title,
            'created_at' => (string) $this->created_at,
            'favorites' => $this->favorites,
            'views' => $this->views,
            'likes' => $this->likes,
            'best' => $this->best,
            'hot' => $this->hot,
            'is_liked' => $this->is_liked,
            'user' => $this->user,
            'image' => $this->image,
            'tags' => TagResource::collection($this->tag),
        ];
    }
}
