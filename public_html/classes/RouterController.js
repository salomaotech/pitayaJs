class RouterController {

    resolve() {

        var viewName = window.location.search.replace("?", "") === "" ? "home" : window.location.search.replace("?", "");

        $.when($.get("views/" + viewName + ".html")).done(function (response) {
            new Body().setBodyContent(new DOMParser().parseFromString(response, "text/html").body.innerHTML);
        });

    }

}