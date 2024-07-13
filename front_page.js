const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }

    });
});

const game_logo_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show_game_logo')
        } else {
            entry.target.classList.remove('show_game_logo')
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hidden_logos = document.querySelectorAll('.hidden_game_logo');
hiddenElements.forEach((el) => observer.observe(el));
hidden_logos.forEach((el) => game_logo_observer.observe(el));
