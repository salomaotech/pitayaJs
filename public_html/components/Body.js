class Body {

    setTitle(value) {

        $("<title/>").text(value).appendTo($("head"));

    }

    setDescription(value) {

        $("<description/>").text(value).appendTo($("head"));

    }

    addBodyContent(value) {

        $("body").html(value);

    }

}