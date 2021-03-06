

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var globaldata;

        var smsemp = document.getElementById('smsemp');
        var emailemp = document.getElementById('emailemp');

        let direction_it = document.getElementById("direction_it");
        let position_it = document.getElementById("position_it");
        let chkbox = document.getElementById("chkbox");
        let skill_name_employees = document.getElementById("skill_name_employees");
        let outDataASPT;
        // let directionemployment = document.getElementById("direction_it");

        var employeetable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

        httpGet(location.origin + "/direction")
            .then(response => funcSelectDirection(JSON.parse(response)));

        function funcSelectDirection(extData) {
            for (let i = 0; i < extData.length; i++) {
//      elem = new Option(extData[i]['direction'], extData[i]['id']);
                elem = new Option(extData[i]['direction'], extData[i]['direction']);
                direction_it.appendChild(elem)
            }
        }

        httpGet(location.origin + "/position")
            .then(response => funcSelectPosition(JSON.parse(response)));

        function funcSelectPosition(extData) {
            for (let i = 0; i < extData.length; i++) {
                elem = new Option(extData[i]['position'], extData[i]['position']);
                position_it.appendChild(elem)
            }
        }

        httpGet(location.origin + "/skills")
            .then(response => funcSelectSkill(JSON.parse(response)));

        function funcSelectSkill(extData) {
            for (let i = 0; i < extData.length; i++) {
                elem = new Option(extData[i]['skill_name'], extData[i]['id']);
                skill_name_employees.appendChild(elem)
            }
        }


        function studget(studdata) {
            // CLEAR TABLE BY DELETE ROWS
            globaldata = studdata;
            console.log(studdata)
            for (let i = document.getElementById('employeeTable').getElementsByTagName('tr').length - 1; i; i--) {
                document.getElementById('employeeTable').deleteRow(i);
            }
            var rowTable = 0;
            for (var gr in studdata) {
                var row = employeetable.insertRow(rowTable);
                if (studdata[gr]['ASPT'] === 1) {
                    outDataASPT = 'Yes'
                } else outDataASPT = 'No';
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                let aaa;
                if (!studdata[gr]['comment']) {aaa = ''} else {aaa = studdata[gr]['comment']}
                cell1.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + studdata[gr]['name'] + '</a>';
                cell2.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + studdata[gr]['position'] + '</a>';
                cell3.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + studdata[gr]['direction'] + '</a>';
                cell4.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + studdata[gr]['company_name'] + '</a>';
                cell5.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + outDataASPT + '</a>';
                cell6.innerHTML = '<a href="employees/show/' + studdata[gr]['person_id'] + '">' + aaa + '</a>';
                rowTable++;
            }
        }

        function allEmployeesShow() {
            jsonPost(location.origin + "/employees/data", 5)
                .then(response => studget(JSON.parse(response)))
                .then(studget(studdata))
        }

        allEmployeesShow();

        resetEmloyees.onclick = function(){
            allEmployeesShow();
        }

        direction_it.onchange = function () {
            let sel = direction_it.selectedIndex;
            let options = direction_it.options;
            // alert('Выбрана опция ' + options[sel].text + ' ' + options[sel].value);
            for (let key in globaldata) {
                if (options[sel].value !== globaldata[key]['direction']) {
                    delete globaldata[key];
                }
            }
            studget(globaldata);
        }

        position_it.onchange = function () {
            let sel = position_it.selectedIndex;
            let options = position_it.options;
            var dat;
            self = this;
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: "POST",
                url: location.origin + "/employees/data",
                data: JSON.stringify([1,4,7]),
                contentType: "application/json",
                dataType: "json",
                success: function(dat){
                    self.dat = dat;

                    for (let key in dat) {
                        if (options[sel].value !== dat[key]['position']) {
                            delete dat[key];
                        }
                    }
                    studget(dat);
                    },
                failure: function(errMsg) {
                    //
                }
            })
        }

        chkbox.onchange = function () {
            let chkboxValue = chkbox.checked ? 1 : 0;
            var dat;
            self = this;
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: "POST",
                url: location.origin + "/employees/data",
                data: JSON.stringify([1,4,7]),
                contentType: "application/json",
                dataType: "json",
                success: function(dat){
                    self.dat = dat;

                    for (let key in dat) {
                        if (chkboxValue !== dat[key]['ASPT']) {
                            delete dat[key];
                        }
                    }
                    studget(dat);

                },
                failure: function(errMsg) {
                    //
                }
            })
        }


        smsemp.onclick = function (){
            let mytext = document.getElementById('msgfield').value;
            let arr = [];
            for (var pole in globaldata) {
                arr.push(globaldata[pole]['person_id'])
            }
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: "POST",
                url: location.origin + "/sms/get",
                // The key needs to match your method's input parameter (case-sensitive).
                data: JSON.stringify([arr, mytext]),
                contentType: "application/json",
                dataType: "json",
                success: function(data){
//                    console.log(data);
                },
                failure: function(errMsg){
//                    console.log(mytext)
                }
            });
        }

        emailemp.onclick = function (){
            let mytext = document.getElementById('msgfield').value;
            let arr = [];
            for (var pole in globaldata) {
                arr.push(globaldata[pole]['person_id'])
            }
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: "POST",
                url: location.origin + "/email/get",
                // The key needs to match your method's input parameter (case-sensitive).
                data: JSON.stringify([arr, mytext]),
                contentType: "application/json",
                dataType: "json",
                success: function(data){
                    //
                },
                failure: function(errMsg){
                    //
                }
            });
        }









    }
}
