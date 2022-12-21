class Css {

    loadCssFile(pathFile) {

        $("head").append("<link>");
        var css = $("head").children(":last");
        css.attr({
            rel: "stylesheet",
            type: "text/css",
            href: pathFile
        });

    }

}