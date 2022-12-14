<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->uuid('slug');
            $table->string('sap_id')->unique();
            $table->unsignedSmallInteger('unitid');
            $table->string('name');
            $table->unsignedSmallInteger('status')->default(1); //1=active , 0=cancel
          //  $table->string('email')->unique();
            $table->timestamp('line_verified_at')->nullable();
           // $table->string('password');
            $table->json('profile')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
        Schema::create('abilities', function (Blueprint $table) {
            $table->smallIncrements('id');
            $table->string('name')->uniqid();
            $table->string('label')->nullable();    
            $table->timestamps();
        });

        Schema::create('roles', function (Blueprint $table) {
            $table->smallIncrements('id');    
            $table->string('name')->uniqid();
            $table->string('label')->nullable();
            $table->unsignedSmallInteger('status')->default(1);
            $table->timestamps();
        });

        //many to many  ตามข้อกำหนด laravel ให้ใช้ชื่อเป็นเอกพจน์ และเรียงตามตัวอักษร
        Schema::create('ability_role', function (Blueprint $table) {
            $table->primary(['ability_id','role_id']);  //เรียงตามตัวอักษร
            $table->unsignedSmallInteger('ability_id')->constrained('abilities');
            $table->unsignedSmallInteger('role_id')->constrained('roles');
            $table->timestamps();
        });

        Schema::create('role_user', function (Blueprint $table) {
            $table->primary(['user_id','role_id']);  //เรียงตามตัวอักษร
            $table->unsignedSmallInteger('user_id')->constrained('users');
            $table->unsignedSmallInteger('role_id')->constrained('roles');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_user');
        Schema::dropIfExists('ability_role');
        Schema::dropIfExists('roles');
        Schema::dropIfExists('abilities');
        Schema::dropIfExists('users');
    }
}
