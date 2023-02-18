input.onButtonPressed(Button.A, function () {
    matrix.drawBitmap(
    [0, 1],
    0,
    0,
    8,
    8,
    neopixel.colors(NeoPixelColors.Red),
    drawDirection.mirrored
    )
    matrix.show()
})
let matrix: SmartMatrix.Matrix = null
matrix = SmartMatrix.create(
DigitalPin.P1,
16,
16,
NeoPixelMode.RGB
)
basic.forever(function () {
    matrix.scrollText(
    "hallo",
    1200,
    0,
    neopixel.colors(NeoPixelColors.Green)
    )
    matrix.show()
})
