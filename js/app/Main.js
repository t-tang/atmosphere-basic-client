/*
 * The main app for a basic atmosphere client
 */
define(
    ['EventBus','Services'],
    function(EventBus,Services, HostConfig){
        'use strict';

        /** Subscribe to intra day prices when the websocket is connected */
        EventBus.listen(Services.messages.ConnectResponse,function(){
            Services.intradayPrice.subscribe({subjects:'HSBA.L'});
        });

        /** Simply log message */
        EventBus.listen(Services.messages.IntradayPrice,function(message){
            console.log(message);
        });

        /* Create the web socket **/
        Services.connect();
    });
