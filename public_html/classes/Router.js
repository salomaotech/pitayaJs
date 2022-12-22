class Router {

    resolve() {

        var pageName = window.location.search.replace("?", "");

        if (pageName === "") {

            pageName = "home";

        }

        var includeFile = new IncludeFile();
        includeFile.addFile("views/" + pageName + ".js");
        includeFile.load();

    }

}

/* document ready */
$(document).ready(function () {

    new Router().resolve();

});