var scale = 0;

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    console.log('Scroll Position:', scrollPosition); // This will help confirm if the event is firing.

    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
    console.log(document.documentElement.scrollHeight)
    const airplane = document.querySelector('.airplane');
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
    } else if (scrollPosition > maxAirplaneHeight && scrollPosition < (maxFlight - maxAirplaneHeight / 5)) {
        scale = maxFlight - scrollPosition;
        airplane.style.position = `fixed`;
        animationContainer.style.position = 'relative';
        airplane.style.top = `50%`;
        airplane.style.transform = `translateX(-50%) translateY(-50%) rotate(180deg) scale(${scale / 8500})`;
    } else if (scrollPosition < 0.68 * maxScrollY) {
        scale = maxAirplaneHeight / 5
        airplane.style.position = `fixed`;
        animationContainer.style.position = 'relative';
        airplane.style.top = `50%`;
        airplane.style.transform = `translateX(-50%) translateY(-50%) rotate(180deg) scale(${scale / 8500})`;
    } else {
        airplane.style.transform = `translateX(-50%) translateY(-50%) rotate(180deg) scale(${maxAirplaneHeight / 5 / 8500})`;
        airplane.style.position = `absolute`;
        airplane.style.top = `1682%`;
        animationContainer.style.position = `unset`
    }
});
