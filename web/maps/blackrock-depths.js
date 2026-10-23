// Map data for Blackrock Depths — Emperor run.
window.LANTERN_DUNGEONS = window.LANTERN_DUNGEONS || [];
window.LANTERN_DUNGEONS.push({
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
});
