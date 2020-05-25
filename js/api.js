"use strict";

const server = "https://fullstack.della-mura.com.br/";
const subscriptionEndPoint = server + "api/subscription";
const jsonHeaders = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
});

function doPost(url, object, fnOk, fnError) {
    fetch(url, {
        method: 'post',
        redirect: 'follow',
        headers: jsonHeaders,
        body: JSON.stringify(object)
    }).then(function (response) {
        response.json().then(function (data) {
            fnOk(response.status, data);
        }).catch(function (error) {
            fnError(response.status, error);
        });
    }).catch(function (error) {
        fnError(response.status, error);
    });
}

function doGet(url, fnOk, fnError) {
    fetch(url, {
        method: 'get',
        redirect: 'follow',
        headers: jsonHeaders,
    }).then(function (response) {
        response.json().then(function (data) {
            fnOk(response.status, data);
        }).catch(function (error) {
            fnError(response.status, error);
        });
    }).catch(function (error) {
        fnError(response.status, error);
    });
}


function toApiDate(date) {
    let d = date.split('/');
    return (d[2] + '-' + d[1] + '-' + d[0]);
}