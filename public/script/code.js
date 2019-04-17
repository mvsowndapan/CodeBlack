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
var usertotalMark = 0;
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
        var tc1 = '';
        var prob1Testcase = ["Only Odd Inputs", "-a-b-c-d-e-a-b-c-c-d-e-b-c-d-d-e-a-c-d-e-e-a-b-d-e-a-a-b-c-e-a-b-b-c-d-a-b-c-d-e-", "0"];
            for (var i = 0; i < 3; i++)
                if (result[i] ==  prob1Testcase[i]){
                    tc1+='<div class="card"><div class="card-body"><blockquote class="blockquote mb-0"><p> <i class="fa fa-kiss-wink-heart text-success"></i>&nbsp; Testcase Passed   +3Mark</p></blockquote></div></div> ';
                    usermark1 +=3;
                }
                else{
                    tc1+='<div class="card"><div class="card-body"><blockquote class="blockquote mb-0"><p> <i class="fa fa-grin-beam-sweat text-Danger"></i>&nbsp; Testcase Failed</p></blockquote></div></div> ';
                }
        usertotalMark += usermark1;
        $('#tc-1').html(tc1);
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
        $('#p1').attr('value',usermark1);
        $('#t').attr('value',usertotalMark);
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
        var prob2Testcase = [" ", " 0", " 0 0 1"];
        var tc2='';
        for (var i = 0; i < 3; i++)
        if (result[i] ==  prob2Testcase[i]){
            tc2+='<div class="card"><div class="card-body"><blockquote class="blockquote mb-0"><p> <i class="fa fa-kiss-wink-heart text-success"></i>&nbsp; Testcase Passed   +3Mark</p></blockquote></div></div> ';
            usermark2 +=3;
        }
        else{
            tc2+='<div class="card"><div class="card-body"><blockquote class="blockquote mb-0"><p> <i class="fa fa-grin-beam-sweat text-Danger"></i>&nbsp; Testcase Failed</p></blockquote></div></div> ';
        
        }
        usertotalMark += usermark2;
       $('#tc-2').html(tc2);
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
        $('#p2').attr('value',usermark2);
        $('#t').attr('value',usertotalMark);
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
        var prob3Testcase = ["Valid", "Invalid", "Invalid"];
        var tc3='';
        for (var i = 0; i < 3; i++)
        if (result[i] ==  prob3Testcase[i]){
            tc3+='<div class="card"><div class="card-body"><blockquote class="blockquote mb-0"><p> <i class="fa fa-kiss-wink-heart text-success"></i>&nbsp; Testcase Passed   +3Mark</p></blockquote></div></div> ';
            usermark3 +=3;
        }
        else{
            tc3+='<div class="card"><div class="card-body"><blockquote class="blockquote mb-0"><p> <i class="fa fa-grin-beam-sweat text-Danger"></i>&nbsp; Testcase Failed</p></blockquote></div></div> ';
        }
        usertotalMark += usermark3;
       $('#tc-3').html(tc3);
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
        $('#p3').attr('value',usermark3);
        $('#t').attr('value',usertotalMark);
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
        var prob4Testcase = [" 000 ", " -ab0 ", " abc "];
        var tc4='';
        for (var i = 0; i < 3; i++)
        if (result[i] ==  prob4Testcase[i]){
            tc4+='<div class="card"><div class="card-body"><blockquote class="blockquote mb-0"><p> <i class="fa fa-kiss-wink-heart text-success"></i>&nbsp; Testcase Passed   +3Mark</p></blockquote></div></div> ';
            usermark4 +=3;
        }
        else{
            tc4+='<div class="card"><div class="card-body"><blockquote class="blockquote mb-0"><p> <i class="fa fa-grin-beam-sweat text-Danger"></i>&nbsp; Testcase Failed</p></blockquote></div></div> ';
        }
       usertotalMark += usermark4;
       $('#tc-4').html(tc4);
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
        $('#p4').attr('value',usermark4);
        $('#t').attr('value',usertotalMark);
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
        var prob5Testcase = [" zb ", " Only Alphabets ", " a "];
        var tc5='';
        for (var i = 0; i < 3; i++)
        if (result[i] ==  prob5Testcase[i]){
            tc5+='<div class="card"><div class="card-body"><blockquote class="blockquote mb-0"><p> <i class="fa fa-kiss-wink-heart text-success"></i>&nbsp; Testcase Passed   +3Mark</p></blockquote></div></div> ';
            usermark5 +=3;
        }
        else{
            tc5+='<div class="card"><div class="card-body"><blockquote class="blockquote mb-0"><p> <i class="fa fa-grin-beam-sweat text-Danger"></i>&nbsp; Testcase Failed</p></blockquote></div></div> ';
        }
       usertotalMark += usermark5;
       $('#tc-5').html(tc5);
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
        $('#p5').attr('value',usermark5);
        $('#t').attr('value',usertotalMark);
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