<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    protected $table = 'departments';

    public function positions(): HasMany
    {
        return $this->hasMany(Position::class);
    }

     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
    */
    protected $fillable = [ 'dept_name', 'dept_code'];
}
