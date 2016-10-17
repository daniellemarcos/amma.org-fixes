/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);;
/*
jquery.animate-enhanced plugin v1.02
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function(d,J,K){function P(a,b,d,l,j,h,c,n,q){var t=!1;c=!0===c&&!0===n;b=b||{};b.original||(b.original={},t=!0);b.properties=b.properties||{};b.secondary=b.secondary||{};n=b.meta;for(var k=b.original,x=b.properties,Q=b.secondary,D=r.length-1;0<=D;D--){var F=r[D]+"transition-property",y=r[D]+"transition-duration",e=r[D]+"transition-timing-function";d=c?r[D]+"transform":d;t&&(k[F]=a.css(F)||"",k[y]=a.css(y)||"",k[e]=a.css(e)||"");Q[d]=c?!0===q||!0===G&&!1!==q&&L?"translate3d("+n.left+"px, "+n.top+
"px, 0)":"translate("+n.left+"px,"+n.top+"px)":h;x[F]=(x[F]?x[F]+",":"")+d;x[y]=(x[y]?x[y]+",":"")+l+"ms";x[e]=(x[e]?x[e]+",":"")+j}return b}function B(a){for(var b in a)return!1;return!0}function R(a){a=a.toUpperCase();var b={LI:"list-item",TR:"table-row",TD:"table-cell",TH:"table-cell",CAPTION:"table-caption",COL:"table-column",COLGROUP:"table-column-group",TFOOT:"table-footer-group",THEAD:"table-header-group",TBODY:"table-row-group"};return"string"==typeof b[a]?b[a]:"block"}function H(a){return parseFloat(a.replace(a.match(/\D+$/),
""))}function M(a){var b=!0;a.each(function(a,d){return b=b&&d.ownerDocument});return b}var S="top right bottom left opacity height width".split(" "),I=["top","right","bottom","left"],r=["-webkit-","-moz-","-o-",""],T=["avoidTransforms","useTranslate3d","leaveTransforms"],U=/^([+-]=)?([\d+-.]+)(.*)$/,V=/([A-Z])/g,W={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},N=null,C=!1,z=(document.body||document.documentElement).style,O=void 0!==z.WebkitTransition||void 0!==z.MozTransition||void 0!==z.OTransition||
void 0!==z.transition,L="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,G=L;d.expr&&d.expr.filters&&(N=d.expr.filters.animated,d.expr.filters.animated=function(a){return d(a).data("events")&&d(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?!0:N.call(this,a)});d.extend({toggle3DByDefault:function(){return G=!G},toggleDisabledByDefault:function(){return C=!C},setDisabledByDefault:function(a){return C=a}});d.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],
null),d={x:0,y:0};if(a)for(var p=r.length-1;0<=p;p--){var l=a.getPropertyValue(r[p]+"transform");if(l&&/matrix/i.test(l)){a=l.replace(/^matrix\(/i,"").split(/, |\)$/g);d={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return d};d.fn.animate=function(a,b,p,l){a=a||{};var j=!("undefined"!==typeof a.bottom||"undefined"!==typeof a.right),h=d.speed(b,p,l),c=this,n=0,q=function(){n--;0===n&&"function"===typeof h.complete&&h.complete.apply(c,arguments)},t;if(!(t=!0===("undefined"!==typeof a.avoidCSSTransitions?
a.avoidCSSTransitions:C)))if(!(t=!O))if(!(t=B(a))){var k;a:{for(k in a)if(("width"==k||"height"==k)&&("show"==a[k]||"hide"==a[k]||"toggle"==a[k])){k=!0;break a}k=!1}t=k||0>=h.duration}return t?J.apply(this,arguments):this[!0===h.queue?"queue":"each"](function(){var b=d(this),c=d.extend({},h),l=function(c){var g=b.data("jQe")||{original:{}},f={};if(2==c.eventPhase){if(!0!==a.leaveTransforms){for(c=r.length-1;0<=c;c--)f[r[c]+"transform"]="";if(j&&"undefined"!==typeof g.meta){c=0;for(var e;e=I[c];++c)f[e]=
g.meta[e+"_o"]+"px",d(this).css(e,f[e])}}b.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(g.original).css(f).data("jQe",null);"hide"===a.opacity&&b.css({display:"none",opacity:""});q.call(this)}},k={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",
easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",
easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",
easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},y={},k=k[c.easing||"swing"]?k[c.easing||"swing"]:c.easing||"swing",e;for(e in a)if(-1===d.inArray(e,T)){var p=-1<d.inArray(e,I),m;var g=b,w=a[e],u=e,s=p&&!0!==a.avoidTransforms;if("d"==u)m=void 0;else if(M(g)){var f=U.exec(w);m="auto"===g.css(u)?0:g.css(u);m="string"==typeof m?H(m):m;"string"==typeof w&&H(w);var s=!0===s?0:m,t=g.is(":hidden"),v=g.translation();"left"==u&&(s=parseInt(m,10)+v.x);"right"==u&&(s=parseInt(m,10)+v.x);"top"==u&&
(s=parseInt(m,10)+v.y);"bottom"==u&&(s=parseInt(m,10)+v.y);!f&&"show"==w?(s=1,t&&g.css({display:R(g.context.tagName),opacity:0})):!f&&"hide"==w&&(s=0);f?(g=parseFloat(f[2]),f[1]&&(g=("-="===f[1]?-1:1)*g+parseInt(s,10)),m=g):m=s}else m=void 0;f=e;g=m;w=b;if(M(w)){u=-1<d.inArray(f,S);if(("width"==f||"height"==f||"opacity"==f)&&parseFloat(g)===parseFloat(w.css(f)))u=!1;f=u}else f=!1;if(f){var f=b,g=e,w=c.duration,u=k,p=p&&!0!==a.avoidTransforms,s=j,t=a.useTranslate3d,v=(v=f.data("jQe"))&&!B(v)?v:d.extend(!0,
{},W),A=m;if(-1<d.inArray(g,I)){var E=v.meta,C=H(f.css(g))||0,z=g+"_o",A=m-C;E[g]=A;E[z]="auto"==f.css(g)?0+A:C+A||0;v.meta=E;s&&0===A&&(A=0-E[z],E[g]=A,E[z]=0)}f.data("jQe",P(f,v,g,w,u,A,p,s,t))}else y[e]=a[e]}b.unbind("webkitTransitionEnd oTransitionEnd transitionend");if((e=b.data("jQe"))&&!B(e)&&!B(e.secondary)){n++;b.css(e.properties);var G=e.secondary;setTimeout(function(){b.bind("webkitTransitionEnd oTransitionEnd transitionend",l).css(G)})}else c.queue=!1;B(y)||(n++,J.apply(b,[y,{duration:c.duration,
easing:d.easing[c.easing]?c.easing:d.easing.swing?"swing":"linear",complete:q,queue:c.queue}]));return!0})};d.fn.animate.defaults={};d.fn.stop=function(a,b,p){if(!O)return K.apply(this,[a,b]);a&&this.queue([]);this.each(function(){var l=d(this),j=l.data("jQe");if(j&&!B(j)){var h,c={};if(b){if(c=j.secondary,!p&&void 0!==typeof j.meta.left_o||void 0!==typeof j.meta.top_o){c.left=void 0!==typeof j.meta.left_o?j.meta.left_o:"auto";c.top=void 0!==typeof j.meta.top_o?j.meta.top_o:"auto";for(h=r.length-
1;0<=h;h--)c[r[h]+"transform"]=""}}else if(!B(j.secondary)){var n=window.getComputedStyle(l[0],null);if(n)for(var q in j.secondary)if(j.secondary.hasOwnProperty(q)&&(q=q.replace(V,"-$1").toLowerCase(),c[q]=n.getPropertyValue(q),!p&&/matrix/i.test(c[q]))){h=c[q].replace(/^matrix\(/i,"").split(/, |\)$/g);c.left=parseFloat(h[4])+parseFloat(l.css("left"))+"px"||"auto";c.top=parseFloat(h[5])+parseFloat(l.css("top"))+"px"||"auto";for(h=r.length-1;0<=h;h--)c[r[h]+"transform"]=""}}l.unbind("webkitTransitionEnd oTransitionEnd transitionend");
l.css(j.original).css(c).data("jQe",null)}else K.apply(l,[a,b])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);;
/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);;
/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery throttle / debounce: Sometimes, less is more!
//
// *Version: 1.1, Last updated: 3/7/2010*
// 
// Project Home - http://benalman.com/projects/jquery-throttle-debounce-plugin/
// GitHub       - http://github.com/cowboy/jquery-throttle-debounce/
// Source       - http://github.com/cowboy/jquery-throttle-debounce/raw/master/jquery.ba-throttle-debounce.js
// (Minified)   - http://github.com/cowboy/jquery-throttle-debounce/raw/master/jquery.ba-throttle-debounce.min.js (0.7kb)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// Throttle - http://benalman.com/code/projects/jquery-throttle-debounce/examples/throttle/
// Debounce - http://benalman.com/code/projects/jquery-throttle-debounce/examples/debounce/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - none, 1.3.2, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-throttle-debounce/unit/
// 
// About: Release History
// 
// 1.1 - (3/7/2010) Fixed a bug in <jQuery.throttle> where trailing callbacks
//       executed later than they should. Reworked a fair amount of internal
//       logic as well.
// 1.0 - (3/6/2010) Initial release as a stand-alone project. Migrated over
//       from jquery-misc repo v0.4 to jquery-throttle repo v1.0, added the
//       no_trailing throttle parameter and debounce functionality.
// 
// Topic: Note for non-jQuery users
// 
// jQuery isn't actually required for this plugin, because nothing internal
// uses any jQuery methods or properties. jQuery is just used as a namespace
// under which these methods can exist.
// 
// Since jQuery isn't actually required for this plugin, if jQuery doesn't exist
// when this plugin is loaded, the method described below will be created in
// the `Cowboy` namespace. Usage will be exactly the same, but instead of
// $.method() or jQuery.method(), you'll need to use Cowboy.method().

(function(window,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  // Since jQuery really isn't required for this plugin, use `jQuery` as the
  // namespace only if it already exists, otherwise use the `Cowboy` namespace,
  // creating it if necessary.
  var $ = window.jQuery || window.Cowboy || ( window.Cowboy = {} ),
    
    // Internal method reference.
    jq_throttle;
  
  // Method: jQuery.throttle
  // 
  // Throttle execution of a function. Especially useful for rate limiting
  // execution of handlers on events like resize and scroll. If you want to
  // rate-limit execution of a function to a single time, see the
  // <jQuery.debounce> method.
  // 
  // In this visualization, | is a throttled-function call and X is the actual
  // callback execution:
  // 
  // > Throttled with `no_trailing` specified as false or unspecified:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X    X    X    X    X    X        X    X    X    X    X    X
  // > 
  // > Throttled with `no_trailing` specified as true:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X    X    X    X    X             X    X    X    X    X
  // 
  // Usage:
  // 
  // > var throttled = jQuery.throttle( delay, [ no_trailing, ] callback );
  // > 
  // > jQuery('selector').bind( 'someevent', throttled );
  // > jQuery('selector').unbind( 'someevent', throttled );
  // 
  // This also works in jQuery 1.4+:
  // 
  // > jQuery('selector').bind( 'someevent', jQuery.throttle( delay, [ no_trailing, ] callback ) );
  // > jQuery('selector').unbind( 'someevent', callback );
  // 
  // Arguments:
  // 
  //  delay - (Number) A zero-or-greater delay in milliseconds. For event
  //    callbacks, values around 100 or 250 (or even higher) are most useful.
  //  no_trailing - (Boolean) Optional, defaults to false. If no_trailing is
  //    true, callback will only execute every `delay` milliseconds while the
  //    throttled-function is being called. If no_trailing is false or
  //    unspecified, callback will be executed one final time after the last
  //    throttled-function call. (After the throttled-function has not been
  //    called for `delay` milliseconds, the internal counter is reset)
  //  callback - (Function) A function to be executed after delay milliseconds.
  //    The `this` context and all arguments are passed through, as-is, to
  //    `callback` when the throttled-function is executed.
  // 
  // Returns:
  // 
  //  (Function) A new, throttled, function.
  
  $.throttle = jq_throttle = function( delay, no_trailing, callback, debounce_mode ) {
    // After wrapper has stopped being called, this timeout ensures that
    // `callback` is executed at the proper times in `throttle` and `end`
    // debounce modes.
    var timeout_id,
      
      // Keep track of the last time `callback` was executed.
      last_exec = 0;
    
    // `no_trailing` defaults to falsy.
    if ( typeof no_trailing !== 'boolean' ) {
      debounce_mode = callback;
      callback = no_trailing;
      no_trailing = undefined;
    }
    
    // The `wrapper` function encapsulates all of the throttling / debouncing
    // functionality and when executed will limit the rate at which `callback`
    // is executed.
    function wrapper() {
      var that = this,
        elapsed = +new Date() - last_exec,
        args = arguments;
      
      // Execute `callback` and update the `last_exec` timestamp.
      function exec() {
        last_exec = +new Date();
        callback.apply( that, args );
      };
      
      // If `debounce_mode` is true (at_begin) this is used to clear the flag
      // to allow future `callback` executions.
      function clear() {
        timeout_id = undefined;
      };
      
      if ( debounce_mode && !timeout_id ) {
        // Since `wrapper` is being called for the first time and
        // `debounce_mode` is true (at_begin), execute `callback`.
        exec();
      }
      
      // Clear any existing timeout.
      timeout_id && clearTimeout( timeout_id );
      
      if ( debounce_mode === undefined && elapsed > delay ) {
        // In throttle mode, if `delay` time has been exceeded, execute
        // `callback`.
        exec();
        
      } else if ( no_trailing !== true ) {
        // In trailing throttle mode, since `delay` time has not been
        // exceeded, schedule `callback` to execute `delay` ms after most
        // recent execution.
        // 
        // If `debounce_mode` is true (at_begin), schedule `clear` to execute
        // after `delay` ms.
        // 
        // If `debounce_mode` is false (at end), schedule `callback` to
        // execute after `delay` ms.
        timeout_id = setTimeout( debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay );
      }
    };
    
    // Set the guid of `wrapper` function to the same of original callback, so
    // it can be removed in jQuery 1.4+ .unbind or .die by using the original
    // callback as a reference.
    if ( $.guid ) {
      wrapper.guid = callback.guid = callback.guid || $.guid++;
    }
    
    // Return the wrapper function.
    return wrapper;
  };
  
  // Method: jQuery.debounce
  // 
  // Debounce execution of a function. Debouncing, unlike throttling,
  // guarantees that a function is only executed a single time, either at the
  // very beginning of a series of calls, or at the very end. If you want to
  // simply rate-limit execution of a function, see the <jQuery.throttle>
  // method.
  // 
  // In this visualization, | is a debounced-function call and X is the actual
  // callback execution:
  // 
  // > Debounced with `at_begin` specified as false or unspecified:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // >                          X                                 X
  // > 
  // > Debounced with `at_begin` specified as true:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X                                 X
  // 
  // Usage:
  // 
  // > var debounced = jQuery.debounce( delay, [ at_begin, ] callback );
  // > 
  // > jQuery('selector').bind( 'someevent', debounced );
  // > jQuery('selector').unbind( 'someevent', debounced );
  // 
  // This also works in jQuery 1.4+:
  // 
  // > jQuery('selector').bind( 'someevent', jQuery.debounce( delay, [ at_begin, ] callback ) );
  // > jQuery('selector').unbind( 'someevent', callback );
  // 
  // Arguments:
  // 
  //  delay - (Number) A zero-or-greater delay in milliseconds. For event
  //    callbacks, values around 100 or 250 (or even higher) are most useful.
  //  at_begin - (Boolean) Optional, defaults to false. If at_begin is false or
  //    unspecified, callback will only be executed `delay` milliseconds after
  //    the last debounced-function call. If at_begin is true, callback will be
  //    executed only at the first debounced-function call. (After the
  //    throttled-function has not been called for `delay` milliseconds, the
  //    internal counter is reset)
  //  callback - (Function) A function to be executed after delay milliseconds.
  //    The `this` context and all arguments are passed through, as-is, to
  //    `callback` when the debounced-function is executed.
  // 
  // Returns:
  // 
  //  (Function) A new, debounced, function.
  
  $.debounce = function( delay, at_begin, callback ) {
    return callback === undefined
      ? jq_throttle( delay, at_begin, false )
      : jq_throttle( delay, callback, at_begin !== false );
  };
  
})(this);
;
/**
 * JavaScript functionality to enhance megamenu navigation.
 * See also images/megamenu-alpha80.png and css/megamenu.css
 */

