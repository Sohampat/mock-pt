namespace SpriteKind {
    export const Block = SpriteKind.create()
}
// for (let index = 0; index <= range; index++) {
// chance = randint(0, 100)
// if (chance < 50) {
// let Index2 = 0
// tiles.setTileAt(tiles.getTileLocation(col - index, row - Index2), assets.tile`transparency16`)
// }
// row = row + 10
// col = col + 1
// }
function storage (Index22: string, num2: number, num3: number, text2: string, text3: string, text4: string) {
	
}
function CreateCaves (col: number, row: number) {
    row = row + 10
    range = 7
    for (let index22 = 0; index22 <= 200; index22++) {
        RandomNumb = randint(1, 4)
        currentTile = tiles.getTileLocation(index22, row)
        if (tiles.tileAtLocationEquals(currentTile, Stone)) {
            if (RandomNumb > 1) {
                tiles.setTileAt(tiles.getTileLocation(index22, row + 1), assets.tile`transparency16`)
            } else if (RandomNumb > 2) {
                tiles.setTileAt(tiles.getTileLocation(index22, row - 1), assets.tile`transparency16`)
            } else if (RandomNumb > 3) {
                tiles.setTileAt(tiles.getTileLocation(index22 + 1, row), assets.tile`transparency16`)
            } else if (RandomNumb <= 4) {
                tiles.setTileAt(tiles.getTileLocation(index22 - 1, row), assets.tile`transparency16`)
            } else {
            	
            }
        } else if (tiles.tileAtLocationEquals(currentTile, assets.tile`transparency16`)) {
        	
        } else {
        	
        }
    }
}
function UnderGroundColumn (Column: number, Row: number) {
    for (let i = 0; i <= Row; i++) {
        tiles.setTileAt(tiles.getTileLocation(Column, i + 7), Stone)
        if (Math.percentChance(5)) {
            tiles.setTileAt(tiles.getTileLocation(Column, i + 7), Iron)
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
    for (let index222 = 0; index222 <= 10000; index222++) {
        DefaultBlockHeight = 2
        ColumBlockHeight = DefaultBlockHeight + randint(-2, 2) * randint(1, Noise)
        PlaceBlockColumn1(index222, ColumBlockHeight)
        UnderGroundColumn(index222, BlockHeightLimit)
    }
    CreateCaves(2, 7)
}
let ColumBlockHeight = 0
let DefaultBlockHeight = 0
let current_tilemap_level: tiles.TileMapData = null
let currentTile: tiles.Location = null
let RandomNumb = 0
let range = 0
let row = 0
let Iron: Image = null
let Stone: Image = null
let tree: Image = null
let dirt: Image = null
let grass: Image = null
let Noise = 0
let BlockHeightLimit = 0
let range222 = 0
let range22 = 0
let range2 = 0
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
row = 7
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
