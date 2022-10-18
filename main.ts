controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == "menu") {
        gameMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            changeMode(selection)
            gameMenu.close()
        })
    } else if (gameMode == "edit") {
        if (controller.right.isPressed() || controller.up.isPressed()) {
            tiles.setTileAt(tiles.getTilesByType(assets.tile`myTile1`)[0], assets.tile`myTile3`)
            if (gameEditorIndex < tiles.getTilesByType(assets.tile`myTile3`).length - 1) {
                gameEditorIndex += 1
            } else {
                gameEditorIndex = 0
            }
            tiles.setTileAt(tiles.getTilesByType(assets.tile`myTile3`)[gameEditorIndex], assets.tile`myTile1`)
            console.logValue("gameEditorIndex", gameEditorIndex)
        } else if (controller.left.isPressed() || controller.down.isPressed()) {
            tiles.setTileAt(tiles.getTilesByType(assets.tile`myTile1`)[0], assets.tile`myTile3`)
            if (gameEditorIndex > 0) {
                gameEditorIndex += -1
            } else {
                gameEditorIndex = tiles.getTilesByType(assets.tile`myTile3`).length - 1
            }
            tiles.setTileAt(tiles.getTilesByType(assets.tile`myTile3`)[gameEditorIndex], assets.tile`myTile1`)
            console.logValue("gameEditorIndex", gameEditorIndex)
        } else if (controller.A.isPressed()) {
            changeMode("selector")
            initMenuTower()
        }
    } else if (gameMode == "selector") {
        if (controller.A.isPressed()) {
        	
        } else if (controller.B.isPressed()) {
        	
        }
    }
})
function initGameMenu () {
    gameMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Play"),
    miniMenu.createMenuItem("Instructions"),
    miniMenu.createMenuItem("Credits")
    )
}
function initGame () {
    tiles.setCurrentTilemap(tilemap`level1`)
    initMapEditor()
}
function initMapEditor () {
    changeMode("edit")
    console.log("initMapEditor")
    tiles.setTileAt(tiles.getTilesByType(assets.tile`myTile3`)[gameEditorIndex], assets.tile`myTile1`)
}
function initMenuTower () {
    if (info.score() >= 100) {
        gameMenuTowers = miniMenu.createMenu(
        miniMenu.createMenuItem("$25", img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("$50", img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("$100", img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        )
    } else if (info.score() >= 50) {
        gameMenuTowers = miniMenu.createMenu(
        miniMenu.createMenuItem("$25", img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("$50", img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        )
    } else if (info.score() >= 25) {
        gameMenuTowers = miniMenu.createMenu(
        miniMenu.createMenuItem("$25", img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        )
    }
}
function changeMode (mode: string) {
    gameMode = mode
    if (gameMode == "Play") {
        changeMode("starting")
    } else if (gameMode == "Instructions") {
    	
    } else if (gameMode == "Credits") {
    	
    } else if (gameMode == "menu") {
        initGameMenu()
    } else if (gameMode == "starting") {
        info.setScore(150)
        initGame()
    } else if (gameMode == "playing") {
    	
    } else if (gameMode == "edit") {
    	
    } else if (gameMode == "selector") {
    	
    }
}
let gameMenuTowers: miniMenu.MenuSprite = null
let gameMenu: miniMenu.MenuSprite = null
let gameEditorIndex = 0
let gameMode = ""
gameMode = "menu"
gameEditorIndex = 0
changeMode(gameMode)
