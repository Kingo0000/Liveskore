
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const nav_icon = document.querySelector('.nav_icon')
const sideNav = document.querySelector('.side_navigation')
const icon = document.querySelector('#icon')

var isClicked = true
nav_icon.addEventListener('click', revealIn)
function revealIn(){
    if (isClicked){
        sideNav.style.visibility = 'visible'
        sideNav.style.transition = 'opacity 150ms ease-in-out'
        icon.classList.replace('fa-navicon', 'fa-close')
        isClicked = false
    }else{
        sideNav.style.visibility = 'hidden'
        icon.classList.replace('fa-close', 'fa-navicon')
        isClicked = true
    }
}

const fixture = document.getElementById("fixtures");
const stand = document.getElementById("standings");
const score = document.getElementById("scorers");
const content = document.getElementById("content");
const scont = document.getElementById("scontent");
const tcont = document.getElementById("tcontent");
fixture.addEventListener("click", myFixtures);
stand.addEventListener("click", myStandings);
score.addEventListener("click", myScorers);
function myFixtures(){
    fixture.classList.add("active");
    stand.classList.remove("active");
    score.classList.remove("active");
    content.style.display = "block";
    scont.style.display = "none";
    tcont.style.display = "none";
}
function myStandings(){
    fixture.classList.remove("active");
    fixture.classList.remove("dmactive");
    stand.classList.add("active");
    score.classList.remove("active");
    content.style.display = "none";
    scont.style.display = "block";
    tcont.style.display = "none";
}
function myScorers(){
    fixture.classList.remove("active");
    stand.classList.remove("active");
    score.classList.add("active");
    content.style.display = "none";
    scont.style.display = "none";
    tcont.style.display = "block";
}

// $(function(){
//     $('#dark-mode').toggle(function(){
//         $('body').css({'background-color': 'rgba(0, 0, 0, 0.98)', });
//         $('.top-intro').css({'background-color': 'rgba(0, 0, 0)', 'color': 'white', 'box-shadow':'-3px 1px 6px 2px rgba(255, 255, 255, 0.54)', 'border': '1px solid rgba(255, 255, 255, 0.8)'});
//         $('.login').css({'border': '1px solid rgba(255, 255, 255, 0.8)', 'background-color': 'white'});
//         $('.search input[type="text"]').css({'background-color': 'black', 'color': 'white', 'box-shadow':'-3px 1px 6px 2px rgba(255, 255, 255, 0.7)', 'border': '1px solid rgba(255, 255, 255, 0.8)'});
//         $('.search button[type="submit"]').css({'border': '1px solid rgba(255, 255, 255, 0.8)'});
//         $('.opt, .side_navigation, #season-select, .btn1, #matchday-select').css({'background-color': 'black', 'color': 'white', 'border': '1px solid rgba(255, 255, 255, 0.8)'});
//         $('.fa, .sea-son, .gwktext').css({'color': 'white'});
//         $('.leagues').css({'border-top':'1px solid white', 'border-bottom':'1px solid white'});
//         $('.active').css({'border-bottom': '4px solid rgba(255, 255, 255, 0.932)', 'box-shadow': '0 12px 16px 0 rgba(255, 255, 255, 0.24), 0 17px 50px 0 rgba(0,0,0,0.19)'});
//     });
// });
  


$(function(){
    $('#dark-mode').click(function(){
        $('body').toggleClass('dmbody');
        $('.top-intro').toggleClass('dmtop-intro');
        $('.login').toggleClass('dmlogin');
        $('.search input[type="text"]').toggleClass('dmsearch');
        $('.search button[type="submit"]').toggleClass('dmgo');
        $('.side_navigation, #season-select, .btn1, #matchday-select, .matches').toggleClass('dmopt');
        $('.fa, .sea-son, .gwktext, .date, .club1, .status, .club2, .mt').toggleClass('dmfa');
        $('.leagues').toggleClass('dmleagues');
        $('.active').toggleClass('dmactive');
        $('.dark').toggleClass('hide');
        $('.light').toggleClass('show');
        $('.opt').toggleClass('dmopt2');
        $('.sel-con').toggleClass('dmshadow');
        $('.league').toggleClass('dmleague');
        // $('tr:nth-child(odd)').toggleClass('dmstable');
        $('td, th').toggleClass('dmtdth');
        $('th').toggleClass('dmth');
        $('table').toggleClass('dmtable');
        $('thead').toggleClass('dmthead');
        $('.league.active').toggleClass('dmlactive');
    });
  });
  
  // Check if ad blockers are active
function detectAdBlocker() {
    // Create a dummy div element
    var adBlockerTest = document.createElement('div');
    adBlockerTest.innerHTML = '&nbsp;';
    adBlockerTest.className = 'adsbox';

    // Append the dummy div to the document body
    document.body.appendChild(adBlockerTest);

    // Check if the dummy div has been affected by ad blockers
    window.setTimeout(function() {
        if (adBlockerTest.offsetHeight === 0) {
            // Ad blocker detected
            alert("You have blockers active. Please disable blockers to view scores.");
        }
        // Remove the dummy div from the document body
        adBlockerTest.remove();
    }, 100);
}

// Call the function to detect ad blockers when the window loads
window.onload = detectAdBlocker;

