(function($,window,document,undefined){"use strict";var defaults={minHeight:0,elements:[],percentage:true,userTiming:true,pixelDepth:true,customGA: null};var $window=$(window),cache=[],lastPixelDepth=0,universalGA,classicGA,googleTagManager;$.scrollDepth=function(options){var startTime=+new Date;options=$.extend({},defaults,options);if($(document).height()<options.minHeight){return}if(typeof ga==="function"){universalGA=true}if(typeof _gaq!=="undefined"&&typeof _gaq.push==="function"){classicGA=true}if(typeof dataLayer!=="undefined"&&typeof dataLayer.push==="function"){googleTagManager=true}sendEvent("Percentage","Baseline");function sendEvent(action,label,scrollDistance,timing){if(googleTagManager){dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:action,eventLabel:label,eventValue:1,eventNonInteraction:true});if(options.pixelDepth&&arguments.length>2&&scrollDistance>lastPixelDepth){lastPixelDepth=scrollDistance;dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:rounded(scrollDistance),eventValue:1,eventNonInteraction:true})}if(options.userTiming&&arguments.length>3){dataLayer.push({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:action,eventLabel:label,eventTiming:timing})}}else{if(universalGA){ga("send","event","Scroll Depth",action,label,1,{nonInteraction:1});if(options.customGA){ga('b.send', 'event', 'Scroll Depth', action, label, 1, {'nonInteraction': 1});}if(options.pixelDepth&&arguments.length>2&&scrollDistance>lastPixelDepth){lastPixelDepth=scrollDistance;ga("send","event","Scroll Depth","Pixel Depth",rounded(scrollDistance),1,{nonInteraction:1});if(options.customGA){ga('b.send', 'event', 'Scroll Depth', 'Pixel Depth', rounded(scrollDistance), 1, {'nonInteraction': 1});}}if(options.userTiming&&arguments.length>3){ga("send","timing","Scroll Depth",action,timing,label);if(options.customGA){ga('b.send', 'timing', 'Scroll Depth', action, timing, label);}}}if(classicGA){_gaq.push(["_trackEvent","Scroll Depth",action,label,1,true]);if(options.pixelDepth&&arguments.length>2&&scrollDistance>lastPixelDepth){lastPixelDepth=scrollDistance;_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",rounded(scrollDistance),1,true])}if(options.userTiming&&arguments.length>3){_gaq.push(["_trackTiming","Scroll Depth",action,timing,label,100])}}}}function calculateMarks(docHeight){return{"25%":parseInt(docHeight*.25,10),"50%":parseInt(docHeight*.5,10),"75%":parseInt(docHeight*.75,10),"100%":docHeight-5}}function checkMarks(marks,scrollDistance,timing){$.each(marks,function(key,val){if($.inArray(key,cache)===-1&&scrollDistance>=val){sendEvent("Percentage",key,scrollDistance,timing);cache.push(key)}})}function checkElements(elements,scrollDistance,timing){$.each(elements,function(index,elem){if($.inArray(elem,cache)===-1&&$(elem).length){if(scrollDistance>=$(elem).offset().top){sendEvent("Elements",elem,scrollDistance,timing);cache.push(elem)}}})}function rounded(scrollDistance){return(Math.floor(scrollDistance/250)*250).toString()}function throttle(func,wait){var context,args,result;var timeout=null;var previous=0;var later=function(){previous=new Date;timeout=null;result=func.apply(context,args)};return function(){var now=new Date;if(!previous)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0){clearTimeout(timeout);timeout=null;previous=now;result=func.apply(context,args)}else if(!timeout){timeout=setTimeout(later,remaining)}return result}}$window.on("scroll.scrollDepth",throttle(function(){var docHeight=$(document).height(),winHeight=window.innerHeight?window.innerHeight:$window.height(),scrollDistance=$window.scrollTop()+winHeight,marks=calculateMarks(docHeight),timing=+new Date-startTime;if(cache.length>=4+options.elements.length){$window.off("scroll.scrollDepth");return}if(options.elements){checkElements(options.elements,scrollDistance,timing)}if(options.percentage){checkMarks(marks,scrollDistance,timing)}},500))}})(jQuery,window,document);