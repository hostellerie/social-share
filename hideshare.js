/*! hideshare - v0.1.0 - 2013-08-27
* https://github.com/arnonate/jQuery-FASS-Widget
* Copyright (c) 2013 Nate Arnold; Licensed MIT */
(function($) {

  $.fn.hideshare = function(opts) {

    opts = $.extend({}, $.fn.hideshare.options, opts);
    return this.each(function() {

      var el = this,
          output = null,
          shareTitle = opts.title,
          shareLink = opts.link,
          shareMedia = opts.media,
          // shareFacebook,
          // shareTwitter,
          // sharePinterest,
          // shareGooglePlus,
          // shareLinkedIn,
          facebookSnippet = '<li><a class="hideshare-facebook" href="#" onclick="shareFacebook(); return false;"><i class="icon-facebook icon-large"></i><span>Facebook</span></a></li>',
          twitterSnippet = '<li><a class="hideshare-twitter" href="#" onclick="shareTwitter(); return false;"><i class="icon-twitter icon-large"></i><span>Twitter</span></a></li>',
          pinterestSnippet = '<li><a class="hideshare-pinterest" href="#" onclick="sharePinterest(); return false;" data-pin-do="buttonPin" data-pin-config="above"><i class="icon-pinterest icon-large"></i><span>Pinterest</span></a></li>',
          googleplusSnippet = '<li><a class="hideshare-google-plus" href="#" onclick="shareGooglePlus(); return false;"><i class="icon-google-plus icon-large"></i><span>Google Plus</span></a></li>',
          linkedinSnippet = '<li><a class="hideshare-linkedin" href="#" onclick="shareLinkedIn(); return false;"><i class="icon-linkedin icon-large"></i><span>Linked In</span></a></li>';

      if (opts.facebook = true) {
        output = facebookSnippet;
      }
      if (opts.twitter = true) {
        output += twitterSnippet;
      }
      if (opts.pinterest = true) {
        output += pinterestSnippet;
      }
      if (opts.googleplus = true) {
        output += googleplusSnippet;
      }
      if (opts.linkedin = true) {
        output += linkedinSnippet;
      }

      shareFacebook = function() {
        window.open('//www.facebook.com/share.php?s=100&p[url]=' + encodeURIComponent(shareLink) + '&p[images][0]=' + encodeURIComponent(shareMedia) + '&p[title]=' + encodeURIComponent(shareTitle),'Facebook','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
      };
      shareTwitter = function() {
        window.open('//twitter.com/home?status=' + encodeURIComponent(shareTitle) + '+' + encodeURIComponent(shareLink),'Twitter','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
      };
      sharePinterest = function() {
        window.open('//pinterest.com/pin/create/button/?url=' + encodeURIComponent(shareLink) + '&media=' + encodeURIComponent(shareMedia) + '&description=' + encodeURIComponent(shareTitle),'Pinterest','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
      };
      shareGooglePlus = function() {
        window.open('//plus.google.com/share?url=' + encodeURIComponent(shareLink),'GooglePlus','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
      };
      shareLinkedIn = function() {
        window.open('//www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(shareLink) + '&title=' + encodeURIComponent(shareTitle) + '&source=' + encodeURIComponent(shareLink),'LinkedIn','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
      };

      var hideshareWrap = '<ul class="hideshare-wrap" style="display: none;">' + output + '</ul>';

      $(el).addClass("hideshare-btn");
      $(hideshareWrap).insertAfter(el);
      $(".hideshare-btn").click(function() {
        $(".hideshare-wrap").slideToggle();
        return false;
      });
    });
  };

  $.fn.hideshare.options = {
    link: document.URL,
    title: document.title,
    media: null,
    facebook: true,
    twitter: true,
    pinterest: true,
    googleplus: true,
    linkedin: true
  };

}(jQuery));