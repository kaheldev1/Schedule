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
    const headerTitle = document.querySelector('h1');

    const applyDarkMode = (isDarkMode) => {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            if (headerTitle) {
                headerTitle.classList.remove('text-blue-700');
                headerTitle.classList.add('text-yellow-400');
            }
        } else {
            body.classList.remove('dark-mode');
            if (headerTitle) {
                headerTitle.classList.remove('text-yellow-400');
                headerTitle.classList.add('text-blue-700');
            }
        }
    };

    applyDarkMode(localStorage.getItem('darkMode') === 'enabled');

    darkModeToggle.addEventListener('click', () => {
        const isCurrentlyDarkMode = body.classList.contains('dark-mode');
        applyDarkMode(!isCurrentlyDarkMode);
        localStorage.setItem('darkMode', !isCurrentlyDarkMode ? 'enabled' : 'disabled');
    });

    const infoButton = document.getElementById('infoButton');
    const tutorialModal = document.getElementById('tutorialModal');
    const closeModal = document.getElementById('closeModal');

    if (infoButton && tutorialModal && closeModal) {
        infoButton.addEventListener('click', () => {
            tutorialModal.classList.remove('hidden');
        });

        closeModal.addEventListener('click', () => {
            tutorialModal.classList.add('hidden');
        });

        tutorialModal.addEventListener('click', (e) => {
            if (e.target === tutorialModal) {
                tutorialModal.classList.add('hidden');
            }
        });
    } else {
        console.error("Missing info button or modal elements. Please ensure they are in the HTML.");
    }
});
