class Page {

    setTitle(value) {
        $("<title/>").text(value).prependTo($("head"));
    }

    addStyleCss(pathFile) {

        $.when($.get(pathFile)).done(function (response) {
            $("<style/>").text(response).appendTo($("head"));
        });

    }

    setDescription(value) {
        $("<description/>").text(value).appendTo($("head"));
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