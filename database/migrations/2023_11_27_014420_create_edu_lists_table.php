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
        Schema::create('edu_lists', function (Blueprint $table) {
            $table->bigInteger('EduID')->unsigned();
            $table->text('edu_name');
            $table->text('major');

            $table->foreign('EduID')->references('EduID')->on('educations')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('edu_lists');
    }
};
