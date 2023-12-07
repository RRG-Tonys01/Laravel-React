<?php

namespace Database\Seeders;

use App\Models\Education;
use App\Models\EduList;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EduListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EduList::factory()->count(100)->create();

        foreach(EduList::all() as $education){
            if(in_array($education->EduID, [1,2,3,4])){
                $education_rank = Education::where('EduID', $education->EduID)->first();
                $school_name = ucfirst($education_rank->edu_rank) . " " . ucfirst(fake()->randomLetter());
                EduList::where('EduID', $education->EduID)->update([
                    'edu_name' => $school_name,
                    'major' => NULL
                ]);
            }else{
                $university_name = "Universitas " . ucfirst(fake()->randomLetter());
                EduList::where('EduID', $education->EduID)->update([
                    'edu_name' => $university_name,
                    'major' => fake()->userName()
                ]);
            }
        }
    }
}
