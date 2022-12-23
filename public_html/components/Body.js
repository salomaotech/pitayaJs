class Body {

    setTitle(value) {

        $("<title/>").text(value).prependTo($("head"));

    }

    addStyleCss(value) {

        $("<style/>").text(value).appendTo($("head"));

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