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
        Schema::create('banks', function (Blueprint $table) {
            $table->id('bankID');
            $table->text('bank_name');
            $table->bigInteger('BtypeID')->unsigned();
            $table->text('address')->nullable();
            $table->text('phone_number')->nullable();
            $table->text('fax_number')->nullable();
            $table->text('website')->nullable();

            $table->foreign('BtypeID')->references('BtypeID')->on('bank_types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banks');
    }
};
