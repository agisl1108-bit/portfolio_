window.addEventListener('load', () => {

    /* ===== nav 이동 ===== */
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

    /* ===== nav active ===== */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('a[data-target]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 150;
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

    /* ===== 슬라이드 복제 ===== */
    document.querySelectorAll('.track').forEach(track => {
    track.innerHTML += track.innerHTML + track.innerHTML;
    });
    /* ===== hover 멈춤 ===== */
    const tracks = document.querySelectorAll('.track');
    document.querySelectorAll('.archive_item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            tracks.forEach(t => t.style.animationPlayState = 'paused');
        });
        item.addEventListener('mouseleave', () => {
            tracks.forEach(t => t.style.animationPlayState = 'running');
        });
    });

    /* ===== 모달 ===== */
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal_content img');
    if (!modal || !modalImg) return;
    document.querySelectorAll('.archive_item').forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('active');
            modalImg.src = img.src;
            document.body.style.overflow = 'hidden';
            /* 세로 이미지 판별 */
            const temp = new Image();
            temp.src = img.src;
            temp.onload = () => {
                if (temp.height > temp.width * 1.2) {
                    modalImg.classList.add('vertical');
                } else {
                    modalImg.classList.remove('vertical');
                }
            };
        });
    });

    /* ===== 모달 닫기 ===== */
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

});

/* ===== reveal 애니메이션 ===== */
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

/* ===== 점 애니메이션 ===== */
document.querySelectorAll('.skill_item').forEach(item => {
    const dots = item.querySelectorAll('.dots span');

    dots.forEach((dot, i) => {
        setTimeout(() => {
            dot.classList.add('show');
        }, i * 120);
    });
});

/* ===== 맨 위로 스크롤 ===== */
const topBtn = document.querySelector('.top_btn');
const endSection = document.getElementById('end');
const firstSection = document.getElementById('hero'); // 🔥 여기 중요

window.addEventListener('scroll', () => {
    const endTop = endSection.offsetTop;
    const scrollY = window.scrollY + window.innerHeight;

    if (scrollY >= endTop + 100) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});

topBtn.addEventListener('click', () => {
    firstSection.scrollIntoView({ behavior: 'smooth' }); // 🔥 이걸로 바꿔
});