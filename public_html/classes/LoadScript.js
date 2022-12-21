class LoadScript {

    itensArray = [];
    indexArray = 0;

    addFile(pathFile) {

        this.itensArray[this.indexArray] = pathFile;
        this.indexArray++;

    }

    load() {

        for (let i = 0; i < this.itensArray.length; i++) {

            var pathFile = this.itensArray[i] + ".js";

            alert(pathFile);

            $.getScript(pathFile)

                    .done(function (script, textStatus) {


                    })

                    .fail(function (jqxhr, settings, exception) {

                        console.log("Fail to load script " + pathFile);

                    });

        }

    }

}