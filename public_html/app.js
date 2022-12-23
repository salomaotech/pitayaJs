$(document).ready(function () {

    $.when(
            $.getScript("classes/Body.js"),
            $.getScript("classes/LoadCss.js"),
            $.getScript("classes/RouterController.js"),
            $.getScript("classes/LoadComponent.js"),
            $.Deferred(function (deferred) {
                $(deferred.resolve);
            })
            ).done(function () {

        var body = new Body();
        new RouterController().resolve(body);
        new LoadCss().load("assets/css/main.css", body);

    });

});