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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->text('employee_name');
            $table->text('email');
            $table->text('address');
            $table->date('birthdate');
            $table->text('phone_number');
            $table->bigInteger('positionID')->unsigned();
            $table->date('hire_date');
            $table->bigInteger('salary')
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
