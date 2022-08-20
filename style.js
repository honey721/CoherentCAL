

var current_year, m, Selected_date, total_days;

pre = 0;
nxt = 0;
flag = 1
ar = ['', 'January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December'];




$('#sub2').click(function (e) {
    if ($('#event').val() == '') {
        alert("Enter the Event Name!")
    }
    else if ($('#inp4').val() == '') {
        alert("Enter a particular date !")
    }
    else {
        if ($('#inp4').val() <= total_days && $('#inp4').val() > 0) {

            x = $('#inp4').val();
            event_date = x + '-' + m + '-' + current_year;
            event_name = $('#event').val();

            Events = localStorage.getItem('event_name');
            Eventsdate = localStorage.getItem('event_date');


            if (Events == null && Eventsdate == null) {
                Arr_event = [];
                Arr_date = [];
            }

            else if (Events != null && Eventsdate != null) {
                Arr_event = JSON.parse(Events);
                Arr_date = JSON.parse(Eventsdate);
            }


            Arr_event.push(event_name);
            localStorage.setItem('event_name', JSON.stringify(Arr_event));


            Arr_date.push(event_date);
            localStorage.setItem('event_date', JSON.stringify(Arr_date));

            console.log(Arr_event);
            console.log(Arr_date);

            console.log(localStorage.getItem(event_name));
            $('#inp4').val('');
            $('#event').val('');
        }
        else {
            alert("Please enter a valid date!")
        }
    }
})



if (flag === 1) {
    flag = 0;
    active_month();
}
function active_month() {
    date = new Date();
    date.setDate(1);
    D = date.getDay();
    console.log(date.getDay());
    m = date.getMonth();
    pre = m;
    nxt = m;
    current_year = date.getFullYear();
    $('#inp3').val(current_year);

    total_days = new Date(current_year, m, 0).getDate();
    console.log(total_days)
    //
    j = 0
    c = 0
    x = 0
    bodyin = ``
    body = `<tr>
    <th>Sunday</th>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
</tr>
`
    //arr=[`<tr><td>${c}</td>`,`<td>${c}</td>`,`<td>${c}</td>`,`<td>${c}</td>`,`<td>${c}</td>`,`<td>${c}</td>`,`<td>${c}</td></tr>`]
    j = 0
    f = 0
    while (x < 6) {
        i = 0

        bodyin = ``
        while (i < 7) {
            if (j === D && f != 1) {
                c += 1;

            }
            else {
                c = 0;
                j += 1;
            }
            if (c > total_days) {
                if (i === 7) {
                    break;
                }
                else {
                    c = 0
                    f = 1
                }

            }

            if (i === 0) {
                if (c === 0) {
                    bodyin += `<tr><td></td>`;
                }
                else {
                    bodyin += `<tr><td>${c}</td>`;
                }

            }
            else if (i === 6) {
                if (c === 0) {
                    bodyin += `<td></td></tr>`;
                }
                else {
                    bodyin += `<td>${c}</td></tr>`;
                }

            }
            else {
                if (c === 0) {
                    bodyin += `<td></td>`
                }
                else {
                    bodyin += `<td>${c}</td>`
                }

            }

            i += 1
        }

        body += bodyin;
        x += 1
    }
    $("#Caltab").html(body);
    //e.preventDefault();
}


$('form').submit(function (e) {

    Inp_Month1 = $('#inp1').val();
    Inp_Month2 = $('#inp2').val();
    current_year = $('#inp3').val();
    //console.log(Inp_Month1)
    str_Date = current_year + '-' + Inp_Month1 + '-01';
    date = new Date(str_Date);
    D = date.getDay();
    pre = parseInt(Inp_Month1);
    m = parseInt(Inp_Month1);
    console.log(m);
    nxt = parseInt(Inp_Month2);

    total_days = new Date(current_year, Inp_Month1, 0).getDate();
    console.log(total_days)
    //
    j = 0
    c = 0
    x = 0
    bodyin = ``
    body = `<tr>
    <th>Sunday</th>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
</tr>
`
    //arr=[`<tr><td>${c}</td>`,`<td>${c}</td>`,`<td>${c}</td>`,`<td>${c}</td>`,`<td>${c}</td>`,`<td>${c}</td>`,`<td>${c}</td></tr>`]
    j = 0
    f = 0
    while (x < 6) {
        i = 0

        bodyin = ``
        while (i < 7) {
            if (j === D && f != 1) {
                c += 1;

            }
            else {
                c = 0;
                j += 1;
            }
            if (c > total_days) {
                if (i === 7) {
                    break;
                }
                else {
                    c = 0
                    f = 1
                }

            }

            if (i === 0) {
                if (c === 0) {
                    bodyin += `<tr><td></td>`;
                }
                else {
                    bodyin += `<tr><td>${c}</td>`;
                }

            }
            else if (i === 6) {
                if (c === 0) {
                    bodyin += `<td></td></tr>`;
                }
                else {
                    bodyin += `<td>${c}</td></tr>`;
                }

            }
            else {
                if (c === 0) {
                    bodyin += `<td></td>`
                }
                else {
                    bodyin += `<td>${c}</td>`
                }

            }

            i += 1
        }

        body += bodyin;
        x += 1
    }

    $("#Caltab").html(body);
    e.preventDefault();
    i = 1
    while (i <= m) {
        if (i == m) {
            $('#title').text(ar[i]);
        }
        i += 1;
    }
    $('#inp1').val('')
    $('#inp2').val('');
    $('#inp3').val('');

})

