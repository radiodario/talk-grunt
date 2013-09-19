require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        deckjs: '../bower_components/deck.js/core/deck.core',
        deckjsHash: '../bower_components/deck.js/extensions/hash/deck.hash'
    },
    shim: {
        deckjs: {
            deps: ['jquery']
        },
        deckjsHash: {
            deps: ['deckjs']
        }
    }
});

require(['app', 'jquery', 'deckjsHash', 'deckjs'], function (app, $) {
    'use strict';
    // use app here
    $.deck('.slide')
    
});
