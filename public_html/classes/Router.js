class Router {

    resolve() {

        var pageName = window.location.search.replace("?", "");

        if (pageName === "") {

            pageName = "home";

        }
        
        new LoadScript().load("views/" + pageName);

    }

}