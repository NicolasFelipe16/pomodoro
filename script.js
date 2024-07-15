// CHANGE POMODORO X SETTINGS
function togglePomodoroSettings(){
    let pomodoro = document.querySelector('.pomodoro');
    let settings = document.querySelector('.settings');
    let settingsIcon = document.querySelector('.settings-icon');
    settingsIcon.addEventListener('click', function () {
        pomodoro.classList.toggle('rotated');
        settings.classList.toggle('rotated');
        if (pomodoro.classList.contains('rotated')) {
            settingsIcon.innerHTML = '<i class="bi bi-arrow-left-circle-fill"></i>';
            settingsIcon.style.backgroundColor = 'var(--color-03)';
            settingsIcon.querySelector('i').style.color = 'var(--color-02)';
        } else if (settings.classList.contains('rotated')) {
            settingsIcon.innerHTML = '<i class="bi bi-gear-fill"></i>';
            settingsIcon.style.backgroundColor = 'var(--color-02)';
        };
    });
}
togglePomodoroSettings();

// TIME SETTINGS
function timeSettings(){
    let focus_duration = document.querySelector('#focus-duration').value;
    let short_break_duration = document.querySelector('#short_break-duration').value;
    let long_break_duration = document.querySelector('#long_break-duration').value;

    console.log(focus_duration);
    console.log(short_break_duration);
    console.log(long_break_duration);
}

// CHANGE POMODORO MESSAGE
function changeActiveTimeBox(time_box_class) {
    let time_boxes = document.querySelectorAll('.pomodoro__time-boxes h2');
    let message = document.querySelector('.pomodoro__message');
    time_boxes.forEach(time_box => {
        time_box.classList.remove('active-box');
    });
    document.querySelector('.' + time_box_class).classList.add('active-box');   
    if (time_box_class == 'box-01') {
        message.innerHTML = 'Hora do foco!';
    } else if (time_box_class == 'box-02') {
        message.innerHTML = 'Pausinha para tomar uma água...';
    } else if (time_box_class == 'box-03') {
        message.innerHTML = 'Boa! Pode relaxar um pouco.';
    }
}

// POMODORO
let start_button = document.querySelector('.pomodoro__button');

start_button.addEventListener('click', startPomodoro);

function startPomodoro() {
    console.log('Pomodoro iniciado.');
    let pomodoro_time = document.querySelector('.pomodoro__time');

    function formatTime(value) {
        if (value < 10) {
            return ("0" + value);
        } else {
            return value;
        }
    }

    let time_boxes_classes = ['box-01', 'box-02', 'box-03'];
    let time_boxes_duration = [24, 4, 14];

    let time_box_index = 0;

    let minutes = time_boxes_duration[time_box_index];
    let seconds = 60;

    setInterval(function () {
        if (seconds === 0 && minutes === 0) {
            time_box_index++;
            minutes = time_boxes_duration[time_box_index];
            seconds = 60;
        } else if (seconds === 0) {
            seconds = 60;
            minutes--;
        }
        
        seconds--;
        let active_box = time_boxes_classes[time_box_index];
        changeActiveTimeBox(active_box);
        
        pomodoro_time.innerHTML = formatTime(minutes) + ":" + formatTime(seconds);
     }, 1000)
}

// startPomodoro();
