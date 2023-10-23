<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                Password::min(8)
                    ->letters()
                    ->symbols()
                    ->numbers()
            ]
        ];
    }

    // public function messages()
    // {
    //     return [
    //         'name.required' => 'Nama wajib diisi.',
    //         'name.string' => 'Nama harus berupa teks.',
    //         'name.max' => 'Nama tidak boleh melebihi 255 karakter.',
    //         'email.required' => 'Email wajib diisi.',
    //         'email.email' => 'Email harus berformat valid.',
    //         'email.unique' => 'Email sudah digunakan. Pilih email lain.',
    //         'password.required' => 'Password wajib diisi.',
    //         'password.string' => 'Password harus berupa teks.',
    //         'password.min' => 'Password harus memiliki panjang minimal 8 karakter.',
    //         'password.regex' => 'Password harus memiliki setidaknya satu huruf kecil, satu huruf besar, satu angka, dan satu simbol khusus (contoh: @$!%*?&).',
    //     ];
    // }
}