(function($) { //begin protecting jQuery namespace

var $mm_overlay = null;
var mm_pad_left = 36; //pixels on left to indent the tab containers

Drupal.behaviors.megamenu = {
  attach: function(context, settings) {
    var $megamenu = $('#megamenu', context);

    //generate the overlay div if we need to
    //Display should initially be set to hidden in css/megamenu.css
    if($mm_overlay == null) {
      //can't currently support overlay behind nav in ie7
      if(!($.browser.msie && $.browser.version <= 7)) {
        $mm_overlay = $('<div id="mm-overlay" />').prependTo('body');
      }
    }

    var curr_left_pos = 0;
    $megamenu.find('.mm-tab')
      .each(function() {
        //for each tab, calculate the appropriate "left" value for its
        // container, so that the container appears in center of megamenu.
        var $container = $(this).find('.mm-container');
        $container.css('left', -curr_left_pos + mm_pad_left);

        //by incrementing this global var with the width of each tab,
        // we can figure out how far left the next tab is, and tehrefore
        // how far left the tab container has to be positioned.
        //this is a workaround to trying to use jquery position().left
        // on each tab, which sometimes returns 0 for the last tab in chrome.
        curr_left_pos += $(this).outerWidth();
      })

      .hoverIntent({
        over: function(e) {
          if($mm_overlay) {
            var is_visible = $mm_overlay.is(':visible');
            var no_drop = $(e.target).parents('li').hasClass('mm-no-drop');

            if(is_visible && no_drop) {
              $mm_overlay.fadeOut('fast');
            }
            else if(!is_visible && !no_drop) {
              $mm_overlay.fadeIn('fast');
            }
          }
          $(this).addClass('hover').find('.mm-container').slideDown('fast');
        },

        out: function() {
          $(this).removeClass('hover').find('.mm-container').slideUp('fast');
        },

        timeout: 200
      });


    if($mm_overlay) {
      var config = {
        over: function() {},
        out: function() {
          $mm_overlay.fadeOut('fast');
        },
        timeout: 200
      }
      $megamenu.hoverIntent(config);
    }

  }
};


})(jQuery); //end protecting jQuery namespace
;
(function($) { //begin protecting jQuery namespace

$(document).ready(function() {
  // Debounce is used to prevent all these calculations from being done
  // dozens of times on window resize.
  $(window).bind('resize orientationchange', $.debounce(200, amma_adjust_content));
  $(window).bind('resize orientationchange', $.debounce(100, amma_adjust_responsive_nav));
  $(window).bind('resize orientationchange', $.debounce(200, amma_adjust_responsive_scroller));
  $(window).bind('resize orientationchange', $.debounce(200, amma_adjust_responsive_slideshow));
  $(window).bind('resize orientationchange', $.debounce(200, amma_adjust_quicktabs));

  // Initially adjust some items:
  amma_adjust_content();
  amma_adjust_responsive_nav();
  amma_adjust_responsive_scroller();
  amma_adjust_quicktabs();
});


Drupal.behaviors.amma = {
  attach: function(context, settings) {
    //
    // MAIN NAVIGATION (MEGAMENU) ACTIVE LINKS
    //
    // Set megamenu tabs to be "active" if we are within the section
    //
    var tabs_order = {
      'about': 0,
      'meeting-amma': 1,
      'global-charities': 2,
      'groups': 3,
      'teachings': 4,
      'contacts': 5,
    };
    var base_len = Drupal.settings.basePath.length;
    var path = window.location.pathname.substring(base_len).split('/');
    if(path instanceof Array) {
      var active_idx = tabs_order[ path[0] ];
      if(active_idx >= 0) {
        $('#megamenu .mm-tab', context).eq(active_idx).addClass('active');
      }
    }


    //
    // SOCIAL BLOCK
    //
    // Ensure block does not go all the way to top or bottom of page.
    //
    $('.block-amma-social', context).each(function() {
      var main_top = $('#main').offset().top;
      var block_height = 218; //set to height of block
      var win_height = $(window).height();

      if((main_top + block_height) < win_height) {
        $(this).css('top', main_top);
      }

      $(this).fadeIn('slow');
    });

    //
    // HOMEPAGE SLIDESHOW - LINKS
    //
    // Make image clickable if a URL was provided.
    //
    $('.slideshow-home .views-row', context).each(function() {
      var $slideshow = $(this);
      var $link = $(this).find('.views-field-field-slide-img a');
      if ($link.length) {
        $slideshow.find('.views-field-body').children(':not(a)')
          .css('cursor', 'pointer')
          .click(function(e) {
            e.stopPropagation();
            document.location = $link[0].href;
          });
      }
    });


    //
    // FORM INPUT WIDGETS - LABELS
    //
    // Move labels inside the field until focus.
    //
    var labeledForms = $('#zip-search-form .form-text, .newsletter-form .form-text', context);
    // Initialize fields:
    labeledForms.each(function() {
      var label = $(this).siblings('label').hide().text();

      //initially, copy the label text into the field
      if($(this).val() == '') {
        $(this).val(label).addClass('empty');
      }
    });
    labeledForms
      .live('focus', function() {
        var label = $(this).siblings('label').text();

        //make sure we don't empty some user-provided text.
        if($(this).val() == label) {
          $(this).val('').removeClass('empty');
        }
      })
      .live('blur', function() {
        var label = $(this).siblings('label').text();

        //if the user empties the field, put the label back in there.
        if($(this).val() == '') {
          $(this).val(label).addClass('empty');
        }
      });


    //
    // FORM SELECT / OPTION WIDGETS - LABELS & BUTTON
    //
    // Move label into first option if no other option is already empty.
    // Hide button and submit form on change of selector.
    //
    $('#region-switcher-form', context).each(function() {
      var $form = $(this);
      var $select = $form.find('.form-select');

      //if there is no empty option, we can proceed:
      if( !$select.find("option[value='']")[0] ) {
        var label = $(this).find('label').hide().text();
        $select.prepend( '<option value="" selected="selected">' + label + '</option>' );
      }

      $select.change(function() {
        $form.submit();
      });
      $form.find('.form-submit').hide();
    });


    //
    // TOUR BOXES
    //
    // Set up hover and click handlers for tour boxes.
    //
    $('.tour-box', context)
      .hover(
        function() { $(this).addClass('hover'); },
        function() { $(this).removeClass('hover'); }
      )
      .click(function(e) {
        var href = $(this).find('.tour-region a')[0].href;
        //extra check so we don't override some existing link target
        if(href && !e.target.href) {
          window.location.href = href;
        }
      });


    //
    // SCROLLER
    //
    // Set up hover scroll boxes.
    //
    $('.scroller .jcarousel-item', context)
      .hover(
        function() { $(this).addClass('hover'); },
        function() { $(this).removeClass('hover'); }
      )
      .click(function(e) {
        //if this is a scroller for events, use the URL to the event node
        // as the target of any click:
        var href = $(this).find('.event-title a')[0].href;
        //extra check so we don't override some existing link target
        if(href && !e.target.href) {
          window.location.href = href;
        }
      });


    //
    // GROUP SEARCH - ZIP CODE SELECTOR
    //
    /*
    var milesSelector = '<select name="circle[value]" class="form-select" id="edit-circle-value">';
    milesSelector += '<option value="15">15</option>';
    milesSelector += '<option value="30">30</option>';
    milesSelector += '<option value="50">50</option>';
    milesSelector += '<option value="100">100</option>';
    milesSelector += '<option value="200">200</option>';
    milesSelector += '</select>';
    $('.groups-search-form-block #edit-circle-value', context).replaceWith(milesSelector);
    */


  } //end attach()
}; //end Drupal.behavors.amma


/**
 * Adjust number of items in jcarousel that can scroll at once.
 */
var amma_adjust_responsive_scroller = function() {
  var wwidth = $(window).width();

  $('.guides-scroller, .events-scroller').each(function() {
    var carousel = $(this).find('ul.jcarousel').data('jcarousel');
    if (carousel) {
      var scroll_orig = $(this).data('scroll_orig');
      // Save the original scroll value if needed:
      if (!scroll_orig) {
        scroll_orig = carousel.options.scroll;
        $(this).data('scroll_orig', scroll_orig);
      }
      if (wwidth > 980) {
        carousel.options.scroll = scroll_orig;
      }
      else if(wwidth > 480) {
        carousel.options.scroll = 2;
      }
      else {
        carousel.options.scroll = 1;
      }
    }
  });
}


/**
 * Adjust height of Views Slideshow items automatically
 * to allow for responsive functionality.
 */
var amma_adjust_responsive_slideshow = function() {
  $('.slideshow .views_slideshow_cycle_main').each(function () {
    var img_height = 0;
    $(this).find('.views-slideshow-cycle-main-frame-row-item').each(function () {
      // need to make items visible so height can be measured:
      var $shown = $(this).parents('.views-slideshow-cycle-main-frame').find('div').show();
      var tmp_img_height = $(this).height();
      if (tmp_img_height > img_height) {
        img_height = tmp_img_height;
      }
    });
    if (img_height > 0) {
      $(this).height(img_height)
        .children('.views-slideshow-cycle-main-frame').height(img_height);
    }
  });
}


/**
 * Set up responsive mini menu navigation if browser width is less than 960px.
 */
var amma_adjust_responsive_nav = function() {
  //
  // Configure:
  //
  // What is the max width in pixels at which to display the mini menu?
  var max_width = 960; //do not add 'px'

  var wwidth = $(window).width();
  var $minimenu = $('#mini-menu, #mini-menu-control');

  if (wwidth < max_width) {
    //
    // Mini Menu - Show mini menu control and set up menu
    //
    if ($minimenu[0] && $minimenu.css('display') == 'none') {
      $('#mini-menu-control').show();
    }
    else if (!$minimenu[0]) {
      // gather up nav items into a UL list:
      var $nav = $('#megamenu').clone().attr('id', '');
      $nav
        .addClass('menu')
        .children('li').removeClass('mm-tab')
        .children('.mm-container').remove();
      $nav.find('a').removeClass('mm-tab-link');

      $nav.find('ul').hide();
      $nav.find('a, .responsive-header').click(function(e) {
        var $submenu = $(this).next('ul');
        if ($submenu.length && !$submenu.is(':visible')) {
          $nav.find('a, .responsive-header').removeClass('active');
          $(this).addClass('active');
          // don't follow this link, we'll open submenu instead
          e.preventDefault();
          e.stopPropagation();
          // close other submenus:
          $nav.find('li > ul:visible').not( $(this).parents('ul') ).slideUp('medium');
          // now open submenu: 
          //$submenu.slideDown('medium');
          $submenu.animate({height:'show', useTranslate3d:true}, 400, function() { });
        }
      });

      $('#navigation')
        .prepend('<div id="mini-menu-control"><span>' + Drupal.t('Menu') + '</span></div>')
        .after('<div id="mini-menu"><div id="mini-menu-inner"></div></div>');
      $('#mini-menu-inner').html($nav);

      $('#mini-menu-control span').click(function() {
        //$('#mini-menu').slideToggle('medium');
        $('#mini-menu').animate({height:'toggle', useTranslate3d:true}, 400, function() {});
      });
    }
  }
  else {
    $('#mini-menu, #mini-menu-control').hide();
  }
};


/**
 * Adjust content based on width of display.
 */
var amma_adjust_content = function() {
  var wwidth = $(window).width();

  //
  // HOME PAGE
  // Set equal heights on featured stories blocks on home:
  //
  _amma_set_equal_heights('.featured-stories-block', '.views-row .middle-content', 740);
  _amma_set_equal_heights('.get-involved-block', '.views-row .middle-content', 740);

  //
  // TOUR DETAIL PAGE
  // Move blocks when screen is <= 740px wide.
  //
  if ($('body.node-type-tour-stop').length) {
    _amma_responsive_move_block('.tour-notices-block', '.tour-map-block', 740);
    _amma_responsive_move_block('#block-views-tour-blocks-block', '#main-content', 740);
  }

  //
  // CHARITIES DETAIL PAGE
  // Move blocks at different widths
  //
  if ($('body.node-type-charity').length) {
    _amma_responsive_move_block('.embracing-block', '#block-system-main', 960);
    _amma_responsive_move_block('.subnav-block', '.region-content-bottom', 740);
  }
  // Special case for the section landing page:
  if ($('body.section-global-charities.node-type-page').length) {
    _amma_responsive_move_block('.embracing-block', '#main-content', 960);
  }


  //
  // PROJECTS DETAIL PAGE
  // Move blocks at different widths
  //
  if ($('body.node-type-project').length) {
    _amma_responsive_move_block('.embracing-block', '#block-system-main', 960);
  }
}


var _amma_responsive_move_block = function(block, below, pixel_cutoff) {
  var wwidth = $(window).width();

  if (wwidth <= pixel_cutoff) {
    // If we already have processed blocks, toggle as necessary:
    var $newblocks = $(block + '.responsive-visible-block');
    if ($newblocks.length) {
      $newblocks.show();
      $(block + '.responsive-hidden-block').hide();
    }
    // Otherwise process block and move it to
    // after the given div (the "below" div)
    else {
      var $block = $(block);
      $newblock = $block.clone();
      $block.addClass('responsive-hidden-block').hide();
      $newblock.addClass('responsive-visible-block')
        .insertAfter(below);
    }
  }
  // If we had already moved blocks around, they would have
  // some clases applied to help us identify them and reset
  // them to their initial states.
  else {
    $(block + '.responsive-hidden-block').show();
    $(block + '.responsive-visible-block').hide();
  }
}


var _amma_set_equal_heights = function(wrapper, div, pixel_lower, pixel_upper) {
  var wwidth = $(window).width();

  if (typeof(pixel_upper) == 'undefined') {
    pixel_upper = 99999;
  }

  if (wwidth > pixel_lower && wwidth < pixel_upper) {
    $(wrapper).each(function() {
      var $rows = $(this).find(div);
      if ($rows.length) {
        $rows.css('height', 'auto');
        var min_height = $rows.height();

        $rows.each(function(idx, row) {
          var $row = $(row);
          var row_height = $row.height();
          if (row_height > min_height) {
            min_height = row_height;
          }
        });
        $rows.each(function() {
          $(this).css('height', min_height + 'px');
        });
      }
    });
  }
}


/**
 * Set up responsive quicktabs for Programs Tabs block
 * so that clicking on a tab scrolls to the tabpage.
 */
var amma_adjust_quicktabs = function() {
  //
  // Configure:
  //
  // What is the width in pixels below which to make the tabs scroll?
  var max_width = 740; //do not add 'px'

  var wwidth = $(window).width();

  if (wwidth <= max_width) {
    $('.programs-tabs-block ul.quicktabs-tabs li > a').bind('click', _amma_adjust_quicktabs_click);
  }
  else {
    $('.programs-tabs-block ul.quicktabs-tabs li > a').unbind('click', _amma_adjust_quicktabs_click);
  }
};


/**
 * Internal function that sets click event for tabs.
 * Needed as separate function so we can unbind it too.
 */
var _amma_adjust_quicktabs_click = function(e) {
  // How many milliseconds should the scroll action should take?
  var scroll_time = 450; //time in milliseconds. Do not add 'ms'.

  e.preventDefault();

  $.scrollTo( $(e.target).parents('.tabs-block').find('.quicktabs_main'), scroll_time, {axis: 'y', offset:-26} );
}


})(jQuery); //end protecting jQuery namespace
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_complete', function () {
      var cbox = $('#cboxTitle', context);

      // Only run if there is a title.
      if (!cbox.is(':empty')) {
        cbox.wrapInner('<div class="caption-wrapper" />');

        var timer = setTimeout(function () { cbox.slideUp() }, 4000);

        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          clearTimeout(timer);
          cbox.slideDown();
        });

        $('#cboxOverlay', context).bind('mouseover', function () {
          clearTimeout(timer);
          cbox.slideUp();
        });

      }
      else {
        cbox.hide();
      }
    });
  }
};

})(jQuery);
;
/**
 * @file
 * Javascript customizations for OpenLayers maps.
 */

