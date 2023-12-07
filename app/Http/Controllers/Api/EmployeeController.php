<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function getAllEmployee(){
        $employee = Employee::all();
        return response(compact('employee'));
    }
}
