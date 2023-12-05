<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\Position;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $startDate = Carbon::createFromFormat('Y-m-d', '1980-01-01');
        // $endDate = Carbon::createFromFormat('Y-m-d', '2000-12-31');
        // $dateRange = CarbonPeriod::create($startDate, $endDate);
        // $dateArray = $dateRange->toArray();

        $manager_positions = [];
        $chief_positions = [];

        foreach(Position::all() as $positions){
            if(str_contains($positions->position_name, 'Manager')){
                array_push($manager_positions, $positions->positionID);
            }

            if(in_array($positions->position_name, ['CEO', 'CFO', 'COO', 'CTO'])){
                array_push($chief_positions, $positions->positionID);
            }

            // foreach (['CEO', 'CFO', 'COO', 'CTO'] as $chief) {
            //     if (str_contains($positions->position_name, $chief)) {
            //         array_push($chief_positions, $positions->positionID);
            //     }
            // }
        }

        Employee::factory()->count(100)->create();

        foreach (Employee::all() as $emp){
            $first_name = explode(' ', trim($emp->employee_name))[0];
            $number = rand(100,999);
            $user_mail = strtolower($first_name) . $number . "@mycompany.com";

            if(in_array($emp->positionID, $chief_positions)){
                $salaray_range_min = 25000000;
                $salaray_range_max = 35000000;
                $birthDateRange = CarbonPeriod::create('1960-01-01', '1963-12-31');
                $hireDateRange = CarbonPeriod::create('2010-01-01', '2013-12-31');
            }else if(in_array($emp->positionID, $manager_positions)){
                $salaray_range_min = 15000000;
                $salaray_range_max = 24500000;
                $birthDateRange = CarbonPeriod::create('1975-01-01', '1985-12-31');
                $hireDateRange = CarbonPeriod::create('2014-01-01', '2018-12-31');
            }else{
                $salaray_range_min = 5000000;
                $salaray_range_max = 10000000;
                $birthDateRange = CarbonPeriod::create('1986-01-01', '2000-12-31');
                $hireDateRange = CarbonPeriod::create('2019-01-01', '2022-12-31');
            }

            $birthDateArray = $birthDateRange->toArray();
            $birthDate = $birthDateArray[array_rand($birthDateArray)];

            $hireDateArray = $hireDateRange->toArray();
            $hireDate = $hireDateArray[array_rand($hireDateArray)];

            Employee::where('employeeID', $emp->employeeID)->update(
                [
                    'email' => $user_mail,
                    'birthdate' => $birthDate,
                    'hire_date' => $hireDate,
                    'salary' => rand($salaray_range_min, $salaray_range_max)
                ]
            );
        }
    }
}
