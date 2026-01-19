document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('.contact-trigger');
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close-btn');

    contactBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});

window.addEventListener('wheel', (e) => {
    // 현재 실행 중인 파일의 이름 추출 (예: sub01.html)
    const currentPage = window.location.pathname.split("/").pop();
    
    // 파일 이름에서 숫자만 추출 (1~6)
    let pageNum = parseInt(currentPage.replace(/[^0-9]/g, ""));
    
    // 숫자가 없는 페이지(index.html 등)라면 로직 중단
    if (isNaN(pageNum)) return;

    if (e.deltaY > 0) {
        // 휠을 아래로 내릴 때 -> 다음 페이지 (최대 6번까지)
        if (pageNum < 6) {
            const nextNum = String(pageNum + 1).padStart(2, '0');
            window.location.href = `sub${nextNum}.html`;
        }
    } else {
        // 휠을 위로 올릴 때 -> 이전 페이지 (최소 1번까지)
        if (pageNum > 1) {
            const prevNum = String(pageNum - 1).padStart(2, '0');
            window.location.href = `sub${prevNum}.html`;
        }
    }
}, { passive: true });