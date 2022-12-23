class RouterController {

    resolve(body) {

        var viewName = window.location.search.replace("?", "");

        if (viewName === "") {

            viewName = "home";

        }

        $.when($.get("views/" + viewName + ".html"))
                .done(function (response) {

                    var parser = new DOMParser();
                    const document = parser.parseFromString(response, "text/html");
                    const description = document.querySelector("[name=description]");

                    body.setTitle(document.title);
                    body.setDescription(description.content);
                    body.setBodyContent(document.body.innerHTML);

                });

    }

}