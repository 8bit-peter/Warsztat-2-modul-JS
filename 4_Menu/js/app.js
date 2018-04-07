/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function(){
    
    var listMain = document.querySelectorAll('div>ul>li');
    
    // console.log(listMain);

    for ( var i = 0; i < listMain.length; i++) {

        listMain[i].addEventListener('mouseover', function(event) {
            var subList = this.firstElementChild;

            if (subList !== null) {
                subList.style.display = 'block';
            }

        })
    }

    for ( var i = 0; i < listMain.length; i++) {

        listMain[i].addEventListener('mouseout', function(event) {
            var subList = this.firstElementChild;

            if (subList !== null) {
                subList.style.display = 'none';
            }

        })
    }

});