var image = null;
var newimage=null;
var grayImage = null;
var redImage = null;
var rbimage=null;
var gimage=null;
var bimage=null;
var Canvas;
function loadImage() {
  var file = document.getElementById("fgfile");
  image = new SimpleImage(file);
  newimage = new SimpleImage(file);
  grayImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  rbimage = new SimpleImage(file);
  gimage=new SimpleImage(file);
  bimage=new SimpleImage(file);
  Canvas = document.getElementById("can");
  image.drawTo(Canvas);
}
function doGray(){
  if(image==null||!image.complete()){
    alert("Image is not Loaded Yet");
    return
  }
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  Canvas = document.getElementById("can");
  grayImage.drawTo(Canvas);
}
function doRed(){
  if(image==null||!image.complete()){
    alert("Image is not Loaded Yet");
    return;
  }
  for (var pixel of redImage.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen((2*avg)-255);
      pixel.setBlue((2*avg)-255);
    }
  }
    Canvas = document.getElementById("can");
  redImage.drawTo(Canvas);
}
function rainbow(){
   if(image==null || !image.complete){
    alert("Image not Loaded");
    return;
  }
  var w=rbimage.getWidth();
  for(var pixel of rbimage.values()){
    var x=pixel.getX();
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(x < (w/7)){
      //RED
      if(avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
        
      }else{
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }
    }
    
    if((x >w/7)&&(x<2*w/7)){
      //orange
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg)-255;
      }
    }
    if((x> 2*w/7)&&(x < 3*w/7)){
      //yellow
      if(avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
    if((x > 3*w/7)&&(x < 4*w/7)){
      //green
      if(avg < 128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
    if((x > 4*w/7)&&(x < 5*w/7)){
      //blue
      if(x < 128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }
    if((x > 5*w/7)&&(x < 6*w/7)){
      //indigo
      if(avg<128){
        pixel.setRed(0.8*avg-255);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }else{
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }
    if(x > 6*w/7){
       //violet
       if(avg<128){
      pixel.setRed(1.6*avg);
      pixel.setGreen(0);
      pixel.setBlue(1.6*avg);
    }else{
      pixel.setRed(0.4*avg+153);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(0.4*avg+153);
    }
  }   
}
  canvas=document.getElementById("can");
  rbimage.drawTo(canvas);
}
function contrast(){
    if(image==null || !image.complete()){
      alert("Image not Loaded");
      return;
    }
    for(var px of newimage.values()){
      var avg=    (px.getRed()+px.getGreen()+ px.getBlue())/3;
    if(avg<128){
        px.setRed(avg*Math.PI);
        px.setGreen(250);
        px.setBlue(150);
    }
    else{
        px.setRed(255);
        px.setGreen(avg*Math.PI);
        px.setBlue(avg*Math.PI);
        
    }
}
     canvas=document.getElementById("can");
       newimage.drawTo(canvas);

    }
function doGreen(){
  if(image==null || !image.complete()){
    alert("Image not Loaded");
    return;
  }
  for(var px of gimage.values()){
    var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
    if(avg<128){
      px.setGreen(2*avg);
      px.setRed(0);
      px.setBlue(0);
    }
    else{
      px.setGreen(255);
      px.setRed((2*avg)-255);
      px.setBlue((2*avg)-255);
    }
  }
  canvas=document.getElementById("can");
  gimage.drawTo(canvas);
}
function doBlue(){
  if(image==null || !image.complete()){
    alert("Image not Loaded");
    return;
  }
  for(var px of bimage.values()){
    var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
    if(avg<128){
      px.setBlue(2*avg);
      px.setRed(0);
      px.setGreen(0);
    }
    else{
      px.setBlue(255);
      px.setRed((2*avg)-255);
      px.setGreen((2*avg)-255);
    }
  }
  canvas=document.getElementById("can");
  bimage.drawTo(canvas);
}
function ResetImage(){
  if(image==null || !image.complete()){
    alert("Image not Loaded");
    return;
  }
  Canvas=document.getElementById("can");
  image.drawTo(Canvas);
}
function clearCanvas() {
  doClear(Canvas);
}
function doClear(canvas) {
  var context = canvas.getContext("2d"); context.clearRect(0,0,canvas.width,canvas.height);
}
