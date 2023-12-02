<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Bank extends Model
{
    protected $table = 'banks';

    /**
     * Get the employee that owns the ATM.
    */
    public function employeeDetail(): BelongsTo
    {
        return $this->belongsTo(EmployeeDetail::class);
    }

    public function bankType(): BelongsTo
    {
        return $this->belongsTo(BankType::class);
    }


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
    */
    protected $fillable = [
        'bank_name',
        'BtypeID',
        'adress',
        'phone_number',
        'fax_number',
        'website',
    ];
}
