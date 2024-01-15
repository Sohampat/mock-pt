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
function FillInsideOfCave () {
    for (let index222 = 0; index222 <= 300; index222++) {
        for (let index = 0; index <= BlockHeightLimit; index++) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index - 1), assets.tile`transparency16`) && tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index + 1), Stone) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index), assets.tile`transparency16`) || tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index), Iron))) {
                tiles.setTileAt(tiles.getTileLocation(index222, index), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index222, index), Lava)
            }
        }
    }
    for (let index222 = 0; index222 <= 300; index222++) {
        for (let index = 0; index <= BlockHeightLimit; index++) {
            if (Math.percentChance(50) && tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index), Lava)) {
                tiles.setTileAt(tiles.getTileLocation(index222, index - 1), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index222, index - 1), Lava)
            } else if (Math.percentChance(50) && tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index), Lava)) {
                tiles.setTileAt(tiles.getTileLocation(index222, index - 1), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index222, index - 1), Stone)
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(index222 + 1, index), Lava) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index), assets.tile`transparency16`) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index222 - 1, index), Lava) || tiles.tileAtLocationEquals(tiles.getTileLocation(index222 + 1, index), Lava)))) {
                tiles.setTileAt(tiles.getTileLocation(index222, index), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index222, index), Lava)
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index - 1), Lava) && tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index), assets.tile`transparency16`)) {
                tiles.setTileAt(tiles.getTileLocation(index222, index), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index222, index), Lava)
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index), Lava) && tiles.tileAtLocationEquals(tiles.getTileLocation(index222 + 1, index), assets.tile`transparency16`)) {
                tiles.setTileAt(tiles.getTileLocation(index222 + 1, index), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index222 + 1, index), Lava)
                console.log("SpecialCase1")
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index), Lava) && tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index + 1), assets.tile`transparency16`)) {
                tiles.setTileAt(tiles.getTileLocation(index222 + 1, index), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index222 + 1, index), Lava)
                console.log("SpecialCase2")
            }
        }
    }
    for (let index222 = 0; index222 <= 300; index222++) {
        for (let index = 0; index <= BlockHeightLimit; index++) {
            if (Math.percentChance(50) && tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index), Lava)) {
                tiles.setTileAt(tiles.getTileLocation(index222, index - 1), Stone)
                tiles.setTileAt(tiles.getTileLocation(index222, index - 1), Stone)
            } else if (Math.percentChance(25) && tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index), Lava)) {
                tiles.setTileAt(tiles.getTileLocation(index222, index - 1), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index222, index - 1), Iron)
            }
            if (Math.percentChance(25) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index), Stone) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index + 1), assets.tile`transparency16`) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index + 2), assets.tile`transparency16`) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index + 3), assets.tile`transparency16`) && tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index + 4), assets.tile`transparency16`)))))) {
                RandomNumb = randint(2, 3)
                for (let indexx = 0; indexx <= RandomNumb; indexx++) {
                    tiles.setTileAt(tiles.getTileLocation(index222, index + indexx), Stalagmites)
                    tiles.setTileAt(tiles.getTileLocation(index222, index + (RandomNumb + 1)), StalagmiteTip)
                }
            }
        }
    }
}
function CreateCaves (col: number, row: number) {
    row = row + 10
    for (let index22 = 0; index22 <= 200; index22++) {
        if (Math.percentChance(5)) {
            currentTile = tiles.getTileLocation(index22, row)
            if (tiles.tileAtLocationEquals(currentTile, Stone)) {
                radius = 5
                createCircle(index22, row, radius)
                if (Math.percentChance(10)) {
                    createCircle(index22 - randint(0, -9), row - randint(0, 9), Math.sqrt(randint(1, 15)))
                }
                if (Math.percentChance(40)) {
                    createCircle(index22 - randint(0, -9), row + randint(0, 9), Math.sqrt(randint(1, 15)))
                }
                if (Math.percentChance(50)) {
                    createCircle(index22 + randint(0, 9), row, Math.sqrt(randint(1, 15)))
                }
                if (Math.percentChance(50)) {
                    createCircle(index22 - randint(0, 9), row + randint(0, 9), Math.sqrt(randint(1, 15)))
                }
            } else if (tiles.tileAtLocationEquals(currentTile, assets.tile`transparency16`)) {
            	
            }
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
    for (let index2222 = 0; index2222 <= 10000; index2222++) {
        DefaultBlockHeight = 2
        ColumBlockHeight = DefaultBlockHeight + randint(-2, 2) * randint(1, Noise)
        PlaceBlockColumn1(index2222, ColumBlockHeight)
        UnderGroundColumn(index2222, BlockHeightLimit)
    }
    CreateCaves(2, 7)
    FillInsideOfCave()
}
function createCircle (centerX: number, centerY: number, radius: number) {
    for (let heightIndex = -radius; heightIndex <= radius; heightIndex++) {
        for (let index2 = -radius; index2 <= radius; index2++) {
            if (index2 * index2 + heightIndex * heightIndex <= radius * radius) {
                tiles.setTileAt(tiles.getTileLocation(centerX + index2, centerY + heightIndex), assets.tile`transparency16`);
            }
        }
    }
console.log("CircleMade")
}
let ColumBlockHeight = 0
let DefaultBlockHeight = 0
let current_tilemap_level: tiles.TileMapData = null
let currentTile: tiles.Location = null
let RandomNumb = 0
let row = 0
let StalagmiteTip: Image = null
let Stalagmites: Image = null
let Lava: Image = null
let Iron: Image = null
let Stone: Image = null
let tree: Image = null
let dirt: Image = null
let grass: Image = null
let Noise = 0
let BlockHeightLimit = 0
let radius2 = 0
let radius26 = 0
let radius24 = 0
let currentTile2 = null
let HeightIndex = 0
let range = 0
let range2 = 0
let radius = 0
BlockHeightLimit = 100
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
Lava = img`
    4 2 2 2 4 4 4 4 4 2 2 4 4 4 4 4 
    4 2 4 2 2 2 2 2 4 4 2 4 2 2 4 4 
    4 2 2 2 2 2 2 2 4 2 4 2 2 2 2 4 
    4 2 2 2 4 4 4 4 2 2 2 4 2 2 4 4 
    4 2 2 2 2 2 2 2 2 4 4 2 4 4 2 4 
    4 2 4 4 4 4 4 4 4 2 4 4 4 2 2 4 
    4 2 2 2 2 2 4 2 2 2 2 2 2 2 2 4 
    4 4 4 2 2 4 4 4 2 2 2 2 2 2 4 4 
    2 2 4 4 4 2 2 2 2 4 4 4 4 4 4 4 
    4 2 4 2 2 2 2 4 4 2 2 2 2 2 4 4 
    4 4 4 4 4 4 4 4 4 4 2 2 2 2 4 4 
    2 2 2 2 4 4 4 2 2 4 4 4 2 4 4 4 
    2 2 4 2 2 2 4 2 4 4 4 4 2 2 4 4 
    4 2 4 4 4 4 2 2 2 2 2 2 2 2 2 2 
    4 2 4 2 2 2 2 2 4 4 4 4 2 2 2 4 
    4 4 4 4 2 2 2 4 4 2 2 4 4 4 4 4 
    `
Stalagmites = img`
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    `
StalagmiteTip = img`
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . . d d d d d d d d . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
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
