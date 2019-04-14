$(document).ready(()=>{
    $('#submitResponse').hide();
});
var usermark = 0;
$('#run-1').on('click', event => {
    var c = $('#t-1').val();
    var name = $('#u-1').val();
    var pno = $('#p-1').val();
    $.ajax({
        url: '/codeRouter/program',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ code: c, name: name, pno: pno })
    }).done((result) => {
        var pno = $('#p-1').val();
        var prob1Testcase = ["1", "1", "1"];
            for (var i = 0; i < 3; i++)
                if (result[i] ==  prob1Testcase[i]){
                    document.getElementById('p1-t-' + i).innerHTML = "testcase passed";usermark+=3}
                else document.getElementById('p1-t-' + i).innerHTML = "testcase failed";
    });
});
 
$('#submit').on('click', event => {
    var mark = usermark;
    var email = $('#email').val();
    $.ajax({
        url: '/codeRouter/submit',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ mark: mark,email:email})
    }).done((result) => {
        console.log("updated");
        $('#submit').attr('disabled',true);
        $('#submitResponse').show();
    });
});

var timeoutHandle;
function count() {
    var startTime = document.getElementById('hms').innerHTML;
    var pieces = startTime.split(":");
    if (pieces[0] == 0 && pieces[1] == 0 && pieces[2] == 0) {
        window.location.replace("/dashBoardRouter/dailychallenge");
    }
    var time = new Date(); time.setHours(pieces[0]);
    time.setMinutes(pieces[1]);
    time.setSeconds(pieces[2]);
    var timedif = new Date(time.valueOf() - 1000);
    var newtime = timedif.toTimeString().split(" ")[0];
    document.getElementById('hms').innerHTML = newtime;
    var t = newtime.split(":");
    document.getElementById('hr').innerHTML = t[0];
    document.getElementById('min').innerHTML = t[1];
    document.getElementById('sec').innerHTML = t[2];
    timeoutHandle = setTimeout(count, 1000);
}
count();