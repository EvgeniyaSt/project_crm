<?php
/**
 * Created by PhpStorm.
 * User: vlastit
 * Date: 01.10.18
 * Time: 21:16
 */

namespace App\Http\Controllers;

use App\Http\Requests\ImageValidation;
use App\It_company;
use App\Stack_group;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class CompaniesController extends Controller
{

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showCompanies()
    {
        $all_companies = DB::table('it_companies')
            ->paginate(8);
        return view('companies', ['all_companies' => $all_companies]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function showCompaniesAll(Request $request)
    {
        $all_companies = DB::table('it_companies')
            ->get();
        return response()->json($all_companies);
    }


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function companyPersonalView()
    {
        return view('companyView');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function getCompanyName(Request $request)
    {
        $company = It_company::where('id', $request->key)->get();
        return response($company);
    }


    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function getCompanyStack(Request $request)
    {
        $stacks = It_company::select('stack_name', 'stacks.id','stack_groups.comment')
            ->join('stack_groups', 'stack_groups.company_id', '=', 'it_companies.id')
            ->join('stacks', 'stack_groups.stack_id', '=', 'stacks.id')
            ->where('it_companies.id', $request->key)
            ->get();
        return response($stacks);
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function companyChangeName(Request $request)
    {

        It_company::where('id', $request->id)->update([
            'company_name' => $request->field
        ]);
        return back();

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function companyChangeComment(Request $request)
    {
        It_company::where('id', $request->id)->update([
            'comment' => $request->field
        ]);
        return back();
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function companyChangeAddress(Request $request)
    {

        It_company::where('id', $request->id)->update([
            'address' => $request->field
        ]);
        return back();
    }

    public function ChangeCommentStack(Request $request){
        Stack_group::where('company_id', $request->id)->update([
            'comment' => $request->field
        ]);
        return back();
    }

}