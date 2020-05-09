"use strict";

document.getElementById('btnSubscriptionForm').addEventListener('click', showSubscriptionForm);

//-----------------------------------------------------------------------------------------------

function showSubscriptionForm(){

    var dvSubscription = document.getElementById('dvSubscription');
    

    fetch('subscription.html')
        .then(function(response) {
            response.text().then(function(data){                
                dvSubscription.innerHTML = data;
                dvSubscription.classList.remove('col-lg-4');
                dvSubscription.classList.add('col-lg-12');
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