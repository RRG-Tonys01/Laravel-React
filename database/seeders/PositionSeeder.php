<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\Position;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $positions_data = [
            ['CEO', 'CFO', 'COO', 'CTO'],
            ['Office Manager', 'Administrative Assistant', 'Receptionist', 'Data Entry Clerk'],
            ['Accountant', 'Financial Analyst', 'Treasury Manager', 'Budget Analyst'],
            ['HR Manager', 'Recruitment Specialist', 'Employee Relations Specialist', 'Training and Development Coordinator'],
            ['Operations Manager', 'Supply Chain Manager', 'Logistics Coordinator', 'Quality Assurance Specialist'],
            ['IT Manager', 'Software Developer', 'Network Administrator', 'IT Support Specialist'],
            ['Marketing Manager', 'Advertising Specialist', 'Public Relations Coordinator', 'Market Research Analyst'],
            ['Sales Manager', 'Business Development Representative', 'Account Executive', 'Sales Support Specialist'],
            ['Customer Service Manager', 'Customer Support Representative', 'Call Center Supervisor', 'Customer Experience Specialist'],
            ['R&D Manager', 'Product Manager', 'Research Scientist', 'Innovation Specialist'],
            ['Legal Counsel', 'Compliance Officer', 'Contracts Manager', 'Paralegal'],
            ['PR Manager', 'Media Relations Specialist', 'Corporate Communications Coordinator', 'Publicist'],
            ['Quality Assurance Manager', 'QA Tester', 'Quality Control Inspector', 'Compliance Auditor'],
            ['Facilities Manager', 'Maintenance Technician', 'Security Officer', 'Housekeeping Supervisor'],
            ['Sales Director', 'Distribution Manager', 'Channel Sales Representative', 'Sales Operations Analyst'],
            ['Risk Manager', 'Risk Analyst', 'Insurance Specialist', 'Compliance Auditor'],
            ['Chief Strategy Officer', 'Strategic Planning Manager', 'Business Planning Analyst', 'Strategic Initiatives Coordinator'],
            ['Corporate Development Manager', 'Mergers and Acquisitions Specialist', 'Partnership Manager', 'Due Diligence Analyst'],
            ['Internal Audit Manager', 'Internal Auditor', 'Compliance Auditor', 'Audit Coordinator'],
        ];

        $index = 0;

        foreach (Department::all() as $dept){
            for ($i=0; $i < count($positions_data[$index]); $i++){
                $database = [
                    'position_name' => $positions_data[$index][$i],
                    'deptID' => $dept->deptID
                ];
                Position::insert($database);
            }
            $index++;
        }
    }
}
