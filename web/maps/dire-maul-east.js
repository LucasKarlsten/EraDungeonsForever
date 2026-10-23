// Map data for Dire Maul — East.
window.LANTERN_DUNGEONS = window.LANTERN_DUNGEONS || [];
window.LANTERN_DUNGEONS.push({
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
});
