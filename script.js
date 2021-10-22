function compute()
{
    //Create reference to the input element we wish to validate
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    //results for inner HTML for simple interest calculation upon clicking compute button
    //Var wrapped in <mark></mark> tags highlights text in yellow
    document.getElementById("result").innerHTML=`If you deposit <mark>${principal}</mark>,\<br\>at an interest rate of <mark>${rate}%</mark>.\<br\>You will receive an amount of <mark>${principal * years * rate / 100}</mark>,\<br\>in the year <mark>${year}</mark>\<br\>`;
 }



function updateRate() 
{
    //Create reference to the input element for rate percentage on the slider from 1 to 20%
    var rateval = document.getElementById("rate").value;
    //Returns result to the input element for rate percentage
    document.getElementById("rate_val").innerText=rateval;
  
}

      { 
}
