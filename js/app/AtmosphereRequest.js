define(
    ['EventBus','Atmosphere','jquery','HostConfig'],
    function(EventBus,Atmosphere,$,HostConfig){
        'use strict';

        var ServiceRequest = function(serviceUrl,params){
            this.url = this.baseUrl + serviceUrl + $.param(params,true);
        };

        ServiceRequest.prototype.baseUrl = HostConfig.hostUrl + 'services/';
        ServiceRequest.prototype.contentType = 'application/json';
        ServiceRequest.prototype.transport = 'websocket';
        ServiceRequest.prototype.fallbackTransport = 'long-polling';
        ServiceRequest.prototype.onMessage = function(response) {
            var responseBody = $.parseJSON(response.responseBody);
            EventBus.post(responseBody.messageType,responseBody);
        };

        ServiceRequest.prototype.send = function() {
            new Atmosphere.AtmosphereRequest().subscribe(this);
        };

        return Object.freeze(ServiceRequest);

    });
