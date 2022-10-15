$("#time-setting").keypress(function(event) {
    if (event.keyCode === 13) {
        $("#start-btn").click();
    }
});

function timer(){
    let startingMinutes = document.getElementById("time-setting").value;

    if(startingMinutes==="") {
        startingMinutes = 20;
    }

    if(startingMinutes>=1 && startingMinutes<=60){
        $('.wrapper').addClass('show')
        $('.starting-popup').addClass('hidden')
    
        if(startingMinutes>60) {
            startingMinutes = 60
        }
    
        let time = startingMinutes*60;
    
        const countdownEl = document.getElementById('timer');
    
        setInterval(updateCountdown,1000);
        setInterval(lostTimeLimiter, 1000);
        setInterval(wonTimeLimiter, 1000);
    
        function updateCountdown(){
            const minutes = Math.floor(time/60);
            let seconds = time%60;
    
            seconds = seconds < 10 ? '0' + seconds : seconds;
    
            countdownEl.innerHTML = `${minutes}:${seconds}`;
            time--;
        }
    
        function lostTimeLimiter() {
            if (time < 0) {
                for (let i = 0; i <= 161; i++) {
                    if (champions[i] !== "finded" && champions[i]!== "success") {
                        let licznik = i + 1;
                        $('.app-window>div:nth-child(' + licznik + ')').addClass('failure').removeClass('champ-cover');
                        champions.splice(i, 1, "failure");
                        $('.input-bar').addClass('hidden');
                        $('.bgc').addClass('hidden');
                        $('#timer').addClass('hidden');
                    }
                    else { }
    
                }
            }
        }
    
        function wonTimeLimiter() {
            if (time < 0) {
                for (let i = 0; i <= 161; i++) {
                    if (champions[i] === "finded") {
                        let licznik = i + 1;
                        $('.app-window>div:nth-child(' + licznik + ')').addClass('success').removeClass('solved');
                        champions.splice(i, 1, "success");
                    }
                    else { }
    
                }
            }
        }
    }else{
        $('.popup-alert').addClass('popup-alert-active').removeClass('popup-alert-disable');
    }

}



