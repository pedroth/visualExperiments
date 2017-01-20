/*
Canvas coordinates

0            W
+-------------> y
|        
|        
|       *
|
|
v x

*/

function add(u, v) {
    var ans = [];
    ans[0] = u[0] + v[0];
    ans[1] = u[1] + v[1];
    return ans;
}

function floor(x) {
	var ans = [];
    ans[0] = Math.floor(x[0]);
    ans[1] = Math.floor(x[1]);
    return ans;
}

function diff(u, v) {
    var ans = [];
    ans[0] = u[0] - v[0];
    ans[1] = u[1] - v[1];
    return ans;
}

function innerProd(u, v) {
    return u[0] * v[0] + u[1] * v[1];
}


var MyCanvas = function(canvas) {
	this.canvas = canvas;
	this.ctx = canvas.getContext('2d');
	this.image = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
	// width * height * 4 array of integers
	this.imageData = this.image.data;
}

MyCanvas.prototype.paintImage = function() {
	this.ctx.putImageData(this.image, 0, 0);
}

MyCanvas.prototype.clearImage = function(rgba) {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

MyCanvas.prototype.getSize = function() {
	return [this.canvas.width, this.canvas.height];
}

MyCanvas.prototype.getImageIndex = function(x) {
    return 4 * (this.canvas.width *  x[0] + x[1]);
}

MyCanvas.prototype.drawPxl =function(x, rgb) {
    var index = this.getImageIndex(x);
    this.imageData[index    ] = rgb[0];
    this.imageData[index + 1] = rgb[1];
    this.imageData[index + 2] = rgb[2];
    this.imageData[index + 3] = rgb[3];
}

/* x1     :   2-dim array
 * x2     :   2-dim array
 * shader :   is a function that receives a 2-dim array and returns a rgba 4-dim array
*/
MyCanvas.prototype.drawLine = function(x1, x2, shader) {

    x1 = floor(x1);
    x2 = floor(x2);

    var size = 1;
    var x = [];
    x[0] = x1[0];
    x[1] = x1[1];

    var normal = diff(x2, x1);
    var temp = normal[0];
    normal[0] = -normal[1];
    normal[1] = temp;

    var imin = [0, 0];
    var oldi = [0, 0];
    var fmin = Number.MAX_VALUE;

    this.drawPxl(x, shader(x));

    while (x[0] !== x2[0] || x[1] !== x2[1]) {

        var maxShade = -1;

        for ( var i = -size; i < size + 1; i++) {
            for ( var j = -size; j < size + 1; j++) {

                var nextX = add(x, [ i, j ]);
                var shadePow = Math.abs(innerProd(diff(nextX, x1), normal)); 
                var res = shadePow + Math.abs(nextX[0] - x2[0]) + Math.abs(nextX[1] - x2[1]);

                if ((i === 0 && j === 0) || (i === oldi[0] && j === oldi[1]) || (Math.abs(i) > 1 || Math.abs(j) > 1)) {
                    // nothing here
                } else {
                    if (fmin > res) {
                        fmin = res;
                        imin = [ i, j ];
                    }
                }
            }
        }

        fmin = Number.MAX_VALUE;

        oldi[0] = -imin[0];
        oldi[1] = -imin[1];

        x = add(x, imin);
        this.drawPxl(x, shader(x));
    }
}

/* x1     :   2-dim array
 * x2     :   2-dim array
 * x3     :   2-dim array
 * shader :   is a function that receives a 2-dim array and returns a rgba 4-dim array
*/
MyCanvas.prototype.drawTriangle = function(x1, x2, x3, shader) {

}

module.exports = MyCanvas;