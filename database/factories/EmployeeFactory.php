<?php

namespace Database\Factories;

use App\Models\Position;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $position_list = [];

        foreach(Position::all() as $position){
            array_push($position_list, $position->positionID);
        }

        return [
            'employee_name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'address' => fake()->address(),
            'birthdate' => fake()->date(),
            'phone_number' => fake()->phoneNumber(),
            'positionID' => $position_list[array_rand($position_list)],
            'hire_date' => fake()->date(),
            'salary' => fake()->numberBetween(2500000, 15000000)
        ];
    }
}
