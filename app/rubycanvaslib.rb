require "opal"

class Canvas
    attr_reader :width, :height
    def initialize canvas_id
        @canvas = `document.getElementById(canvas_id).getContext("2d")`
    end
    def round(num); (0.5 + num) << 0; end

    def width=(width)
        `#@canvas.canvas.width = #{@width = round(width)}`
    end
    def height=(height)
        `#@canvas.canvas.height = #{@height = round(height)}`
    end
    def fillStyle=(style)
        `#@canvas.fillStyle = style`
    end
    def strokeStyle=(style)
        `#@canvas.strokeStyle = style`
    end
    def fillRect(x, y, width, height)
        `#@canvas.fillRect(#{round(x)}, #{round(y)}, #{round(width)}, #{round(height)})`
    end
    def strokeRect(x, y, w, h)
        `#@canvas.strokeRect(#{round(x)}, #{round(y)}, #{round(w)}, #{round(h)})`
    end
    def beginPath
        `#@canvas.beginPath()`
    end
    def moveTo(sx, sy)
        `#@canvas.moveTo(#{round(sx)}, #{round(sy)})`
    end
    def lineTo(ex, ey)
        `#@canvas.lineTo(#{round(ex)}, #{round(ey)})`
    end
    def lineWidth=(w)
        `#@canvas.lineWidth = #{round(w)}`
    end
    def strokeStyle=(c)
        `#@canvas.strokeStyle = c`
    end
    def lineCap=(lc)
        `#@canvas.lineCap = lc`
    end
    def stroke
        `#@canvas.stroke()`
    end
    def arc(x, y, radius, startangle, endangle, anticlockwise)
        `#@canvas.arc(#{round(x)}, #{round(y)}, radius, startangle, endangle, anticlockwise)`
    end
    def fill
        `#@canvas.fill()`
    end
    def quadraticCurveTo(controlx, controly, endx, endy)
        `#@canvas.quadraticCurveTo(#{round(controlx)}, #{round(controly)}, #{round(endx)}, #{round(endy)})`
    end
    def bezierCurveTo(controlx1, controly1, controlx2, controly2, endx, endy)
        `#@canvas.bezierCurveTo(#{round(controlx1)}, #{round(controly1)}, #{round(controlx2)}, #{round(controly2)}, #{round(endx)}, #{round(endy)})`
    end
    def lineJoin=(j)
        `#@canvas.lineJoin = j`
    end
    def arcTo(controlx, controly, endx, endy, radius)
        `#@canvas.arcTo(#{round(controlx)}, #{round(controly)}, #{round(endx)}, #{round(endy)}, radius)`
    end
    def closePath
        `#@canvas.closePath()`
    end
    def rect(x, y, width, height)
        `#@canvas.rect(#{round(x)}, #{round(y)}, #{round(width)}, #{round(height)})`
    end
    def createLinearGradient(startx, starty, endx, endy)
        LinearGradient.new(@canvas, round(startx), round(starty), round(endx), round(endy))
    end
    def createRadialGradient(startx, starty, startradius, endx, endy, endradius)
        RadialGradient.new(@canvas, round(startx), round(starty), startradius, round(endx), round(endy), endradius)
    end
    def createPattern(imageobj, repeatoption)
        `#@canvas.createPattern(imageobj, repeatoption)`
    end
    def ellipse(x, y, radiusx, radiusy, rotation, startangle, endangle, anticlockwise)
        `#@canvas.ellipse(#{round(x)}, #{round(y)}, radiusx, radiusy, rotation, startangle, endangle, anticlockwise)`
    end
    def drawImage(imageobj, x, y)
        `#@canvas.drawImage(imageobj, #{round(x)}, #{round(y)})`
    end
    def drawImage(imageobj, x, y, width, height)
        `#@canvas.drawImage(imageobj, #{round(x)}, #{round(y)}, #{round(width)}, #{round(height)})`
    end
    def drawImage(imageobj, sx, sy, sw, sh, dx, dy, dw, dh)
        `#@canvas.drawImage(imageobj, #{round(sx)}, #{round(sy)}, #{round(sw)}, #{round(sh)}, #{round(dx)}, #{round(dy)}, #{round(dw)}, #{round(dh)})`
    end
    def font=(f)
        `#@canvas.font = f`
    end
    def fillText(str, x, y)
        `#@canvas.fillText(str, #{round(x)}, #{round(y)})`
    end
    def strokeText(str, x, y)
        `#@canvas.strokeText(str, #{round(x)}, #{round(y)})`
    end
    def textAlign=(a)
        `#@canvas.textAlign = a`
    end
    def textBaseline=(b)
        `#@canvas.textBaseline = b`
    end
end
class LinearGradient
    attr_reader :gradient
    def initialize(canvas, startx, starty, endx, endy)
        @gradient = `canvas.createLinearGradient(startx, starty, endx, endy)`
    end
    def addColorStop(offset, color)
        `#@gradient.addColorStop(offset, color)`
    end
end
class RadialGradient
    def initialize(canvas, startx, starty, startradius, endx, endy, endradius)
        @gradient = `canvas.createRadialGradient(startx, starty, startradius, endx, endy, endradius)`
    end
    def addColorStop(offset, color)
        `#@gradient.addColorStop(offset, color)`
    end
end
class Image
    def initialize
        @image = `new Image()`
    end
    def onload(&block)
        `function(){#{block.call}}`
    end
    def src=(src)
        `#@image.src = src`
    end
end
class MeasureText
    def initialize(canvas, text)
        @metrics = `canvas.measureText(text)`
    end
    def width
        `#@metrics.width`
    end
end

class RenderingLoop
    def initialize (time = 1000 / 60 , &block)
        %x{
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

            var loop = function(){#{block.call}};
            var recursiveAnim = function() {
                (function animloop(){
                    requestAnimFrame(animloop);
                    loop();
                })();
            };
            recursiveAnim();
        }
    end
end