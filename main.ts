let mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
