// Map data for Blackrock Spire — Lower.
window.LANTERN_DUNGEONS = window.LANTERN_DUNGEONS || [];
window.LANTERN_DUNGEONS.push({
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
});
