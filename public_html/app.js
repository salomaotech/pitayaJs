$(document).ready(function () {

    $.when(
            $.getScript("classes/LoadCss.js"),
            $.getScript("classes/RouterController.js"),
            $.Deferred(function (deferred) {
                $(deferred.resolve);
            })
            ).done(function () {

        new LoadCss().load("assets/css/main.css");
        new RouterController().resolve();

    });

});