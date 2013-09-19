require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        deckjs: '../bower_components/deck.js/core/deck.core',
        deckjsHash: '../bower_components/deck.js/extensions/hash/deck.hash',
        deckjsCodemirror : '../bower_components/deck.js-codemirror/deck.codemirror',
        codemirror: '../bower_components/deck.js-codemirror/codemirror',
        cmJssyntax: '../bower_components/deck.js-codemirror/mode/javascript/javascript'
    },
    shim: {
        codemirror: {
            exports: 'codemirror'
        },
        deckjs: {
            deps: ['jquery']
        },
        deckjsHash: {
            deps: ['deckjs']
        },
        deckjsCodemirror: {
            deps: ['codemirror', 'deckjs']
        },
        cmJssyntax: {
            deps: ['codemirror']
        }
    }
});

require(['app', 'jquery', 'deckjsHash', 'deckjsCodemirror', 'cmJssyntax', 'deckjs'], function (app, $) {
    'use strict';
    // use app here
    $.deck('.slide')
    
});
