<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Position extends Model
{
    protected $table = 'positions';

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function employee(): HasMany
    {
        return $this->hasMany(Employee::class);
    }

    protected $fillable = ['position_name', 'deptID'];
}
