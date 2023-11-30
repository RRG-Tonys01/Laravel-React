<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ATM extends Model
{
    protected $table = 'atms';

    /**
     * Get the employee that owns the ATM.
    */
    public function employeeDetail(): BelongsTo
    {
        return $this->belongsTo(EmployeeDetail::class);
    }


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
    */
    protected $fillable = [ 'ATM_name', 'substation'];
}
