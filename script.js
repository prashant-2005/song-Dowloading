var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var growth = document.querySelector('.growth');
var random = Math.floor(Math.random()*100);
var h2 = document.querySelector('h2');
var grow = 0;

btn.addEventListener('click',function(){
    
    var load = setInterval(function(){
    grow++;
    h1.innerHTML = grow + '%';
    growth.style.width = grow + '%'
    },random)

    setTimeout(function(){
        clearInterval(load)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.6
        btn.style.pointerEvents = 'none'
        h2.innerHTML = `Your song has downloaded in ${random/10} Second`
    },random*100)
})