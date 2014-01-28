[jquery-share Plugin](http://plugins.jquery.com/share/)- jQuery plugin to share your content.
===============================

## <a id="Introduction"></a>Introduction

**Share** is a customizable jQuery Plugin which lets you share a website, post, article, blog or anything which has a URL. Share it on facebook, twitter, linkedin, pinterest or tumblr.


## [Help the project](https://pledgie.com/campaigns/23907)

<a href='https://pledgie.com/campaigns/23907'><img alt='Click here to lend your support to: jQuery Share and make a donation at pledgie.com !' src='https://pledgie.com/campaigns/23907.png?skin_name=chrome' border='0' ></a>

This project is looking for help! [You can donate to the ongoing pledgie campaign](https://pledgie.com/campaigns/23907)
and help spread the word. If you've used the plugin, or plan to use, consider a donation - any amount will help.

You can find the plan for how to spend the money on the [pledgie page](https://pledgie.com/campaigns/23907).

## Getting Started

Include jQuery, the plugin and its css file on a page. 

```html
<script type="text/javascript" src="jquery-2.0.3.js"></script>
<script type="text/javascript" src="jquery.share.js"></script>
<link rel="stylesheet" type="text/css" href="jquery.share.css"/>
```

Add the share image below your content. 

```html
<a href="javascript:void(0)" class="share" title="Share This">
  <img src="IMAGES⁄iconShareGreenSmall.png" title="Share This"/>
</a>
```

Add a container "div" for the share icons and give id attribute to it. 

```html
<div  id="boxa"> </div>
```

Register a new Mashery ID to access developer.sharethis.com by Visiting 
[http://developer.sharethis.com/member/register](http://developer.sharethis.com/member/register)

Then call the `share` method on the class of `a` tag, with the required options.

```html
<script type="text/javascript">
		$(document).ready(function(){
		    $('.share').share({
		        socialIcons : {
		            facebook : {
		                show : false
		            },
		            pinterest : {
		                show : true,
		                media : "http://goo.gl/OCMfWB",
		                description : "Harshen Amarnath Pandey"
		            }
		        },
		        mandatory : {
		            containerId : "boxa",
		            APIkey : "bgrswprtt3nzgudfxr5zkjur",
		            URL : "http://www.nature.org/"
		        },
		        display : {
		            background : "#321243"
		        }
		    });
		});
</script>
```
For more information on how to use different options, [check the documentation](https://raw.github.com/harshen/jquery-share/master/DOCS/jQuery_share_documentation).

Also refer the [demo](http://harshen.github.io/jquery-share/) for more clarity.

### Dependencies

jQuery greater than or equal to version 1.7.

## <a id="Support"></a>Support

Please post bug reports and other contributions (enhancements, features) to the GitHub issue tracker.

## <a id="License"></a>License

Copyright (c) 2014 Harshen Pandey
Licensed under the MIT and GPLv3 license.
