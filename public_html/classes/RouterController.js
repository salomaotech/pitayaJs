class RouterController {

    resolve() {

        var viewName = window.location.search.replace("?", "");

        if (viewName !== "") {

            $.getScript("views/" + viewName + ".js");

        }

    }

}