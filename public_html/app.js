$(document).ready(function () {

    $.when(
            $.getScript("classes/Body.js"),
            $.getScript("classes/LoadCss.js"),
            $.getScript("classes/LoadComponent.js"),
            $.getScript("classes/RouterController.js"),
            $.Deferred(function (deferred) {
                $(deferred.resolve);
            })
            ).done(function () {

        new RouterController().resolve();
        new LoadCss().load("assets/css/main.css");

    });

});