require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        deckjs: '../bower_components/deck.js/core/deck.core',
        deckjsHash: '../bower_components/deck.js/extensions/hash/deck.hash',
        deckjsCodemirror : '../bower_components/deck.js-codemirror/deck.codemirror',
        codemirror: '../bower_components/deck.js-codemirror/codemirror',
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
        }
    }
});

require(['app', 'jquery', 'deckjsHash', 'deckjsCodemirror', 'deckjs'], function (app, $) {
    'use strict';
    // use app here
    $.deck('.slide')
    
});
