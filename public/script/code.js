$(document).ready(()=>{
    $('#submitResponse-1').hide();
    $('#submitResponse-2').hide();
    $('#submitResponse-3').hide();
    $('#submitResponse-4').hide();
    $('#submitResponse-5').hide();
});
var usermark1 = 0;
var usermark2 = 0;
var usermark3 = 0;
var usermark4 = 0;
var usermark5 = 0;
// first one

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
                if (result[i] ==  prob1Testcase[i])
                    {document.getElementById('p1-t-' + i).innerHTML = "testcase passed";usermark1+=3;}
                else document.getElementById('p1-t-' + i).innerHTML = "testcase failed";
    });
});
 
$('#submit-1').on('click', event => {
    var mark = usermark1;
    var email = $('#email').val();
    $.ajax({
        url: '/codeRouter/submit',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ mark: mark,email:email})
    }).done((result) => {
        console.log("updated");
        $('#submit-1').attr('disabled',true);
        $('#submitResponse-1').show();
    });
});
// 
// second code
$('#run-2').on('click', event => {
    var c = $('#t-2').val();
    var name = $('#u-2').val();
    var pno = $('#p-2').val();
    console.log("reaching");
    $.ajax({
        url: '/codeRouter/program',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ code: c, name: name, pno: pno })
    }).done((result) => {
        var pno = $('#p-2').val();
        var prob2Testcase = ["2", "2", "2"];
        console.log("reaching");
            for (var i = 0; i < 3; i++)
                if (result[i] == prob2Testcase[i])
                   {document.getElementById('p2-t-' + i).innerHTML = "testcase passed";usermark2+=3;}
                else document.getElementById('p2-t-' + i).innerHTML = "testcase failed";

    });
});
$('#submit-2').on('click', event => {
    var mark = usermark2;
    var email = $('#email').val();
    $.ajax({
        url: '/codeRouter/submit',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ mark: mark,email:email})
    }).done((result) => {
        console.log("updated");
        $('#submit-2').attr('disabled',true);
        $('#submitResponse-2').show();
    });
});
// 
// third
$('#run-3').on('click', event => {
    var c = $('#t-3').val();
    var name = $('#u-3').val();
    var pno = $('#p-3').val();
    console.log("reaching");
    $.ajax({
        url: '/codeRouter/program',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ code: c, name: name, pno: pno })
    }).done((result) => {
        var pno = $('#p-3').val();
        var prob2Testcase = ["3", "3", "3"];
        console.log("reaching");
            for (var i = 0; i < 3; i++)
                if (result[i] == prob2Testcase[i])
                    {document.getElementById('p3-t-' + i).innerHTML = "testcase passed";usermark3+=3;}
                else document.getElementById('p3-t-' + i).innerHTML = "testcase failed";

    });
});
$('#submit-3').on('click', event => {
    var mark = usermark3;
    var email = $('#email').val();
    $.ajax({
        url: '/codeRouter/submit',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ mark: mark,email:email})
    }).done((result) => {
        console.log("updated");
        $('#submit-3').attr('disabled',true);
        $('#submitResponse-3').show();
    });
});
// fourth
$('#run-4').on('click', event => {
    var c = $('#t-4').val();
    var name = $('#u-4').val();
    var pno = $('#p-4').val();
    console.log("reaching");
    $.ajax({
        url: '/codeRouter/program',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ code: c, name: name, pno: pno })
    }).done((result) => {
        var pno = $('#p-4').val();
        var prob2Testcase = ["4", "4", "4"];
        console.log("reaching");
            for (var i = 0; i < 3; i++)
                if (result[i] == prob2Testcase[i])
                    {document.getElementById('p4-t-' + i).innerHTML = "testcase passed";usermark4+=3;}
                else document.getElementById('p4-t-' + i).innerHTML = "testcase failed";

    });
}); 
$('#submit-4').on('click', event => {
    var mark = usermark4;
    var email = $('#email').val();
    $.ajax({
        url: '/codeRouter/submit',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ mark: mark,email:email})
    }).done((result) => {
        console.log("updated");
        $('#submit-4').attr('disabled',true);
        $('#submitResponse-4').show();
    });
});
// 
// five
$('#run-5').on('click', event => {
    var c = $('#t-5').val();
    var name = $('#u-5').val();
    var pno = $('#p-5').val();
    console.log("reaching");
    $.ajax({
        url: '/codeRouter/program',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ code: c, name: name, pno: pno })
    }).done((result) => {
        var pno = $('#p-5').val();
        var prob2Testcase = ["5", "5", "5"];
        console.log("reaching");
            for (var i = 0; i < 3; i++)
                if (result[i] == prob2Testcase[i])
                    {document.getElementById('p5-t-' + i).innerHTML = "testcase passed";usermark5+=3;}
                else document.getElementById('p5-t-' + i).innerHTML = "testcase failed";

    });
});
$('#submit-5').on('click', event => {
    var mark = usermark5;
    var email = $('#email').val();
    $.ajax({
        url: '/codeRouter/submit',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ mark: mark,email:email})
    }).done((result) => {
        console.log("updated");
        $('#submit-5').attr('disabled',true);
        $('#submitResponse-5').show();
    });
});
// 

var timeoutHandle;
function count() {
    var startTime = document.getElementById('hms').innerHTML;
    var pieces = startTime.split(":");
    if (pieces[0] == 0 && pieces[1] == 0 && pieces[2] == 0) {
        window.location.replace("/needRouter/dailychallenge");
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