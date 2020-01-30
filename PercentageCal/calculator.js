
var valueX = document.getElementById("valueX");
var valueY = document.getElementById("valueY");
var form = document.getElementById("percentageCal");

    
form.addEventListener('submit', function(event) {
    
    if( !valueX.value || !valueY.value ){
        alert("Please Enter the values")
       }
    
    let x = parseFloat(valueX.value);
    let y = parseFloat(valueY.value);
    
    var result = x/y;
    var percentage = result * 100;
    
    event.preventDefault();
    
    document.getElementById("result").innerHTML = percentage;
})

    