function LoadFile(file) {
   var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp=new XMLHttpRequest();
    } else {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if ( xmlhttp != null ) { 
        xmlhttp.open("GET",file,false); // the false makes this synchronous!
        xmlhttp.send( );
        var text = xmlhttp.responseText;
        return text;
    }
}

/**
* x,y position
* w,h width and height
*/
function buildThumbnail(name,x,y,w,h) {
  var mainSection = document.getElementById("main_content");
  var link = document.createElement('a');
  link.setAttribute('href',name + "/" + name + ".html");
  var img = document.createElement('img');
  img.setAttribute("src",name + "/" + name + ".png");
  img.setAttribute("width",w);
  img.setAttribute("height",h);
  link.appendChild(img);
  mainSection.appendChild(link);
}

function build() {
  var text = LoadFile("../tools/AppJs.txt");
  var appletsName = text.split("\n");
  var n = appletsName.length;
  var columns = 5;
  var step = 200;
  var rows = n / columns;
  for (var i = 0; i < appletsName.length; i++) {
    /*no need for x, and y*/
    var x = step * (i % columns);
    var y = step * (Math.floor(i / columns));
    buildThumbnail(appletsName[i],x,y,step,step);
  }
}

build();