<?php
/**
 * Created by PhpStorm.
 * User: Андрей
 * Date: 24.09.2018
 * Time: 15:28
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'task_name',
        'description',
        'dead_line',
        'user_id_customer',
        'user_id_doer',
        'task_completed',
        'doers_report',
    ];

    public function getQueueableRelations()
    {
        // TODO: Change the autogenerated stub
    }
}
