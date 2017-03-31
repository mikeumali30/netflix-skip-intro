// ==UserScript==
// @name         Netflix Skip Intro
// @namespace    http://noahkiss.me/
// @author       Noah Kiss
// @description  Auto-skip intro on supported Netflix series
// @version      0.1.0
// @include      https://www.netflix.com/watch*
// @grant        none
// ==/UserScript==

setInterval(function () {
    'use strict';

    if (!document.querySelector('div.skip-credits').classList.contains('skip-credits-hidden')) {
        document.querySelector('a.nf-icon-button.nf-flat-button.no-icon').click();
    }

}, 3000);