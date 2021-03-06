"use strict";



//-----------------------------------------------------------------------------------------------

function showSubscriptionForm(){
    changePanel('subscription.html','col-lg-4','col-lg-12');
}

function showSubscriptionMainPanel(){
    changePanel('subscriptionMainPanel.html','col-lg-12','col-lg-4');
}

function showCheckSubscriptionForm(){
    changePanel('checkSubscription.html');
}

function changePanel(page, removeClass, addClass){

    var dvSubscription = document.getElementById('dvSubscription');
    
    fetch(page)
        .then(function(response) {
            response.text().then(function(data){                
                dvSubscription.innerHTML = data;
                if (removeClass)
                    dvSubscription.classList.remove(removeClass);
                if (addClass)
                    dvSubscription.classList.add(addClass);
                let scripts = dvSubscription.getElementsByTagName('script');
                for (let i = 0; i<scripts.length; i++){
                    eval(scripts[i].text);
                }
            });
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });

}

async function load(page, toDiv){
    var toDiv = document.getElementById(toDiv);
    try {
        let fetchResult = await fetch(page);
        let data = await fetchResult.text();
       
        toDiv.innerHTML = data;
        let scripts = toDiv.getElementsByTagName('script');
        for (const script of scripts) {                
            eval(script.text);
        }        
    } catch(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        return false;
    };
    return true;
}

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

