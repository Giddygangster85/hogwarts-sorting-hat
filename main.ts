function Gryffindor_and_Slytherin () {
    Coin_Flip = randint(1, 2)
    if (Coin_Flip == 1) {
        Gryffindor()
    } else if (Coin_Flip == 2) {
        Slytherin()
    }
}
function Question_7 () {
    Question = Question + 1
    basic.showString("Question 7")
    basic.showString("What do you hate the most?")
    basic.showString("A. Slothes")
    basic.showString("B. Loners")
    basic.showString("A+B. Slytherins")
}
function Question_6 () {
    Question = Question + 1
    basic.showString("Question 6")
    basic.showString("How do you describe yourself?")
    basic.showString("A. Clever")
    basic.showString("B. Wise")
    basic.showString("A+B. Kind")
}
function Question_3 () {
    Question = Question + 1
    basic.showString("Question 3")
    basic.showString("Choose a class")
    basic.showString("A. Potions")
    basic.showString("B. Botony")
    basic.showString("A+B. Defense Against the Dark Arts")
}
function Gryffindor_and_Hufflepuff () {
    Coin_Flip = randint(1, 2)
    if (Coin_Flip == 1) {
        Gryffindor()
    } else if (Coin_Flip == 2) {
        Hufflepuff()
    }
}
function Gryffindor_and_Ravenclaw () {
    Coin_Flip = randint(1, 2)
    if (Coin_Flip == 1) {
        Gryffindor()
    } else if (Coin_Flip == 2) {
        Ravenclaw()
    }
}
input.onButtonPressed(Button.A, function () {
    if (OnOff == 0) {
    	
    } else if (OnOff == 1) {
        if (Question == 1) {
            Gryffindor_Points = Gryffindor_Points + 1
        } else if (Question == 2) {
            Slytherin_Points = Slytherin_Points + 1
        } else if (Question == 3) {
            Ravenclaw_Points = Ravenclaw_Points + 1
        } else if (Question == 4) {
            Hufflepuff_Points = Hufflepuff_Points + 1
        } else if (Question == 5) {
            Gryffindor_Points = Gryffindor_Points + 1
        } else if (Question == 6) {
            Slytherin_Points = Slytherin_Points + 1
        } else if (Question == 7) {
            Ravenclaw_Points = Ravenclaw_Points + 1
        } else if (Question == 8) {
            Hufflepuff_Points = Hufflepuff_Points + 1
        }
    }
})
function Ravenclaw_and_hufflepuff () {
    Coin_Flip = randint(1, 2)
    if (Coin_Flip == 1) {
        Ravenclaw()
    } else if (Coin_Flip == 2) {
        Hufflepuff()
    }
}
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
function Question_1 () {
    Question = Question + 1
    basic.showString("Question 1")
    basic.showString("Pick an Animal")
    basic.showString("A. Lion")
    basic.showString("B. Snake")
    basic.showString("A+B. Raven")
}
function Slytherin_and_Ravenclaw () {
    Coin_Flip = randint(1, 2)
    if (Coin_Flip == 1) {
        Slytherin()
    } else if (Coin_Flip == 2) {
        Ravenclaw()
    }
}
input.onButtonPressed(Button.AB, function () {
    if (OnOff == 0) {
        OnOff = 1
    } else if (OnOff == 1) {
        if (Question == 1) {
            Ravenclaw_Points = Ravenclaw_Points + 1
        } else if (Question == 2) {
            Hufflepuff_Points = Hufflepuff_Points + 1
        } else if (Question == 3) {
            Gryffindor_Points = Gryffindor_Points + 1
        } else if (Question == 4) {
            Slytherin_Points = Slytherin_Points + 1
        } else if (Question == 5) {
            Ravenclaw_Points = Ravenclaw_Points + 1
        } else if (Question == 6) {
            Hufflepuff_Points = Hufflepuff_Points + 1
        } else if (Question == 7) {
            Gryffindor_Points = Gryffindor_Points + 1
        } else if (Question == 8) {
            Slytherin_Points = Slytherin_Points + 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (OnOff == 0) {
    	
    } else if (OnOff == 1) {
        if (Question == 1) {
            Slytherin_Points = Slytherin_Points + 1
        } else if (Question == 2) {
            Ravenclaw_Points = Ravenclaw_Points + 1
        } else if (Question == 3) {
            Hufflepuff_Points = Hufflepuff_Points + 1
        } else if (Question == 4) {
            Gryffindor_Points = Gryffindor_Points + 1
        } else if (Question == 5) {
            Slytherin_Points = Slytherin_Points + 1
        } else if (Question == 6) {
            Ravenclaw_Points = Ravenclaw_Points + 1
        } else if (Question == 7) {
            Hufflepuff_Points = Hufflepuff_Points + 1
        } else if (Question == 8) {
            Gryffindor_Points = Gryffindor_Points + 1
        }
    }
})
function Question_8 () {
    Question = Question + 1
    basic.showString("Question 8")
    basic.showString("Pick a Professor")
    basic.showString("A. Sprout")
    basic.showString("B. Dumbledore")
    basic.showString("A+B. Snape")
    basic.pause(1000)
    Question = Question + 1
}
function Question_5 () {
    Question = Question + 1
    basic.showString("Question 5")
    basic.showString("Choose a Place")
    basic.showString("A. Quidditch")
    basic.showString("B. Forbidden Forrest")
    basic.showString("A+B. Library")
}
function Question_4 () {
    Question = Question + 1
    basic.showString("Question 4")
    basic.showString("Pick a spell")
    basic.showString("A. Priori Incantatem")
    basic.showString("B. Expelliarmus")
    basic.showString("A+B. Avada Kadavra")
}
function Slytherin_and_Hufflepuff () {
    Coin_Flip = randint(1, 2)
    if (Coin_Flip == 1) {
        Slytherin()
    } else if (Coin_Flip == 2) {
        Hufflepuff()
    }
}
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
function Question_2 () {
    Question = Question + 1
    basic.showString("Question 2")
    basic.showString("Pick a friend")
    basic.showString("A. Draco")
    basic.showString("B. Luna")
    basic.showString("A+B. Cedric")
}
let Response = 0
let Ravenclaw_Points = 0
let Slytherin_Points = 0
let Hufflepuff_Points = 0
let Gryffindor_Points = 0
let Coin_Flip = 0
let Question = 0
let OnOff = 0
basic.showString("Press A+B to begin")
OnOff = 0
Question = 0
Coin_Flip = 0
Gryffindor_Points = 0
Hufflepuff_Points = 0
Slytherin_Points = 0
Ravenclaw_Points = 0
Response = 0
basic.forever(function () {
    if (OnOff == 0) {
    	
    } else if (OnOff == 1) {
        if (Question != 9) {
            Question_1()
            Question_2()
            Question_3()
            Question_4()
            Question_5()
            Question_6()
            Question_7()
            Question_8()
        } else if (Question == 9) {
            if (Gryffindor_Points > Slytherin_Points && Gryffindor_Points > Ravenclaw_Points && Gryffindor_Points > Hufflepuff_Points) {
                Gryffindor()
            } else if (Hufflepuff_Points > Slytherin_Points && Hufflepuff_Points > Ravenclaw_Points && Hufflepuff_Points > Gryffindor_Points) {
                Hufflepuff()
            } else if (Ravenclaw_Points > Slytherin_Points && Ravenclaw_Points > Gryffindor_Points && Ravenclaw_Points > Hufflepuff_Points) {
                Ravenclaw()
            } else if (Slytherin_Points > Gryffindor_Points && Slytherin_Points > Ravenclaw_Points && Slytherin_Points > Hufflepuff_Points) {
                Slytherin()
            } else if (Gryffindor_Points == Slytherin_Points && (Gryffindor_Points > Ravenclaw_Points && Gryffindor_Points > Hufflepuff_Points && (Slytherin_Points > Ravenclaw_Points && Slytherin_Points > Hufflepuff_Points))) {
                Gryffindor_and_Slytherin()
            } else if (Gryffindor_Points == Hufflepuff_Points && (Gryffindor_Points > Ravenclaw_Points && Gryffindor_Points > Slytherin_Points && (Hufflepuff_Points > Ravenclaw_Points && Hufflepuff_Points > Slytherin_Points))) {
                Gryffindor_and_Hufflepuff()
            } else if (Gryffindor_Points == Ravenclaw_Points && (Gryffindor_Points > Hufflepuff_Points && Gryffindor_Points > Slytherin_Points && (Ravenclaw_Points > Hufflepuff_Points && Ravenclaw_Points > Slytherin_Points))) {
                Gryffindor_and_Ravenclaw()
            } else if (Slytherin_Points == Hufflepuff_Points && (Slytherin_Points > Gryffindor_Points && Slytherin_Points > Ravenclaw_Points && (Hufflepuff_Points > Ravenclaw_Points && Hufflepuff_Points > Gryffindor_Points))) {
                Slytherin_and_Hufflepuff()
            } else if (Slytherin_Points == Ravenclaw_Points && (Slytherin_Points > Hufflepuff_Points && Slytherin_Points > Gryffindor_Points && (Ravenclaw_Points > Hufflepuff_Points && Ravenclaw_Points > Gryffindor_Points))) {
                Slytherin_and_Ravenclaw()
            } else if (Ravenclaw_Points == Hufflepuff_Points && (Ravenclaw_Points > Gryffindor_Points && Ravenclaw_Points > Slytherin_Points && (Hufflepuff_Points > Slytherin_Points && Hufflepuff_Points > Gryffindor_Points))) {
                Ravenclaw_and_hufflepuff()
            }
        }
    }
})
