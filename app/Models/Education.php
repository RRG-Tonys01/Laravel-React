<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Education extends Model
{
    protected $table = 'educations';

    public function employeeDetail(): HasMany
    {
        return $this->hasMany(EmployeeDetail::class);
    }

    public function eduList(): HasMany
    {
        return $this->hasMany(EduList::class);
    }

    protected $fillable = [ 'edu_rank'];
}
