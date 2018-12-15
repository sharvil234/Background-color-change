var Context = {
  canvas: null,
  ctx: null,
  create: function(canvas_tag){
    this.canvas = document.getElementById(canvas_tag);
    this.ctx = this.canvas.getContext("2d");
    return this.ctx;
  }
};
window.onload = function(){
    Context.create('canvas');
    var i = 255;
	var imax = true;
	var icounter = true;
    var j = 0;
	var jcounter = true;
	var jmax=true;
    var k = 0;
	var kcounter = false;
	var kmax = true;
    setInterval(function(){
	  var color = "rgb("+i+","+j+","+k+")";
      Context.ctx.beginPath();
      Context.ctx.rect(0,0,Context.canvas.width, Context.canvas.height);
      Context.ctx.fillStyle = color;
      Context.ctx.fill();
	  if(icounter == true){
	  if (imax == true && i >= 0) {
    i -= 5;
    if (i == 0) {
      imax = false;
	  jcounter = true;
	  
    }
  } else {
       imax = false
       i += 5;

      if (i == 255) {
        imax = true;
		icounter = false;
		jcounter = true;
      }
  }
  }
  if(jcounter == true){
	  if (jmax == true && j <= 255) {
    j += 5;

    if (j == 255) {
      jmax = false;
	  kcounter = true;
    }
  } else {
       jmax = false;
       j -= 5;

      if (j == 0) {
        jmax = true;
		jcounter = false;
      }
  }
  }
  if(kcounter == true){
	  if (kmax == true && k <= 255) {
    k += 5;

    if (k == 255) {
      kmax = false;
	  icounter = true;
    }
  } else {
       kmax = false;
       k -= 5;

      if (k == 0) {
        kmax = true;
		kcounter = false;
		icounter = true;
      }
  }
  }
  

    },50);
};