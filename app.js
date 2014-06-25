requirejs.config({
    baseUrl: 'js',
    paths: {

        jquery: 'lib/jquery/jquery-2.0.3',
        Atmosphere: 'lib/atmosphere/atmosphere-2.1.6',

        EventBus: 'app/EventBus',
        RestRequest: 'app/RestRequest',
        AtmosphereRequest: 'app/AtmosphereRequest',
        Services: 'app/Service',

        HostConfig: 'Dev1/HostConfig'
    }
});

requirejs(['app/main']);
