$(document).ready(function () {

    $.when(
            $.getScript("classes/Router.js"),
            $.getScript("classes/Page.js"),
            $.getScript("classes/Widget.js"),
            $.Deferred(function (deferred) {
                $(deferred.resolve);
            })
            ).done(function () {

        new Router().resolve();
        new Page().addStyleCss("assets/css/main.css");

    });

});