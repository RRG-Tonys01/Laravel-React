<?php

namespace Database\Seeders;

use App\Models\EmployeeStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeeStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['status_name' => 'Regular Employee'],
            ['status_name' => 'Contract Employee'],
            ['status_name' => 'Intern Employee'],
            ['status_name' => 'Retired Employee'],
            ['status_name' => 'Ex-Employee'],
        ];

        EmployeeStatus::insert($data);
    }
}
