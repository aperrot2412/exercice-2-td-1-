input.onButtonPressed(Button.A, function () {
    if (Pos_x > 0) {
        led.unplot(Pos_x, Pos_y)
        Pos_x += -1
        led.plot(Pos_x, Pos_y)
    } else {
        led.unplot(Pos_x, Pos_y)
        Pos_x = 4
        led.plot(Pos_x, Pos_y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Pos_x < 4) {
        led.unplot(Pos_x, Pos_y)
        Pos_x += 1
        led.plot(Pos_x, Pos_y)
    } else {
        led.unplot(Pos_x, Pos_y)
        Pos_x = 0
        led.plot(Pos_x, Pos_y)
    }
})
let Pos_x = 0
let Pos_y = 0
Pos_y = 0
Pos_x = 2
led.plot(Pos_x, Pos_y)
basic.forever(function () {
    while (Pos_y < 4) {
        led.unplot(Pos_x, Pos_y)
        Pos_y += 1
        led.plot(Pos_x, Pos_y)
        basic.pause(1000)
    }
    while (Pos_y > 0) {
        led.unplot(Pos_x, Pos_y)
        Pos_y += -1
        led.plot(Pos_x, Pos_y)
        basic.pause(1000)
    }
})
