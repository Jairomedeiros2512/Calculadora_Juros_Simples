var principal = document.getElementById("principal").value;
alert(principal);
var rate = document.getElementById("rate").value;
var rateout = document.getElementById("rateoutput").value;
var years = document.getElementById("years").value;
var interest = (principal * years * rate) /100;
var actualyear = (new Date().getFullYear()) + years;
var spanresult = document.getElementById("result");
function sliderfun(rateval){
    rate = rateval;
    rateout = rate;
    document.getElementById("rateoutput").innerText = rateout;
    

}
function compute()
{
    principal = document.getElementById("principal").value;
    if (principal <= 0){
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
    }else{
    rate = document.getElementById("rateoutput").innerText;
    years = document.getElementById("years").value;
    interest = (Number(principal) * Number(years) * Number(rate)) /100;
    actualyear = (new Date().getFullYear()) + Number(years);
    spanresult = document.getElementById("result");
    var text = 'Se você Depositar............... '+principal+',\n'+
               'Temos uma Taxa de Juros de...... '+rate+'%.\n'+
               'Recebera o Valor de............. '+interest+',\n'+
               'No Ano de....................... '+actualyear.toString()
    spanresult.innerText = text
    }
    
}
