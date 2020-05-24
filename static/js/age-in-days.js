// AGE IN DAYS
function clickMe() {
    var birthYear = prompt("what is your age budd??");
    var ageInDays = (2020 - birthYear) * 365;

    var h1 = document.createElement("h1");
    var answerText = document.createTextNode("You are " + ageInDays + " days old.");

    h1.appendChild(answerText);
    h1.setAttribute("id", "ageInDays");

    document.getElementById("flex-box-index").appendChild(h1);
}


function reset() {
    document.getElementById("ageInDays").remove();
}
