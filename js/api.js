"use strict";

let server = "https://fullstack.della-mura.com.br/";
let subscriptionEndPoint = server + "api/subscription";

function doPost(url, object, fnOk, fnError){
    fetch(url, {
        method: 'post',
        redirect: 'follow',
        headers: new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(object )
    }).then(function(response) {
        response.json().then(function(data){
            fnOk(response.status, data);
        }).catch(function(error) {
            fnError(response.status, error);
        });
    }).catch(function(error) {
        fnError(response.status, error);
    });
}



function doGet(url, fnOk, fnError){
    fetch(url, {
        method: 'get',
        redirect: 'follow',
        headers: new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'}),
    }).then(function(response) {
        response.json().then(function(data){
            fnOk(response.status, data);
        });
    }).catch(function(error) {
        fnError(response.status, error);
    });
}

function doRequest(url, fnOk, fnError){
    fetch(url, {
        method: 'get',
        redirect: 'follow',
        headers: new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'}),
    }).then(function(response) {
        response.json().then(function(data){
            fnOk(response.status, data);
        }).catch(function(error) {
            fnError(response.status, error);
        });
    }).catch(function(error) {
        fnError(response.status, error);
    });
}


function toApiDate(date) {
    let d = date.split('/');
    return (d[2]+'-'+d[1]+'-'+d[0]);
}