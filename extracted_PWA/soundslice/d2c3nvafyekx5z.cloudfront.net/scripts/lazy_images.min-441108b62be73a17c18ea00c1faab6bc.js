(function(q,g,r,l,m,n){function h(){var d=document.getElementsByClassName("unloaded"),b=d.length,e="innerWidth"in window?window.innerWidth:document.documentElement.offsetWidth,p="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight;for(;b--;){var c=d[b];var a=c.getBoundingClientRect();0<a.right&&a.left<e&&a.top<p&&0<a.bottom&&l(c,"unloaded")&&(a=c.getAttribute("data-src"),m(c,"unloaded"),c.removeAttribute("data-src"),c.src=a)}f=!1}function k(){f||(requestAnimationFrame(h),
f=!0)}(function(){for(var d=0,b=["moz","ms","o","webkit"],e;!window.requestAnimationFrame&&(e=b.pop());)window.requestAnimationFrame=window[e+"RequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b,c){var a=(new Date).getTime(),e=Math.max(0,16-(a-d));c=window.setTimeout(function(){b(a+e)},e);d=a+e;return c})})();var f=!1;n(function(){var d=document.querySelectorAll(".jsimageload"),b=d.length;h();for(g(window,"scroll resize",k);b--;)g(d[b],"scroll",k)})})(utils.gid,
utils.assign,utils.unassign,utils.hasClass,utils.removeClass,utils.onready);