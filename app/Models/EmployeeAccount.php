<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class EmployeeAccount extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'employee_accounts';
    protected $primaryKey = 'accountID';

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
        'roleID',
    ];

     /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'password' => 'hashed',
    ];
}
