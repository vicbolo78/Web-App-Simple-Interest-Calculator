function checkData() {
    //create reference to the input element we wish to validate
    var amount = document.getElementById("principal").value;


    //Check if the user enters zero or negative values
    if (document.getElementById("principal").value <=0)
        alert("Enter positive number");
        principal.focus();

}
