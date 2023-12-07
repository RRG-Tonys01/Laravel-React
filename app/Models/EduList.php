<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EduList extends Model
{
    use HasFactory;

    protected $table = 'edu_lists';
    public $timestamps = false;

    public function eduList(): BelongsTo
    {
        return $this->belongsTo(Education::class);
    }

    protected $fillable = [ 'EduID', 'edu_name', 'major'];
}
