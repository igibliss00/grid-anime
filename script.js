let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});

tl
.add({
    targets: 'section div',
    width: '100%',
    backgroundColor: 'rgb(197, 197, 255)',
    delay: (el, i, l) => {
        return i*100;
    }
})
.add({
    targets: 'section div',
    width: '90%',
    backgroundColor: 'rgb(235, 235, 255)',
})
.add({
    targets: 'h1',
    top: '20%',
    opacity: 1,
    duration: 4000
}, '-=1600')

let rotateMe = anime({
    targets: 'section',
    scaleX: '2',
    scaleY: '2',
    translateX: '40%',
    rotate: '45deg',
    duration: 5000,
    autoplay: false
})

document.querySelector('h1').addEventListener('mouseover', () => {
    rotateMe.play();
});
