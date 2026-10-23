// Map data for Stratholme — Main Gate.
window.LANTERN_DUNGEONS = window.LANTERN_DUNGEONS || [];
window.LANTERN_DUNGEONS.push({
  "id": "stratholme-main-gate",
  "bossSource": "https://www.icy-veins.com/wow-classic/stratholme-live-dungeon-guide",
  "bosses": [
    {
      "id": "unforgiven",
      "name": "The Unforgiven",
      "x": 713,
      "y": 133,
      "kind": "Optional boss",
      "mainBoss": false,
      "abilities": [
        "Frost Nova"
      ],
      "mindset": "Pick up the ambush adds and clear them first."
    },
    {
      "id": "timmy",
      "name": "Timmy the Cruel",
      "x": 347,
      "y": 164,
      "kind": "Boss",
      "mainBoss": true,
      "abilities": [
        "Enrage",
        "Ravenous Claw"
      ],
      "mindset": "Tank and spank. Watch behind you after clearing the courtyard."
    },
    {
      "id": "malor",
      "name": "Malor the Zealous",
      "x": 296,
      "y": 245,
      "kind": "Optional boss",
      "mainBoss": false,
      "abilities": [
        "Healing"
      ],
      "mindset": "Interrupt his heal; otherwise tank and spank."
    },
    {
      "id": "willey",
      "name": "Cannon Master Willey",
      "x": 43,
      "y": 335,
      "kind": "Boss",
      "mainBoss": true,
      "abilities": [
        "Knock Away",
        "Summon Crimson Rifleman"
      ],
      "mindset": "Use the cannons or AoE to handle incoming riflemen."
    },
    {
      "id": "galford",
      "name": "Archivist Galford",
      "x": 274,
      "y": 495,
      "kind": "Boss",
      "mainBoss": true,
      "abilities": [
        "Burning Winds",
        "Fire Nova"
      ],
      "mindset": "Healer: prepare for the Burning Winds damage spike."
    },
    {
      "id": "balnazzar",
      "name": "Dathrohan / Balnazzar",
      "x": 204,
      "y": 565,
      "kind": "Final boss",
      "mainBoss": true,
      "abilities": [
        "Crusader Strike",
        "Crusader’s Hammer",
        "Holy Strike",
        "Domination",
        "Mind Blast",
        "Psychic Scream",
        "Shadow Shock",
        "Sleep"
      ],
      "mindset": "Transforms at half health. Ranged stay back from fear; crowd-control dominated allies."
    }
  ],
  "name": "Stratholme",
  "wing": "Main Gate",
  "region": "Eastern Plaguelands",
  "continent": "Eastern Kingdoms",
  "width": 1000,
  "height": 660,
  "image": "/stratholme-main-gate.png",
  "source": "https://wowclassic.judgehype.com/article/donjon-stratholme/",
  "sourceName": "JudgeHype",
  "stops": [
    [
      662,
      580,
      "The main gate",
      "Enter the city through the southern gate and head north toward King’s Square."
    ],
    [
      662,
      383,
      "King’s Square",
      "Cross the square toward the passage on its western side."
    ],
    [
      598,
      217,
      "Market Row",
      "Follow the passage north, then turn west at Market Row."
    ],
    [
      382,
      184,
      "Crusaders’ Square",
      "Continue west into Crusaders’ Square, then follow the street south."
    ],
    [
      300,
      269,
      "The Scarlet approach",
      "Follow the connecting passage west toward the Scarlet buildings."
    ],
    [
      237,
      310,
      "Inside the bastion",
      "Follow the interior passage southwest, then take the southern corridor."
    ],
    [
      253,
      491,
      "The final halls",
      "Continue through the southern halls toward the final chamber."
    ],
    [
      204,
      544,
      "The Crimson Throne",
      "The preview ends in the Crimson Throne chamber."
    ]
  ],
  "route": "M662 580 L662 452 L672 413 L662 383 L610 375 L596 343 L604 305 L600 257 L598 217 L575 196 L542 178 L485 160 L438 175 L406 184 L382 184 L381 227 L383 261 L404 302 L397 306 L371 269 L344 269 L329 247 L310 236 L300 217 L286 223 L274 237 L285 259 L300 269 L283 289 L253 289 L237 310 L221 321 L213 337 L232 371 L226 378 L201 378 L218 407 L241 440 L229 450 L253 491 L243 510 L222 520 L204 544"
});
