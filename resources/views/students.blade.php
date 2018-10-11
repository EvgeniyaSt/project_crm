@extends('layouts.nav')
@section('title', 'Студенты A-Level')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<div class="container-fluid">
    {{--  Это бутофория
      В этом месте будет меню-аккордион по направлениям и группам--}}
    <div class="col-md-2 col-sm-4 ">

        <p></p>
        <ul class="list-group">
            <li class="list-group-item">PHP Продвинутый</li>
            <li class="list-group-item">FRONT_END Продвинутый</li>
            <li class="list-group-item">HR/RECRUITMENT РАСШИРЕННЫЙ</li>
            <li class="list-group-item">QA AUTOMATION РАСШИРЕННЫЙ</li>
            <li class="list-group-item">FULLSTACK JS РАСШИРЕННЫЙ</li>
            <li class="list-group-item">FULLSTACK JS РАСШИРЕННЫЙ</li>
            <li class="list-group-item">FULLSTACK JS РАСШИРЕННЫЙ</li>
            <li class="list-group-item">FULLSTACK JS РАСШИРЕННЫЙ</li>
            <li class="list-group-item">FULLSTACK JS РАСШИРЕННЫЙ</li>
            <li class="list-group-item">FULLSTACK JS РАСШИРЕННЫЙ</li>
            <li class="list-group-item">FULLSTACK JS РАСШИРЕННЫЙ</li>
        </ul>
    </div>
    <div id="q" class="col-md-8 col-sm-6 ">
        <h4> Список студентов </h4>
        <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
            <i class="fa fa-sort float-right" aria-hidden="true"></i>
            </th>
            <th class="th-sm">ФИО
                <i class="fa fa-sort float-right" aria-hidden="true"></i>
            </th>
            <th class="th-sm">Группа
                <i class="fa fa-sort float-right" aria-hidden="true"></i>
            </th>
            <th class="th-sm">Статус обучения
                <i class="fa fa-sort float-right" aria-hidden="true"></i>
            </th>
            <th class="th-sm">Статус трудоустройства
                <i class="fa fa-sort float-right" aria-hidden="true"></i>
            </th>
            <th class="th-sm">Комментарий
                <i class="fa fa-sort float-right" aria-hidden="true"></i>
            </th>
            </tr>
            </thead>
            <tbody>
            @if ($all_students)
            @foreach ($all_students as $index)
                <tr>
                    <td>
                        <a href="{{route('student.view', ['id' => $index->id] )}}">{{$index->name}}</a>
                    </td>
                    <td>
                        <a href="{{route('student.view', ['id' => $index->id] )}}">{{$index->group_name}}</a>
                    </td>
                    <td>
                        <a href="{{route('student.view', ['id' => $index->id] )}}">{{$index->learning_status}}</a>
                    </td>
                    <td>
                        <a href="{{route('student.view', ['id' => $index->id] )}}">{{$index->employment_status}}</a>
                    </td>
                    <td>
                        <a href="{{route('student.view', ['id' => $index->id] )}}">{{$index->comment}}</a>
                    </td>
                </tr>
            @endforeach
            {{ $all_students->links() }}
            @endif
            </tbody>
        </table>
    </div>


    <div class="col-md-2 col-sm-6 ">
        <!-- form adding students to DB.
        Use data in php by
        $request->session()->keep(['name', 'email', 'site', 'text_area']);
        -->
        <div class="container">
            <div>
                <img style="max-width:100px; margin-top: -7px;"
                     src="/images/group.png">
            </div>
            <!-- Trigger the modal with a button -->
            <button type="submit" class="btn btn-default" data-toggle="modal" data-target="#myModal">Добавить нового
                студента
            </button>

            <!-- Modal -->
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Добавление нового студента</h4>
                        </div>
                        <div class="modal-body">
                            <form action="{{Route('add.student')}}" method="post" enctype="multipart/form-data">
                                @csrf
                                <p>Введите данные</p>
                                <p>Имя студента</p>
                                <p><input name="student_name"></p>
                                <p>Фамалия студента</p>
                                <p><input name="student_surname"></p>
                                <p>Дата рождения студента</p>
                                <p><input name="student_birth"></p>
                                <p>Адрес студента</p>
                                <p><input name="student_adress"></p>
                                <p>E-mail студента</p>
                                <p><input name="student_mail"></p>
                                <p>Телефон студента</p>
                                <p><input name="student_phone"></p>
                                </br>
                                <input type="submit" value="Add new student">
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <form action="{{Route('addstud')}}">
                <input type="submit" value="Add new student">
            </form>
        </div>
    </div>
</div>



<form role="search">
    <div class="form-group">

        <input type="search" name="search" class="form-control" id="search" placeholder="Поиск по сайту">
        <div id="findResult">
        </div>

    </div>
    <button type="submit" class="btn btn-default">Поиск</button>
</form>




@extends('layouts.footer')

<script src="/js/show.js"></script>