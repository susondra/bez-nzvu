input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() >= 337 || input.compassHeading() <= 23) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() > 23 && input.compassHeading() < 67) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (input.compassHeading() >= 67 && input.compassHeading() <= 113) {
        basic.showArrow(ArrowNames.West)
    } else if (input.compassHeading() > 113 && input.compassHeading() < 157) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.compassHeading() >= 157 && input.compassHeading() <= 203) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() > 203 && input.compassHeading() < 247) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.compassHeading() >= 247 && input.compassHeading() <= 293) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
