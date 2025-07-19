document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    console.log(`Metro Business College Schedule Page Loaded Successfully! Current time: ${now.toLocaleDateString('en-US', options)}`);

    const highlightCurrentDaySchedule = () => {
        const today = new Date().getDay();

        const mwfSection = document.getElementById('mwf-schedule');
        const ttSection = document.getElementById('tt-schedule');

        if (mwfSection) mwfSection.classList.remove('current-day-highlight');
        if (ttSection) ttSection.classList.remove('current-day-highlight');

        if (today === 1 || today === 3 || today === 5) {
            if (mwfSection) {
                mwfSection.classList.add('current-day-highlight');
                console.log("Highlighted Monday, Wednesday, Friday schedule block.");
            }
        } else if (today === 2 || today === 4) {
            if (ttSection) {
                ttSection.classList.add('current-day-highlight');
                console.log("Highlighted Tuesday, Thursday schedule block.");
            }
        } else {
            console.log("Today is not a regular class day according to the schedule.");
        }
    };

    highlightCurrentDaySchedule();

    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});