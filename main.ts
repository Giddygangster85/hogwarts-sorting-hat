input.onButtonPressed(Button.A, function () {
	
})
function Gryffindor () {
    if (Response == 0) {
        basic.showString("You belong in Gryffindor")
    } else if (Response == 0) {
        basic.showString("Gryffindor is your house")
    } else if (Response == 0) {
        basic.showString("you are a by Gryffindor far")
    } else if (Response == 0) {
        basic.showString("Gryffindor fits you")
    }
}
input.onButtonPressed(Button.AB, function () {
    if (OnOff == 0) {
        OnOff = 1
    } else if (OnOff == 1) {
        if (Question == 1) {
        	
        }
    }
})
function Hufflepuff () {
    if (Response == 0) {
        basic.showString("You belong in Hufflepuff")
    } else if (Response == 0) {
        basic.showString("Hufflepuff is your house")
    } else if (Response == 0) {
        basic.showString("you are a by Hufflepuff far")
    } else if (Response == 0) {
        basic.showString("Hufflepuff fits you")
    }
}
function Ravenclaw () {
    if (Response == 0) {
        basic.showString("You belong in Ravenclaw")
    } else if (Response == 0) {
        basic.showString("Ravenclaw is your house")
    } else if (Response == 0) {
        basic.showString("you are a by Ravenclaw far")
    } else if (Response == 0) {
        basic.showString("Ravenclaw fits you")
    }
}
function Slytherin () {
    if (Response == 0) {
        basic.showString("You belong in Slytherin")
    } else if (Response == 0) {
        basic.showString("Slytherin is your house")
    } else if (Response == 0) {
        basic.showString("you are a by Slytherin far")
    } else if (Response == 0) {
        basic.showString("Slytherin fits you")
    }
}
let Response = 0
let Question = 0
let OnOff = 0
basic.showString("Press A+B to begin")
OnOff = 0
Question = 0
basic.forever(function () {
    if (OnOff == 1) {
    	
    } else if (OnOff == 0) {
    	
    }
})
