document.addEventListener("DOMContentLoaded", function (event) {

    jsonPost(location.origin + '/students/getStudName', urlPart[3])
        .then(response => change_studentName(JSON.parse(response)));

    function change_studentName(studName) {
        let studNameId = document.getElementById('name_student'); //div
        let studAddressId = document.getElementById('address_student');//div
        let studentName = document.createElement('td');  //p in div
        let studentAddress = document.createElement('td');  //p in div


        studentName.innerHTML = studName[0]['name'] +
            '<button class=\'btn btn-link  glyphicon glyphicon-pencil\' id="stname"></button>';
        studentAddress.innerHTML = studName[0]['address'] +
            '<button class=\'btn btn-link  glyphicon glyphicon-pencil\' id="staddress"></button>';

        studNameId.appendChild(studentName);
        studAddressId.appendChild(studentAddress);
        document.getElementById('stname').onclick = function () {

            studentName.innerHTML = "<input type='text' id='stnameInput' value='" + studName[0]['name'] + "'>" +
                "<button class ='btn btn-link  glyphicon glyphicon-floppy-saved' id='stname'></button>";

            document.getElementById('stname').onclick = function () {
                jsonPostEdit(location.origin + "/students/ChangeName", urlPart[3], document.getElementById('stnameInput').value);
                location.reload();
            }
        };
        document.getElementById('staddress').onclick = function () {
            studentAddress.innerHTML = "<input type='text' id='staddressInput' value='" + studName[0]['address'] + "'>" +
                "<button class ='btn btn-link  glyphicon glyphicon-floppy-saved' id='stAddress'></button>";

            document.getElementById('stAddress').onclick = function () {
                jsonPostEdit(location.origin + "/students/ChangeAddress", urlPart[3], document.getElementById('staddressInput').value);
                location.reload();
            }
        }
    }

    jsonPost(location.origin + '/students/getStudentContacts', urlPart[3])
        .then(response => change_studentContacts(JSON.parse(response)));

    function change_studentContacts(studContacts) {
        let i;
        var contactId = [];
        for (i = 0; i < studContacts.length; i++) {
            let div = document.createElement('div');
            div.className = 'row';
            div.id = 'div' + i;
            let commToolDiv = document.createElement('div');
            commToolDiv.className = 'col-md-4 col-sm-12 col-xs-12 parametr';

            let OtherDiv = document.createElement('div');
            OtherDiv.className = 'col-md-4 col-sm-12 col-xs-12';
            let OtherDiv2 = document.createElement('div');
            OtherDiv2.className = 'col-md-4 col-sm-12 col-xs-12';

            let studcommunication_tool = document.createElement('p');
            let studcontact = document.createElement('p');
            let studcomment = document.createElement('p');
            studcommunication_tool.innerHTML = studContacts[i]['communication_tool'];
            studcommunication_tool.id = 'stCommTool' + i;
            studcontact.innerHTML = studContacts[i]['contact'] +
                '<button class=\'btn btn-link  glyphicon glyphicon-pencil\' id=' + "ContactButton" + i + '></button>';
            studcontact.id = 'stCont' + i;
            studcomment.innerHTML = studContacts[i]['comment'] +
                '<button class=\'btn btn-link  glyphicon glyphicon-pencil\' id=' + "CommentButton" + i + '></button>';
            studcomment.id = 'stComment' + i;
            contactId[i] = studContacts[i]['id'];
            document.getElementById('contactInfo').appendChild(div);
            div.appendChild(commToolDiv).appendChild(studcommunication_tool);
            div.appendChild(OtherDiv).appendChild(studcontact);
            div.appendChild(OtherDiv2).appendChild(studcomment);

        }
        var CommTool = [];
        var ContactTool = [];
        var CommentTool = [];
        var sel = [];
        for (let count = 0; count < studContacts.length; count++) {
            //CommTool[count] = document.getElementById('CommToolButton' + count);
            ContactTool[count] = document.getElementById('ContactButton' + count);
            CommentTool[count] = document.getElementById('CommentButton' + count);
        }

//         var selectList = [];
//         CommTool.forEach(function (item, i, CommTool) {
//             CommTool[i].addEventListener('click', function () {
//                 selectList[i] = document.getElementById('stCommTool' + i);
// // <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
//                 selectList[i].innerHTML = "<select id=" + 'stCommToolInput' + i + "></select><button class='btn btn-link  glyphicon glyphicon-floppy-saved' id = " + 'stCommTools' + i + "></button>";
// // =======
// //                 selectList[i].innerHTML = "<select id=" + 'stCommToolInput' + i + "></select>" +
// //                     "<button id = " + 'stCommTools' + i + " class ='btn btn-link  glyphicon glyphicon-floppy-saved'>Save</button>";
// // >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
//                 httpGet(location.origin + "/communicationTools")
//                     .then(response => fun(JSON.parse(response)));
//
//                 function fun(extData) {
//                     for (let gr = 0; gr < extData.length; gr++) {
//                         let selectOption = new Option(extData[gr]['communication_tool']);
//                         document.getElementById("stCommToolInput" + i).appendChild(selectOption)
//                     }
//                     sel[i] = document.getElementById('stCommToolInput' + i);
//                 }
//
//                 document.getElementById('stCommTools' + i).onclick = function () {
//                     sel[i] = sel[i].options[sel[i].selectedIndex].text;
//                     jsonPostEdit(location.origin + "/students/ChangeCommTool", urlPart[3], sel[i], contactId[i]);
//                     location.reload();
//                 }
//             })
//         });
        var input1 = [];
        ContactTool.forEach(function (item, i, ContactTool) {
            ContactTool[i].addEventListener('click', function () {
                input1[i] = document.getElementById('stCont' + i);
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
                input1[i].innerHTML = "<input type='text' id=" + 'stContactInput' + i + " value='" + studContacts[i]['contact'] + "'><button class='btn btn-link  glyphicon glyphicon-floppy-saved' id=" + 'ContactButton' + i + "></button>";
// =======
//                 input1[i].innerHTML = "<input type='text' id=" + 'stContactInput' + i + " value=" + studContacts[i]['contact'] + "><button  id=" + 'ContactButton' + i + " class ='btn btn-link  glyphicon glyphicon-floppy-saved'>Save</button>";
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
                document.getElementById('ContactButton' + i).onclick = function () {
                    jsonPostEdit(location.origin + "/students/ChangeContact", urlPart[3], document.getElementById('stContactInput' + i).value, contactId[i]);
                    location.reload();
                }
            })
        });
        var input2 = [];
        CommentTool.forEach(function (item, i, CommentTool) {
            CommentTool[i].addEventListener('click', function () {
                input2[i] = document.getElementById('stComment' + i);
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
//                 input2[i].innerHTML = "<input type='text' id=" + 'stCommentInput' + i + " value='"+studContacts[i]['comment']+"'><button class='btn btn-link  glyphicon glyphicon-floppy-saved'  id=" + 'CommentButton' + i + "></button>";
// =======
                input2[i].innerHTML = "<input type='text' id=" + 'stCommentInput' + i + " value='" + studContacts[i]['comment'] + "'><button id=" + 'CommentButton' + i + " class ='btn btn-link  glyphicon glyphicon-floppy-saved'></button>";
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
                document.getElementById('CommentButton' + i).onclick = function () {
                    jsonPostEdit(location.origin + "/students/ChangeContactComment", urlPart[3], document.getElementById('stCommentInput' + i).value, contactId[i]);
                    location.reload();
                }
            })
        })

    }


    jsonPost(location.origin + '/students/getStudyInfo', urlPart[3])
        .then(response => change_studyInfo(JSON.parse(response)));

    function change_studyInfo(studyInfo) {
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
        // console.log(studyInfo);
// =======
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
        let i;
        var studentCommentMass = [];
        for (i = 0; i < studyInfo.length; i++) {

            let group_name = document.createElement('p');
            let learning_status = document.createElement('p');
            let employment_status = document.createElement('p');
            let studentComment = document.createElement('p');
            //let studentCV = document.createElement('p');
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
            group_name.innerHTML = studyInfo[i]['group_name'] + '<button class=\'btn btn-link  glyphicon glyphicon-pencil\' id=' + "GroupNameButton" + i + '></button>';
            // GroupNameMass[i] = document.getElementById("GroupNameButton" + i);
            group_name.id = 'stGroupName' + i;
            learning_status.innerHTML = studyInfo[i]['learning_status'] + '<button class=\'btn btn-link  glyphicon glyphicon-pencil\' id=' + "LearningStatusButton" + i + '></button>';
            learning_status.id = 'stLearningStatus' + i;
            employment_status.innerHTML = studyInfo[i]['employment_status'] + '<button class=\'btn btn-link  glyphicon glyphicon-pencil\' id=' + "EmploymentStatusButton" + i + '></button>';
            employment_status.id = 'stEmploymentStatus' + i;
            studentComment.innerHTML = studyInfo[i]['comment'] + '<button class=\'btn btn-link  glyphicon glyphicon-pencil\' id=' + "StudentCommentButton" + i + '></button>';
            studentComment.id = 'stCommenT' + i;
            let weack   = studyInfo[i]['CV']
            console.log(weack);
            //studentCV.innerHTML = "<a id='studentCVCV'>'CV'</a>" + '<button class=\'btn btn-link  glyphicon glyphicon-pencil\' id=' + "StudentCVButton" + i + '></button>';
            //studyInfo[i]['CV']
            // =======
            // group_name.innerHTML = studyInfo[i]['group_name'] + '<button id=' + "GroupNameButton" + i + ' class=\'btn btn-link  glyphicon glyphicon-pencil\'></button>';
            // GroupNameMass[i] = document.getElementById("GroupNameButton" + i);
            // group_name.id = 'stGroupName' + i;
            // learning_status.innerHTML = studyInfo[i]['learning_status'] + '<button id=' + "LearningStatusButton" + i + ' class=\'btn btn-link  glyphicon glyphicon-pencil\'></button>';
            // learning_status.id = 'stLearningStatus' + i;
            // employment_status.innerHTML = studyInfo[i]['employment_status'] + '<button id=' + "EmploymentStatusButton" + i + ' class=\'btn btn-link  glyphicon glyphicon-pencil\'></button>';
            // employment_status.id = 'stEmploymentStatus' + i;
            // studentComment.innerHTML = studyInfo[i]['comment'] + '<button id=' + "StudentCommentButton" + i + ' class=\'btn btn-link  glyphicon glyphicon-pencil\'></button>';
            // studentComment.id = 'stCommenT' + i;
            // studentCV.innerHTML = studyInfo[i]['CV'] + '<button id=' + "StudentCVButton" + i + ' class=\'btn btn-link  glyphicon glyphicon-pencil\'></button>';
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
            //studentCV.id = 'stCV' + i;
            document.getElementById('group_student').appendChild(group_name);
            document.getElementById('learning_status_student').appendChild(learning_status);
            document.getElementById('employment_status_student').appendChild(employment_status);
            document.getElementById('comment_student').appendChild(studentComment);
            //document.getElementById('rez_student').appendChild(studentCV);
            studentCommentMass[i] = document.getElementById('StudentCommentButton' + i);
        }
        //get skills
        // document.getElementById('studentCVCV')
        //document.getElementById('studentCVCV').onclick = function(){
          //  jsonPostEdit(location.origin + "/students/CVView", urlPart[3], weack);
        //};

        //STUDENT CV
        // let studentCV = document.createElement('a');
        // studentCV.innerHTML = 'CV';
        // document.getElementById('rez_student').appendChild(studentCV);
        // document.getElementById('rez_student').onclcick = function(){
        //   document.getElementById('CV-student');
        // };
        jsonPost(location.origin + '/students/getSkills', urlPart[3])
            .then(response => change_studentSkills(JSON.parse(response)));

        function change_studentSkills(skills) {
            var skillMass = [];
            var skillId = [];
            var GroupId = [];
            for (i = 0; i < skills.length; i++) {
                var skill = document.createElement('i');
                skill.innerHTML = skills[i]['skill_name'] + ' ';
                skill.id = 'stSkill';
                document.getElementById('skills_student').appendChild(skill);
                skillMass[i] = document.getElementById("SkillButton" + i);
                GroupId[i] = skills[i]['skillGroupId'];
            }
            let skill_button = document.createElement('button');
            skill_button.id = 'SkillButton';
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
            skill_button.className='btn btn-link  glyphicon glyphicon-pencil';
// =======
            skill_button.setAttribute("class", "btn btn-link  glyphicon glyphicon-pencil");
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
            document.getElementById('skills_student').appendChild(skill_button);


            document.getElementById('SkillButton').onclick = function () {
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
                document.getElementById('skills_student').innerHTML = "<select class=\"form-control\" id=" + 'stSkillsSelect' + " size=\"4\" name=\"skill_id[]\" multiple></select><button class ='btn btn-link  glyphicon glyphicon-floppy-saved' id='stSkills'></button>";
// =======
                document.getElementById('skills_student').innerHTML = "<select class=\"form-control\" id=" + 'stSkillsSelect' + " size=\"4\" name=\"skill_id[]\" multiple></select><button id='stSkills' class ='btn btn-link  glyphicon glyphicon-floppy-saved'></button>";
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
                httpGet(location.origin + "/skills")
                    .then(response => selectSkills(JSON.parse(response)));

                function selectSkills(extData) {
                    for (let gr = 0; gr < extData.length; gr++) {
                        let selectOption = new Option(extData[gr]['skill_name']);
                        document.getElementById('stSkillsSelect').appendChild(selectOption)
                    }
                }

                document.getElementById('stSkills').onclick = function () {
                    var result = [];
                    var resultCounterId = [];
                    var opt;
                    for (let i = 0; i < document.getElementById('stSkillsSelect').options.length; i++) {
                        opt = document.getElementById('stSkillsSelect').options[i];
                        if (opt.selected) {
                            result.push(opt.value || opt.text);
                            resultCounterId.push(document.getElementById('stSkillsSelect').options[i].index + 1);
                        }
                    }
                    // console.log(result);
                    jsonPostEdit(location.origin + "/students/ChangeSkills", urlPart[3], result, resultCounterId);
                    location.reload();
                }
            }

            // + '<button id=' + "SkillButton" + i + '>Edit</button>'
            // var DirectionStatusMass = [];
            // var StartDateMass = [];
            // var FinishDateMass = [];
            // var HomecomingDateMass = [];
            for (i = 0; i < studyInfo.length; i++) {
                var direction = document.createElement('p');
                var start_date = document.createElement('p');
                var finish_date = document.createElement('p');
                var homecoming_date = document.createElement('p');
                // '<button id=' + "DirectionButton" + i + '>Edit</button>'
                direction.innerHTML = studyInfo[i]['direction'];
                // direction.id = 'stDirection' + i;
                start_date.innerHTML = studyInfo[i]['start_date'];
                // start_date.id = 'stStartDate' + i;
                finish_date.innerHTML = studyInfo[i]['finish_date'];
                // finish_date.id = 'stFinishDate' + i;
                homecoming_date.innerHTML = studyInfo[i]['homecoming_date'];
                // + '<button id=' + "HomecomingDateButton" + i + '>Edit</button>'
                // homecoming_date.id = 'stHomecomingDate' + i;
                document.getElementById('direction_student').appendChild(direction);
                document.getElementById('start_date_student').appendChild(start_date);
                document.getElementById('finish_date_student').appendChild(finish_date);
                document.getElementById('homecoming_date_student').appendChild(homecoming_date);
                // DirectionStatusMass[i] = document.getElementById("DirectionButton" + i);
                // StartDateMass[i] = document.getElementById("StartDateButton" + i);
                // FinishDateMass[i] = document.getElementById("FinishDateButton" + i);
                // HomecomingDateMass[i] = document.getElementById("HomecomingDateButton" + i);
            }
            //COMPANY select('company_name','position')
            jsonPost(location.origin + '/students/getStudyCompany', urlPart[3])
                .then(response => change_companyInfo(JSON.parse(response)));

            function change_companyInfo(company) {
                //console.log(company);
                var CompaniesNameMass = [];
                var PositionsNameMass = [];
                let i;
                for (i = 0; i < company.length; i++) {
                    var company_name = document.createElement('p');
                    var position = document.createElement('p');
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
                    company_name.innerHTML = company[i]['company_name'] + '<button class=\'btn btn-link  glyphicon glyphicon-pencil\' id=' + "CompanyButton" + i + '></button>';
                    company_name.id = 'stCompany' + i;
                    position.innerHTML = company[i]['position'] + '<button class=\'btn btn-link  glyphicon glyphicon-pencil\' id=' + "PositionButton" + i + '></button>';
// =======
//                     company_name.innerHTML = company[i]['company_name'] + '<button id=' + "CompanyButton" + i + ' class=\'btn btn-link  glyphicon glyphicon-pencil\'></button>';
//                     company_name.id = 'stCompany' + i;
//                     position.innerHTML = company[i]['position'] + '<button id=' + "PositionButton" + i + ' class=\'btn btn-link  glyphicon glyphicon-pencil\'></button>';
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
                    position.id = 'stPosition' + i;
                    document.getElementById('it_company_student').appendChild(company_name);
                    document.getElementById('position_student').appendChild(position);
                    CompaniesNameMass[i] = document.getElementById("CompanyButton" + i)
                    PositionsNameMass[i] = document.getElementById("PositionButton" + i)
                }

                //company name
                var sel6 = [];
                var companyList = [];
                CompaniesNameMass.forEach(function (item, i, CompaniesNameMass) {
                    CompaniesNameMass[i].addEventListener('click', function () {
                        companyList[i] = document.getElementById('stCompany' + i);
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
                        companyList[i].innerHTML = "<select id=" + 'stCompanyNameInput' + i + "></select><button class ='btn btn-link  glyphicon glyphicon-floppy-saved' id = " + 'ButtonCompanyName' + i + "></button>";
// =======
                        companyList[i].innerHTML = "<select id=" + 'stCompanyNameInput' + i + "></select><button id = " + 'ButtonCompanyName' + i + " class ='btn btn-link  glyphicon glyphicon-floppy-saved'></button>";
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
                        httpGet(location.origin + "/company")
                            .then(response => fun7(JSON.parse(response)));

                        function fun7(extData) {
                            for (let gr = 0; gr < extData.length; gr++) {
                                let selectOption = new Option(extData[gr]['company_name']);
                                document.getElementById('stCompanyNameInput' + i).appendChild(selectOption)
                            }
                            sel6[i] = document.getElementById('stCompanyNameInput' + i);
                        }

                        document.getElementById('ButtonCompanyName' + i).onclick = function () {
                            sel6[i] = sel6[i].options[sel6[i].selectedIndex].index + 1;
                            jsonPostEdit(location.origin + "/students/ChangeCompany", urlPart[3], sel6[i]);
                            location.reload();
                        }
                    })
                });

                //position
                var sel7 = [];
                var positionList = [];
                PositionsNameMass.forEach(function (item, i, PositionsNameMass) {
                    PositionsNameMass[i].addEventListener('click', function () {
                        positionList[i] = document.getElementById('stPosition' + i);
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
                        positionList[i].innerHTML = "<select id=" + 'stPositionNameInput' + i + "></select><button class ='btn btn-link  glyphicon glyphicon-floppy-saved' id = " + 'ButtonPosition' + i + "></button>";
// =======
//                         positionList[i].innerHTML = "<select id=" + 'stPositionNameInput' + i + "></select><button id = " + 'ButtonPosition' + i + " class ='btn btn-link  glyphicon glyphicon-floppy-saved'></button>";
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
                        httpGet(location.origin + "/position")
                            .then(response => fun8(JSON.parse(response)));

                        function fun8(extData) {
                            for (let gr = 0; gr < extData.length; gr++) {
                                let selectOption = new Option(extData[gr]['position']);
                                document.getElementById('stPositionNameInput' + i).appendChild(selectOption)
                            }
                            sel7[i] = document.getElementById('stPositionNameInput' + i);
                        }

                        document.getElementById('ButtonPosition' + i).onclick = function () {
                            sel7[i] = sel7[i].options[sel7[i].selectedIndex].index + 1;
                            jsonPostEdit(location.origin + "/students/ChangeCompanyPosition", urlPart[3], sel7[i]);
                            location.reload();
                        }
                    })
                });


            }

            //STUDENT COMMENT
            var studentComm = [];
            studentCommentMass.forEach(function (item, i, studentCommentMass) {
                studentCommentMass[i].addEventListener('click', function () {
                    studentComm[i] = document.getElementById('stCommenT' + i);
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
                    studentComm[i].innerHTML = "<input type='text' id=" + 'stCommentInput' + i + " value='" + studyInfo[i]['comment'] + "'><button class ='btn btn-link  glyphicon glyphicon-floppy-saved' id=" + 'ButtonStudentComment' + i + "></button>";
// =======
//                     studentComm[i].innerHTML = "<input type='text' id=" + 'stCommentInput' + i + " value=" + studyInfo[i]['comment'] + "><button id=" + 'ButtonStudentComment' + i + " class ='btn btn-link  glyphicon glyphicon-floppy-saved'></button>";
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
                    document.getElementById('ButtonStudentComment' + i).onclick = function () {
                        jsonPostEdit(location.origin + "/students/ChangeStudentComment", urlPart[3], document.getElementById('stCommentInput' + i).value);
                        location.reload();
                    }
                })
            });
            //GET SKILLS
            //     var selectSkills = [];
            //     var sel = [];
            //     skillMass.forEach(function (item, i, skillMass) {
            //         skillMass[i].addEventListener('click', function () {
            //             selectSkills[i] = document.getElementById('stSkill' + i);
            //             selectSkills[i].innerHTML = "<select id=" + 'stSkills' + i + "></select><button id = " + 'ButtonSkill' + i + ">Save</button>";
            //             httpGet(location.origin + "/skills")
            //                 .then(response => fun2(JSON.parse(response)));
            //
            //             function fun2(extData) {
            //                 for (let gr = 0; gr < extData.length; gr++) {
            //                     let selectOption = new Option(extData[gr]['skill_name']);
            //                     document.getElementById("stSkills" + i).appendChild(selectOption)
            //                 }
            //                 sel[i] = document.getElementById('stSkills' + i);
            //             }
            //
            //             document.getElementById('ButtonSkill' + i).onclick = function () {
            //                 skillId[i] = sel[i].options[sel[i].selectedIndex].index + 1;
            //                 jsonPostEdit(location.origin + "/students/ChangeSkill", urlPart[3], GroupId[i], skillId[i]);
            //                 location.reload();
            //             }
            //         })
            //     });
        }

        //get groups
        //
        var GroupNameMass = [];
        var LearningStatusMass = [];
        var EmploymentStatusMass = [];
        for (i = 0; i < studyInfo.length; i++) {
            GroupNameMass[i] = document.getElementById("GroupNameButton" + i);
            LearningStatusMass[i] = document.getElementById("LearningStatusButton" + i);
            EmploymentStatusMass[i] = document.getElementById("EmploymentStatusButton" + i);
        }

        var sel2 = [];
        var groupList = [];
        GroupNameMass.forEach(function (item, i, GroupNameMass) {
            GroupNameMass[i].addEventListener('click', function () {
                groupList[i] = document.getElementById('stGroupName' + i);
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
                groupList[i].innerHTML = "<select id=" + 'stGroupNameInput' + i + "></select><button class ='btn btn-link  glyphicon glyphicon-floppy-saved' id = " + 'ButtonGroupName' + i + "></button>";
// =======
//                 groupList[i].innerHTML = "<select id=" + 'stGroupNameInput' + i + "></select><button id = " + 'ButtonGroupName' + i + " class ='btn btn-link  glyphicon glyphicon-floppy-saved'></button>";
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
                httpGet(location.origin + "/students/groups")
                    .then(response => fun3(JSON.parse(response)));

                function fun3(extData) {
                    for (let gr = 0; gr < extData.length; gr++) {
                        let selectOption = new Option(extData[gr]['group_name']);
                        document.getElementById('stGroupNameInput' + i).appendChild(selectOption)
                    }
                    sel2[i] = document.getElementById('stGroupNameInput' + i);
                }

                document.getElementById('ButtonGroupName' + i).onclick = function () {
                    sel2[i] = sel2[i].options[sel2[i].selectedIndex].index + 1;
                    jsonPostEdit(location.origin + "/students/ChangeGroup", urlPart[3], sel2[i]);
                    location.reload();
                }
            })
        });

        //get learning_status
        var sel3 = [];
        var learningStatusList = [];
        LearningStatusMass.forEach(function (item, i, LearningStatusMass) {
            LearningStatusMass[i].addEventListener('click', function () {
                learningStatusList[i] = document.getElementById('stLearningStatus' + i);
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
                learningStatusList[i].innerHTML = "<select id=" + 'stLearningStatusNameInput' + i + "></select><button class ='btn btn-link  glyphicon glyphicon-floppy-saved' id = " + 'ButtonLearningStatus' + i + "></button>";
// =======
//                 learningStatusList[i].innerHTML = "<select id=" + 'stLearningStatusNameInput' + i + "></select><button id = " + 'ButtonLearningStatus' + i + " class ='btn btn-link  glyphicon glyphicon-floppy-saved'></button>";
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
                httpGet(location.origin + "/learningStatus")
                    .then(response => fun4(JSON.parse(response)));

                function fun4(extData) {
                    for (let gr = 0; gr < extData.length; gr++) {
                        let selectOption = new Option(extData[gr]['learning_status']);
                        document.getElementById('stLearningStatusNameInput' + i).appendChild(selectOption)
                    }
                    sel3[i] = document.getElementById('stLearningStatusNameInput' + i);
                }

                document.getElementById('ButtonLearningStatus' + i).onclick = function () {
                    sel3[i] = sel3[i].options[sel3[i].selectedIndex].text;
                    jsonPostEdit(location.origin + "/students/ChangeLearningStatus", urlPart[3], sel3[i]);
                    location.reload();
                }
            })
        });
        //get employment_status
        var sel4 = [];
        var employmentStatusList = [];
        EmploymentStatusMass.forEach(function (item, i, LearningStatusMass) {
            EmploymentStatusMass[i].addEventListener('click', function () {
                employmentStatusList[i] = document.getElementById('stEmploymentStatus' + i);
// <<<<<<< HEAD:public/js/viewEdit/viewEditPersonalInformation.js
                employmentStatusList[i].innerHTML = "<select id=" + 'stEmploymentStatusNameInput' + i + "></select><button class ='btn btn-link  glyphicon glyphicon-floppy-saved' id = " + 'ButtonEmploymentStatus' + i + "></button>";
// =======
//                 employmentStatusList[i].innerHTML = "<select id=" + 'stEmploymentStatusNameInput' + i + "></select><button id = " + 'ButtonEmploymentStatus' + i + " class ='btn btn-link  glyphicon glyphicon-floppy-saved'></button>";
// >>>>>>> e01e21b03325ee973aab1aa2e3fef0b387c76aa0:public/js/viewEditPersonalInformation.js
                httpGet(location.origin + "/employmentStatus")
                    .then(response => fun4(JSON.parse(response)));

                function fun4(extData) {
                    for (let gr = 0; gr < extData.length; gr++) {
                        let selectOption = new Option(extData[gr]['employment_status']);
                        document.getElementById('stEmploymentStatusNameInput' + i).appendChild(selectOption)
                    }
                    sel4[i] = document.getElementById('stEmploymentStatusNameInput' + i);
                }

                document.getElementById('ButtonEmploymentStatus' + i).onclick = function () {
                    sel4[i] = sel4[i].options[sel4[i].selectedIndex].text;
                    jsonPostEdit(location.origin + "/students/ChangeEmploymentStatus", urlPart[3], sel4[i]);
                    location.reload();
                }
            })
        });

    }
    jsonPost(location.origin + '/students/getStudyCompanyStacks', urlPart[3])
        .then(response => company_stacks(JSON.parse(response)));
    function company_stacks(stacks) {
        //console.log(stacks);
        for (i = 0; i < stacks.length; i++) {
            let stack = document.createElement('i');
            stack.innerHTML = stacks[i]['stack_name'] + ' ';
            document.getElementById('stack_student').appendChild(stack);
        }
    }

});
