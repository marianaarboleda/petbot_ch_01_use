roversa.onEvent(RoversaPin.P16, RoversaEvent.Click, function () {
    roversaPetBot.playGame(-2)
})
roversa.onEvent(RoversaPin.P9, RoversaEvent.Click, function () {
    roversaPetBot.scrollSocialMedia()
})
roversa.onEvent(RoversaPin.P13, RoversaEvent.Click, function () {
    roversaPetBot.goRun()
})
input.onGesture(Gesture.ScreenDown, function () {
    roversaPetBot.wakeUp(-10, Emotion.Surprised)
})
roversa.onEvent(RoversaPin.P14, RoversaEvent.Click, function () {
    roversaPetBot.goSleep()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    roversaPetBot.wakeUp(0, Emotion.Neutral)
})
roversa.onEvent(RoversaPin.P8, RoversaEvent.Click, function () {
    roversaPetBot.meetFriend()
})
roversa.onEvent(RoversaPin.P5, RoversaEvent.Click, function () {
    roversaPetBot.showStats()
})
roversa.onEvent(RoversaPin.P15, RoversaEvent.Click, function () {
    roversaPetBot.textFriend()
})
roversaPetBot.start()
