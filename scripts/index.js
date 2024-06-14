// ©️ 2024 DerCoderJo. All Rights Reserved.

import * as Minecraft from "@minecraft/server"

Minecraft.world.afterEvents.itemUse.subscribe(({itemStack, source}) => {
    source.addTag(`itemUse:${itemStack.typeId}`)
    if (itemStack.nameTag) source.addTag(`itemUseName:${itemStack.nameTag}`)
    
    Minecraft.system.runTimeout(() => {
        source.runCommandAsync(`tag @s remove itemUse:${itemStack.typeId}`)
        source.runCommandAsync(`tag @s remove itemUseName:${itemStack.nameTag}`)
    })
})

Minecraft.world.afterEvents.itemUseOn.subscribe(({itemStack, source}) => {
    source.addTag(`itemUseOn:${itemStack.typeId}`)
    if (itemStack.nameTag) source.addTag(`itemUseName:${itemStack.nameTag}`)

    Minecraft.system.runTimeout(() => {
        source.runCommandAsync(`tag @s remove itemUseOn:${itemStack.typeId}`)
        source.runCommandAsync(`tag @s remove itemUseName:${itemStack.nameTag}`)
    })
})

Minecraft.world.afterEvents.worldInitialize.subscribe(() => {
    console.warn("[RCoTu - Run Command on Item use] Loaded Addon")
})
