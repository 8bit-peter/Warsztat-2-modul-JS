document.addEventListener("DOMContentLoaded", function(){

    var img = document.querySelectorAll('#gallery img');
    var showBtn = document.querySelector('#showButton');
    var hideBtn = document.querySelector('#hideButton');
    var tagInput = document.querySelector('#tagInput');

    showBtn.addEventListener('click', function (event) {

           var value = tagInput.value;

            for (var i = 0; i < img.length; i++) {
            var dataTag = img[i].dataset.tag;
            if (dataTag.indexOf(value) !== -1) {
            img[i].classList.remove('invisible');
            }
        }
       
    });

    hideBtn.addEventListener('click', function (event) {

    var value = tagInput.value;

        for (var i = 0; i < img.length; i++) {
            var dataTag = img[i].dataset.tag;
            if (dataTag.indexOf(value) !== -1) {
                img[i].classList.add('invisible');
            }
        }
      });


});