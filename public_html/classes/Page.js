class Page {

    setTitle(value) {
        $(document).prop("title", value);
    }

    addStyleCssLinkHead(pathFile) {
        $("<link rel=\"stylesheet\" href=\"" + pathFile + "\">").appendTo("head");
    }

    addStyleCssGetRequest(pathFile) {

        $.when($.get(pathFile)).done(function (response) {
            $("<style/>").text(response).appendTo($("body"));
        });

    }

    setDescription(value) {
        $("<meta name=\"description\" content=\"" + value + "\">").prependTo("head");
    }

    setBodyContent(value) {
        $("body").html(value);
    }

    addBodyContentPrependTo(value) {
        $(value).prependTo($("body"));
    }

    addBodyContentAppendTo(value) {
        $(value).appendTo($("body"));
    }

}