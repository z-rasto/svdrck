var scale = 0;

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    // console.log('Scroll Position:', scrollPosition); // This will help confirm if the event is firing.

    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
    // console.log(document.documentElement.scrollHeight)
    const airplane = document.querySelector('.airplane');
    const bus = document.querySelector('.bus');
    const jozi = document.querySelector('.jozi');
    const adka = document.querySelector('.adka');
    const animationContainer = document.querySelector('.animation-container');
    const landing = maxScrollY / 4;
    const maxFlight = maxScrollY - landing;
    const maxAirplaneHeight = maxFlight / 2

    if (scrollPosition <= maxAirplaneHeight) {
        scale = scrollPosition;
        airplane.style.position = `fixed`;
        animationContainer.style.position = 'relative';
        airplane.style.top = `50%`;
        airplane.style.transform = `translateX(-50%) translateY(-50%) rotate(180deg) scale(${scale / 8500})`;
        bus.style.visibility = `hidden`
        if (scrollPosition >= maxAirplaneHeight - (maxAirplaneHeight / 8)) {
            const oS = (scrollPosition - (maxAirplaneHeight - (maxAirplaneHeight / 8))) / 1000;
            jozi.style.transform = `translateX(-50%) translateY(-50%) scale(${oS})`
            adka.style.transform = `translateX(-50%) translateY(-50%) scale(${oS})`
        } else {
            jozi.style.transform = `translateX(-50%) translateY(-50%) scale(0)`
            adka.style.transform = `translateX(-50%) translateY(-50%) scale(0)`
        }
    } else if (scrollPosition > maxAirplaneHeight && scrollPosition < (maxFlight - maxAirplaneHeight / 5)) {
        scale = maxFlight - scrollPosition;
        airplane.style.position = `fixed`;
        animationContainer.style.position = 'relative';
        airplane.style.top = `50%`;
        airplane.style.transform = `translateX(-50%) translateY(-50%) rotate(180deg) scale(${scale / 8500})`;
        bus.style.visibility = `hidden`
        const aaa = scrollPosition - (maxAirplaneHeight - (maxAirplaneHeight / 8));
        const bbb = (scrollPosition - maxAirplaneHeight) * 2;
        const oS = (aaa - bbb) / 1000;
        if (oS > 0) {
            jozi.style.transform = `translateX(-50%) translateY(-50%) scale(${oS})`
            adka.style.transform = `translateX(-50%) translateY(-50%) scale(${oS})`
        } else {
            jozi.style.transform = `translateX(-50%) translateY(-50%) scale(0)`
            adka.style.transform = `translateX(-50%) translateY(-50%) scale(0)`
        }
    } else if (scrollPosition < 0.68 * maxScrollY) {
        scale = maxAirplaneHeight / 5
        airplane.style.position = `fixed`;
        animationContainer.style.position = 'relative';
        airplane.style.top = `50%`;
        airplane.style.transform = `translateX(-50%) translateY(-50%) rotate(180deg) scale(${scale / 8500})`;
        bus.style.visibility = `hidden`

        jozi.style.transform = `translateX(-50%) translateY(-50%) scale(0)`
        adka.style.transform = `translateX(-50%) translateY(-50%) scale(0)`
    } else {
        airplane.style.transform = `translateX(-50%) translateY(-50%) rotate(180deg) scale(${maxAirplaneHeight / 5 / 8500})`;
        airplane.style.position = `absolute`;
        airplane.style.top = `1682%`;
        animationContainer.style.position = `unset`
        bus.style.visibility = `visible`

        jozi.style.transform = `translateX(-50%) translateY(-50%) scale(0)`
        adka.style.transform = `translateX(-50%) translateY(-50%) scale(0)`
    }
});
