$(document).ready(function () {

    $.when(
            $.getScript("classes/LoadScript.js"),
            $.getScript("classes/Css.js"),
            $.getScript("classes/Router.js"),
            $.Deferred(function (deferred) {
                $(deferred.resolve);
            })
            ).done(function () {

        new Css().loadCssFile("assets/css/main.css");
        new Router().resolve();

    });

});