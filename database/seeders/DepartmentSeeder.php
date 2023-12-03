<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dept_data = [
            [
                'dept_name' => 'Executive Leadership',
                'dept_code' => 'EL',
            ],
            [
                'dept_name' => 'Administrative Departments',
                'dept_code' => 'ADMN',
            ],
            [
                'dept_name' => 'Finance and Accounting',
                'dept_code' => 'FIN',
            ],
            [
                'dept_name' => 'Human Resources',
                'dept_code' => 'HR',
            ],
            [
                'dept_name' => 'Operations',
                'dept_code' => 'OP',
            ],
            [
                'dept_name' => 'Information Technology',
                'dept_code' => 'IT',
            ],
            [
                'dept_name' => 'Marketing',
                'dept_code' => 'MKT',
            ],
            [
                'dept_name' => 'Sales',
                'dept_code' => 'SALES',
            ],
            [
                'dept_name' => 'Customer Service',
                'dept_code' => 'CS',
            ],
            [
                'dept_name' => 'Product Development',
                'dept_code' => 'R&D',
            ],
            [
                'dept_name' => 'Legal and Compliance',
                'dept_code' => 'LEGAL',
            ],
            [
                'dept_name' => 'Public Relations',
                'dept_code' => 'PR',
            ],
            [
                'dept_name' => 'Quality Assurance',
                'dept_code' => 'QA',
            ],
            [
                'dept_name' => 'Facilities Management',
                'dept_code' => 'FM',
            ],
            [
                'dept_name' => 'Sales and Distribution',
                'dept_code' => 'SD',
            ],
            [
                'dept_name' => 'Risk Management',
                'dept_code' => 'RISK',
            ],
            [
                'dept_name' => 'Strategic Planning',
                'dept_code' => 'STRAT',
            ],
            [
                'dept_name' => 'Corporate Development',
                'dept_code' => 'CORP-DEV',
            ],
            [
                'dept_name' => 'Internal Audit',
                'dept_code' => 'AUDIT',
            ],
        ];

        Department::insert($dept_data);
    }
}
