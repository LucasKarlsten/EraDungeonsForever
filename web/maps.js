// Map coordinates are in each entry's width × height SVG space.
// All routes are illustrative and pending in-game verification.
const dungeons = [
  {
    id: 'stratholme-service-entrance',
    bossSource: "https://www.icy-veins.com/wow-classic/stratholme-undead-dungeon-guide",
    bosses: [
  {
    "id": "nerubenkan",
    "name": "Nerub’enkan",
    "x": 548,
    "y": 325,
    "kind": "Boss",
    "mainBoss": true,
    "abilities": [
      "Crypt Scarabs",
      "Encasing Webs",
      "Pierce Armor",
      "Raise Undead Scarab"
    ],
    "mindset": "Tank and spank; kill the scarab adds."
  },
  {
    "id": "anastari",
    "name": "Baroness Anastari",
    "x": 775,
    "y": 317,
    "kind": "Boss",
    "mainBoss": true,
    "abilities": [
      "Banshee Curse",
      "Banshee Wail",
      "Possess",
      "Silence"
    ],
    "mindset": "Switch to possessed allies until they reach half health. Cover healing during Silence."
  },
  {
    "id": "maleki",
    "name": "Maleki the Pallid",
    "x": 699,
    "y": 114,
    "kind": "Boss",
    "mainBoss": true,
    "abilities": [
      "Drain Life",
      "Drain Mana",
      "Frostbolt",
      "Ice Tomb"
    ],
    "mindset": "Ease off damage while the tank is frozen; watch your threat."
  },
  {
    "id": "barthilas",
    "name": "Magistrate Barthilas",
    "x": 568,
    "y": 100,
    "kind": "Boss · after fleeing",
    "mainBoss": true,
    "abilities": [
      "Crowd Pummel",
      "Draining Blow",
      "Furious Anger",
      "Mighty Blow"
    ],
    "mindset": "Tank and spank. At this location after fleeing the Service Entrance."
  },
  {
    "id": "ramstein",
    "name": "Ramstein the Gorger",
    "x": 451,
    "y": 103,
    "kind": "Boss",
    "mainBoss": true,
    "abilities": [
      "Flurry",
      "Knockout",
      "Trample"
    ],
    "mindset": "Tank and spank with a threat drop. Recover aggro after Knockout."
  },
  {
    "id": "rivendare",
    "name": "Baron Rivendare",
    "x": 390,
    "y": 108,
    "kind": "Final boss",
    "mainBoss": true,
    "abilities": [
      "Cleave",
      "Mortal Strike",
      "Shadow Bolt",
      "Unholy Aura"
    ],
    "mindset": "Face him away. Ranged stay back; kill skeletons and protect the healer."
  }
],
    name: 'Stratholme', wing: 'Service Entrance', region: 'Eastern Plaguelands',
    continent: 'Eastern Kingdoms', width: 1000, height: 660,
    image: '/stratholme-service-entrance.png',
    source: 'https://wowclassic.judgehype.com/article/donjon-stratholme/',
    sourceName: 'JudgeHype',
    stops: [
 [659,603,'The service entrance','Start at the southern entrance, then follow the passage north into Elders’ Square.'],
 [640,490,'Elders’ Square','Continue north through the square and the narrow passage toward the Gauntlet.'],
 [568,306,'The western ziggurat','At the junction, take the western branch toward the first ziggurat.'],
 [745,306,'The eastern ziggurat','Return to the junction and cross to the eastern ziggurat.'],
 [676,140,'The northern ziggurat','Follow the eastern passage north around the Gauntlet to the northern ziggurat.'],
 [508,132,'Toward Slaughter Square','Return to the northern junction, then follow the western passage toward Slaughter Square.'],
 [452,130,'Slaughter Square','Enter the square and follow the highlighted approach toward the slaughterhouse.'],
 [390,132,'The slaughterhouse','The route preview ends at the slaughterhouse on the western side of the square.']
],
    route: "M659 603 L659 587 L688 568 L677 540 L650 508 L640 490 L646 462 L631 435 L612 390 L651 370 L668 350 L637 326 L606 311 L585 302 L568 306 L585 302 L606 311 L637 326 L668 350 L706 326 L745 306 L726 287 L706 277 L692 248 L676 226 L663 197 L665 166 L676 140 L665 166 L635 175 L604 176 L588 161 L572 142 L551 127 L530 132 L508 132 L482 132 L452 130 L433 148 L419 164 L414 140 L390 132"
  },
  {
    id: 'stratholme-main-gate',
    bossSource: "https://www.icy-veins.com/wow-classic/stratholme-live-dungeon-guide",
    bosses: [
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
    name: 'Stratholme', wing: 'Main Gate', region: 'Eastern Plaguelands',
    continent: 'Eastern Kingdoms', width: 1000, height: 660,
    image: '/stratholme-main-gate.png',
    source: 'https://wowclassic.judgehype.com/article/donjon-stratholme/',
    sourceName: 'JudgeHype',
    stops: [
      [662,580,'The main gate','Enter the city through the southern gate and head north toward King’s Square.'],
      [662,383,'King’s Square','Cross the square toward the passage on its western side.'],
      [598,217,'Market Row','Follow the passage north, then turn west at Market Row.'],
      [382,184,'Crusaders’ Square','Continue west into Crusaders’ Square, then follow the street south.'],
      [300,269,'The Scarlet approach','Follow the connecting passage west toward the Scarlet buildings.'],
      [237,310,'Inside the bastion','Follow the interior passage southwest, then take the southern corridor.'],
      [253,491,'The final halls','Continue through the southern halls toward the final chamber.'],
      [204,544,'The Crimson Throne','The preview ends in the Crimson Throne chamber.']
    ],
    route: 'M662 580 L662 452 L672 413 L662 383 L610 375 L596 343 L604 305 L600 257 L598 217 L575 196 L542 178 L485 160 L438 175 L406 184 L382 184 L381 227 L383 261 L404 302 L397 306 L371 269 L344 269 L329 247 L310 236 L300 217 L286 223 L274 237 L285 259 L300 269 L283 289 L253 289 L237 310 L221 321 L213 337 L232 371 L226 378 L201 378 L218 407 L241 440 L229 450 L253 491 L243 510 L222 520 L204 544'
  }
,
{
  "id": "scholomance",
  "name": "Scholomance",
  "wing": "Classic route",
  "region": "Western Plaguelands",
  "continent": "Eastern Kingdoms",
  "width": 1000,
  "height": 660,
  "image": "/scholomance-1.jpg",
  "route": "M390 431 L390 370 L448 370 L615 370 L680 370 L680 290 L625 290 L625 322",
  "floors": [
    {
      "id": "reliquary",
      "name": "The Reliquary",
      "image": "/scholomance-1.jpg",
      "route": "M390 431 L390 370 L448 370 L615 370 L680 370 L680 290 L625 290 L625 322"
    },
    {
      "id": "halls",
      "name": "Summoning & Viewing Room",
      "image": "/scholomance-2.jpg",
      "route": "M267 280 L267 220 L317 220 L317 330 L390 330 L390 185 L450 185 L450 245 L500 245 L500 350 L435 350 L435 470 L350 470 L350 590 M420 470 L475 470 L475 558 L430 558 M475 470 L565 470 L565 405"
    },
    {
      "id": "upper",
      "name": "Ossuary & Upper Study",
      "image": "/scholomance-3.jpg",
      "route": "M350 595 L350 540 L315 540 L315 435 M600 417 L600 350 L650 350 L650 305 L720 305 L720 230 L720 145 L720 305 L820 305 L887 305 L720 305 L720 455 L720 470 M650 305 L690 305"
    },
    {
      "id": "lower",
      "name": "Laboratory & Lower Vaults",
      "image": "/scholomance-4.jpg",
      "route": "M445 420 L400 420 L400 530 M675 210 L675 135 L675 100 L675 210 L790 210 L675 210 L675 310 M675 210 L620 210"
    }
  ],
  "stops": [
    [
      390,
      431,
      "Enter the Reliquary",
      "Cross the bridge, then descend to the summoning halls.",
      "reliquary"
    ],
    [
      450,
      185,
      "Summoning halls",
      "Clear a safe path; Kirtonos is an optional balcony summon.",
      "halls"
    ],
    [
      350,
      540,
      "Descend into the Ossuary",
      "Use the southern stairs to reach Rattlegore below.",
      "halls"
    ],
    [
      315,
      435,
      "Rattlegore",
      "Loot the Viewing Room Key, then retrace the stairs.",
      "upper"
    ],
    [
      475,
      470,
      "Unlock the Viewing Room",
      "Return upstairs. Leave the students alone unless doing Dawn’s Gambit.",
      "halls"
    ],
    [
      400,
      530,
      "Ras Frostwhisper",
      "Optional laboratory detour; return to the Viewing Room afterward.",
      "lower"
    ],
    [
      565,
      450,
      "Headmaster’s Study stairs",
      "Take the Viewing Room stairs toward the study.",
      "halls"
    ],
    [
      675,
      100,
      "Lady Illucia Barov",
      "Begin the three lower vault encounters.",
      "lower"
    ],
    [
      790,
      210,
      "Lord Alexei Barov",
      "Clear the eastern vault and its guardian.",
      "lower"
    ],
    [
      675,
      310,
      "The Ravenian",
      "Finish the southern vault, then ascend to the upper rooms.",
      "lower"
    ],
    [
      720,
      145,
      "Lorekeeper Polkelt",
      "Clear the northern upper room.",
      "upper"
    ],
    [
      887,
      305,
      "Doctor Theolen Krastinov",
      "Clear the eastern upper room.",
      "upper"
    ],
    [
      720,
      470,
      "Instructor Malicia",
      "Finish the southern room. All six guardians unlock Gandling.",
      "upper"
    ],
    [
      690,
      305,
      "Darkmaster Gandling",
      "Regroup in the study for the final encounter.",
      "upper"
    ]
  ],
  "bosses": [
    {
      "id": "kirtonos",
      "name": "Kirtonos the Herald",
      "x": 495,
      "y": 70,
      "floor": "halls",
      "abilities": [
        "Wing Flap",
        "Dominate Mind"
      ],
      "mindset": "Tank with your back to a wall.",
      "mainBoss": false,
      "kind": "Optional boss"
    },
    {
      "id": "jandice",
      "name": "Jandice Barov",
      "x": 500,
      "y": 110,
      "floor": "upper",
      "abilities": [
        "Curse of Blood",
        "Summon Illusions"
      ],
      "mindset": "Find the real caster among her copies.",
      "mainBoss": false,
      "kind": "Optional boss"
    },
    {
      "id": "rattlegore",
      "name": "Rattlegore",
      "x": 285,
      "y": 410,
      "floor": "upper",
      "abilities": [
        "Knock Away",
        "War Stomp"
      ],
      "mindset": "Let the tank establish threat.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "vectus",
      "name": "Vectus",
      "x": 510,
      "y": 490,
      "floor": "halls",
      "abilities": [
        "Blast Wave",
        "Flamestrike"
      ],
      "mindset": "Optional Dawn’s Gambit event; avoid ground fire.",
      "mainBoss": false,
      "kind": "Optional boss"
    },
    {
      "id": "marduk",
      "name": "Marduk Blackpool",
      "x": 510,
      "y": 540,
      "floor": "halls",
      "abilities": [
        "Cleave",
        "Shadow Shield"
      ],
      "mindset": "Attack from behind; watch reflected damage.",
      "mainBoss": false,
      "kind": "Optional boss"
    },
    {
      "id": "ras",
      "name": "Ras Frostwhisper",
      "x": 425,
      "y": 565,
      "floor": "lower",
      "abilities": [
        "Fear",
        "Frostbolt Volley"
      ],
      "mindset": "Clear nearby packs before the fear.",
      "mainBoss": false,
      "kind": "Optional boss"
    },
    {
      "id": "illucia",
      "name": "Lady Illucia Barov",
      "x": 675,
      "y": 65,
      "floor": "lower",
      "abilities": [
        "Dominate Mind",
        "Silence"
      ],
      "mindset": "Control mind-controlled allies.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "alexei",
      "name": "Lord Alexei Barov",
      "x": 825,
      "y": 210,
      "floor": "lower",
      "abilities": [
        "Unholy Aura",
        "Veil of Shadow"
      ],
      "mindset": "Control his guards; ranged stay back.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "ravenian",
      "name": "The Ravenian",
      "x": 675,
      "y": 345,
      "floor": "lower",
      "abilities": [
        "Cleave",
        "Knock Away"
      ],
      "mindset": "Recover threat after knockback.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "polkelt",
      "name": "Lorekeeper Polkelt",
      "x": 720,
      "y": 110,
      "floor": "upper",
      "abilities": [
        "Corrosive Acid",
        "Volatile Infection"
      ],
      "mindset": "Remove infections when possible.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "krastinov",
      "name": "Doctor Theolen Krastinov",
      "x": 920,
      "y": 305,
      "floor": "upper",
      "abilities": [
        "Rend",
        "Enrage"
      ],
      "mindset": "Save cooldowns for the enrage.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "malicia",
      "name": "Instructor Malicia",
      "x": 720,
      "y": 505,
      "floor": "upper",
      "abilities": [
        "Heal",
        "Renew"
      ],
      "mindset": "Interrupt heals and dispel Renew.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "gandling",
      "name": "Darkmaster Gandling",
      "x": 725,
      "y": 305,
      "floor": "upper",
      "abilities": [
        "Arcane Missiles",
        "Curse of the Darkmaster",
        "Teleport"
      ],
      "mindset": "Teleported? Kill your room’s skeletons and return.",
      "mainBoss": true,
      "kind": "Final boss"
    }
  ],
  "summary": "Classic progression · Rattlegore’s key → six guardians → Gandling. Optional encounters are marked separately.",
  "source": "https://www.wowhead.com/cata/zone=2057/scholomance",
  "sourceName": "Wowhead",
  "mapNote": "Original Blizzard artwork with English labels, using the pre-redesign Scholomance layout.",
  "bossSource": "https://www.icy-veins.com/wow-classic/scholomance-dungeon-guide",
  "transitions": [
    {
      "id": "scholomance-stairs-1",
      "floor": "reliquary",
      "x": 625,
      "y": 322,
      "direction": "down",
      "toFloor": "halls",
      "toStep": 1,
      "afterStep": 0,
      "label": "Summoning halls",
      "pairId": "scholomance-stairs-1-return"
    },
    {
      "id": "scholomance-stairs-1-return",
      "pairId": "scholomance-stairs-1",
      "floor": "halls",
      "x": 267,
      "y": 280,
      "direction": "up",
      "toFloor": "reliquary",
      "toStep": 0,
      "label": "Reliquary"
    },
    {
      "id": "scholomance-stairs-2",
      "floor": "halls",
      "x": 350,
      "y": 590,
      "direction": "down",
      "toFloor": "upper",
      "toStep": 3,
      "afterStep": 2,
      "label": "Great Ossuary",
      "pairId": "scholomance-stairs-3"
    },
    {
      "id": "scholomance-stairs-3",
      "floor": "upper",
      "x": 350,
      "y": 595,
      "direction": "up",
      "toFloor": "halls",
      "toStep": 4,
      "afterStep": 3,
      "label": "Viewing Room",
      "pairId": "scholomance-stairs-2"
    },
    {
      "id": "scholomance-stairs-4",
      "floor": "halls",
      "x": 430,
      "y": 558,
      "direction": "down",
      "toFloor": "lower",
      "toStep": 5,
      "afterStep": 4,
      "label": "Laboratory",
      "pairId": "scholomance-stairs-5"
    },
    {
      "id": "scholomance-stairs-5",
      "floor": "lower",
      "x": 445,
      "y": 420,
      "direction": "up",
      "toFloor": "halls",
      "toStep": 6,
      "afterStep": 5,
      "label": "Viewing Room",
      "pairId": "scholomance-stairs-4"
    },
    {
      "id": "scholomance-stairs-6",
      "floor": "halls",
      "x": 565,
      "y": 405,
      "direction": "down",
      "toFloor": "lower",
      "toStep": 7,
      "afterStep": 6,
      "label": "Lower Study",
      "pairId": "scholomance-stairs-6-return"
    },
    {
      "id": "scholomance-stairs-6-return",
      "pairId": "scholomance-stairs-6",
      "floor": "lower",
      "x": 675,
      "y": 210,
      "direction": "up",
      "toFloor": "halls",
      "toStep": 6,
      "label": "Viewing Room"
    },
    {
      "id": "scholomance-stairs-7",
      "floor": "lower",
      "x": 620,
      "y": 210,
      "direction": "up",
      "toFloor": "upper",
      "toStep": 10,
      "afterStep": 9,
      "label": "Upper Study",
      "pairId": "scholomance-stairs-7-return"
    },
    {
      "id": "scholomance-stairs-7-return",
      "pairId": "scholomance-stairs-7",
      "floor": "upper",
      "x": 600,
      "y": 417,
      "direction": "down",
      "toFloor": "lower",
      "toStep": 9,
      "label": "Lower Study"
    }
  ]
},
{
  "id": "dire-maul-east",
  "name": "Dire Maul",
  "wing": "East",
  "region": "Feralas",
  "continent": "Kalimdor",
  "width": 1000,
  "height": 660,
  "image": "/dire-maul-east-upper.jpg",
  "route": "M165 575 L100 575 L100 500 L100 330 L100 270 L80 270 M100 500 L280 500 L325 480 L325 440 L430 440 L430 350 L430 310 M325 440 L325 190 L480 190 L535 190 L555 260 L620 260 L740 260 L740 310",
  "floors": [
    {
      "id": "upper",
      "name": "Warpwood Quarter · Upper",
      "image": "/dire-maul-east-upper.jpg",
      "route": "M165 575 L100 575 L100 500 L100 330 L100 270 L80 270 M100 500 L280 500 L325 480 L325 440 L430 440 L430 350 L430 310 M325 440 L325 190 L480 190 L535 190 L555 260 L620 260 L740 260 L740 310"
    },
    {
      "id": "lower",
      "name": "Gardens & Shrine · Lower",
      "image": "/dire-maul-east-lower.jpg",
      "route": "M280 355 L300 355 L300 480 L470 480 L540 480 M470 480 L470 370 L520 370 L560 345 L595 370 L595 535 M470 480 L400 480 L400 310 L405 175 L435 160 L480 160 L500 185 L550 185"
    }
  ],
  "stops": [
    [
      165,
      575,
      "East entrance",
      "Enter the Warpwood Quarter. Speak to Pusillin if you need the Crescent Key.",
      "upper"
    ],
    [
      430,
      350,
      "Lethtendris detour",
      "Optional boss on the raised platform; then take the passage toward the pool.",
      "upper"
    ],
    [
      540,
      480,
      "Hydrospawn’s pool",
      "Clear the water room before the ramp ascent.",
      "lower"
    ],
    [
      595,
      535,
      "Zevrim’s altar",
      "Reach the upper altar by the ramp and defeat Zevrim.",
      "lower"
    ],
    [
      100,
      330,
      "Return to Ironbark",
      "Return to the courtyard and ask redeemed Ironbark to open the way.",
      "upper"
    ],
    [
      330,
      355,
      "Through the opened passage",
      "Follow the garden edge into the shrine.",
      "lower"
    ],
    [
      550,
      185,
      "Alzzin the Wildshaper",
      "Clear the nearby plants before the final pull.",
      "lower"
    ]
  ],
  "bosses": [
    {
      "id": "pusillin",
      "name": "Pusillin",
      "x": 740,
      "y": 285,
      "floor": "upper",
      "abilities": [
        "Fireball",
        "Blast Wave"
      ],
      "mindset": "Interrupt him; deal with his imp pack. Key detour ends here.",
      "mainBoss": false,
      "kind": "Optional boss"
    },
    {
      "id": "lethtendris",
      "name": "Lethtendris",
      "x": 430,
      "y": 310,
      "floor": "upper",
      "abilities": [
        "Curse of Tongues",
        "Shadow Bolt Volley"
      ],
      "mindset": "Handle Pimgib first and interrupt casts.",
      "mainBoss": false,
      "kind": "Optional boss"
    },
    {
      "id": "hydrospawn",
      "name": "Hydrospawn",
      "x": 575,
      "y": 480,
      "floor": "lower",
      "abilities": [
        "Massive Geyser",
        "Summon Hydroling"
      ],
      "mindset": "Pick up the small water adds.",
      "mainBoss": false,
      "kind": "Optional boss"
    },
    {
      "id": "zevrim",
      "name": "Zevrim Thornhoof",
      "x": 595,
      "y": 570,
      "floor": "lower",
      "abilities": [
        "Sacrifice",
        "Intense Pain"
      ],
      "mindset": "Heal the sacrificed player immediately; ranged stay back.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "alzzin",
      "name": "Alzzin the Wildshaper",
      "x": 550,
      "y": 150,
      "floor": "lower",
      "abilities": [
        "Wither",
        "Wild Regeneration",
        "Mangle"
      ],
      "mindset": "Keep the tank healthy; AoE incoming imps.",
      "mainBoss": true,
      "kind": "Final boss"
    }
  ],
  "summary": "Standard progression · Zevrim → Ironbark → Alzzin. Pusillin’s key chase is an optional detour.",
  "source": "https://www.wowhead.com/zone=2557/dire-maul",
  "sourceName": "Wowhead",
  "mapNote": "Original Blizzard artwork with English labels.",
  "bossSource": "https://www.icy-veins.com/wow-classic/dire-maul-east-dungeon-guide",
  "transitions": [
    {
      "id": "dire-maul-east-stairs-1",
      "floor": "upper",
      "x": 430,
      "y": 440,
      "direction": "down",
      "toFloor": "lower",
      "toStep": 2,
      "afterStep": 1,
      "label": "Hydrospawn’s pool",
      "pairId": "dire-maul-east-stairs-1-return"
    },
    {
      "id": "dire-maul-east-stairs-1-return",
      "pairId": "dire-maul-east-stairs-1",
      "floor": "lower",
      "x": 470,
      "y": 480,
      "direction": "up",
      "toFloor": "upper",
      "toStep": 1,
      "label": "Upper platform"
    },
    {
      "id": "dire-maul-east-stairs-2",
      "floor": "lower",
      "x": 300,
      "y": 410,
      "direction": "up",
      "toFloor": "upper",
      "toStep": 4,
      "afterStep": 3,
      "label": "Ironbark courtyard",
      "pairId": "dire-maul-east-stairs-2-return"
    },
    {
      "id": "dire-maul-east-stairs-2-return",
      "pairId": "dire-maul-east-stairs-2",
      "floor": "upper",
      "x": 100,
      "y": 500,
      "direction": "down",
      "toFloor": "lower",
      "toStep": 3,
      "label": "Lower gardens"
    },
    {
      "id": "dire-maul-east-stairs-3",
      "floor": "upper",
      "x": 100,
      "y": 270,
      "direction": "down",
      "toFloor": "lower",
      "toStep": 5,
      "afterStep": 4,
      "label": "Shrine passage",
      "pairId": "dire-maul-east-stairs-3-return"
    },
    {
      "id": "dire-maul-east-stairs-3-return",
      "pairId": "dire-maul-east-stairs-3",
      "floor": "lower",
      "x": 280,
      "y": 355,
      "direction": "up",
      "toFloor": "upper",
      "toStep": 4,
      "label": "Ironbark courtyard"
    }
  ]
},
{
  "id": "dire-maul-north",
  "name": "Dire Maul",
  "wing": "North · Boss clear",
  "region": "Feralas",
  "continent": "Kalimdor",
  "width": 1000,
  "height": 660,
  "image": "/dire-maul-north.jpg",
  "route": "M720 615 L720 565 L700 520 L620 520 L600 465 L600 520 L540 520 L495 520 L495 570 L415 570 L415 520 L300 520 L250 490 L250 415 L280 415 L315 415 L315 330 L315 270 L315 170",
  "floors": [
    {
      "id": "commons",
      "name": "Gordok Commons",
      "image": "/dire-maul-north.jpg",
      "route": "M720 615 L720 565 L700 520 L620 520 L600 465 L600 520 L540 520 L495 520 L495 570 L415 570 L415 520 L300 520 L250 490 L250 415 L280 415 L315 415 L315 330 L315 270 L315 170"
    }
  ],
  "stops": [
    [
      720,
      615,
      "North entrance",
      "Bring access to the locked wing. This route kills bosses; it is not a tribute run.",
      "commons"
    ],
    [
      700,
      520,
      "Guard Mol’dar",
      "Pull the patrol back toward the entrance.",
      "commons"
    ],
    [
      600,
      465,
      "Stomper Kreeg",
      "Optional stop along the courtyard edge.",
      "commons"
    ],
    [
      495,
      520,
      "Fengus’s courtyard",
      "Collect the courtyard key and continue west.",
      "commons"
    ],
    [
      250,
      415,
      "Guard Slip’kik",
      "Clear the halls carefully, watching for wandering eyes.",
      "commons"
    ],
    [
      315,
      330,
      "Captain Kromcrush",
      "Clear space for fear and prepare to control his reinforcements.",
      "commons"
    ],
    [
      315,
      170,
      "King Gordok & Cho’Rush",
      "Handle Cho’Rush’s healing while the tank holds the King.",
      "commons"
    ]
  ],
  "bosses": [
    {
      "id": "moldar",
      "name": "Guard Mol’dar",
      "x": 700,
      "y": 485,
      "floor": "commons",
      "abilities": [
        "Knock Away",
        "Shield Bash"
      ],
      "mindset": "Pull away from nearby dogs.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "kreeg",
      "name": "Stomper Kreeg",
      "x": 620,
      "y": 470,
      "floor": "commons",
      "abilities": [
        "Booze Spit",
        "War Stomp"
      ],
      "mindset": "Watch tank health through stuns.",
      "mainBoss": false,
      "kind": "Optional boss"
    },
    {
      "id": "fengus",
      "name": "Guard Fengus",
      "x": 495,
      "y": 485,
      "floor": "commons",
      "abilities": [
        "Knock Away",
        "Shield Charge"
      ],
      "mindset": "Fight in cleared space.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "slipkik",
      "name": "Guard Slip’kik",
      "x": 250,
      "y": 380,
      "floor": "commons",
      "abilities": [
        "Knock Away",
        "Shield Bash"
      ],
      "mindset": "Separate him from nearby packs.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "kromcrush",
      "name": "Captain Kromcrush",
      "x": 315,
      "y": 295,
      "floor": "commons",
      "abilities": [
        "Intimidating Shout",
        "Call Reavers",
        "Retaliation"
      ],
      "mindset": "Control the reavers; beware fear and Retaliation.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "gordok",
      "name": "King Gordok",
      "x": 315,
      "y": 135,
      "floor": "commons",
      "abilities": [
        "Mortal Strike",
        "War Stomp"
      ],
      "mindset": "Expect reduced tank healing.",
      "mainBoss": true,
      "kind": "Final boss"
    },
    {
      "id": "chorush",
      "name": "Cho’Rush the Observer",
      "x": 355,
      "y": 170,
      "floor": "commons",
      "abilities": [
        "Heal / Healing Wave (variant)",
        "Fireball / Chain Lightning (variant)"
      ],
      "mindset": "Class varies. Interrupt healing during this boss-clear run.",
      "mainBoss": true,
      "kind": "Boss"
    }
  ],
  "summary": "Boss-clear route · Defeats guards and Cho’Rush. A tribute run requires a different plan.",
  "source": "https://www.wowhead.com/zone=2557/dire-maul",
  "sourceName": "Wowhead",
  "mapNote": "Original Blizzard artwork with English labels.",
  "bossSource": "https://www.icy-veins.com/wow-classic/dire-maul-north-dungeon-guide"
},
{
  "id": "dire-maul-west",
  "name": "Dire Maul",
  "wing": "West",
  "region": "Feralas",
  "continent": "Kalimdor",
  "width": 1000,
  "height": 660,
  "image": "/dire-maul-west-gardens.jpg",
  "route": "M955 330 L920 330 L875 330 L875 450 L740 450 L740 290 L740 155 L620 155 L580 155 M580 155 L580 360 L490 360 L400 360 L330 360 M400 360 L400 500 L220 500 L210 530 M210 530 L170 530 L170 120 L250 120 M250 120 L170 120",
  "floors": [
    {
      "id": "gardens",
      "name": "Capital Gardens",
      "image": "/dire-maul-west-gardens.jpg",
      "route": "M955 330 L920 330 L875 330 L875 450 L740 450 L740 290 L740 155 L620 155 L580 155 M580 155 L580 360 L490 360 L400 360 L330 360 M400 360 L400 500 L220 500 L210 530 M210 530 L170 530 L170 120 L250 120 M250 120 L170 120"
    },
    {
      "id": "balcony",
      "name": "Upper Walkways",
      "image": "/dire-maul-west-balcony.jpg",
      "route": "M440 100 L480 100 L480 140 L600 140 L600 180 L400 180 L370 180 L370 320 L370 500 L550 500 M600 140 L480 140 L480 100 L440 100"
    },
    {
      "id": "prison",
      "name": "Prison & Athenaeum",
      "image": "/dire-maul-west-prison.jpg",
      "route": "M730 290 L695 290 L690 350 L640 400 L520 400 L500 260 L350 240 L240 280 L230 420 L350 480 L460 430 L350 380 M460 430 L520 400 L650 400 L660 340 L605 270 L620 215 L620 170"
    }
  ],
  "stops": [
    [
      955,
      330,
      "West entrance",
      "Begin in Capital Gardens and watch for patrols.",
      "gardens"
    ],
    [
      740,
      290,
      "First pylon",
      "Defeat its surrounding guardians to disable it.",
      "gardens"
    ],
    [
      330,
      360,
      "Tendris Warpwood",
      "Clear the courtyard treants before engaging.",
      "gardens"
    ],
    [
      210,
      530,
      "Magister Kalendris",
      "Clear the side building, then follow the west corridor north to the stairs marked ↑ Upper Walkways.",
      "gardens"
    ],
    [
      550,
      500,
      "Upper pylon & Illyanna",
      "Clear this upper section and its pylon guardians.",
      "balcony"
    ],
    [
      600,
      140,
      "Second upper pylon",
      "Finish both upper pylons, then return to the stairs marked ↓ Capital Gardens.",
      "balcony"
    ],
    [
      200,
      120,
      "Back to Capital Gardens",
      "Descend the same stairs after both upper pylons. Continue west along the lower passage toward the prison behind Tendris.",
      "gardens"
    ],
    [
      730,
      290,
      "Passage to the prison",
      "Return behind Tendris and enter the prison corridor.",
      "prison"
    ],
    [
      350,
      240,
      "Prison pylons",
      "Disable the remaining two pylons around the arena.",
      "prison"
    ],
    [
      350,
      380,
      "Immol’thar",
      "All five pylons must be disabled first.",
      "prison"
    ],
    [
      620,
      170,
      "Prince Tortheldrin",
      "After Immol’thar, follow the passage into the Athenaeum.",
      "prison"
    ]
  ],
  "bosses": [
    {
      "id": "tendris",
      "name": "Tendris Warpwood",
      "x": 330,
      "y": 325,
      "floor": "gardens",
      "abilities": [
        "Entangle",
        "Trample",
        "Uppercut"
      ],
      "mindset": "Clear treants first; they join the fight.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "kalendris",
      "name": "Magister Kalendris",
      "x": 210,
      "y": 565,
      "floor": "gardens",
      "abilities": [
        "Dominate Mind",
        "Mind Flay"
      ],
      "mindset": "Save an interrupt for mind control.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "tsuzee",
      "name": "Tsu’zee",
      "x": 175,
      "y": 490,
      "floor": "gardens",
      "abilities": [
        "Blind",
        "Backstab"
      ],
      "mindset": "Rare spawn; protect the healer during Blind.",
      "mainBoss": false,
      "kind": "Optional boss"
    },
    {
      "id": "illyanna",
      "name": "Illyanna Ravenoak",
      "x": 370,
      "y": 285,
      "floor": "balcony",
      "abilities": [
        "Aimed Shot",
        "Volley",
        "Immolation Trap"
      ],
      "mindset": "Keep her pet controlled while focusing her.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "immolthar",
      "name": "Immol’thar",
      "x": 350,
      "y": 345,
      "floor": "prison",
      "abilities": [
        "Eye of Immol’thar",
        "Portal of Immol’thar",
        "Trample"
      ],
      "mindset": "Ranged: kill the eyes quickly.",
      "mainBoss": true,
      "kind": "Boss"
    },
    {
      "id": "tortheldrin",
      "name": "Prince Tortheldrin",
      "x": 620,
      "y": 135,
      "floor": "prison",
      "abilities": [
        "Arcane Blast",
        "Counterspell",
        "Whirlwind"
      ],
      "mindset": "Pause damage after Arcane Blast; let the tank recover threat.",
      "mainBoss": true,
      "kind": "Final boss"
    }
  ],
  "summary": "Pylon route · Disable all five pylons → Immol’thar → Prince Tortheldrin.",
  "source": "https://www.wowhead.com/zone=2557/dire-maul",
  "sourceName": "Wowhead",
  "mapNote": "Original Blizzard artwork with English labels.",
  "bossSource": "https://www.icy-veins.com/wow-classic/dire-maul-west-dungeon-guide",
  "transitions": [
    {
      "id": "west-stairs-up",
      "floor": "gardens",
      "x": 250,
      "y": 120,
      "direction": "up",
      "toFloor": "balcony",
      "toStep": 4,
      "afterStep": 3,
      "label": "Upper Walkways"
    },
    {
      "id": "west-stairs-down",
      "floor": "balcony",
      "x": 440,
      "y": 100,
      "direction": "down",
      "toFloor": "gardens",
      "toStep": 6,
      "afterStep": 5,
      "label": "Capital Gardens"
    }
  ]
}
,
{
  "id": "lower-blackrock-spire",
  "name": "Blackrock Spire",
  "wing": "Lower",
  "region": "Blackrock Mountain",
  "continent": "Eastern Kingdoms",
  "width": 1000,
  "height": 660,
  "image": "/blackrock-spire-4.jpg",
  "route": "M264 255 L310 255 L350 255 L350 295 L390 305 L445 305 L470 275 L490 250 M450 520 L450 475 L450 445 L450 520 L475 540 M450 445 L450 400",
  "floors": [
    {
      "id": "level-4",
      "name": "Entrance & Urok’s platform",
      "image": "/blackrock-spire-4.jpg",
      "route": "M264 255 L310 255 L350 255 L350 295 L390 305 L445 305 L470 275 L490 250 M450 520 L450 475 L450 445 L450 520 L475 540 M450 445 L450 400"
    },
    {
      "id": "level-3",
      "name": "Hordemar City & Mok’Doom",
      "image": "/blackrock-spire-3.jpg",
      "route": "M560 265 L520 285 L490 310 L455 310 L490 310 L560 310 L610 300 L635 280 L650 315 L650 465 L590 465 L590 425 L545 425 L545 455 L465 455 L415 455 L385 470 L385 505 L385 470 L415 455 L465 455 L545 455 L545 490"
    },
    {
      "id": "level-2",
      "name": "Troll ledges & Skitterweb Tunnels",
      "image": "/blackrock-spire-2.jpg",
      "route": "M545 390 L550 425 L550 460 L550 425 L580 425 M555 470 L580 495 L615 495 L640 485 L640 525 L585 525 L570 550"
    },
    {
      "id": "level-1",
      "name": "Tazz’Alor",
      "image": "/blackrock-spire-1.jpg",
      "route": "M610 350 L565 350 L540 350 L525 365 L525 395 L525 365 L540 350 L610 350 L640 350 L640 420 L580 420 L550 430"
    },
    {
      "id": "level-5",
      "name": "The Storehouse & Halycon’s Lair",
      "image": "/blackrock-spire-5.jpg",
      "route": "M440 430 L440 480 L480 500 L535 500 L540 530 L540 560 L540 530 L450 530 L385 530 L385 555 L385 530 L420 530 L420 450 L370 450 L370 420"
    },
    {
      "id": "level-6",
      "name": "Chamber of Battle",
      "image": "/blackrock-spire-6.jpg",
      "route": "M365 450 L365 400 L420 400 L480 400 L530 400 L575 400"
    }
  ],
  "stops": [
    [
      300,
      255,
      "Take the lower path",
      "From the shared entrance, take the right-hand descent into Hordemar City. Keep the group together at the ledges.",
      "level-4"
    ],
    [
      550,
      310,
      "Hordemar City",
      "Follow the ramps and bridges toward Mok’Doom. Pull patrols back into cleared ground.",
      "level-3"
    ],
    [
      405,
      490,
      "Highlord Omokk",
      "Clear the ogre guards. Keep Omokk’s Head if you want the optional Urok event; collect a Roughshod Pike along the route.",
      "level-3"
    ],
    [
      550,
      435,
      "Shadow Hunter Vosh’gajin",
      "Descend to the troll ledges. Clear her priest escorts before moving farther down to Tazz’Alor.",
      "level-2"
    ],
    [
      525,
      395,
      "War Master Voone",
      "Clear Voone’s chamber, then return toward the spider ramps. Omokk, Voone and Wyrmthalak can drop the Seal of Ascension gems.",
      "level-1"
    ],
    [
      615,
      515,
      "Mother Smolderweb",
      "Climb through the spider tunnels. Expect spiderlings when the larger spiders die.",
      "level-2"
    ],
    [
      425,
      510,
      "Urok’s platform — optional",
      "Continue up to the ogre platform. With Omokk’s Head and a Roughshod Pike, you can start Urok’s wave event; otherwise continue.",
      "level-4"
    ],
    [
      540,
      530,
      "Quartermaster Zigris",
      "Follow the upper ramps to the Storehouse. Clear the room before engaging the quartermaster.",
      "level-5"
    ],
    [
      385,
      530,
      "Halycon and Gizrul",
      "Clear the worg den. Stay ready after Halycon falls: Gizrul follows, so conserve enough mana for both.",
      "level-5"
    ],
    [
      475,
      400,
      "The final bridge",
      "Return to the upper passage and cross toward the Chamber of Battle. Clear the approach before the last pull.",
      "level-6"
    ],
    [
      550,
      400,
      "Overlord Wyrmthalak",
      "Set your tank against a wall and prepare crowd control for the reinforcements. This completes the lower route.",
      "level-6"
    ]
  ],
  "bosses": [
    {
      "id": "omokk",
      "name": "Highlord Omokk",
      "floor": "level-3",
      "x": 385,
      "y": 505,
      "abilities": [
        "Cleave",
        "Enrage",
        "Knock Away"
      ],
      "mindset": "Control the escorts. Tank against a wall; everyone else behind.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "voshgajin",
      "name": "Shadow Hunter Vosh’gajin",
      "floor": "level-2",
      "x": 555,
      "y": 465,
      "abilities": [
        "Hex",
        "Curse of Blood"
      ],
      "mindset": "Remove curses; be ready to cover a hexed tank.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "voone",
      "name": "War Master Voone",
      "floor": "level-1",
      "x": 522,
      "y": 365,
      "abilities": [
        "Cleave",
        "Thrash",
        "Snap Kick",
        "Throw Axe"
      ],
      "mindset": "Heavy melee damage. Face him away and keep the tank healthy.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "smolderweb",
      "name": "Mother Smolderweb",
      "floor": "level-2",
      "x": 620,
      "y": 485,
      "abilities": [
        "Crystallize",
        "Mother’s Milk",
        "Summon Spire Spiderling"
      ],
      "mindset": "Cleanse poison and stay behind her stun cone.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "crystal-fang",
      "name": "Crystal Fang",
      "floor": "level-2",
      "x": 650,
      "y": 510,
      "abilities": [
        "Summon Spire Spiderling"
      ],
      "mindset": "Clear nearby spiders first; gather and kill the spiderlings.",
      "kind": "Rare boss · approximate spawn",
      "mainBoss": false
    },
    {
      "id": "urok",
      "name": "Urok Doomhowl",
      "floor": "level-4",
      "x": 450,
      "y": 465,
      "abilities": [
        "Intimidating Roar",
        "Rend",
        "Strike"
      ],
      "mindset": "Optional summon: manage the waves, then keep ranged outside fear range.",
      "kind": "Optional summon",
      "mainBoss": false
    },
    {
      "id": "zigris",
      "name": "Quartermaster Zigris",
      "floor": "level-5",
      "x": 540,
      "y": 560,
      "abilities": [
        "Hooked Net",
        "Stun Bomb",
        "Drink Healing Potion"
      ],
      "mindset": "Tank and spank after clearing the surrounding packs.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "halycon",
      "name": "Halycon",
      "floor": "level-5",
      "x": 380,
      "y": 560,
      "abilities": [
        "Rend",
        "Thrash"
      ],
      "mindset": "Kill the small worgs. Save resources for Gizrul.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "gizrul",
      "name": "Gizrul the Slavener",
      "floor": "level-5",
      "x": 420,
      "y": 560,
      "abilities": [
        "Enrage",
        "Fatal Bite",
        "Infected Bite"
      ],
      "mindset": "Pick him up immediately after Halycon; use cooldowns.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "wyrmthalak",
      "name": "Overlord Wyrmthalak",
      "floor": "level-6",
      "x": 575,
      "y": 400,
      "abilities": [
        "Cleave",
        "Sweeping Slam",
        "Demoralizing Shout"
      ],
      "mindset": "Secure the tank’s back; control the adds at half health.",
      "kind": "Final boss",
      "mainBoss": true
    }
  ],
  "summary": "Classic lower route · Omokk → trolls → spiders → worgs → Wyrmthalak. Urok is an optional summon.",
  "source": "https://www.wowhead.com/cata/zone=1583/blackrock-spire",
  "sourceName": "Wowhead",
  "mapNote": "Original Blizzard artwork with English labels. Dimmed rooms belong to other levels; follow the floor changes.",
  "bossSource": "https://www.icy-veins.com/wow-classic/lower-blackrock-spire-guide",
  "transitions": [
    {
      "id": "lower-blackrock-spire-stairs-1",
      "floor": "level-4",
      "x": 490,
      "y": 250,
      "direction": "down",
      "toFloor": "level-3",
      "toStep": 1,
      "afterStep": 0,
      "label": "Hordemar City",
      "pairId": "lower-blackrock-spire-stairs-1-return"
    },
    {
      "id": "lower-blackrock-spire-stairs-1-return",
      "pairId": "lower-blackrock-spire-stairs-1",
      "floor": "level-3",
      "x": 560,
      "y": 265,
      "direction": "up",
      "toFloor": "level-4",
      "toStep": 0,
      "label": "Entrance"
    },
    {
      "id": "lower-blackrock-spire-stairs-2",
      "floor": "level-3",
      "x": 545,
      "y": 490,
      "direction": "down",
      "toFloor": "level-2",
      "toStep": 3,
      "afterStep": 2,
      "label": "Troll ledges",
      "pairId": "lower-blackrock-spire-stairs-2-return"
    },
    {
      "id": "lower-blackrock-spire-stairs-2-return",
      "pairId": "lower-blackrock-spire-stairs-2",
      "floor": "level-2",
      "x": 545,
      "y": 390,
      "direction": "up",
      "toFloor": "level-3",
      "toStep": 2,
      "label": "Mok’Doom"
    },
    {
      "id": "lower-blackrock-spire-stairs-3",
      "floor": "level-2",
      "x": 580,
      "y": 425,
      "direction": "down",
      "toFloor": "level-1",
      "toStep": 4,
      "afterStep": 3,
      "label": "Tazz’Alor",
      "pairId": "lower-blackrock-spire-stairs-3-return"
    },
    {
      "id": "lower-blackrock-spire-stairs-3-return",
      "pairId": "lower-blackrock-spire-stairs-3",
      "floor": "level-1",
      "x": 610,
      "y": 350,
      "direction": "up",
      "toFloor": "level-2",
      "toStep": 3,
      "label": "Troll ledges"
    },
    {
      "id": "lower-blackrock-spire-stairs-4",
      "floor": "level-1",
      "x": 550,
      "y": 430,
      "direction": "up",
      "toFloor": "level-2",
      "toStep": 5,
      "afterStep": 4,
      "label": "Spider tunnels",
      "pairId": "lower-blackrock-spire-stairs-4-return"
    },
    {
      "id": "lower-blackrock-spire-stairs-4-return",
      "pairId": "lower-blackrock-spire-stairs-4",
      "floor": "level-2",
      "x": 580,
      "y": 495,
      "direction": "down",
      "toFloor": "level-1",
      "toStep": 4,
      "label": "Tazz’Alor"
    },
    {
      "id": "lower-blackrock-spire-stairs-5",
      "floor": "level-2",
      "x": 570,
      "y": 550,
      "direction": "up",
      "toFloor": "level-4",
      "toStep": 6,
      "afterStep": 5,
      "label": "Urok’s platform",
      "pairId": "lower-blackrock-spire-stairs-5-return"
    },
    {
      "id": "lower-blackrock-spire-stairs-5-return",
      "pairId": "lower-blackrock-spire-stairs-5",
      "floor": "level-4",
      "x": 475,
      "y": 540,
      "direction": "down",
      "toFloor": "level-2",
      "toStep": 5,
      "label": "Spider tunnels"
    },
    {
      "id": "lower-blackrock-spire-stairs-6",
      "floor": "level-4",
      "x": 450,
      "y": 400,
      "direction": "up",
      "toFloor": "level-5",
      "toStep": 7,
      "afterStep": 6,
      "label": "The Storehouse",
      "pairId": "lower-blackrock-spire-stairs-6-return"
    },
    {
      "id": "lower-blackrock-spire-stairs-6-return",
      "pairId": "lower-blackrock-spire-stairs-6",
      "floor": "level-5",
      "x": 440,
      "y": 430,
      "direction": "down",
      "toFloor": "level-4",
      "toStep": 6,
      "label": "Urok’s platform"
    },
    {
      "id": "lower-blackrock-spire-stairs-7",
      "floor": "level-5",
      "x": 370,
      "y": 420,
      "direction": "up",
      "toFloor": "level-6",
      "toStep": 9,
      "afterStep": 8,
      "label": "Chamber of Battle",
      "pairId": "lower-blackrock-spire-stairs-7-return"
    },
    {
      "id": "lower-blackrock-spire-stairs-7-return",
      "pairId": "lower-blackrock-spire-stairs-7",
      "floor": "level-6",
      "x": 365,
      "y": 450,
      "direction": "down",
      "toFloor": "level-5",
      "toStep": 8,
      "label": "Worg lair"
    }
  ]
},
{
  "id": "upper-blackrock-spire",
  "name": "Blackrock Spire",
  "wing": "Upper",
  "region": "Blackrock Mountain",
  "continent": "Eastern Kingdoms",
  "width": 1000,
  "height": 660,
  "image": "/blackrock-spire-4.jpg",
  "route": "M264 255 L310 255 L340 255 L340 230",
  "floors": [
    {
      "id": "level-4",
      "name": "Shared entrance",
      "image": "/blackrock-spire-4.jpg",
      "route": "M264 255 L310 255 L340 255 L340 230"
    },
    {
      "id": "level-5",
      "name": "Dragonspire Hall",
      "image": "/blackrock-spire-5.jpg",
      "route": "M335 250 L335 210 L350 175 L350 120 L320 100 L320 80"
    },
    {
      "id": "level-6",
      "name": "Hall of Binding & The Rookery",
      "image": "/blackrock-spire-6.jpg",
      "route": "M300 115 L300 175 L300 210 L335 210 L375 210 L385 235"
    },
    {
      "id": "level-7",
      "name": "Blackhand Hall, Stadium & Throne",
      "image": "/blackrock-spire-7.jpg",
      "route": "M350 215 L350 170 L310 170 L350 170 L425 170 L425 235 L485 235 L485 185 L485 155 L485 235 L545 235 L585 235 L640 235 L645 205 L645 235 L645 310 L560 310 L515 310 L440 310 L390 310 L350 330"
    }
  ],
  "stops": [
    [
      295,
      255,
      "Open the Upper Spire",
      "Use the left-hand door from the shared entrance. In Classic Era, someone needs the Seal of Ascension to open it. Plan for a 10-player group.",
      "level-4"
    ],
    [
      350,
      175,
      "Extinguish the seven runes",
      "Clear every rune alcove in Dragonspire Hall. Once all seven runes are out, the northern door opens.",
      "level-5"
    ],
    [
      300,
      150,
      "Pyroguard Emberseer",
      "Gather at the altar and start the binding event together. Defeat the incarcerators, then Emberseer to unlock the way onward.",
      "level-6"
    ],
    [
      335,
      210,
      "Cross the Rookery",
      "Avoid the eggs. Solakar’s Father Flame event is optional; take the debris ramp to the upper ledge to continue.",
      "level-6"
    ],
    [
      350,
      170,
      "Hall of Blackhand",
      "Keep your back away from the drop. Goraluk and the rare Jed are optional stops before the arena.",
      "level-7"
    ],
    [
      485,
      205,
      "Blackrock Stadium",
      "Regroup before dropping into the arena. Handle each wave, then defeat Gyth and Rend.",
      "level-7"
    ],
    [
      615,
      235,
      "The Beast",
      "Follow the opened passage to the Furnace. Clear space for the fight and keep ranged spread out.",
      "level-7"
    ],
    [
      515,
      310,
      "Approach the Spire Throne",
      "Clear the final packs and assign guard control, tanks and any kiting plan before pulling Drakkisath.",
      "level-7"
    ],
    [
      350,
      355,
      "General Drakkisath",
      "Handle his two guards first. Keep a second tank ready for Conflagration, and face the general away from the group.",
      "level-7"
    ]
  ],
  "bosses": [
    {
      "id": "emberseer",
      "name": "Pyroguard Emberseer",
      "floor": "level-6",
      "x": 300,
      "y": 175,
      "abilities": [
        "Fire Nova",
        "Flame Buffet"
      ],
      "mindset": "Ranged stay off the platform; finish the binding event together.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "solakar",
      "name": "Solakar Flamewreath",
      "floor": "level-6",
      "x": 325,
      "y": 245,
      "abilities": [
        "War Stomp",
        "Rookery waves"
      ],
      "mindset": "Avoid eggs and prioritize hatchers during the optional Father Flame event.",
      "kind": "Optional event",
      "mainBoss": false
    },
    {
      "id": "goraluk",
      "name": "Goraluk Anvilcrack",
      "floor": "level-7",
      "x": 310,
      "y": 170,
      "abilities": [
        "Backhand",
        "Head Crack",
        "Strike"
      ],
      "mindset": "Clear his room, then tank and spank.",
      "kind": "Optional boss",
      "mainBoss": false
    },
    {
      "id": "jed",
      "name": "Jed Runewatcher",
      "floor": "level-7",
      "x": 410,
      "y": 170,
      "abilities": [
        "Charge",
        "Heroic Strike",
        "Shield Bash"
      ],
      "mindset": "Clear nearby packs first; keep casting space.",
      "kind": "Rare boss · approximate patrol",
      "mainBoss": false
    },
    {
      "id": "gyth",
      "name": "Gyth",
      "floor": "level-7",
      "x": 485,
      "y": 130,
      "abilities": [
        "Corrosive Acid Breath",
        "Flame Breath",
        "Freeze",
        "Knock Away"
      ],
      "mindset": "Face the dragon away. Finish Gyth when Rend dismounts.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "rend",
      "name": "Warchief Rend Blackhand",
      "floor": "level-7",
      "x": 485,
      "y": 170,
      "abilities": [
        "Cleave",
        "Mortal Strike",
        "Whirlwind"
      ],
      "mindset": "Melee step out of Whirlwind; heal through Mortal Strike.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "beast",
      "name": "The Beast",
      "floor": "level-7",
      "x": 645,
      "y": 205,
      "abilities": [
        "Terrifying Roar",
        "Flamebreak",
        "Berserker Charge",
        "Immolate"
      ],
      "mindset": "Tank against a wall. Ranged spread at distance for fear and charge.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "drakkisath",
      "name": "General Drakkisath",
      "floor": "level-7",
      "x": 350,
      "y": 330,
      "abilities": [
        "Conflagration",
        "Flame Breath",
        "Cleave",
        "Pierce Armor"
      ],
      "mindset": "Separate the guards. A second tank must cover Conflagration.",
      "kind": "Final boss",
      "mainBoss": true
    }
  ],
  "summary": "Classic upper route · 10 players · Seal of Ascension required. Emberseer → Gyth & Rend → Beast → Drakkisath.",
  "source": "https://www.wowhead.com/cata/zone=1583/blackrock-spire",
  "sourceName": "Wowhead",
  "mapNote": "Original Blizzard artwork with English labels. Dimmed rooms belong to other levels; follow the floor changes.",
  "bossSource": "https://www.icy-veins.com/wow-classic/upper-blackrock-spire-guide",
  "transitions": [
    {
      "id": "upper-blackrock-spire-stairs-1",
      "floor": "level-4",
      "x": 340,
      "y": 230,
      "direction": "up",
      "toFloor": "level-5",
      "toStep": 1,
      "afterStep": 0,
      "label": "Dragonspire Hall",
      "pairId": "upper-blackrock-spire-stairs-1-return"
    },
    {
      "id": "upper-blackrock-spire-stairs-1-return",
      "pairId": "upper-blackrock-spire-stairs-1",
      "floor": "level-5",
      "x": 335,
      "y": 250,
      "direction": "down",
      "toFloor": "level-4",
      "toStep": 0,
      "label": "Entrance"
    },
    {
      "id": "upper-blackrock-spire-stairs-2",
      "floor": "level-5",
      "x": 320,
      "y": 80,
      "direction": "up",
      "toFloor": "level-6",
      "toStep": 2,
      "afterStep": 1,
      "label": "Hall of Binding",
      "pairId": "upper-blackrock-spire-stairs-2-return"
    },
    {
      "id": "upper-blackrock-spire-stairs-2-return",
      "pairId": "upper-blackrock-spire-stairs-2",
      "floor": "level-6",
      "x": 300,
      "y": 115,
      "direction": "down",
      "toFloor": "level-5",
      "toStep": 1,
      "label": "Dragonspire Hall"
    },
    {
      "id": "upper-blackrock-spire-stairs-3",
      "floor": "level-6",
      "x": 385,
      "y": 235,
      "direction": "up",
      "toFloor": "level-7",
      "toStep": 4,
      "afterStep": 3,
      "label": "Hall of Blackhand",
      "pairId": "upper-blackrock-spire-stairs-3-return"
    },
    {
      "id": "upper-blackrock-spire-stairs-3-return",
      "pairId": "upper-blackrock-spire-stairs-3",
      "floor": "level-7",
      "x": 350,
      "y": 215,
      "direction": "down",
      "toFloor": "level-6",
      "toStep": 3,
      "label": "The Rookery"
    }
  ]
}
,
{
  "id": "blackrock-depths",
  "name": "Blackrock Depths",
  "wing": "Emperor run",
  "region": "Blackrock Mountain",
  "continent": "Eastern Kingdoms",
  "width": 1000,
  "height": 660,
  "image": "/blackrock-depths-1.jpg",
  "route": "M332 525 L350 525 L355 490 L365 445 L378 425",
  "floors": [
    {
      "id": "detention",
      "name": "Detention Block & Lower City",
      "image": "/blackrock-depths-1.jpg",
      "route": "M332 525 L350 525 L355 490 L365 445 L378 425"
    },
    {
      "id": "upper-city",
      "name": "Upper City & Imperial Seat",
      "image": "/blackrock-depths-2.jpg",
      "route": "M435 595 L435 565 L455 555 L460 530 L435 505 L412 485 L385 500 L365 505 L365 545 L365 505 L365 475 L365 430 L365 475 L420 450 L480 430 L500 420 L515 400 L530 380 L510 350 L525 335 L540 320 L515 290 L480 255 L470 235 L480 210 L505 185 L535 160 L565 155 L590 130 L620 110 L650 100 L700 95 L725 95 L725 65 L725 80 L765 80 L800 80 L850 80 L890 80 L915 80 L945 80"
    }
  ],
  "summary": "Emperor run · Bring the Shadowforge Key for the shortcut. Angerforge → Grim Guzzler → Lyceum → Emperor. Lower-city bosses are optional detours.",
  "source": "https://www.wowhead.com/cata/zone=1584/blackrock-depths",
  "sourceName": "Wowhead",
  "mapNote": "Original Blizzard artwork with English labels. This route assumes the Shadowforge Key; key acquisition and a full lower-city clear are separate runs.",
  "bossSource": "https://www.icy-veins.com/wow-classic/blackrock-depths-dungeon-guides-hub",
  "stops": [
    [
      332,
      525,
      "Enter the Depths",
      "This Emperor route assumes someone already has the Shadowforge Key. The optional lower-city pins are separate detours.",
      "detention"
    ],
    [
      355,
      465,
      "The Shadowforge gates",
      "Take the shortcut through the two locked gates, then the door toward the East Garrison. Continue upstairs.",
      "detention"
    ],
    [
      435,
      555,
      "Operate the Shadowforge Lock",
      "Use the mechanism in the East Garrison to open the route across the bridge, then head for the West Garrison.",
      "upper-city"
    ],
    [
      365,
      515,
      "General Angerforge",
      "Clear the approach and handle the general’s reinforcements before continuing into the workshops.",
      "upper-city"
    ],
    [
      365,
      470,
      "Golem Lord Argelmach",
      "Clear workshop packs before the boss and his golems. Return to the bridge toward the Grim Guzzler.",
      "upper-city"
    ],
    [
      465,
      435,
      "The Grim Guzzler",
      "Keep the patrons neutral. Buy six Dark Iron Ale Mugs from Plugger and complete Rocknot’s Ale three times to start the bar-door event.",
      "upper-city"
    ],
    [
      520,
      365,
      "Leave through the bar door",
      "Wait for Rocknot to break the door, then defeat Phalanx. Avoid stray attacks on patrons and descend toward Flamelash.",
      "upper-city"
    ],
    [
      510,
      350,
      "Ambassador Flamelash",
      "Stop the spirits reaching him, then follow the passage through the Mold Foundry.",
      "upper-city"
    ],
    [
      480,
      235,
      "The Mold Foundry",
      "Pull golems back from patrols and proceed to the Summoners’ Tomb. Panzor may appear here; his spawn is not marked.",
      "upper-city"
    ],
    [
      575,
      145,
      "The Seven",
      "Regroup before speaking to Doom’rel to start the spirit waves. Finish the event to open the onward passage.",
      "upper-city"
    ],
    [
      650,
      100,
      "The Lyceum",
      "Stay together through the fast respawns. Kill Flame Keepers, loot two Shadowforge Torches and light both braziers by the far doors.",
      "upper-city"
    ],
    [
      765,
      80,
      "Magmus and the Iron Hall",
      "Move between the statue flame jets. Defeat Magmus to open the Imperial Seat.",
      "upper-city"
    ],
    [
      875,
      80,
      "Clear the throne room",
      "Clear every pack before the Emperor. Agree to spare Moira if anyone needs the rescue quest.",
      "upper-city"
    ],
    [
      945,
      80,
      "Emperor Dagran Thaurissan",
      "Keep the tank healthy through burst damage. Interrupt Moira’s healing; avoid cleave and area damage on her if saving her.",
      "upper-city"
    ]
  ],
  "bosses": [
    {
      "id": "gerstahn",
      "name": "High Interrogator Gerstahn",
      "floor": "detention",
      "x": 475,
      "y": 610,
      "abilities": [
        "Mana Burn",
        "Psychic Scream",
        "Shadow Word: Pain"
      ],
      "mindset": "Interrupt Mana Burn; clear room for fear.",
      "kind": "Optional boss · off this route",
      "mainBoss": false
    },
    {
      "id": "roccor",
      "name": "Lord Roccor",
      "floor": "detention",
      "x": 505,
      "y": 415,
      "abilities": [
        "Earth Shock",
        "Flame Shock",
        "Ground Tremor"
      ],
      "mindset": "Casters stay long range to avoid interrupts.",
      "kind": "Optional boss · off this route",
      "mainBoss": false
    },
    {
      "id": "grebmar",
      "name": "Houndmaster Grebmar",
      "floor": "detention",
      "x": 560,
      "y": 443,
      "abilities": [
        "Bloodlust",
        "Pummel",
        "Demoralizing Shout"
      ],
      "mindset": "Clear the hounds first, then tank and spank.",
      "kind": "Optional boss · off this route",
      "mainBoss": false
    },
    {
      "id": "baelgar",
      "name": "Bael’Gar",
      "floor": "detention",
      "x": 255,
      "y": 350,
      "abilities": [
        "Magma Splash",
        "Summon Spawn of Bael’Gar"
      ],
      "mindset": "Face him away; collect and kill his spawns.",
      "kind": "Optional boss · off this route",
      "mainBoss": false
    },
    {
      "id": "incendius",
      "name": "Lord Incendius",
      "floor": "detention",
      "x": 565,
      "y": 205,
      "abilities": [
        "Mighty Blow",
        "Fire Storm",
        "Curse of the Elemental Lord"
      ],
      "mindset": "Keep your back safe from lava; remove curses.",
      "kind": "Optional boss · off this route",
      "mainBoss": false
    },
    {
      "id": "fineous",
      "name": "Fineous Darkvire",
      "floor": "detention",
      "x": 635,
      "y": 140,
      "abilities": [
        "Holy Light",
        "Holy Strike",
        "Seal of Reckoning"
      ],
      "mindset": "Interrupt healing. Ironfel is for the Shadowforge Key quest.",
      "kind": "Optional boss · off this route",
      "mainBoss": false
    },
    {
      "id": "ring-of-law",
      "name": "Ring of Law",
      "floor": "upper-city",
      "x": 505,
      "y": 595,
      "abilities": [
        "Gorosh: Mortal Strike, Whirlwind",
        "Anub’shiah: curses, Enveloping Web",
        "Eviscerator: Shadow Bolt Volley"
      ],
      "mindset": "Waves precede one of six random bosses. These are selected mechanics; identify your opponent.",
      "kind": "Optional arena event",
      "mainBoss": false
    },
    {
      "id": "loregrain",
      "name": "Pyromancer Loregrain",
      "floor": "upper-city",
      "x": 555,
      "y": 615,
      "abilities": [
        "Flame Shock",
        "Molten Blast",
        "Scorching Totem"
      ],
      "mindset": "Kill the totem and dispel Flame Shock.",
      "kind": "Optional boss · off this route",
      "mainBoss": false
    },
    {
      "id": "stilgiss",
      "name": "Warder Stilgiss & Verek",
      "floor": "upper-city",
      "x": 595,
      "y": 435,
      "abilities": [
        "Stilgiss: Frostbolt",
        "Stilgiss: Frost Nova",
        "Stilgiss: Frost Ward"
      ],
      "mindset": "Hold Verek while interrupting Stilgiss.",
      "kind": "Optional vault encounter",
      "mainBoss": false
    },
    {
      "id": "angerforge",
      "name": "General Angerforge",
      "floor": "upper-city",
      "x": 365,
      "y": 550,
      "abilities": [
        "Enrage",
        "Flurry",
        "Sunder Armor"
      ],
      "mindset": "Gather the reinforcements and protect the healer.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "argelmach",
      "name": "Golem Lord Argelmach",
      "floor": "upper-city",
      "x": 365,
      "y": 430,
      "abilities": [
        "Chain Lightning",
        "Lightning Shield",
        "Shock"
      ],
      "mindset": "Spread out and deal with his golem escorts.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "hurley",
      "name": "Hurley Blackbreath",
      "floor": "upper-city",
      "x": 475,
      "y": 390,
      "abilities": [
        "Drunken Rage",
        "Flame Breath"
      ],
      "mindset": "Smashing the three lager kegs starts this fight. Handle his friends first.",
      "kind": "Optional bar event",
      "mainBoss": false
    },
    {
      "id": "ribbly",
      "name": "Ribbly Screwspigot",
      "floor": "upper-city",
      "x": 500,
      "y": 440,
      "abilities": [
        "Gouge",
        "Hamstring"
      ],
      "mindset": "Dialogue starts the fight. Control his cronies.",
      "kind": "Optional bar encounter",
      "mainBoss": false
    },
    {
      "id": "phalanx",
      "name": "Phalanx",
      "floor": "upper-city",
      "x": 510,
      "y": 400,
      "abilities": [
        "Fireball Volley",
        "Mighty Blow",
        "Thunderclap"
      ],
      "mindset": "Tank near the exit with your back secure; avoid patrons.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "flamelash",
      "name": "Ambassador Flamelash",
      "floor": "upper-city",
      "x": 540,
      "y": 320,
      "abilities": [
        "Burning Spirit"
      ],
      "mindset": "Kill incoming spirits before they reach him.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "seven",
      "name": "The Seven",
      "floor": "upper-city",
      "x": 535,
      "y": 160,
      "abilities": [
        "Seven successive spirit opponents"
      ],
      "mindset": "Finish each spirit before the next joins.",
      "kind": "Boss event",
      "mainBoss": true
    },
    {
      "id": "magmus",
      "name": "Magmus",
      "floor": "upper-city",
      "x": 805,
      "y": 80,
      "abilities": [
        "Fiery Burst",
        "War Stomp"
      ],
      "mindset": "Avoid the statue flames; ranged stay clear of Stomp.",
      "kind": "Boss",
      "mainBoss": true
    },
    {
      "id": "emperor",
      "name": "Emperor Dagran Thaurissan",
      "floor": "upper-city",
      "x": 915,
      "y": 65,
      "abilities": [
        "Avatar of Flame",
        "Hand of Thaurissan",
        "Ironfoe"
      ],
      "mindset": "Expect tank spikes. Clear the room before pulling.",
      "kind": "Final boss",
      "mainBoss": true
    },
    {
      "id": "moira",
      "name": "Princess Moira Bronzebeard",
      "floor": "upper-city",
      "x": 915,
      "y": 110,
      "abilities": [
        "Heal",
        "Renew",
        "Mind Blast",
        "Shadow Word: Pain"
      ],
      "mindset": "Interrupt her heals. Keep her alive for rescue quests.",
      "kind": "Optional kill · rescue target",
      "mainBoss": false
    }
  ],
  "transitions": [
    {
      "id": "blackrock-depths-stairs-1",
      "floor": "detention",
      "x": 378,
      "y": 425,
      "direction": "up",
      "toFloor": "upper-city",
      "toStep": 2,
      "afterStep": 1,
      "label": "East Garrison",
      "pairId": "blackrock-depths-stairs-1-return"
    },
    {
      "id": "blackrock-depths-stairs-1-return",
      "pairId": "blackrock-depths-stairs-1",
      "floor": "upper-city",
      "x": 435,
      "y": 595,
      "direction": "down",
      "toFloor": "detention",
      "toStep": 1,
      "label": "Shadowforge gates"
    }
  ]
}
];
