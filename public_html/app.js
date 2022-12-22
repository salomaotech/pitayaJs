$(document).ready(function () {

    $.getScript("classes/IncludeFile.js")
            .done(function (script, textStatus) {

                var includeFile = new IncludeFile();

                /* js */
                includeFile.addFile("classes/Router.js");

                /* css */
                includeFile.addFile("assets/css/main.css");

                /* load */
                includeFile.load();


            })
            .fail(function (jqxhr, settings, exception) {


            });

});