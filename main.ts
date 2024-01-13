namespace SpriteKind {
    export const Block = SpriteKind.create()
}
function UnderGroundColumn (Column: number, Row: number) {
    for (let i = 0; i <= Row; i++) {
        tiles.setTileAt(tiles.getTileLocation(Column, i + 7), Stone)
    }
}
function doSomething () {
	
}
function PlaceBlockColumn1 (Column: number, Row: number) {
    for (let i = 0; i <= Row; i++) {
        tiles.setTileAt(tiles.getTileLocation(Column, i * -1 + 7), dirt)
        if (i == Row) {
            tiles.setTileAt(tiles.getTileLocation(Column, i * -1 + 7 - 1), grass)
        }
        if (Math.percentChance(5)) {
            tiles.setTileAt(tiles.getTileLocation(Column, i * -1 + 7 - 2), tree)
        }
    }
}
function GenerateTerrain () {
    current_tilemap_level = tilemap`level17`
    tiles.setCurrentTilemap(current_tilemap_level)
    for (let index2 = 0; index2 <= 10000; index2++) {
        DefaultBlockHeight = 2
        ColumBlockHeight = DefaultBlockHeight + randint(-2, 2) * randint(1, Noise)
        PlaceBlockColumn1(index2, ColumBlockHeight)
        UnderGroundColumn(index2, BlockHeightLimit)
    }
}
let ColumBlockHeight = 0
let DefaultBlockHeight = 0
let current_tilemap_level: tiles.TileMapData = null
let Stone: Image = null
let tree: Image = null
let dirt: Image = null
let grass: Image = null
let Noise = 0
let BlockHeightLimit = 0
BlockHeightLimit = 50
let col = 0
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
    f f d d d d d d d d d d d d f f 
    f f d d d d f f f f d d d d f f 
    d d f d d d d d d d d d d f d d 
    d d d f d d d d d d d d f d d d 
    d d d d f d d f f d d f d d d d 
    d d d d d f d d d d f d d d d d 
    d f d d d d f d d f d d d d f d 
    d f d d f d d f f d d f d d f d 
    d f d d f d d f f d d f d d f d 
    d f d d d d f d d f d d d d f d 
    d d d d d f d d d d f d d d d d 
    d d d d f d d f f d d f d d d d 
    d d d f d d d d d d d d f d d d 
    d d f d d d d d d d d d d f d d 
    f f d d d d f f f f d d d d f f 
    f f d d d d d d d d d d d d f f 
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
