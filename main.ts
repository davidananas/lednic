input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    display = 1
})
let display = 0
let alarm = 0
display = 0
basic.forever(function () {
    while (display == 0) {
        basic.showNumber(input.compassHeading())
    }
    if (250 <= input.compassHeading()) {
        alarm = 1
        while (alarm == 1) {
            music.play(music.createSoundExpression(WaveShape.Sine, 1, 4729, 0, 253, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
    }
})
