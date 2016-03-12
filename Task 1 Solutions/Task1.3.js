function Vector(x, y){
    this.x = x;
    this.y = y;
    this.plus = function(other){
        return new Vector(this.x + other.x, this.y + other.y);
    }
    this.minus = function(other){
        return new Vector(this.x - other.x, this.y - other.y)
    }
    this.length = function(){
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}

var u = new Vector(1,1);
var v = new Vector(2,2);
var w = u.plus(v);
console.log(w.length());
