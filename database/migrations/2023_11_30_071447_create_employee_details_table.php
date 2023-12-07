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
        Schema::create('employee_details', function (Blueprint $table) {
            $table->bigInteger('employeeID')->unsigned();
            $table->bigInteger('bankID')->unsigned();
            $table->text('ATM_number');
            $table->boolean('gender');
            $table->bigInteger('EduID')->unsigned();
            $table->text('tax_id_number')->nullable();
            $table->text('health_insucrance_number')->nullable();
            $table->text('emergency_number')->nullable();
            $table->date('leave_date')->nullable();

            $table->foreign('employeeID')->references('employeeID')->on('employees')->onDelete('cascade');
            $table->foreign('bankID')->references('bankID')->on('banks')->onDelete('cascade');
            $table->foreign('EduID')->references('EduID')->on('educations')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employee_details');
    }
};
