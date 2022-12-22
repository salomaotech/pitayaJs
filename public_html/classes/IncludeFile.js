class IncludeFile {

    #pathFiles = [];
    #indexArray = 0;

    addFile(pathFile) {

        this.#pathFiles[this.#indexArray] = pathFile;
        this.#indexArray++;

    }

    load() {

        this.#pathFiles.forEach((pathFile) => {

            switch (pathFile.split('.').pop()) {

                case "js":
                    $.getScript(pathFile);
                    break;

                case "css":
                    $("head").append("<link>");
                    var css = $("head").children(":last");
                    css.attr({
                        rel: "stylesheet",
                        type: "text/css",
                        href: pathFile
                    });
                    break;

            }

        });

    }

}