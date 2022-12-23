class LoadCss {

    load(pathFile, body) {

        $.when($.get(pathFile))
                .done(function (response) {
                    body.addStyleCss(response);                    
                });

    }

}