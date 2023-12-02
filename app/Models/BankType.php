<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BankType extends Model
{
    protected $table = 'bank_types';

    /**
     * Get the employee that owns the ATM.
    */
    public function bank(): HasMany
    {
        return $this->hasMany(Bank::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
    */
    protected $fillable = ['type_name',];
}
