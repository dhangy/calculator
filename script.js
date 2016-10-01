console.log("1???");

$(document).ready(function(){

    console.log("2???");
    var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };

    var number = "";
    var newNumber = "";
    var operator = "";
    var totaldiv = $("#total");
    $(totaldiv).text("0");

      $("#numbers a").not("#clear,#clearall").click(function(){
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
        console.log(number);

    });

    $("#operators a").not("#equals").click(function(){

        operator = $(this).text();
        totaldiv.text(operator);
        newNumber = number;
        number = "";
        /*totaldiv.text("0");*/

    });

    $("#clear, #clearall").click(function(){
        number = "";
        totaldiv.text("0");
        if ($(this).attr("#id") === "clearall") {
            newNumber = "";
        }

    });
    $("#equals").click(function(){
        if (operator === "+"){
        number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
    }
        else if (operator === '-') {
            number = (parseInt(newNumber,10)) - (parseInt(number,10)).toString(10);
        }
        else if (operator === '/') {
            number = (parseInt(newNumber, 10)) / (parseInt(number, 10)).toString(10);
        }
        else if (operator === '*') {
            number = (parseInt(newNumber, 10)) * (parseInt(number,10)).toString(10);
        }

        totaldiv.text(number);
        testNumLength(number);
        number = "";
        newNumber = "";
    })
});
