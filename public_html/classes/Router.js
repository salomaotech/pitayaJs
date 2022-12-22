$(document).ready(function () {

    if (window.location.search.replace("?", "") !== "") {

        $.getScript("views/" + window.location.search.replace("?", "") + ".js");

    }

});