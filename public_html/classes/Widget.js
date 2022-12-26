class Widget {

    #elementsIdentificatorArray = [];
    #elementsRequestArray = [];
    #elementsSeletorArray = [];
    #elementTypeInsertionArray = [];
    #elementsCounter = 0;

    #popConfig(componentRequest, elementSeletor, typeInsertion) {

        var identificator = "widget_pitaya_" + Date.now() + "_" + this.#elementsCounter;
        this.#elementsIdentificatorArray[this.#elementsCounter] = identificator;
        this.#elementsRequestArray[this.#elementsCounter] = componentRequest;
        this.#elementsSeletorArray[this.#elementsCounter] = elementSeletor;
        this.#elementTypeInsertionArray[this.#elementsCounter] = typeInsertion;
        this.#elementsCounter++;
        return "#" + identificator;

    }

    prependTo(componentRequest, elementSeletor) {
        return this.#popConfig(componentRequest, elementSeletor, 1);
    }

    appendTo(componentRequest, elementSeletor) {
        return this.#popConfig(componentRequest, elementSeletor, 2);
    }

    load() {

        /* counter of scheduler */
        var counterScheduler = 0;

        /* copy values from local variables */
        var elementsIdentificatorArray = this.#elementsIdentificatorArray;
        var elementsRequestArray = this.#elementsRequestArray;
        var elementsSeletorArray = this.#elementsSeletorArray;
        var elementTypeInsertionArray = this.#elementTypeInsertionArray;
        var elementsCounter = this.#elementsCounter;

        /* load data from the server using a HTTP GET request */
        function getSourceComponent() {

            var identificator = elementsIdentificatorArray[counterScheduler];
            var componentRequest = elementsRequestArray[counterScheduler];
            var elementSeletor = elementsSeletorArray[counterScheduler];
            var typeInsertion = elementTypeInsertionArray[counterScheduler];

            if (componentRequest !== undefined) {

                $.when($.get("widgets/" + componentRequest + ".html"))
                        .done(function (response) {

                            var document = new DOMParser().parseFromString(response, "text/html");
                            var html = "<section class=\"" + document.body.getAttribute("class") + "\" id=\"" + identificator + "\">" + document.body.innerHTML + "</section>";

                            switch (typeInsertion) {

                                case 1:
                                    $(html).prependTo(elementSeletor);
                                    $("<style/>").text(document.querySelector("style").innerHTML).prependTo($("#" + identificator));
                                    $("<script/>").text(document.querySelector("script").innerHTML).prependTo($("#" + identificator));
                                    break;

                                case 2:
                                    $(html).appendTo(elementSeletor);
                                    $("<style/>").text(document.querySelector("style").innerHTML).appendTo($("#" + identificator));
                                    $("<script/>").text(document.querySelector("script").innerHTML).appendTo($("#" + identificator));
                                    break;

                            }

                            /* check scheduler */
                            if (counterScheduler <= elementsCounter) {

                                counterScheduler++;
                                getSourceComponent();

                            }

                        });

            }


        }

        /* run first load source */
        getSourceComponent();

    }

}