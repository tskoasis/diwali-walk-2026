const targetDate = new Date("November 6, 2026 17:00:00");

function updateCountdown(){

const now = new Date();

const difference = targetDate - now;

if(difference <= 0){
document.getElementById("countdown")
.innerHTML = "🎉 The Celebration Has Started!";
return;
}

const days = Math.floor(
difference/(1000*60*60*24)
);

const hours = Math.floor(
(difference%(1000*60*60*24))/
(1000*60*60)
);

const minutes = Math.floor(
(difference%(1000*60*60))/
(1000*60)
);

document.getElementById("countdown")
.innerHTML =
`${days} Days ${hours} Hours ${minutes} Minutes`;
}

updateCountdown();

setInterval(updateCountdown,1000);