<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Laravel\Sanctum\HasApiTokens;

class EmployeeAccount extends Model
{
    use HasApiTokens;

    protected $table = 'employee_accounts';

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function employeeStatus(): HasOne
    {
        return $this->hasOne(EmployeeStatus::class);
    }

    public function role(): HasMany
    {
        return $this->hasMany(EmployeeStatus::class);
    }

    protected $fillable = [
        'username',
        'email',
        'private_email',
        'password',
        'empStatID',
    ];

     /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];
}
