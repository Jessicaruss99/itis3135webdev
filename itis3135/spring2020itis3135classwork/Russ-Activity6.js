//while the input number does not equal -1
while(number!=-1){

    //ask for user input
var number = window.prompt("Enter number grade from 0 to 120  \r\nOr enter -1 to end entries");

if((number != -1 && number<0) || number >120){
    alert("Input not valid");
    exit;
}

// F = <60
// D =60-69
// C = 70-79
// B =80-99
// A = 100-120
//
//
    if(number <60 && number >0){
        alert("Number Grade = " + number + "\r\n Letter Grade = " + replaceGrades(number))
    }

    if(number <70 && number >59){
        alert("Number Grade = " + number + "\r\n Letter Grade = " + replaceGrades(number))
    }

    if(number <80 && number >69){
        alert("Number Grade = " + number + "\r\n Letter Grade = " + replaceGrades(number))
    }
    if(number <100 && number >79){
        alert("Number Grade = " + number + "\r\n Letter Grade = " + replaceGrades(number))
    }
    if(number <121 && number >99){
        alert("Number Grade = " + number + "\r\n Letter Grade = " + replaceGrades(number))
    }




function replaceGrades(number){
    if(number <60 && number >0) {
        return "F"
    }
    if(number <70 && number >59){
        return "D"
    }
    if(number <80 && number >69){
        return "C"
    }
    if(number <100 && number >79){
         return "B"
    }
    if(number <121 && number >99){
        return "A"
    }



}










}