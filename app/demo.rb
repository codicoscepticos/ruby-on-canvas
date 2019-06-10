require "opal"
require 'rubycanvaslib'

c = Canvas.new("canvas")
CWIDTH = c.width  = 620
CHEIGHT = c.height = 400

class Rect
    def initialize(c, color, x, y, w, h)
        @c = c ; @color = color
        @cwidth = @c.width ; @cheight = @c.height
        @x = x ; @y = y ; @w = w ; @h = h
        @speed = 2 ; @dir = rand(90)
    end
    def update
        erase ; move ; draw
    end
    def move
        @x +=@speed*`Math.cos(#@dir)`
        @y +=@speed*`Math.sin(#@dir)`
        wrap
    end
    def erase
        @c.fillStyle = "black"
        @c.fillRect(@x, @y, @w, @h)
    end
    def draw
        @c.fillStyle = @color
        @c.fillRect(@x, @y, @w, @h)
    end
    def wrap
        @x = @cwidth-@w if (@x+@w < 0) ; @x %= @cwidth
        @y = @cheight-@h if (@y+@h < 0) ; @y %= @cheight
    end
end

rects = []
20.times { |i|
    rects.push(Rect.new(c, "rgba(#{rand(256)}, #{rand(256)}, #{rand(256)}, 1)", 80*i, 60*i, 20, 20))
}

c.fillStyle = "black" ; c.fillRect(0, 0, CWIDTH, CHEIGHT)
RenderingLoop.new() {
    rects.each {|rect|
        rect.update
    }
}