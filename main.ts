/**
 * 둘이 실행이 똑같다
 */
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Butterfly)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Heart)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Butterfly)
    }
})
