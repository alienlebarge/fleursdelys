// email spam protection
$(function() {
    $("body").emailSpamProtection("email");
});

// back to top of the page
//delegate binding to only links that have the `.top` class
$(document).delegate('a.top', 'click', function () {
    $('html, body').stop().animate({ scrollTop : 0 }, 500);
    return false;
});

// Tweeter like
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');