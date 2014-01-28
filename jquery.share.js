/*
 * Author - Harshen Amarnath Pandey
 * Version - 1.0.0
 * Release - 28th January 2014
 * Copyright (c) 2014 - 2018 Harshen Pandey
*/

(function ( $ ) {

    $.fn.share = function(options)
    {
        return this.each( function() {
            share( $(this), options );
        });
    };

    //Definition of private function share.
    function share( $this, options ) {
        var opts = $.extend( true, {}, $.fn.share.defaults, options );
        var $this = $this;
        var container = opts.mandatory.containerId;
        var background = opts.display.background;
        var shareClass =  $this.attr('class');
        $('#' + container).hide();
        
        if(options.display != undefined && options.display.background != undefined) {
            var customColor = {
                'width' : 'auto',
                'position' : 'absolute',
                'border' : 'solid #ddd 1px',
                'height' : 'auto',
                'z-index' : '9999',
                'background-color' : background,
                'padding-left' : '5px',
                'padding-bottom' : '10px',
                'padding-top': '10px'
            }
            $('#' + container).css(customColor);
        } else if(options.display == undefined || options.display.background == undefined) {
            $('#' + container).addClass('boxa');
        }
        
        $this.mouseover(function(){
            var $html = '';
            var settings = opts.socialIcons;
            $.each(settings,function(key,val) {
                switch( key )
                {
                    case 'facebook' :
                        if( val.show == true) {
                            $html += '<span class="st_facebook ' + shareClass +' shareLink" data-destination="facebook" title="Share this on Facebook"></span>';
                        }
                        break;
                    case 'linkedin' :
                        if( val.show == true) {
                            $html += '<span class="st_linkedin ' + shareClass +' shareLink" data-destination="linkedin" title="Share this on Linkedin"></span>';
                        }
                        break;
                    case 'tumblr' :
                        if( val.show == true) {
                            $html += '<span class="st_tumblr ' + shareClass +' shareLink" data-destination="tumblr" title="Share this on Tumblr"></span>';
                        }
                        break;
                    case 'pinterest' :
                        if( val.show == true) {
                            $html += '<span class="st_pinterest ' + shareClass +' shareLink" data-destination="pinterest"  title="Share this on pinterest"></span>';
                        }
                        break;
                    case 'twitter' :
                        if( val.show == true) {
                            $html += '<span class="st_twitter ' + shareClass +' shareLink" data-destination="twitter" title="Share this on Twitter"></span>';
                        }
                        break;
                }
            });

            $('#'+container).html($html).css({
                'top':$('.' + shareClass).offset().top + 15,
                'left': $('.' + shareClass).offset().left + 15
            }).fadeIn('slow');

            $('#' + container).find('span').css('cursor','pointer');

        });

        $('html').click(function(event) {
            if(event.target.className != "" && event.target.className.indexOf('shareLink') > -1) {
                switch( event.target.className ) {
                    case 'st_facebook ' + shareClass +' shareLink' :
                        break;
                    case 'st_twitter ' + shareClass +' shareLink' :
                        break;
                    case 'st_linkedin ' + shareClass +' shareLink' :
                        break;
                    case 'st_pinterest ' + shareClass +' shareLink' :
                        break;
                    case 'st_tumblr ' + shareClass +' shareLink' :
                        break;
                }
            } else if(event.target.id != "" && event.target.id == container) {
            } else {
                $('#' + container).fadeOut('slow');
            }
        });
        
        $(document.body).on('click', '.' + shareClass + '.shareLink', function() {
            var destination = $(this).data('destination');
            var apiKey = opts.mandatory.APIkey;
            var URL = opts.mandatory.URL;
            if(destination == 'pinterest') {
                var media = opts.socialIcons.pinterest.media;
                var description = opts.socialIcons.pinterest.description;
                shareLink(destination, apiKey, URL, media, description);
            } else {
                shareLink(destination, apiKey, URL);
            }
        });
        
    }

    //Definition of private function shareLink.
    function shareLink(destination, apiKey, URL, media, description)
    {
        var paramURL = encodeURIComponent(URL);
        var shareUrl = 'http://rest.sharethis.com/v1/share/share?' + 'destination='+ destination;

        switch( destination )
        {
            case 'tumblr':
                window.open('http://www.tumblr.com/share?v=3&u='+ paramURL);
                break;
            case 'pinterest':
                var paramMedia = encodeURIComponent(media);
                var paramDescription = encodeURIComponent(description);
                var pinUrl = 'http://www.pinterest.com/pin/create/button/?url=' + paramURL + '&media='+ paramMedia + '&description=' + paramDescription;
                window.open(pinUrl);
                break;
            default:
                shareUrl += '&url='+ paramURL + '&api_key=' + apiKey;
                window.open(shareUrl);
                break;
        }
        return false;
    }
    
    //Giving default value for options.
    $.fn.share.defaults = {
        socialIcons : {
            facebook : {
                show : true
            },
            twitter : {
                show : true
            },
            linkedin : {
                show : true
            },
            pinterest : {
                show : false,
                media : "",
                description : ""
            },
            tumblr  : {
                show : true
            }
        },
        mandatory : {
            containerId : "",
            APIkey : "",
            URL : ""
        },
        display : {
            background : "#eee"
        }
    };
}( jQuery ));