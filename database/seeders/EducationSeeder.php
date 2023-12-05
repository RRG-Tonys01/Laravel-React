<?php

namespace Database\Seeders;

use App\Models\Education;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EducationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['edu_rank' => 'SD'],
            ['edu_rank' => 'SMP'],
            ['edu_rank' => 'SMA'],
            ['edu_rank' => 'SMK'],
            ['edu_rank' => 'S1'],
            ['edu_rank' => 'S2'],
            ['edu_rank' => 'S3'],
        ];

        Education::insert($data);
    }
}
