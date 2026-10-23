// Map data for Scholomance — Classic route.
window.LANTERN_DUNGEONS = window.LANTERN_DUNGEONS || [];
window.LANTERN_DUNGEONS.push({
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
});
