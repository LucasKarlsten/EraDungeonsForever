// Map data for Stratholme — Service Entrance.
window.LANTERN_DUNGEONS = window.LANTERN_DUNGEONS || [];
window.LANTERN_DUNGEONS.push({
  "id": "stratholme-service-entrance",
  "bossSource": "https://www.icy-veins.com/wow-classic/stratholme-undead-dungeon-guide",
  "bosses": [
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
  "name": "Stratholme",
  "wing": "Service Entrance",
  "region": "Eastern Plaguelands",
  "continent": "Eastern Kingdoms",
  "width": 1000,
  "height": 660,
  "image": "/stratholme-service-entrance.png",
  "source": "https://wowclassic.judgehype.com/article/donjon-stratholme/",
  "sourceName": "JudgeHype",
  "stops": [
    [
      659,
      603,
      "The service entrance",
      "Start at the southern entrance, then follow the passage north into Elders’ Square."
    ],
    [
      640,
      490,
      "Elders’ Square",
      "Continue north through the square and the narrow passage toward the Gauntlet."
    ],
    [
      568,
      306,
      "The western ziggurat",
      "At the junction, take the western branch toward the first ziggurat."
    ],
    [
      745,
      306,
      "The eastern ziggurat",
      "Return to the junction and cross to the eastern ziggurat."
    ],
    [
      676,
      140,
      "The northern ziggurat",
      "Follow the eastern passage north around the Gauntlet to the northern ziggurat."
    ],
    [
      508,
      132,
      "Toward Slaughter Square",
      "Return to the northern junction, then follow the western passage toward Slaughter Square."
    ],
    [
      452,
      130,
      "Slaughter Square",
      "Enter the square and follow the highlighted approach toward the slaughterhouse."
    ],
    [
      390,
      132,
      "The slaughterhouse",
      "The route preview ends at the slaughterhouse on the western side of the square."
    ]
  ],
  "route": "M659 603 L659 587 L688 568 L677 540 L650 508 L640 490 L646 462 L631 435 L612 390 L651 370 L668 350 L637 326 L606 311 L585 302 L568 306 L585 302 L606 311 L637 326 L668 350 L706 326 L745 306 L726 287 L706 277 L692 248 L676 226 L663 197 L665 166 L676 140 L665 166 L635 175 L604 176 L588 161 L572 142 L551 127 L530 132 L508 132 L482 132 L452 130 L433 148 L419 164 L414 140 L390 132"
});
