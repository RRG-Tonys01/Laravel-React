<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Role extends Model
{
    protected $table = 'roles';

    public function account(): BelongsTo
    {
        return $this->belongsTo(EmployeeAccount::class);
    }

    protected $fillable = ['role_name'];

}
