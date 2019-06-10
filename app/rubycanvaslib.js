/* Generated by Opal 0.5.0 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass;
  $opal.add_stubs(['$attr_reader', '$<<', '$+', '$round', '$new', '$call', '$/']);
  ;
  (function($base, $super) {
    function Canvas(){};
    var self = Canvas = $klass($base, $super, 'Canvas', Canvas);

    var def = Canvas._proto, $scope = Canvas._scope;
    def.canvas = nil;
    self.$attr_reader("width", "height");

    def.$initialize = function(canvas_id) {
      var self = this;
      return self.canvas = document.getElementById(canvas_id).getContext("2d");
    };

    def.$round = function(num) {
      var self = this;
      return ((0.5)['$+'](num))['$<<'](0);
    };

    def['$width='] = function(width) {
      var self = this;
      return self.canvas.canvas.width = self.width = self.$round(width);
    };

    def['$height='] = function(height) {
      var self = this;
      return self.canvas.canvas.height = self.height = self.$round(height);
    };

    def['$fillStyle='] = function(style) {
      var self = this;
      return self.canvas.fillStyle = style;
    };

    def['$strokeStyle='] = function(style) {
      var self = this;
      return self.canvas.strokeStyle = style;
    };

    def.$fillRect = function(x, y, width, height) {
      var self = this;
      return self.canvas.fillRect(self.$round(x), self.$round(y), self.$round(width), self.$round(height));
    };

    def.$strokeRect = function(x, y, w, h) {
      var self = this;
      return self.canvas.strokeRect(self.$round(x), self.$round(y), self.$round(w), self.$round(h));
    };

    def.$beginPath = function() {
      var self = this;
      return self.canvas.beginPath();
    };

    def.$moveTo = function(sx, sy) {
      var self = this;
      return self.canvas.moveTo(self.$round(sx), self.$round(sy));
    };

    def.$lineTo = function(ex, ey) {
      var self = this;
      return self.canvas.lineTo(self.$round(ex), self.$round(ey));
    };

    def['$lineWidth='] = function(w) {
      var self = this;
      return self.canvas.lineWidth = self.$round(w);
    };

    def['$strokeStyle='] = function(c) {
      var self = this;
      return self.canvas.strokeStyle = c;
    };

    def['$lineCap='] = function(lc) {
      var self = this;
      return self.canvas.lineCap = lc;
    };

    def.$stroke = function() {
      var self = this;
      return self.canvas.stroke();
    };

    def.$arc = function(x, y, radius, startangle, endangle, anticlockwise) {
      var self = this;
      return self.canvas.arc(self.$round(x), self.$round(y), radius, startangle, endangle, anticlockwise);
    };

    def.$fill = function() {
      var self = this;
      return self.canvas.fill();
    };

    def.$quadraticCurveTo = function(controlx, controly, endx, endy) {
      var self = this;
      return self.canvas.quadraticCurveTo(self.$round(controlx), self.$round(controly), self.$round(endx), self.$round(endy));
    };

    def.$bezierCurveTo = function(controlx1, controly1, controlx2, controly2, endx, endy) {
      var self = this;
      return self.canvas.bezierCurveTo(self.$round(controlx1), self.$round(controly1), self.$round(controlx2), self.$round(controly2), self.$round(endx), self.$round(endy));
    };

    def['$lineJoin='] = function(j) {
      var self = this;
      return self.canvas.lineJoin = j;
    };

    def.$arcTo = function(controlx, controly, endx, endy, radius) {
      var self = this;
      return self.canvas.arcTo(self.$round(controlx), self.$round(controly), self.$round(endx), self.$round(endy), radius);
    };

    def.$closePath = function() {
      var self = this;
      return self.canvas.closePath();
    };

    def.$rect = function(x, y, width, height) {
      var self = this;
      return self.canvas.rect(self.$round(x), self.$round(y), self.$round(width), self.$round(height));
    };

    def.$createLinearGradient = function(startx, starty, endx, endy) {
      var self = this;
      return $scope.LinearGradient.$new(self.canvas, self.$round(startx), self.$round(starty), self.$round(endx), self.$round(endy));
    };

    def.$createRadialGradient = function(startx, starty, startradius, endx, endy, endradius) {
      var self = this;
      return $scope.RadialGradient.$new(self.canvas, self.$round(startx), self.$round(starty), startradius, self.$round(endx), self.$round(endy), endradius);
    };

    def.$createPattern = function(imageobj, repeatoption) {
      var self = this;
      return self.canvas.createPattern(imageobj, repeatoption);
    };

    def.$ellipse = function(x, y, radiusx, radiusy, rotation, startangle, endangle, anticlockwise) {
      var self = this;
      return self.canvas.ellipse(self.$round(x), self.$round(y), radiusx, radiusy, rotation, startangle, endangle, anticlockwise);
    };

    def.$drawImage = function(imageobj, x, y) {
      var self = this;
      return self.canvas.drawImage(imageobj, self.$round(x), self.$round(y));
    };

    def.$drawImage = function(imageobj, x, y, width, height) {
      var self = this;
      return self.canvas.drawImage(imageobj, self.$round(x), self.$round(y), self.$round(width), self.$round(height));
    };

    def.$drawImage = function(imageobj, sx, sy, sw, sh, dx, dy, dw, dh) {
      var self = this;
      return self.canvas.drawImage(imageobj, self.$round(sx), self.$round(sy), self.$round(sw), self.$round(sh), self.$round(dx), self.$round(dy), self.$round(dw), self.$round(dh));
    };

    def['$font='] = function(f) {
      var self = this;
      return self.canvas.font = f;
    };

    def.$fillText = function(str, x, y) {
      var self = this;
      return self.canvas.fillText(str, self.$round(x), self.$round(y));
    };

    def.$strokeText = function(str, x, y) {
      var self = this;
      return self.canvas.strokeText(str, self.$round(x), self.$round(y));
    };

    def['$textAlign='] = function(a) {
      var self = this;
      return self.canvas.textAlign = a;
    };

    return (def['$textBaseline='] = function(b) {
      var self = this;
      return self.canvas.textBaseline = b;
    }, nil);
  })(self, null);
  (function($base, $super) {
    function LinearGradient(){};
    var self = LinearGradient = $klass($base, $super, 'LinearGradient', LinearGradient);

    var def = LinearGradient._proto, $scope = LinearGradient._scope;
    def.gradient = nil;
    self.$attr_reader("gradient");

    def.$initialize = function(canvas, startx, starty, endx, endy) {
      var self = this;
      return self.gradient = canvas.createLinearGradient(startx, starty, endx, endy);
    };

    return (def.$addColorStop = function(offset, color) {
      var self = this;
      return self.gradient.addColorStop(offset, color);
    }, nil);
  })(self, null);
  (function($base, $super) {
    function RadialGradient(){};
    var self = RadialGradient = $klass($base, $super, 'RadialGradient', RadialGradient);

    var def = RadialGradient._proto, $scope = RadialGradient._scope;
    def.gradient = nil;
    def.$initialize = function(canvas, startx, starty, startradius, endx, endy, endradius) {
      var self = this;
      return self.gradient = canvas.createRadialGradient(startx, starty, startradius, endx, endy, endradius);
    };

    return (def.$addColorStop = function(offset, color) {
      var self = this;
      return self.gradient.addColorStop(offset, color);
    }, nil);
  })(self, null);
  (function($base, $super) {
    function Image(){};
    var self = Image = $klass($base, $super, 'Image', Image);

    var def = Image._proto, $scope = Image._scope, TMP_1;
    def.image = nil;
    def.$initialize = function() {
      var self = this;
      return self.image = new Image();
    };

    def.$onload = TMP_1 = function() {
      var self = this, $iter = TMP_1._p, block = $iter || nil;
      TMP_1._p = null;
      return function(){block.$call()};
    };

    return (def['$src='] = function(src) {
      var self = this;
      return self.image.src = src;
    }, nil);
  })(self, null);
  (function($base, $super) {
    function MeasureText(){};
    var self = MeasureText = $klass($base, $super, 'MeasureText', MeasureText);

    var def = MeasureText._proto, $scope = MeasureText._scope;
    def.metrics = nil;
    def.$initialize = function(canvas, text) {
      var self = this;
      return self.metrics = canvas.measureText(text);
    };

    return (def.$width = function() {
      var self = this;
      return self.metrics.width;
    }, nil);
  })(self, null);
  return (function($base, $super) {
    function RenderingLoop(){};
    var self = RenderingLoop = $klass($base, $super, 'RenderingLoop', RenderingLoop);

    var def = RenderingLoop._proto, $scope = RenderingLoop._scope, TMP_2;
    return (def.$initialize = TMP_2 = function(time) {
      var self = this, $iter = TMP_2._p, block = $iter || nil;
      if (time == null) {
        time = (1000)['$/'](60)
      }
      TMP_2._p = null;
      
            window.requestAnimFrame = (function(){
                return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback){
                    window.setTimeout(callback, time);
                };
            })();

            var loop = function(){block.$call()};
            var recursiveAnim = function() {
                (function animloop(){
                    requestAnimFrame(animloop);
                    loop();
                })();
            };
            recursiveAnim();
        
    }, nil)
  })(self, null);
})(Opal);