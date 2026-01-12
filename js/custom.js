// initialize AOS
AOS.init({duration:1000, once:true});

// toggle menu
const toggleMenu = () => document.getElementById('nav')?.classList.toggle('show');

// counter Animation

const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.dataset.target;
            const speed = 100, increment = target / speed;

            const update = () => {
                const current = +counter.innerText.replace(/\D/g, '');
                if (current < target) {
                    counters.innerText = Math.ceil(current + increment).toLocaleString();
                    setTimeout(update, 30);
                    }else{
                        counter.innerText = target >= 1000?  `{target / 1000}k+` : `${target}+`;
                        }
                    };
                    update();
                    observer.unobserve(counter);
                }
            });
        }
    )