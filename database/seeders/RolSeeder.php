<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    DB::table('rols')->insert([
      'name_rol' => 'Usuario',
      'created_at' => date('Y-m-d H:i:s'),
      'updated_at' => date('Y-m-d H:i:s'),
    ]);

    DB::table('rols')->insert([
      'name_rol' => 'Farmarcia',
      'created_at' => date('Y-m-d H:i:s'),
      'updated_at' => date('Y-m-d H:i:s'),
    ]);

    DB::table('rols')->insert([
      'name_rol' => 'Médico',
      'created_at' => date('Y-m-d H:i:s'),
      'updated_at' => date('Y-m-d H:i:s'),
    ]);

    DB::table('rols')->insert([
      'name_rol' => 'Techlead',
      'created_at' => date('Y-m-d H:i:s'),
      'updated_at' => date('Y-m-d H:i:s'),
    ]);

    DB::table('rols')->insert([
      'name_rol' => 'UX / UI Design',
      'created_at' => date('Y-m-d H:i:s'),
      'updated_at' => date('Y-m-d H:i:s'),
    ]);

    DB::table('rols')->insert([
      'name_rol' => 'Edgar',
      'created_at' => date('Y-m-d H:i:s'),
      'updated_at' => date('Y-m-d H:i:s'),
    ]);

    DB::table('rols')->insert([
      'name_rol' => 'Wachiman',
      'created_at' => date('Y-m-d H:i:s'),
      'updated_at' => date('Y-m-d H:i:s'),
    ]);

    DB::table('rols')->insert([
      'name_rol' => 'Tester',
      'created_at' => date('Y-m-d H:i:s'),
      'updated_at' => date('Y-m-d H:i:s'),
    ]);

    DB::table('rols')->insert([
      'name_rol' => 'Desarrollador',
      'created_at' => date('Y-m-d H:i:s'),
      'updated_at' => date('Y-m-d H:i:s'),
    ]);

    DB::table('rols')->insert([
      'name_rol' => 'Admin',
      'created_at' => date('Y-m-d H:i:s'),
      'updated_at' => date('Y-m-d H:i:s'),
    ]);
  }
}
