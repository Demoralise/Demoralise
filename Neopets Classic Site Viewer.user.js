// ==UserScript==
// @name           Neopets Classic Site Viewer
// @namespace
// @include        http://www.neopets.com/*
// @include        https://www.neopets.com/*
// @description    Click the Neopets logo at the top of pages to load their classic layout equivalent!
// @copyright    Demoralise  
// @grant          none
// ==/UserScript==


(function() {
    'use strict';
    function cl(el,cls) {return el.getElementsByClassName(cls);}
    var logobutton = cl(document,"nav-logo__2020")[0].parentNode;
    var newURL = window.location.href + "/\classic.phtml";
    logobutton.setAttribute("href",newURL);
})();