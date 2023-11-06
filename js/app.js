const sections = document.querySelectorAll("section")

function scrollHandler() {
    for(let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop - 400 <= window.pageYOffset) {
            sections[i].classList.add("active")
        }
    }
    console.log(sections[0].offsetTop)
}

window,addEventListener("load", scrollHandler) // 문서를 읽고 나서 실행
window.addEventListener("scroll",scrollHandler)