class LoadCss {

    load(pathFile) {

        $.when($.get(pathFile)).done(function (response) {
            new Body().addStyleCss(response);
        });

    }

}