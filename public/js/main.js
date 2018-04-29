/*console.log("I'm work");*/
var appendImg = function(index) {
    var div = document.createElement("div")
    div.classList.add('content')
    div.classList.add('content_show')
    div.innerHTML = '<div class="content"><img src="/public/img/small/top_'+index+'.jpg"></img></div>'
    document.getElementById('imgContainer').appendChild(div);
    //div.classList.remove('img_init')
    //div.classList.add('img_normal')
}

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
        });
    }

    // write img containers
    [1,2,3].forEach(function(index){
        appendImg(index)
    })

});

function ContentManager(containerId,scrollBaseEl,threshold) {
    //this.containerEl = 
    this.scrollBaseEl = scrollBaseEl
    this.threshold = threshold
    this.scrollTop = function(){
       return this.scrollBaseEl.scrollTop
    }
    this.needsMoreContent = function(){
        //var rect = containerEl.getBoundingClientRect()
        //rect.bottom scrollTop
        // rect.bottom - window.pageYOffset
        //return contentBottom - window.innerHeight <= this.threshold 
    }
    this.renderLatestContent = function(content){
        // TODO
    }
}

function newConentManager(){
    if (navigator.userAgent.toLowerCase().match(/webkit|msie 5/)) {
        // Webkit系（Safari, Chrome, iOS）判定
        if(navigator.userAgent.indexOf('Chrome') != -1){
            // Chromeはhtml要素
            el = document.documentElement
        } else {
            // Chrome以外はbody要素
            el = document.body
        }
    } else {
        // IE（6以上）、Firefox、Operaはhtml要素
        el = document.documentElement
    }    
    return new ContentManager("contents-container",el,10)
}
