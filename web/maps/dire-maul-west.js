// Map data for Dire Maul — West.
window.LANTERN_DUNGEONS = window.LANTERN_DUNGEONS || [];
window.LANTERN_DUNGEONS.push({
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
});
