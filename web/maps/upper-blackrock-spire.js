// Map data for Blackrock Spire — Upper.
window.LANTERN_DUNGEONS = window.LANTERN_DUNGEONS || [];
window.LANTERN_DUNGEONS.push({
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
});
