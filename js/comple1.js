var peli1= document.getElementById("Peli1");
var peli2= document.getElementById("Peli2");
var peli3= document.getElementById("Peli3");
var peli4= document.getElementById("Peli4");
var peli5= document.getElementById("Peli5");
var peli6= document.getElementById("Peli6");

function init(){
    function ajaxRequest(){
        var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]; 
        if(window.ActiveXObject){ 
            for(var i=0; i<activexmodes.length; i++){
                try{
                    return new ActiveXObject(activexmodes[i]);
                }
                catch(e){
                    return false;
                }
            }
        }
        else if (window.XMLHttpRequest){ 
            return new XMLHttpRequest();
        }
        else{
            return false;
        }
    }
    var request = new ajaxRequest();

    request.onreadystatechange = function(){
        if(request.readyState==4){
            if(request.status==200 || window.location.href.indexOf("http")==-1){
                if(peli1.addEventListener){
                    peli1.addEventListener("click", function () {
                        
                            contenido += "<li>";
                            contenido += "<h3>" + rssentries[i].title1 + "</h3>";
                            contenido += "<p> Protagonistas:   " + rssentries[i].protagonista1 + "</p>";
                            contenido += "<p>" + rssentries[i].description1 + "</p>";
                            contenido += "</a>";
                            contenido += "</li>";
                        contenido += "</ul>";
                        document.getElementById("result").innerHTML = contenido
                        return false;
                    }, false);
                }
                if(peli2.addEventListener){
                    peli2.addEventListener("click", function () {
                        var dato = JSON.parse(request.responseText);
                        var rssentries = dato.items;
                        var contenido = "<ul>";
                            var i=1;
                            contenido += "<li>";
                            contenido += "<h3>" + rssentries[i].title2 + "</h3>";
                            contenido += "<p> Protagonistas:    " + rssentries[i].protagonista2 + "</p>";
                            contenido += "<p>" + rssentries[i].description2 + "</p>";
                            contenido += "</a>";
                            contenido += "</li>";
                        contenido += "</ul>";
                        document.getElementById("result").innerHTML = contenido
                        return false;
                    }, false);
                }
                if(peli3.addEventListener){
                    peli3.addEventListener("click", function () {
                        var dato = JSON.parse(request.responseText);
                        var rssentries = dato.items;
                        var contenido = "<ul>";
                            var i=2;
                            contenido += "<li>";
                            contenido += "<h3>" + rssentries[i].title3 + "</h3>";
                            contenido += "<p> Protagonistas:    " + rssentries[i].protagonista3 + "</p>";
                            contenido += "<p>" + rssentries[i].description3 + "</p>";
                            contenido += "</a>";
                            contenido += "</li>";
                        contenido += "</ul>";
                        document.getElementById("result").innerHTML = contenido
                        return false;
                    }, false);
                }
                if(peli4.addEventListener){
                    peli4.addEventListener("click", function () {
                        var dato = JSON.parse(request.responseText);
                        var rssentries = dato.items;
                        var contenido = "<ul>";
                            var i=3;
                            contenido += "<li>";
                            contenido += "<h3>" + rssentries[i].title4 + "</h3>";
                            contenido += "<p> Protagonistas:    " + rssentries[i].protagonista4 + "</p>";
                            contenido += "<p>" + rssentries[i].description4 + "</p>";
                            contenido += "</a>";
                            contenido += "</li>";
                        contenido += "</ul>";
                        document.getElementById("result").innerHTML = contenido
                        return false;
                    }, false);
                }
                if(peli5.addEventListener){
                    peli5.addEventListener("click", function () {
                        var dato = JSON.parse(request.responseText);
                        var rssentries = dato.items;
                        var contenido = "<ul>";
                            var i=4;
                            contenido += "<li>";
                            contenido += "<h3>"+ rssentries[i].title5 + "</h3>";
                            contenido += "<p>Protagonistas: " + rssentries[i].protagonista5 + "</p>";
                            contenido += "<p>" + rssentries[i].description5 + "</p>";
                            contenido += "</a>";
                            contenido += "</li>";
                        contenido += "</ul>";
                        document.getElementById("result").innerHTML = contenido
                        return false;
                    }, false);
                }
                if(peli6.addEventListener){
                    peli6.addEventListener("click", function () {
                        var dato = JSON.parse(request.responseText);
                        var rssentries = dato.items;
                        var contenido = "<ul >";
                            var i=5;
                            contenido += "<li>";
                            contenido += "<h3>" + rssentries[i].title6 + "</h3>";
                            contenido += "<p> Protagonistas:    " + rssentries[i].protagonista6 + "</p>";
                            contenido += "<p>" + rssentries[i].description6 + "</p>";
                            contenido += "</a>";
                            contenido += "</li>";
                        contenido += "</ul>";
                        document.getElementById("result").innerHTML = contenido
                        return false;
                    }, false);
                }
    
            }
            else{
                alert("Ha ocurrido un error mientras se realizaba la petición");
            }
        }
    }
    request.open("GET", "json/comple1.json", true);
    request.send(null);
    }
    if (window.addEventListener) {
        window.addEventListener("load", init, false);
    }
    else if (window.attachEvent) {
        window.attachEvent("load", init);
    }