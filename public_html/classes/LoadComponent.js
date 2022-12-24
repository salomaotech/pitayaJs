class LoadComponent {

    #elementsIdentificatorArray = [];
    #elementsRequestArray = [];
    #elementsSeletorArray = [];
    #typeInsertion = [];
    #elementsCounter = 0;

    #popConfig(componentRequest, elementSeletor, typeInsertion) {

        this.#elementsIdentificatorArray[this.#elementsCounter] = "component_pitaya_" + Date.now();
        this.#elementsRequestArray[this.#elementsCounter] = componentRequest;
        this.#elementsSeletorArray[this.#elementsCounter] = elementSeletor;
        this.#typeInsertion[this.#elementsCounter] = typeInsertion;
        this.#elementsCounter++;

    }

    prependTo(componentRequest, elementSeletor) {
        this.#popConfig(componentRequest, elementSeletor, 1);
    }

    appendTo(componentRequest, elementSeletor) {
        this.#popConfig(componentRequest, elementSeletor, 2);
    }

    build() {

        /* copy values from local variables */
        var elementsCounter = this.#elementsCounter;
        var elementsIdentificatorArray = this.#elementsIdentificatorArray;
        var elementsRequestArray = this.#elementsRequestArray;
        var elementsSeletorArray = this.#elementsSeletorArray;
        var contador = 0;

        /* load data from the server using a HTTP GET request */
        function getSourceComponent() {

            var identificator = elementsIdentificatorArray[contador];
            var componentRequest = elementsRequestArray[contador];
            var elementSeletor = elementsSeletorArray[contador];
            var typeInsertion = 1;

            /* request */
            $.when($.get("components/" + componentRequest + ".html"))
                    .done(function (response) {

                        var parser = new DOMParser();
                        var document = parser.parseFromString(response, "text/html");
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

                        if (contador <= elementsCounter) {

                            contador++;
                            getSourceComponent();

                        }

                    });

        }

        /* run first load source */
        getSourceComponent();

    }

}