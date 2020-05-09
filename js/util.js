"use strict";

function getFormData(form) {
    let elements = form.elements;
    let obj ={};
    for(let i = 0 ; i < elements.length ; i++){
        let item = elements.item(i);
        obj[item.name] = item.value;
    }

    return obj;
}