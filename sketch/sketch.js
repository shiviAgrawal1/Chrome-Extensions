console.log('Sketch Anything!!!!!!');

var sketch = function(p5) {

p5.setup = function()
{

  //let c = createCanvas(windowWidth, windowHeight );

  var h = p5.constrain(document.body.clientHeight, 0, 2000);
  var c = p5.createCanvas(p5.windowWidth, h);
  c.position(0,0);
  p5.clear();

}

  p5.mouseDragged = function() {
       p5.stroke(0);
       p5.strokeWeight(4);
       p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);

}

}
var myp5 = new p5(sketch);
