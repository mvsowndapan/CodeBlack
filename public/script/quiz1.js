
var timeoutHandle;
function count() {

var startTime = document.getElementById('hms').innerHTML;
var pieces = startTime.split(":");
var time = new Date();    time.setHours(pieces[0]);
time.setMinutes(pieces[1]);
time.setSeconds(pieces[2]);
var timedif = new Date(time.valueOf() - 1000);
var newtime = timedif.toTimeString().split(" ")[0];
document.getElementById('hms').innerHTML=newtime;
var t = newtime.split(":");
document.getElementById('hr').innerHTML=t[0];
document.getElementById('min').innerHTML=t[1];
document.getElementById('sec').innerHTML=t[2];
timeoutHandle=setTimeout(count, 1000);
}
count();

/*--------loader script-----------*/
$(function(){
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
     
    var questionNo = 0;
    var correctCount = 0;
    var q = [
        {'Q':'Action movie Terminator used samples of Cobol source code for text shown in the ....', 'A':3,'C':['Vision automatic Display','Code Generator','None of these']},
        {'Q':'Actually the name of the this site also indicates a Medical drama based on the documentation of ...', 'A':2,'C':['Albert Richie','Ryan McGarry','James Geidian']},
        {'Q':'Solve (x+4)(x-4) = 9 Hint:Algebric method', 'A':1,'C':['x = 5 and x=-5','x=3','x = -4 and x = -4']},
        {'Q':'Microcode in particular processor implementation is sometimes called a ....', 'A':3,'C':['Micro','MicroCode','microprogram']},
        {'Q':' What are the valid places for the keyword break to appear...', 'A':3,'C':[' looping control','switch statement','None of these']},
        {'Q':'What is a dangling pointer? ..........', 'A':1,'C':['initially holding valid address','Finally holding valid address','Handling address anywhere']},
        {'Q':'What is a self-referential structure?', 'A':2,'C':['structure containing the same structure pointer variable as its pointer','structure containing the same structure pointer variable as its element','structure containing the same structure pointer variable as its index']},
        {'Q':'Describe the file opening mode “w+”.', 'A':3,'C':['Writing for all types. ','Reading for all types','both for reading and writing. ']},
        {'Q':' What is reminder for 5.0 % 2?', 'A':1,'C':['Error','1','1.0']},
        {'Q':'Can the main() function left empty?', 'A':3,'C':['Error','No','None of these']}
    ];

 
    $(document.body).on('click',"label.element-animation",function (e) {
    //ripple start
        var parent, ink, d, x, y;    	
         parent = $(this);
        if(parent.find(".ink").length == 0)
            parent.prepend("<span class='ink'></span>");
            
        ink = parent.find(".ink");
        ink.removeClass("animate");
        
        if(!ink.height() && !ink.width())
        {
            d = Math.max(parent.outerWidth(), parent.outerHeight());
            ink.css({height: "100px", width: "100px"});
        }
        
         x = e.pageX - parent.offset().left - ink.width()/2;
        y = e.pageY - parent.offset().top - ink.height()/2;
        
        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    //ripple end

        var choice = $(this).parent().find('input:radio').val();
        console.log(choice);
    	var anscheck =  $(this).checking(questionNo, choice);//$( "#answer" ).html(  );      
        q[questionNo].UC = choice;
        if(anscheck){
            correctCount++;
            q[questionNo].result = "Correct";
        } else {
            q[questionNo].result = "Incorrect";        
        }
        console.log("CorrectCount:" + correctCount);
        setTimeout(function(){
            $('#loadbar').show();
            $('#quiz').fadeOut();
            questionNo++;
            if((questionNo + 1) > q.length){
                alert("Quiz completed, Now click ok to get your answer");
                $('label.element-animation').unbind('click');
                setTimeout(function(){
                    var toAppend = '';
                    $.each(q, function(i, a){
                        toAppend += '<tr>'
                        toAppend += '<td>'+(i+1)+'</td>';
                        toAppend += '<td>'+a.A+'</td>';
                        toAppend += '<td>'+a.UC+'</td>';
                        toAppend += '<td>'+a.result+'</td>';
                        toAppend += '</tr>'
                    });
                    $('#quizResult').html(toAppend);
                    $('#totalCorrect').html("Total correct: " + correctCount);
                    $('#mark').val(correctCount);
                    $('#quizResult').show();
                    $('#loadbar').fadeOut();
                    $('#result-of-question').show();
                    $('#graph-result').show();
                    chartMake();
                }, 1000);
            } else {
                $('#qid').html(questionNo + 1);
                $('input:radio').prop('checked', false);
                setTimeout(function(){
                    $('#quiz').show();
                    $('#loadbar').fadeOut();
                }, 1500);
                $('#question').html(q[questionNo].Q);
                $($('#f-option').parent().find('label')).html(q[questionNo].C[0]);
                $($('#s-option').parent().find('label')).html(q[questionNo].C[1]);
                $($('#t-option').parent().find('label')).html(q[questionNo].C[2]);
            }
        }, 1000);
    });

    
    $.fn.checking = function(qstn, ck) {
        var ans = q[questionNo].A;
        if (ck != ans)
            return false;
        else 
            return true;
    }; 

// chartMake();
    function chartMake(){

         var chart = AmCharts.makeChart("chartdiv",
            {
            "type": "serial",
            "theme": "dark",
            "dataProvider": [{
                "name": "Correct",
                "points": correctCount,
                "color": "#00FF00",
                "bullet": "http://i2.wp.com/img2.wikia.nocookie.net/__cb20131006005440/strategy-empires/images/8/8e/Check_mark_green.png?w=250"
            }, {
                "name": "Incorrect",
                "points":q.length-correctCount,
                "color": "red",
                "bullet": "http://4vector.com/i/free-vector-x-wrong-cross-no-clip-art_103115_X_Wrong_Cross_No_clip_art_medium.png"
            }],
            "valueAxes": [{
                "maximum": q.length,
                "minimum": 0,
                "axisAlpha": 0,
                "dashLength": 4,
                "position": "left"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
                "bulletOffset": 10,
                "bulletSize": 52,
                "colorField": "color",
                "cornerRadiusTop": 8,
                "customBulletField": "bullet",
                "fillAlphas": 0.8,
                "lineAlpha": 0,
                "type": "column",
                "valueField": "points"
            }],
            "marginTop": 0,
            "marginRight": 0,
            "marginLeft": 0,
            "marginBottom": 0,
            "autoMargins": false,
            "categoryField": "name",
            "categoryAxis": {
                "axisAlpha": 0,
                "gridAlpha": 0,
                "inside": true,
                "tickLength": 0
            }
        });
    }
});	

