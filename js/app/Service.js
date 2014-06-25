define(
    ['AtmosphereRequest','RestRequest','EventBus'],
    function(AtmosphereRequest,RestRequest,EventBus){
        'use strict';

        var serviceUrls = {
            connect : 'connect',
            intradayPrice: { subscribe : 'intradayprice/subscribe' }
        };


        var messages = {
            ConnectResponse: 'ConnectResponse',
            IntradayPrice: 'IntradayPrice'
        };

        var clientId = '';

        function connect() {
            new AtmosphereRequest(serviceUrls.connect,{}).send();
        }

        function intradayPriceSubscribe(subjects) {
            new RestRequest(clientId,serviceUrls.intradayPrice.subscribe,subjects).send();
        }

        EventBus.listen(messages.ConnectResponse, function(connectResponse){
            // TODO: server restart check
            clientId = connectResponse.clientId;
        });

        return Object.freeze({
            connect: connect,
            intradayPrice: {
                subscribe: intradayPriceSubscribe
            },

            messages: messages
        });
    });

