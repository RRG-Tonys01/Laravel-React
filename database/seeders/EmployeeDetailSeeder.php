<?php

namespace Database\Seeders;

use App\Models\Bank;
use App\Models\Employee;
use App\Models\EmployeeDetail;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeeDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bank_list = [];

        foreach(Bank::all() as $bank){
            array_push($bank_list, $bank->bankID);
        }

        foreach (Employee::all() as $emp){
            $data = [
                'employeeID' => $emp->employeeID,
                'bankID' => $bank_list[array_rand($bank_list)],
                'ATM_number' => fake()->unique()->numberBetween(0000000000,9999999999),
                'gender' => rand(0,1),
                'EduID' => 5,
                'tax_id_number' => fake()->unique()->numberBetween(0000000000,9999999999),
                'health_insucrance_number' => fake()->unique()->numberBetween(0000000000,9999999999),
                'emergency_number' => fake()->unique()->phoneNumber(),
                'leave_date' => NULL,
            ];

            EmployeeDetail::insert($data);
        }
    }
}
