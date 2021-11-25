input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.clearScreen()
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
