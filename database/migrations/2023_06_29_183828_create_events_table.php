<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('events', function (Blueprint $table) {
      $table->id();
      $table->string('imgEvent');
      $table->string('fakeAuthor');
      $table->string('linkEvent');
      $table->string('titleEvent');
      $table->foreignId('user_id')->constrained()->onDelete('cascade');
      $table->string('platform');
      $table->text('descriptionEvent');
      $table->timestamp('dateEvent')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('events');
  }
};
