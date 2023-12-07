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
        Schema::create('employee_accounts', function (Blueprint $table) {
            $table->id('accountID');
            $table->bigInteger('employeeID')->unsigned();
            $table->text('username');
            $table->text('email');
            $table->text('private_email')->nullable();
            $table->text('password');
            $table->bigInteger('empStatID')->unsigned();
            $table->dateTime('last_login')->nullable();
            $table->bigInteger('roleID')->unsigned();

            $table->foreign('employeeID')->references('employeeID')->on('employees')->onDelete('cascade');
            $table->foreign('roleID')->references('roleID')->on('roles')->onDelete('cascade');
            $table->foreign('empStatID')->references('empStatID')->on('employee_statuses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employee_accounts');
    }
};
