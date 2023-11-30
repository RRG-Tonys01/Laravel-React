<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EmployeeStatus extends Model
{
    protected $table = 'employee_statuses';

    public function account(): BelongsTo
    {
        return $this->belongsTo(EmployeeAccount::class);
    }
}
