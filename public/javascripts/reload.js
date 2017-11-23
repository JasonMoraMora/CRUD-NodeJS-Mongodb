function loadDocToUpd() {
    var NDoc = document.getElementById('findNDocToUpd').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById('txtNomToUpd').value = obj.nombre;
            document.getElementById('txtApeToUpd').value = obj.apellido;
            document.getElementById('txtEdadToUpd').value = obj.edad;
            document.getElementById('txtDirToUpd').value = obj.direccion;
            document.getElementById('txtTelToUpd').value = obj.telefono;
            document.getElementById('txtCelToUpd').value = obj.celular;
            document.getElementById('txtHobToUpd').value = obj.hoobie;
        }
    };
    xhttp.open("POST", "DocToUpd", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("NDoc=" + NDoc);
}

function loadDocToDel() {
    var NDoc = document.getElementById('findNDocToDel').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById('txtNomToDel').value = obj.nombre;
            document.getElementById('txtApeToDel').value = obj.apellido;
            document.getElementById('txtEdadToDel').value = obj.edad;
            document.getElementById('txtDirToDel').value = obj.direccion;
            document.getElementById('txtTelToDel').value = obj.telefono;
            document.getElementById('txtCelToDel').value = obj.celular;
            document.getElementById('txtHobToDel').value = obj.hoobie;
        }
    };
    xhttp.open("POST", "DocToDel", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("NDoc=" + NDoc);
}

//ABM
function CreateDoc(){
    var items = {
        ndoc: document.getElementById('txtNDoc').value,
        nom: document.getElementById('txtNom').value,
        ape: document.getElementById('txtApe').value,
        edad: document.getElementById('txtEdad').value,
        dir: document.getElementById('txtDir').value,
        tel: document.getElementById('txtTel').value,
        cel: document.getElementById('txtCel').value,
        hob: document.getElementById('txtHob').value
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        var obj, x, txt = "";        
        var tableData = document.getElementById('tableData');
        var child = document.getElementsByTagName('tr');
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "createDoc", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(
        'ndoc='+items.ndoc+
        '&nom='+items.nom + 
        '&ape=' + items.ape + 
        '&edad=' + items.edad + 
        '&dir=' + items.dir + 
        '&tel=' + items.tel + 
        '&cel=' +items.cel+ 
        '&hob=' + items.hob
    );
}

function UpdateDoc(){
    var items = {
        ndoc: document.getElementById('findNDocToUpd').value,
        nom: document.getElementById('txtNomToUpd').value,
        ape: document.getElementById('txtApeToUpd').value,
        edad: document.getElementById('txtEdadToUpd').value,
        dir: document.getElementById('txtDirToUpd').value,
        tel: document.getElementById('txtTelToUpd').value,
        cel: document.getElementById('txtCelToUpd').value,
        hob: document.getElementById('txtHobToUpd').value
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "updateDoc", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(
        'ndoc='+items.ndoc+
        '&nom='+items.nom + 
        '&ape=' + items.ape + 
        '&edad=' + items.edad + 
        '&dir=' + items.dir + 
        '&tel=' + items.tel + 
        '&cel=' +items.cel+ 
        '&hob=' + items.hob
    );
}

function DeleteDoc(){
    var NDoc = document.getElementById('findNDocToDel').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "deleteDoc", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("NDoc=" + NDoc);
}