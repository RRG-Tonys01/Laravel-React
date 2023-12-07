<?php

namespace Database\Factories;

use App\Models\Education;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EduList>
 */
class EduListFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $education_list = [];

        foreach(Education::all() as $edu){
            array_push($education_list, $edu->EduID);
        }

        return [
            'EduID' => $education_list[array_rand($education_list)],
            'edu_name' => fake()->titleMale(),
            'major' => fake()->userAgent()
        ];
    }
}