/**
 * Override of theme function found in openlayers_behavior_popup.js:
 *
 * Javascript Drupal Theming function for inside of Popups
 *
 * @param feature
 *  OpenLayers feature object.
 * @return
 *  Formatted HTML.
 */
Drupal.theme.openlayersPopup = function(feature) {
  var output = '';

  //
  // LOCATION NAME/TITLE
  //
  //if location name atribute exists, use that instead of node title:
  if (feature.attributes.field_tour_loc_rendered) {
    output += '<div class="openlayers-popup openlayers-tooltip-name">' + feature.attributes.field_tour_loc_rendered + '&nbsp;&rsaquo;</div>';
  }
  //otherwise use node title:
  else if (feature.attributes.name) {
    output += '<div class="openlayers-popup openlayers-tooltip-name">' + feature.attributes.name + '&nbsp;&rsaquo;</div>';
  }

  //
  // DESCRIPTION
  //
  if (feature.attributes.description) {
    output += '<div class="openlayers-popup openlayers-tooltip-description">' + feature.attributes.description + '</div>';
  }

  //
  // DIRECTIONS
  //
  //add a "Directions" link to tour and group location maps:
  //The openlayers data overlay View must have a 
  // a field_group_loc and title_1 field (for groups)
  // or a field_tour_loc field (for tours):
  if (feature.attributes.field_group_loc_rendered || feature.attributes.field_tour_loc_1_rendered) {

    var latlon = '';
    var name = '';
    if(feature.attributes.field_group_loc_rendered) {
      name = '+(' + feature.attributes.title_1_rendered + ')';
      latlon = feature.attributes.field_group_loc_rendered;
      //strip HTML and clean up resulting extra spaces:
      latlon = latlon.replace(/(<([^>]+)>)/ig,' ').replace(/\s{2,}/g, ' ');
    }
    else {
      name = ''; //name is already tour_loc field
      latlon = feature.attributes.field_tour_loc_1_rendered;
      //strip HTML and clean up resulting extra spaces:
      latlon = latlon.replace(/(<([^>]+)>)/ig,' ').replace(/\s{2,}/g, ' ');
    }

    output += '<div class="openlayers-popup openlayers-tooltip-directions">' + '<a href="http://maps.google.com/maps?saddr=&daddr=' + latlon + name + '" target="_new">' + Drupal.t('Directions &rsaquo;') + '</a></div>';
  }
 
  return output;
};

;
