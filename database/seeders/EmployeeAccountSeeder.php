<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\EmployeeAccount;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeeAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        foreach(Employee::all() as $emp){
            $first_name = explode(' ', trim($emp->employee_name))[0];
            $number = rand(100,999);
            $username = strtolower($first_name) . $number;

            $data = [
                'employeeID' => $emp->employeeID,
                'username' => $username,
                'email' => $emp->email,
                'private_email' => 'comingsoon123@gmail.com',
                'password' => bcrypt('password'),
                'empStatID' => rand(1,5),
                'last_login' => Carbon::now(),
                'roleID' => rand(1,5),
                'token' => fake()->unique()->text(25),
            ];



            EmployeeAccount::insert($data);
        }
    }
}
