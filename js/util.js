"use strict";

function getFormDataById(form) {
    let elements = form.elements;
    let obj = {};
    for(let i = 0 ; i < elements.length ; i++){
        let item = elements.item(i);
        if (item.type == 'submit' || item.type == 'reset' || item.type == 'button')
            continue;
        obj[item.id] = item.value;
    }

    return obj;
}

