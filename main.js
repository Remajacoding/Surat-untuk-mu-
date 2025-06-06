
function btn() {
    let KotakSuratt = document.getElementById('kotaksurat');
    let Surat = document.getElementById('surat');
    let tombolBalas = document.getElementById('tombolBalas');
    let musik = document.getElementById("musik");
    KotakSuratt.style.display = "none"
    alert('tolong nanti baca suratnya dari awal sampai akhir yaaa  🙏🙏');
    Surat.style.display = "block"
    tombolBalas.style.display = "flex"
    

      musik.play();
    
}

const box = document.getElementById("surat");
const progress = document.getElementById("scrollProgress");
const replyBtn = document.getElementById("replyButton");

box.addEventListener('scroll',() => {
    const scrollTop = box.scrollTop;
    const scrollHeight = box.scrollHeight - box.clientHeight;
    const scrollPercent = Math.round((scrollTop / scrollHeight)
 * 100);
    progress.textContent = `scroll:${scrollPercent}%`;
    if (scrollPercent >= 100) {
        replyBtn.classList.add('active');
    }
    else {
        replyBtn.classList.remove('active');
        
    }
});