// ===== 클릭 이동 =====
document.querySelectorAll('a[data-target]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById(this.dataset.target);
        if (!target) return;
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});


// ===== nav active 자동 변경 =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('a[data-target]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            current = section.id;
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.target === current) {
            link.classList.add('active');
        }
    });
});
// === reveal 애니메이션 ===
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
// === 스킬 점 애니메이션 ===
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const dots = document.querySelectorAll('.dots span');
let played = false;

function animateDots() {
    const skillSection = document.querySelector('.skills');
    if (!skillSection) return;

    const trigger = window.innerHeight * 0.8;
    const top = skillSection.getBoundingClientRect().top;

    if (top < trigger && !played) {
        dots.forEach(dot => dot.classList.add('show'));
        played = true;
    }
}

window.addEventListener('scroll', animateDots);
window.addEventListener('load', animateDots);

// ===== 무한 슬라이드 =====
const track = document.querySelector('.archive_track');
track.innerHTML += track.innerHTML;


// ===== 이미지 클릭 확대 =====
const items = document.querySelectorAll('.archive_item');
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');

items.forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add('active');
        modalImg.src = img.src;
    });
});

// ===== 모달 닫기 =====
modal.addEventListener('click', () => {
    modal.classList.remove('active');
});