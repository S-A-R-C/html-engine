// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗   ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚══╗ ║║ ║   ╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗╔══╝ ╚╝ ║       ║ ║  ║ ╚═════╗
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝║ ╔╗ ╔══╝       ║ ║  ╚═════╗ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗║ ║║ ╚══╗╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚════╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import * as UtilityEngine from '@sarc-test/utility-engine';

// ╔═╗╔═╗╔═╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═╗╔═╗╔═╗
// ║ ║║ ║║ ║╚══╗ ╔══╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═══╗ ║║ ║║ ║║ ║
// ║ ║║ ║║ ║   ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║
// ║ ║║ ║║ ║   ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║
// ║ ╚╝ ╚╝ ║╔══╝ ╚══╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═══╝ ║║ ╚╝ ╚╝ ║
// ╚═══════╝╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝

export function getWindow() {   //
    return window;              //
}

// ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝
//  ║ ║  ║ ║║ ║   ║ ║║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║
//  ║ ║  ║ ║║ ║   ║ ║║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║
// ╔╝ ╚══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝

export function getDocument() { //
    return document;            //
}

// ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝╚╗ ╔══╗ ║
//    ║ ║    ║ ║  ║ ║
//    ║ ║    ║ ║  ║ ║
// ╔══╝ ╚══╗╔╝ ╚══╝ ║
// ╚═══════╝╚═══════╝

export function isValidElementId(value) {       //
    return UtilityEngine.isFilledString(value); //
}

export function getElementById(id) {                                        //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝
// ║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║
// ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝

export function isElement(value) {      //
    return value instanceof Element ||  //
        value instanceof HTMLDocument;  //
}

// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ║║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
// ║ ╚═════╗╔══╝ ╚╝ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
// ║ ╔═════╝║ ╔╗ ╔══╝║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ║ ╚═════╗║ ║║ ╚══╗║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚════╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

export default {
    getWindow,
    getDocument,

    isValidElementId,
    getElementById,


    isElement,
}