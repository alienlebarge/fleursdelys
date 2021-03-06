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

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-42261688-1', 'alienlebarge.github.io');
ga('send', 'pageview');

