let homeScoreEl = document.getElementById("score-home")
let guestScoreEl = document.getElementById("score-guest")
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0

function increment(num) {
    switch (num) {
    case 1:
        homeScore += 1
        break;
    case 2:
        homeScore += 2
        break;
    case 3:
        homeScore += 3
        break;
    case 4:
        guestScore += 1
        break;
    case 5:
        guestScore += 2
        break;
    case 6:
        guestScore += 3
        break;
    default:
        console.log("ERROR: wrong input!");
    }
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore    

    if (homeScore > guestScore) {
        homeEl.style.backgroundColor = "yellow"
        guestEl.style.backgroundColor = "inherit"        
    } else if (guestScore > homeScore) {
        guestEl.style.backgroundColor = "yellow"
        homeEl.style.backgroundColor = "inherit"
    } else {
        guestEl.style.backgroundColor = "aqua"
        homeEl.style.backgroundColor = "aqua"
    }
}

function reset() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeEl.style.backgroundColor = "inherit"
    guestEl.style.backgroundColor = "inherit"
    homeScore = 0
    guestScore = 0
}