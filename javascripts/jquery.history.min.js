(function($)
{if(typeof console==='undefined'){console=typeof window.console!=='undefined'?window.console:{};}
console.log=console.log||function(){};console.debug=console.debug||console.log;console.warn=console.warn||console.log;console.error=console.error||function(){var args=[];for(var i=0;i<arguments.length;i++){args.push(arguments[i]);}alert(args.join("\n"));};console.trace=console.trace||console.log;console.group=console.group||console.log;console.groupEnd=console.groupEnd||console.log;console.profile=console.profile||console.log;console.profileEnd=console.profileEnd||console.log;$.History={options:{debug:false},state:'',$window:null,$iframe:null,handlers:{generic:[],specific:{}},format:function(hash){hash=hash.replace(/^.*#/g,'');return hash;},getState:function(){var History=$.History;return History.state;},setState:function(state){var History=$.History;state=History.format(state)
History.state=state;return History.state;},getHash:function(){var History=$.History;var hash=History.format(window.location.hash||location.hash);return hash;},setHash:function(hash){var History=$.History;hash=History.format(hash);if(typeof window.location.hash!=='undefined'){if(window.location.hash!==hash){window.location.hash=hash;}}else if(location.hash!==hash){location.hash=hash;}
return hash;},go:function(to){var History=$.History;to=History.format(to);var hash=History.getHash();var state=History.getState();if(to!==hash){History.setHash(to);}else{if(to!==state){History.setState(to);}
History.trigger();}
return true;},hashchange:function(e){var History=$.History;var hash=History.getHash();History.go(hash);return true;},bind:function(state,handler){var History=$.History;if(handler){if(typeof History.handlers.specific[state]==='undefined')
{History.handlers.specific[state]=[];}
History.handlers.specific[state].push(handler);}
else{handler=state;History.handlers.generic.push(handler);}
return true;},trigger:function(state){var History=$.History;if(typeof state==='undefined'){state=History.getState();}
var i,n,handler,list;if(typeof History.handlers.specific[state]!=='undefined'){list=History.handlers.specific[state];for(i=0,n=list.length;i<n;++i){handler=list[i];handler(state);}}
list=History.handlers.generic;for(i=0,n=list.length;i<n;++i){handler=list[i];handler(state);}
return true;},construct:function(){var History=$.History;$(document).ready(function(){History.domReady();});return true;},configure:function(options){var History=$.History;History.options=$.extend(History.options,options);return true;},domReadied:false,domReady:function(){var History=$.History;if(History.domRedied){return;}
History.domRedied=true;History.$window=$(window);History.$window.bind('hashchange',this.hashchange);setTimeout(History.hashchangeLoader,200);return true;},hashchangeLoader:function(){var History=$.History;if(!($.browser.msie&&parseInt($.browser.version)>=8)){var checker;if($.browser.msie){History.$iframe=$('<iframe id="jquery-history-iframe" style="display: none;"></$iframe>').prependTo(document.body)[0];History.$iframe.contentWindow.document.open();History.$iframe.contentWindow.document.close();var iframeHit=false;checker=function(){var hash=History.getHash();var state=History.getState();var iframeHash=History.format(History.$iframe.contentWindow.document.location.hash);if(state!==hash){if(!iframeHit){History.$iframe.contentWindow.document.open();History.$iframe.contentWindow.document.close();History.$iframe.contentWindow.document.location.hash=hash;}
iframeHit=false;History.$window.trigger('hashchange');}
else{if(state!==iframeHash){iframeHit=true;History.setHash(iframeHash);}}};}
else{checker=function(){var hash=History.getHash();var state=History.getState();if(state!==hash){History.$window.trigger('hashchange');}};}
setInterval(checker,200);}
else{var hash=History.getHash();if(hash){History.$window.trigger('hashchange');}}
return true;}};$.History.construct();})(jQuery);