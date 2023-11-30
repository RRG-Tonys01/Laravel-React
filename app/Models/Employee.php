<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Employee extends Model
{
    protected $table = 'employees';

    public function positions(): BelongsTo
    {
        return $this->belongsTo(Position::class);
    }

    public function account(): HasOne
    {
        return $this->hasOne(EmployeeAccount::class);
    }

    public function detail(): HasOne
    {
        return $this->hasOne(EmployeeDetail::class);
    }

    protected $fillable = [
        'employee_name',
        'email',
        'address',
        'birthdate',
        'phone_number',
        'positionID',
        'hire_date',
        'salary',
    ];
}
