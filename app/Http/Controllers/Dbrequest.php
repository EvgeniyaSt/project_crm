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

    public function findStudents(Request $request)
    {
//        $strRequest = json_decode($request);
//        dd($strRequest);
        $req='a';
//        foreach ($strRequest as $key=>$value ) {
            $findstudents = DB::table('students')
                ->leftJoin('persons', 'students.person_id', '=', 'persons.id')
                ->where('persons.name', 'LIKE', "%{$req}%")
                ->limit(7)
                ->get();
  //     }
//         return response()->json($request[0]);
        return response()->json($findstudents);
    }

}
