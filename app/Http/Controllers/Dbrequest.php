<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Dbrequest extends Controller
{

    public function direction()
    {
        $direction = DB::table('directions')->get();
        return response()->json($direction);
//        return response()->json(['response' => 'This is post method']);
    }

    public function groups()
    {
        $groups = DB::table('groups')->get();
        return response()->json($groups);
    }

    public function students()
    {
//      dd($request);
        $students = DB::table('students')
        ->leftJoin('persons', 'students.person_id', '=', 'persons.id')
        ->get();

        return response()->json($students);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function findStudents(Request $request)
    {
        $findstudents = DB::table('students')
            ->leftJoin('persons', 'students.person_id', '=', 'persons.id')
            ->where('persons.name', 'LIKE', "%{$request->key}%")
            ->limit(7)
            ->get();
        return response()->json($findstudents);
    }
    public function studedit(Request $request)
    {
//        $request->key
        $studed = DB::table('students')
            ->leftJoin('persons', 'students.person_id', '=', 'persons.id')
            ->where('students.id', '=', 3)
//            ->get();
            ->first();
//        return response()->json($request);
        return response()->json($studed);
    }
}


