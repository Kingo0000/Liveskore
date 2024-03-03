
$(document).ready(function() {
    alert("Under Maintenance..")
})



const lineup = document.getElementById("lineups");
const happening = document.getElementById("happenings");
const stats = document.getElementById("statistics");
const events = document.getElementById("event")
const lines = document.getElementById("line")
const stat = document.getElementById("statistic")
lineup.addEventListener("click", myLine)
happening.addEventListener("click", myHappen)
stats.addEventListener("click", myStat)
function myLine(){
    lineup.classList.add("active");
    happening.classList.remove("active");
    stats.classList.remove("active");
    events.style.display = "none";
    lines.style.display = "block";
    stat.style.display = "none"
}

function myHappen(){
    lineup.classList.remove("active");
    happening.classList.add("active");
    stats.classList.remove("active");
    events.style.display = "block"
    lines.style.display = "none"
    stat.style.display = "none"
}

function myStat(){
    lineup.classList.remove("active");
    happening.classList.remove("active");
    stats.classList.add("active");
    lines.style.display = "none"
    events.style.display = "none"
    stat.style.display = "block"
}