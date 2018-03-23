/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function(){

var prev = document.querySelector('#prevPicture');
var next = document.querySelector('#nextPicture');
var listaLi = document.querySelectorAll('li');
var counter = 0

listaLi[0].className = 'visible';

next.addEventListener('click', function(event) {
    listaLi[counter].classList.remove('visible');
    counter++
    
    if(counter === listaLi.length-1) {
        counter = 0
    }

    listaLi[counter].classList.add('visible');
})

prev.addEventListener('click', function(event) {
    listaLi[counter].classList.remove('visible');
    counter--

    if(counter < 0) {
        counter = listaLi.length-1
    }
    
    listaLi[counter].classList.add('visible');
})

});