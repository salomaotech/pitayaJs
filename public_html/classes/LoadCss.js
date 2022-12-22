class LoadCss {

    load(pathFile) {

        $.when($.get(pathFile))
                .done(function (response) {
                    $("<style/>").text(response).appendTo($("head"));
                });

    }

}