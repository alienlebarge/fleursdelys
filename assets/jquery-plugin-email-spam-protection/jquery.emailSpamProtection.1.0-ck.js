/* 
 * EmailSpamProtection (jQuery Plugin)
 * Version: 1.0
 * Date: 2010 July
 * Author: Mike Unckel
 * Description and Demo: http://unckel.de/labs/jquery-plugin-email-spam-protection
 *
 * HTML: <span class="email">info [at] domain.com</span>
 * JavaScript: $("body").emailSpamProtection("email");
 *
 */(function(e){e.fn.emailSpamProtection=function(t){return e(this).find("."+t).each(function(){var t=e(this),n=t.text().replace(" [at] ","&#64;");t.html('<a class="btn-block-mobile" href="mailto:'+n+'">'+n+"</a>")})}})(jQuery);