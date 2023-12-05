<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            BankTypeSeeder::class,
            BankSeeder::class,
            DepartmentSeeder::class,
            PositionSeeder::class,
            EducationSeeder::class,
            EmployeeStatusSeeder::class,
            EmployeeSeeder::class,
            EmployeeDetailSeeder::class,
            RoleSeeder::class,
            EmployeeAccountSeeder::class,
        ]);
    }
}
