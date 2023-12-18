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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('gender')->nullable();
            $table->string('district')->nullable();
            $table->string('sub_district')->nullable();
            $table->string('province')->nullable();
            $table->string('image')->nullable();
            $table->date('dob')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
