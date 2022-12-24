class LoadComponent {

    #loadComponentFunction(componentRequest, elementSeletor, typeInsertion) {

        var identificator = "component_pitaya_" + Date.now();

        $.when($.get("components/" + componentRequest + ".html"))
                .done(function (response) {

                    var parser = new DOMParser();
                    var document = parser.parseFromString(response, "text/html");

                    /* separate the contents of component */
                    var css = document.querySelector("style").innerHTML;
                    var script = document.querySelector("script").innerHTML;
                    var html = "<section id=\"" + identificator + "\">" + document.body.innerHTML + "</section>";

                    switch (typeInsertion) {

                        case 1:
                            $(html).prependTo(elementSeletor);
                            $("<style/>").text(css).prependTo($("#" + identificator));
                            $("<script/>").text(script).prependTo($("#" + identificator));
                            break;

                        case 2:
                            $(html).appendTo(elementSeletor);
                            $("<style/>").text(css).appendTo($("#" + identificator));
                            $("<script/>").text(script).appendTo($("#" + identificator));
                            break;

                    }

                });

        return identificator;

    }

    prependTo(componentRequest, elementSeletor) {
        return this.#loadComponentFunction(componentRequest, elementSeletor, 1);
    }

    appendTo(componentRequest, elementSeletor) {
        return this.#loadComponentFunction(componentRequest, elementSeletor, 2);
    }

}