$('#prev').click(function (e) {
    console.log(m);
    if (pre < m) {
        m = m - 1
        //console.log(Inp_Month1)
        str_Date = current_year + '-' + m + '-01';
        date = new Date(str_Date);
        D = date.getDay();
        total_days = new Date(current_year, m, 0).getDate();
        console.log(total_days)
        //
        j = 0
        c =
            x = 0
        bodyin = ``
        body = `<tr>
    <th>Sunday</th>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
</tr>
`
        j = 0
        f = 0
        while (x < 6) {
            i = 0

            bodyin = ``
            while (i < 7) {
                if (j === D && f != 1) {
                    c += 1;

                }
                else {
                    c = 0;
                    j += 1;
                }
                if (c > total_days) {
                    if (i === 7) {
                        break;
                    }
                    else {
                        c = 0
                        f = 1
                    }

                }

                if (i === 0) {
                    if (c === 0) {
                        bodyin += `<tr><td></td>`;
                    }
                    else {
                        bodyin += `<tr><td>${c}</td>`;
                    }

                }
                else if (i === 6) {
                    if (c === 0) {
                        bodyin += `<td></td></tr>`;
                    }
                    else {
                        bodyin += `<td>${c}</td></tr>`;
                    }

                }
                else {
                    if (c === 0) {
                        bodyin += `<td></td>`
                    }
                    else {
                        bodyin += `<td>${c}</td>`
                    }

                }

                i += 1
            }

            body += bodyin;
            x += 1
        }

        $("#Caltab").html(body);
        i = 1
        while (i <= m) {
            if (i == m) {
                $('#title').text(ar[i]);
            }
            i += 1;
        }
        
    }
    else {
        alert("Sorry! you are exceeding the lower limit")
    }
    e.preventDefault();
})

$('#next').click(function (e) {
    console.log(m);
    if (m < nxt) {
        m = m + 1
        //console.log(Inp_Month1)
        str_Date = current_year + '-' + m + '-01';
        date = new Date(str_Date);
        D = date.getDay();
        total_days = new Date(current_year, m, 0).getDate();
        console.log(total_days)
        //
        j = 0
        c =
            x = 0
        bodyin = ``
        body = `<tr>
    <th>Sunday</th>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
</tr>
`
        j = 0
        f = 0
        while (x < 6) {
            i = 0

            bodyin = ``
            while (i < 7) {
                if (j === D && f != 1) {
                    c += 1;

                }
                else {
                    c = 0;
                    j += 1;
                }
                if (c > total_days) {
                    if (i === 7) {
                        break;
                    }
                    else {
                        c = 0
                        f = 1
                    }

                }

                if (i === 0) {
                    if (c === 0) {
                        bodyin += `<tr><td></td>`;
                    }
                    else {
                        bodyin += `<tr><td>${c}</td>`;
                    }

                }
                else if (i === 6) {
                    if (c === 0) {
                        bodyin += `<td></td></tr>`;
                    }
                    else {
                        bodyin += `<td>${c}</td></tr>`;
                    }

                }
                else {
                    if (c === 0) {
                        bodyin += `<td></td>`
                    }
                    else {
                        bodyin += `<td>${c}</td>`
                    }

                }

                i += 1
            }

            body += bodyin;
            x += 1
        }

        $("#Caltab").html(body);
        i = 1
        while (i <= m) {
            if (i == m) {
                $('#title').text(ar[i]);
            }
            i += 1;
        }
    }
    else {
        alert("Sorry! you are Exceeding the Upper Limit")
    }

    e.preventDefault();

})