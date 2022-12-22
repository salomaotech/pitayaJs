$(document).ready(function () {

    $.getScript("classes/IncludeFile.js").done(function (script, textStatus) {

        var includeFile = new IncludeFile();
        includeFile.addFile("classes/Router.js");
        includeFile.addFile("assets/css/main.css");
        includeFile.load();

    });

});