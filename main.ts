namespace SpriteKind {
    export const Block = SpriteKind.create()
}
function GenerateTerrain () {
    Height = 8
    NoiseScale = 0.06
    for (let col = 0; col <= scene.screenWidth() / 8; col++) {
        x = col + (seed + NoiseScale)
    }
    for (let row = 0; row <= scene.screenHeight() / 8; row++) {
        let col = 0
        x = col + (seed + NoiseScale)
    }
}
let x = 0
let NoiseScale = 0
let Height = 0
let seed = 0
seed = randint(0, 9999) * 10000
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . e 7 e 7 e 7 e 7 7 7 7 e 7 e . 
    . 7 e 7 e 7 7 7 e 7 e 7 7 e 7 . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Block)
tiles.loadMap(tiles.createMap(tilemap`level2`))
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2)
GenerateTerrain()
