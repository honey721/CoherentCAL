
// $('.card-body').dblclick(function(){
//     console.log(this, " : element ")
//  }); 


function myfunction(id) {
    x = confirm("DELETE this element!");
    
    if (x === false) {
        return ;
    }
    else {
        c = 0;
        Events = JSON.parse(localStorage.getItem("event_name"));
        Dates = JSON.parse(localStorage.getItem("event_date"));

        ar_event = []
        ar_date = []
        for (i in Events) {
            if (i === id) {

            }
            else {
                c += 1;
                ar_event.push(Events[i]);
                ar_date.push(Dates[i]);
            }

        }

        localStorage.setItem("event_name", JSON.stringify(ar_event));
        localStorage.setItem("event_date", JSON.stringify(ar_date));
        func();
    }

}

$('#sub2').click(function () {
    localStorage.clear();
    $('#cardId').html(`<div class="alert alert-danger" role="alert">
    No Event is there — Just Add your important Events and Create memory!
</div>`);
localStorage.setItem('event_name','[]');
localStorage.setItem('event_date','[]');

})


function func() {

    console.log("clicked!")
    Events = localStorage.getItem('event_name');
    Eventsdate = localStorage.getItem('event_date');
    console.log("hello")

    if (Events == '[]' && Eventsdate == '[]') {
        $('#cardId').html(`<div class="alert alert-danger" role="alert">
        No Event is there — Just Add your important Events and Create memory!
    </div>`);
    }

    if (Events != '[]' && Eventsdate != '[]') {
        Arr_event = JSON.parse(Events);
        Arr_date = JSON.parse(Eventsdate);

        console.log('Arr_event');

        html = '';

        for (i in Arr_event) {
            html += `<div  onclick="myfunction(this.id)" id="${i}" class="col-6 card-body alert alert-secondary" role="alert">
        <div class="">
    <h5 class="card-title">${Arr_event[i]}</h5>
    <a href="#" class="btn btn-primary">${Arr_date[i]}</a>
    </div>
</div>`
        }
        
       
            $('#cardId').html(html);
       
        
    }
  
}




