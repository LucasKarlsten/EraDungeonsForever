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
      "route": "M713 590.6 L713 579.9 L687.4 579.9 L689.8 549.4 L693.9 553 L695.7 556 L688 550.6 L682 557.2 M677.2 542.9 L701.1 542.3 L679 543.5 M689.2 476 L688.6 448 L630.1 448 L635.5 443.8 L631.3 447.4 L640.2 452.8 M601.5 469.5 L555.5 469.5 L551.9 442 L494.7 442.6 L491.1 443.8 L491.1 458.1 L495.9 455.2 L489.3 458.7 L485.7 452.2 M429 511.2 L344.3 512.4 L288.8 504.1 L281 498.1 L272.7 481.4 L270.9 443.8 L276.8 452.8 L269.7 444.4 L264.3 451 M269.1 427.7 L270.3 396.7 L273.3 407.4 L269.7 398.5 L264.3 405.6 M253.6 387.7 L239.2 387.7 L239.2 398.5 M239.2 397.9 L239.2 437.3 L231.5 439 M230.9 429.5 L230.9 422.3 M231.5 411 L230.9 402.1 M230.3 391.9 L230.3 381.2 M230.3 371 L234.5 364.5 L282.2 365.7 L286.4 426.5 L315 424.7 L313.8 367.4 L322.2 377 L315 368.6 L307.9 378.8 M314 297.6 L317.6 215.4 L324.1 228.9 L318.3 217.5 L309.8 230.4"
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
