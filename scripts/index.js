document.querySelectorAll('a[data-target]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.dataset.target;
        const target = document.getElementById(targetId);

        if (!target) return;

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

//======== 스크롤 위치 따라 자동 변경
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('a[data-target]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.target === current) {
            link.classList.add('active');
        }
    });
});
//======== 스크롤 등장 애니메
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
//======== 스킬 점 등장
const skillSection = document.querySelector('.skills');
const dots = document.querySelectorAll('.dots span');

let played = false;

function animateDots() {
    const trigger = window.innerHeight * 0.8;
    const top = skillSection.getBoundingClientRect().top;

    if (top < trigger && !played) {
        dots.forEach((dot, i) => {
            setTimeout(() => {
                dot.classList.add('show');
            }, i * 80);  // 순차 등장
        });
        played = true;
    }
}

window.addEventListener('scroll', animateDots);