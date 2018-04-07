/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener("DOMContentLoaded", function(){
    
    var toolTip = document.querySelectorAll('.tooltip');


    for( var i = 0; i < toolTip.length; i++) {

        toolTip[i].addEventListener('mouseover', function(event) {
            var text = this.dataset.text;
            var tpSpan = document.createElement('span');
            tpSpan.classList.add('tooltipText');
            tpSpan.innerText = text;

            this.appendChild(tpSpan);
        })

    }

    for( var i = 0; i < toolTip.length; i++) {

        toolTip[i].addEventListener('mouseout', function(event) {
            var tpSpanOut = this.firstElementChild;

            tpSpanOut.parentElement.removeChild(tpSpanOut);
        })

    }

});