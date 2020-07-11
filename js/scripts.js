window.onload = function intoGreeting(){

    var date = new Date()
    var currentTime = date.getHours();

    if(currentTime <= 11) {
        document.querySelector('#greeting').innerHTML = 'Good Morning!'}

    if(currentTime > 11 || currentTime <= 14) {
        document.querySelector('#greeting').innerHTML = 'Good Afternoon!'}

    if(currentTime > 14 || currentTime <= 23) {
        document.querySelector('#greeting').innerHTML = 'Good Evening!'}

    console.log(currentTime);

}



