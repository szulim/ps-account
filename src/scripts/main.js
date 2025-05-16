import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    once: false,
    delay: 100,
    easing: 'ease-in-out-sine',
    duration: 400
});

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        AOS.refresh();
    }, 500);
});
