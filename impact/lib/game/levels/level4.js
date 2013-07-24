ig.module( 'game.levels.level4' )
.requires( 'impact.image','game.entities.dragon','game.entities.book2','game.entities.player','game.entities.lamp-eel','game.entities.minion','game.entities.levelchange' )
.defines(function(){
LevelLevel4=/*JSON[*/{"entities":[{"type":"EntityDragon","x":1132,"y":1312},{"type":"EntityDragon","x":548,"y":1312},{"type":"EntityDragon","x":800,"y":892},{"type":"EntityBook2","x":464,"y":972},{"type":"EntityDragon","x":1004,"y":1376},{"type":"EntityPlayer","x":672,"y":416},{"type":"EntityLampEel","x":472,"y":592},{"type":"EntityDragon","x":1012,"y":1504},{"type":"EntityDragon","x":568,"y":1440},{"type":"EntityDragon","x":688,"y":1232},{"type":"EntityMinion","x":564,"y":736},{"type":"EntityMinion","x":456,"y":888},{"type":"EntityMinion","x":312,"y":948},{"type":"EntityLevelchange","x":320,"y":1472,"settings":{"size":{"x":32,"y":32},"level":"level5"}}],"layer":[{"name":"main","width":"50","height":"50","linkWithCollision":false,"visible":1,"tilesetName":"media/tilesetd2.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","0","0","0","0","0","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42",227,"42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","0","0","0","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","0","0","0","42","42","42","42","0",235,"0","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","0","0","0","42","42","42","42","0","0","0","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","0","0","0","42","42","42","42","42","42","42","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42",227,"42","42","42","42","42","42","42","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","0","0","0","0",227,"0","0","0","0","0","42","42","42","42","42","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","0","0","0","0","42","0","0","0","0","0",227,"0","0","0","0","0","0","0","0","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","0","0","0","0","42","0","0","0","0","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","0","0","0","0","42","0","0","0","0","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42",227,"42","42","42","42",227,"42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","0","42","42","42","42","0","0","0","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","0","42","42","42","42","0","0","0","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","0","42","42","42","42","0","0","0","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","0","0","0","42","42","42","42",227,"42","42",227,"42","42","42","42","0","0","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","0","0","0",227,"0","0","0","0","42","42","0","0","0","0",227,"0","0","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","0","0","0","42","0","0","0","0","42","42","42","42","42","42","42","0","0","0",227,"0","0","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","0","0","0","42","0","0","0","0","42","42","42","42","42","42","42","0","0","0","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","0","0","0","42","0","0","0","0","42","42","42","42","42","42","42","0","0","0","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","0","0","0","42","0","0","0","0","42","42","42","42","42","42","42","0","0","0",227,"0","0","0","0","0","0","0","0","0","0","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","0","0","0","42","0","0","0","0","42","42","42","42","42","42","42","0","0","0","42","42","42","42","42","0","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","0","0","0","42","0","0","0","0","42","42","42","42","42","42","42","0","0","0","42","42","42","42","42","0","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","0","0","0","42","0","0","0","0","42","42","42","42","42","42","42","42",227,"42","42","42","42","42","42","0","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","42","42"],["42","42","42","42","42","42","42","42","42","42",227,"42","42","0","0","0","0","42","42","42","42","42","42","42","42","0","42","42","42","42","42","42","0","42","42","42","42","0","42","42","42","42","42","42","42","42","0","0","0","42"],["42","42","42","42","42","42","42","42","42","42","0","42","42","42","42",227,"42","42","42","42","42","42","42","42","42","0","42","42","42","42","42","42","0","42","42","42","42","0","0","0","0","0","0","0","0","0","0","0","0","42"],["42","42","42","42","42","42","42","42","42","42","0","42","42","42","42","0","42","42","42","42","42","42","42","42","42","0","42","42","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","0","42","42","0","0","0","42"],["42","42","42","42","42","42","42","42","42","0","0","0","0","0","42","0","42","42","42","42","42","0","0","0","42","0","42","42","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","0","42","42","0","0","0","42"],["42","42","42","42","42","42","42","42","42","0","0","0","0","0",227,"0","42","42","42","42","42","0","0","0","42","0","42","42","42","42","42","42","0","42","42","42","42","42","42","42","42","42","42","0","42","42","0","0","0","42"],["42","42","42","42","42","42","42","42","42","0","0","0","0","0","42","42","42","42","42","42","42","0","0","0","42","0","42","42","42","42","42","42","0","42","42","0","0","0","42","42","42","42","42","0","42","42","0","0","0","42"],["42","42","42","42","42","42","42","42","42","42",227,"42","42",227,"42","42","0","0","0","0","42","0","0","0",227,"0","42","42","42","42","42","42","0","42","42","0","0","0","42","42","42","42","42","0","42","42",227,"42","42","42"],["42","42","42","42","42","42","42","42","42","42","0","42","42","0","42","42","0","0","0","0",227,"0","0","0","42","42","42","42","42","42","0","0","0","0","42","0","0","0",227,"0","0","0","0","0","42","42","0","42","42","42"],["42","42","42","42","42","42","42","42","42","42","0","42","42","0","42","42","0","0","0","0","42","42","42","42","42","42","42","42","42","42","0","0","0","0",227,"0","0","0","42","42","42","42","42","42","42","42","0","42","42","42"],["42","42","42","42","42","42","42","42","42","42","0","42","42","0","0",227,"0","0","0","0","42","0","0","0","0","0","0","0","0",227,"0","0","0","0","42","0","0","0","42","42","42","42","42","42","42","42","0","42","42","42"],["42","42","42","42","42","42","42","42",369,365,366,368,227,"0","42","42","0","0","0","0","42","0","42","42","42","42","0","42","42","42","0","0","0","0","42","42","42",227,"42","42","42","42","42","42","42","42","0","42","42","42"],["42","42","42","42","42","42","42","42",369,"0","0",368,"42","42","42","42","0","0","0","0","42","0","42","42","42","42","0","42","42","42","0","0","0","0","42","42","42","0","42","42","42","42","42","42","42","42","0","42","42","42"],["42","42","42","42","42","42","42","42",369,"0",234,368,"42","42","42","42","0","0","0","0","42","0","42","42","42","42","0","42","42","42","0","0","0","0","42","42","42","0","42","42","42","42","42","42","42","42","0","42","42","42"],["42","42","42","42","42","42","42","42",364,365,366,367,"42","42","42","42","0","0","0","0","42","0","42","42","42","42","0","42","42","42","0","0","0","0","42","42","42","0","42","42","42","42","42","42","42","42","0","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","0","0","0","0","0","0","42","42","42","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","42","42","42"],["42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42","42"]]},{"name":"collision","width":"50","height":"50","linkWithCollision":false,"visible":0,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]}]}/*]JSON*/;
LevelLevel4Resources=[new ig.Image('media/tilesetd2.png')];
});