"use strict";

showSubscriptionMainPanel();

//-----------------------------------------------------------------------------------------------

async function showSubscriptionForm() {
    const dvSubscription = document.getElementById('dvSubscription');
    const fetchObject = await fetch('subscription.html');
    const data = await fetchObject.text();

    try {
        dvSubscription.innerHTML = data;
        dvSubscription.classList.remove('col-lg-4');
        dvSubscription.classList.add('col-lg-12');
        let scripts = dvSubscription.getElementsByTagName('script');

        for (const script of scripts) {
            eval(script.text);
        }

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function showSubscriptionMainPanel() {
    changePanel('subscriptionMainPanel.html');
}

function showCheckSubscriptionForm() {
    changePanel('checkSubscription.html');
}

async function changePanel(page, removeClass, addClass) {
    const dvSubscription = document.getElementById('dvSubscription');
    const fetchObject = await fetch(page);
    const data = await fetchObject.text();

    try {
        dvSubscription.innerHTML = data;

        if (removeClass)
            dvSubscription.classList.remove(removeClass);

        if (addClass)
            dvSubscription.classList.add(addClass);

        const scripts = dvSubscription.getElementsByTagName('script');

        for (const script of scripts) {
            eval(script.text);
        }

    } catch (error) {
        console.error('There has been a problem with your fetch operation: ', error);
    }
}

function getFormDataById(form) {
    let elements = form.elements;
    let obj = {};
    
    for (let i = 0; i < elements.length; i++) {
        let item = elements.item(i);
        if (item.type == 'submit' || item.type == 'reset' || item.type == 'button')
            continue;
        obj[item.id] = item.value;
    }

    return obj;
}

