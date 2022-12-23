class LoadComponent {

    #loadComponentFunction(componentRequest, elementSeletor, typeInsertion) {

        $.when($.get("components/" + componentRequest + ".html"))
                .done(function (response) {

                    var parser = new DOMParser();
                    var document = parser.parseFromString(response, "text/html");

                    switch (typeInsertion) {

                        case 1:
                            $("<style/>").text(document.querySelector("style").innerHTML).prependTo(elementSeletor);
                            $("<script/>").text(document.querySelector("script").innerHTML).prependTo(elementSeletor);
                            $(document.body.innerHTML).prependTo(elementSeletor);
                            break;

                        case 2:
                            $("<style/>").text(document.querySelector("style").innerHTML).appendTo(elementSeletor);
                            $("<script/>").text(document.querySelector("script").innerHTML).prependTo(elementSeletor);
                            $(document.body.innerHTML).appendTo(elementSeletor);
                            break;

                    }

                });

    }

    prependTo(componentRequest, elementSeletor) {
        this.#loadComponentFunction(componentRequest, elementSeletor, 1);
    }

    appendTo(componentRequest, elementSeletor) {
        this.#loadComponentFunction(componentRequest, elementSeletor, 2);
    }

}