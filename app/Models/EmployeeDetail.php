<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class EmployeeDetail extends Model
{
    protected $table = 'employee_details';
    public $timestamps = false;



    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function bank(): HasOne
    {
        return $this->hasOne(Bank::class);
    }

    public function education(): BelongsTo
    {
        return $this->belongsTo(Education::class);
    }

    protected $fillable = [
        'bankID',
        'ATM_number',
        'gender',
        'EduID',
        'tax_id_number',
        'health_insurance_number',
        'emergency_number',
        'leave_date',
    ];
}
