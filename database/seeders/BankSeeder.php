<?php

namespace Database\Seeders;

use App\Models\Bank;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class BankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $filePath = base_path('python/json/bank.json');

        if (File::exists($filePath)) {
            $jsonContent = File::get($filePath);
            $data = json_decode($jsonContent, true);
            Bank::insert($data);
        }
    }
}
