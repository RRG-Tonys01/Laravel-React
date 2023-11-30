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
            $table->bigInteger('ATM_ID')->unsigned();
            $table->text('ATM_number');
            $table->boolean('gender');
            $table->bigInteger('EduID')->unsigned();
            $table->text('tax_id_number');
            $table->text('health_insucrance_number');
            $table->text('emergency_number');
            $table->date('leave_date');

            $table->foreign('employeeID')->references('employeeID')->on('employees')->onDelete('cascade');
            $table->foreign('ATM_ID')->references('ATM_ID')->on('atms')->onDelete('cascade');
            $table->foreign('EduID')->references('EduID')->on('educations')->onDelete('cascade');

            // $table->timestamps();
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
