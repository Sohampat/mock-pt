namespace SpriteKind {
    export const Block = SpriteKind.create()
}
function CreateCave (col: number, row: number) {
    range = 5
    for (let Index2 = 0; Index2 <= range; Index2++) {
        Chance = randint(0, 100)
        if (Chance < 50) {
            tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`transparency16`)
        }
    }
}
function UnderGroundColumn (Column: number, Row: number) {
    for (let i = 0; i <= Row; i++) {
        tiles.setTileAt(tiles.getTileLocation(Column, i + 7), Stone)
        if (Math.percentChance(5)) {
            tiles.setTileAt(tiles.getTileLocation(Column, i + 7), Iron)
        }
        if (Math.percentChance(10)) {
            CreateCave(Column, i + 7)
        }
    }
}
function doSomething () {
	
}
function PlaceBlockColumn1 (Column: number, Row: number) {
    for (let j = 0; j <= Row; j++) {
        tiles.setTileAt(tiles.getTileLocation(Column, j * -1 + 7), dirt)
        if (j == Row) {
            tiles.setTileAt(tiles.getTileLocation(Column, j * -1 + 7 - 1), grass)
        }
        if (Math.percentChance(5)) {
            tiles.setTileAt(tiles.getTileLocation(Column, j * -1 + 7 - 2), tree)
        }
    }
}
function GenerateTerrain () {
    current_tilemap_level = tilemap`level17`
    tiles.setCurrentTilemap(current_tilemap_level)
    for (let index22 = 0; index22 <= 10000; index22++) {
        DefaultBlockHeight = 2
        ColumBlockHeight = DefaultBlockHeight + randint(-2, 2) * randint(1, Noise)
        PlaceBlockColumn1(index22, ColumBlockHeight)
        UnderGroundColumn(index22, BlockHeightLimit)
    }
}
let ColumBlockHeight = 0
let DefaultBlockHeight = 0
let current_tilemap_level: tiles.TileMapData = null
let Chance = 0
let range = 0
let Iron: Image = null
let Stone: Image = null
let tree: Image = null
let dirt: Image = null
let grass: Image = null
let Noise = 0
let BlockHeightLimit = 0
let range2 = 0
let col = 0
BlockHeightLimit = 50
Noise = 1
grass = img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `
dirt = img`
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    `
tree = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 e 7 e 7 . . . . . . 
    . . . . . e 7 e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    `
Stone = img`
    f f b b b b b b b b b b b b f f 
    f f b b f b b b b f b b b b f f 
    b b f b b b b b b b b b b f b b 
    b b b f b b b b b b b b f b b b 
    b b b b f b b f b b b f b b b b 
    b b b b b f b b b b f b b b b b 
    b f b b b b f b b f b b b b b b 
    b b b b b b b f f b b b f b b b 
    b b b b b b b f f b b b b b b f 
    b b b f f b f b b f b b b b b b 
    b f b b b f b b b b f b b b b b 
    b b b b f b b b b b b f b b b b 
    b b b f b b b b b f b b f b b b 
    b b f b f b b b b b b b b f b b 
    f f b b b b b b f b b b b b f f 
    f f b b b b b b b b b b b b f f 
    `
Iron = img`
    b b d d d d d d d d d d d d b b 
    b b d d b d d d d b d d d d b b 
    d d b d d d d d d d d d d b d d 
    d d d b d d d d d d d d b d d d 
    d d d d b d d b d d d b d d d d 
    d d d d d b d d d d b d d d d d 
    d b d d d d b d d b d d d d d d 
    d d d d d d d b b d d d b d d d 
    d d d d d d d b b d d d d d d b 
    d d d b b d b d d b d d d d d d 
    d b d d d b d d d d b d d d d d 
    d d d d b d d d d d d b d d d d 
    d d d b d d d d d b d d b d d d 
    d d b d b d d d d d d d d b d d 
    b b d d d d d d b d d d d d b b 
    b b d d d d d d d d d d d d b b 
    `
let row = 7
GenerateTerrain()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 . . . 3 3 . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    . . . . 3 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 . . . . 3 3 . . . . . 
    . . . . 3 3 . 3 3 3 . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite.x += 2000
