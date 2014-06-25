define(
    ['jquery','HostConfig'],
    function($,HostConfig){
        'use strict';
        // Rest request
        var RestRequest = function(clientId,serviceUrl,queryParams) {
            this.url = this.baseUrl + serviceUrl;
            this.data = $.extend({},queryParams);
            this.data.clientId = clientId;
        };

        RestRequest.prototype.baseUrl = HostConfig.hostUrl + 'services/';
        RestRequest.prototype.send = function() {
            $.getJSON(this.url,this.data);
        };

        return Object.freeze(RestRequest);
    });
