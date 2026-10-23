window.LANTERN_DUNGEONS = window.LANTERN_DUNGEONS || [];
window.LANTERN_DUNGEONS.push({
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
      674.8493041992188,
      498.7152099609375,
      "Guard Mol’dar",
      "Pull the patrol back toward the entrance.",
      "commons"
    ],
    [
      589.5271606445312,
      449.1925964355469,
      "Stomper Kreeg",
      "Optional stop along the courtyard edge.",
      "commons"
    ],
    [
      481.53204345703125,
      509.4550476074219,
      "Fengus’s courtyard",
      "Collect the courtyard key and continue west.",
      "commons"
    ],
    [
      252.96897888183594,
      371.0243835449219,
      "Guard Slip’kik",
      "Clear the halls carefully, watching for wandering eyes.",
      "commons"
    ],
    [
      303.32293701171875,
      325.431884765625,
      "Captain Kromcrush",
      "Clear space for fear and prepare to control his reinforcements.",
      "commons"
    ],
    [
      316.8761901855469,
      173.8768768310547,
      "King Gordok & Cho’Rush",
      "Handle Cho’Rush’s healing while the tank holds the King.",
      "commons"
    ]
  ],
  "bosses": [
    {
      "id": "moldar",
      "name": "Guard Mol’dar",
      "x": 703.4888305664062,
      "y": 499.3118896484375,
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
      "x": 615.1834716796875,
      "y": 449.78924560546875,
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
      "x": 507.1883544921875,
      "y": 510.0517272949219,
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
      "x": 279.221923828125,
      "y": 370.427734375,
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
      "x": 330.4830017089844,
      "y": 325.431884765625,
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
      "x": 290.4309387207031,
      "y": 174.5916290283203,
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
      "x": 344.0362243652344,
      "y": 174.5916290283203,
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
});
