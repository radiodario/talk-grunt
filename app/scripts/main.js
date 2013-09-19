require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        deckjs: '../bower_components/deck.js/core/deck.core',
        deckjsHash: '../bower_components/deck.js/extensions/hash/deck.hash',
        deckjsCodemirror : '../bower_components/deck.js-codemirror/deck.codemirror',
        codemirror: '../bower_components/deck.js-codemirror/codemirror',
        cmJssyntax: '../bower_components/deck.js-codemirror/mode/javascript/javascript',
        fitText: '../bower_components/fittext/fittext'
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
        },
        fitText: {
            exports: ['fitText']
        }
    }
});


require(['app', 'jquery', 'deckjsHash', 'deckjsCodemirror', 'cmJssyntax', 'deckjs' ], function (app, $, fitText) {
    'use strict';
    // use app here
    $.deck('.slide')
    // fitText()
    
});
