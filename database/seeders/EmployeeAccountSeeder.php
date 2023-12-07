<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\EmployeeAccount;
use App\Models\EmployeeDetail;
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
                'private_email' => NULL,
                'password' => bcrypt('password'),
                'empStatID' => rand(1,5),
                'last_login' => NULL,
                'roleID' => rand(1,5),
            ];

            EmployeeAccount::insert($data);
        }


        foreach(EmployeeAccount::all() as $emp_account){
            if(in_array($emp_account->empStatID, [4,5])){
                Employee::where('employeeID', $emp_account->employeeID)->update(['salary' => 0]);
                EmployeeDetail::where('employeeID', $emp_account->employeeID)->update(['leave_date' => Carbon::now()]);
            }else if($emp_account->empStatID == 3){
                Employee::where('employeeiD', $emp_account->employeeID)->update(['salary' => rand(1000000, 3000000)]);
            }
        }
    }
}
