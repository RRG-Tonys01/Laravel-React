<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class EmployeeDetail extends Model
{
    protected $table = 'employee_details';

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function atm(): HasOne
    {
        return $this->hasOne(ATM::class);
    }

    public function education(): BelongsTo
    {
        return $this->belongsTo(Education::class);
    }
}
