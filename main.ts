sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.startCountdown(3.8)
    pizzaWithAFace.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(1)
    if (info.score() == 10) {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.startCountdown(3.8)
    pizzaAppleWithWorm.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(-1)
    if (info.score() == -5) {
        game.over(false)
    }
})
let pizzaWithAFace: Sprite = null
let pizzaAppleWithWorm: Sprite = null
pizzaAppleWithWorm = sprites.create(img`
    3 3 3 . . . . . . . 7 . . . . . 
    3 f 3 . . . . . . 7 . . . . . . 
    3 . f . . . . . . 7 . . . . . . 
    3 f 3 3 3 2 2 2 2 2 2 2 2 2 . . 
    3 3 3 . 3 3 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 2 2 2 2 2 2 2 2 . . 
    . . . . . . 2 2 2 2 2 2 . . . . 
    . . . . . . . 2 2 2 2 . . . . . 
    . . . . . . . . 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
info.startCountdown(3.8)
scene.setBackgroundColor(7)
let badLookingCat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 7 . 7 8 . . . . . . 
    . . . . . 8 . 7 . 8 . . . . . . 
    . . . 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 . . 9 . . . . . . 
    . . . . . 9 9 . . 9 9 . . . . . 
    . . . . 9 9 . . . . 9 9 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(badLookingCat)
pizzaWithAFace = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
    . . . 5 2 2 5 5 5 5 5 5 5 5 5 5 
    . . . . 5 2 5 2 2 5 5 2 2 5 5 . 
    . . . . . 5 5 2 2 5 5 2 2 5 . . 
    . . . . . . 5 5 5 2 2 5 5 . . . 
    . . . . . . . 5 5 2 2 5 . . . . 
    . . . . . . . . 5 5 5 . . . . . 
    . . . . . . . . . 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
pizzaWithAFace.setPosition(randint(0, 160), randint(0, 120))
pizzaAppleWithWorm.setPosition(randint(0, 160), randint(0, 120))
