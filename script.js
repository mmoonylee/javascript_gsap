// 1. gsap 기능 하나씩 작성해보기
// .from은 gspa(0%) -> css(100%)으로 스타일을 적용한다.
// gsap.from(".header", {duration :1, y: '-100%', ease:"bounce"});
// gsap.from(".link", { duration: 1, opacity: 0, delay:1, stagger : .5})
// gsap.from(".right", {duration: 1, x: "-100vw", delay:1, ease:"power2.in"})
// gsap.from(".left", {duration:1, delay:1.5,x: "-100%"})
// .to는 css(0%) -> gsap(100%)로 적용한다.
// gsap.to(".footer", { duration: 1, y:0, ease:"elastic", delay: 2.5})
// gsap.fromTo(".button", { opacity:0, scale:0, rotation: 720 },{ opacity: 1, duration: 3.5, opacity:1, scale:1, rotation:0})

// 2. gspap을 javascript 기능과 사용하기 (?)
// const obj = { x : 0}
// gsap.to(obj, { x: 100, onUpdate: () => console.log(obj.x)})

// 3. tiemline을 사용하여 1번의 불필요한 내용들 지우고 보기좋게 작성하기
// 따로 시간을 입력하지 않으면 하나 끝날때까지 기다려서 자동으로 delay 된다 (3번처럼 .right 참고)
const timeline = gsap.timeline( {defaults : { duration : 1 }});
timeline
    .from(".header", { y : '-100%', ease :"bounce"})
    .from(".link", { opacity : 0, stagger : .5})
    .from(".right", { x : "-100vw" , ease : "power2.in"}, 1)  //1은 1초 뒤에 실행
    .from(".left", { x : "-100%" } , "<.5")
    .to(".footer", { y : 0, ease : "elastic" })
    .fromTo(".button", { opacity:0, scale:0, rotation: 720 },{ opacity: 1, scale:1, rotation:0})

// 4. 클릭이벤트를 걸어 애니메이션을 취소시켜보자
const button = document.querySelector(".button");
button.addEventListener("click", () => {
    timeline.timeScale(3);  //reverse 속도 3배로
    timeline.reverse();
})