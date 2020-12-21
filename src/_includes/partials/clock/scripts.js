const schedule = [
    ['Nov 25 2020', 'Dec 26 2020']
];

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
    clock.style.display = 'flex';
    function updateClock() {
        const t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

for (var i = 0; i < schedule.length; i++) {
    var startDate = schedule[i][0];
    var endDate = schedule[i][1];
    var startMs = Date.parse(startDate);
    var endMs = Date.parse(endDate);
    var currentMs = Date.parse(new Date());
    if (endMs > currentMs && currentMs >= startMs) {
        initializeClock('clock_counter', endDate);
    }
}

schedule.forEach(([startDate, endDate]) => {
    const startMs = Date.parse(startDate);
    const endMs = Date.parse(endDate);
    const currentMs = Date.parse(new Date());
    if (endMs > currentMs && currentMs >= startMs) {
        initializeClock('clock_counter', endDate);
    }
});

let deadline;
if (document.cookie && document.cookie.match('clock')) {
    deadline = document.cookie.match(/(^|;)myClock=([^;]+)/)[2];
} else {
    const timeInMinutes = 10;
    const currentTime = Date.parse(new Date());
    const deadline = new Date(currentTime + timeInMinutes * 60 * 1000);
    document.cookie = 'clock=' + deadline + '; path=/; domain={{ site.url }}';
}