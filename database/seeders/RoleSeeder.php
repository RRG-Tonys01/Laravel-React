<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['role_name' => 'Chief'],
            ['role_name' => 'Manager'],
            ['role_name' => 'Supervisor'],
            ['role_name' => 'Administrator'],
            ['role_name' => 'Employee'],
        ];

        Role::insert($data);
    }
}
