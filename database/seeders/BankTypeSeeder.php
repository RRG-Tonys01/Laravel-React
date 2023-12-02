<?php

namespace Database\Seeders;

use App\Models\BankType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BankTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['type_name' => 'BANK UMUM PERSERO'],
            ['type_name' => 'BANK UMUM SWASTA NASIONAL'],
            ['type_name' => 'BANK PEMBANGUNAN DAERAH'],
            ['type_name' => 'KANTOR CABANG BANK YANG BERKEDUDUKAN DI LUAR NEGERI'],
        ];

        BankType::insert($data);
    }
}
