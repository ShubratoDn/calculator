var myString = "";
var display = document.getElementById("display");
var buttons = document.querySelectorAll(".btn");
buttons.forEach((button)=>{
    //getting their inner text after click on it
    button.addEventListener('click', (event)=>{
        var eleText = event.target.innerHTML;
        switch(eleText){
            case '=':
                myString = eval(myString);
                display.value = myString;
                break;

            case 'AC':
                myString ="";
                display.value = myString;
                break;

            case 'X':
                myString += eleText;
                myString = myString.slice(0,-2);                
                display.value = myString;

            default:
                myString += eleText; // assigning their value into myString variable
                display.value = myString;
                
        }
        
        console.log(myString);
    })
});


