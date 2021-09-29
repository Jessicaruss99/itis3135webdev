var name;
var feeling;

function questions() {
    setName(prompt("Please enter your name", "Jessica"))
    setFeeling(prompt("How are you feeling?", "so so"))

    document.getElementById('date').innerHTML = 'Today is: ' + getTodaysDate() + ', and the time is: ' + getCurrentTime();
    document.getElementById('welcome').innerHTML = 'Jolly Reindeer Designs welcomes you, ' + getName() + '!\n' + 
        "You've reported that you're feeling " + getFeeling() + '.'; 
}

function setName(name){ 
    this.name = name;
}

function setFeeling(feeling) {
    this.feeling = feeling;
}

function getName() {
    return name;
}

function getFeeling() {
    return feeling;
}

function getTodaysDate() {
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
}

function getCurrentTime() {
    let date = new Date();
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.getHours() % 12 + ':' + mins + ' ' + ampm;
}



function changeFeeling(){
    setFeeling(prompt('We hope you are feeling better! Please enter a new feeling here', "great"));
    document.getElementById('welcome').innerHTML = 'Jolly Reindeer Designs welcomes you, ' + getName() + '!\n' + 
    "You've reported that you're feeling " + getFeeling() + '.'; 

}
today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;

function daysUntilChristmas(){


document.getElementById("daysUntilChristmas").innerHTML = (Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");
}

function hoursUntilChristmas(){
    var one_hour=1000*60*60;
    document.getElementById("hoursUntilChristmas").innerHTML = (Math.ceil((cmas.getTime()-today.getTime())/(one_hour))+
" hours left until Christmas!")

}

function weeksUntilChristmas(){
    
    document.getElementById("weeksUntilChristmas").innerHTML = (Math.ceil((cmas.getTime()-today.getTime())/(one_day)/7)+
" weeks left until Christmas!")

}

function monthsUntilChristmas(){
    
    document.getElementById("monthsUntilChristmas").innerHTML = (Math.ceil((cmas.getTime()-today.getTime())/(one_day)/7/4)+
" months left until Christmas!")

}





