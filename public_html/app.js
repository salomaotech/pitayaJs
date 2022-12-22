$(document).ready(function () {

    $.when(
            $.getScript("classes/LoadCss.js"),
            $.getScript("components/Body.js"),
            $.getScript("classes/RouterController.js"),
            $.Deferred(function (deferred) {
                $(deferred.resolve);
            })
            ).done(function () {

        var body = new Body();
        new LoadCss().load("assets/css/main.css");
        new RouterController().resolve(body);

    });

});