# Expanded atlas

Nine entries: Stratholme Service Entrance and Main Gate, Scholomance, Dire Maul East, North, West, Lower Blackrock Spire, Upper Blackrock Spire, and Blackrock Depths. The atlas has 80 encounter cards, including 18 in Blackrock Spire and 19 in Blackrock Depths.

Scholomance has four floors, East two, West three, and North one. Select a floor manually or follow the walkthrough: Previous/Next and stop selection switch to the appropriate floor automatically. Each floor shows only its own route stops and bosses, with numbering preserved across floors. Floor links such as `?map=scholomance&floor=lower` support reload and browser history.

North is a **boss-clear** route, not a tribute route. East includes Zevrim → Ironbark → Alzzin. West includes all five pylons before Immol’thar and Prince Tortheldrin. Scholomance includes Rattlegore’s key and the six guardians. All route geometry and approximate boss positions remain previews pending in-game validation.

All ten expanded-atlas floor images use original Blizzard artwork with English labels, mirrored by Wowhead. Scholomance uses the Cataclysm archive, which preserves the Classic room layout before the Mists of Pandaria redesign. The current retail and beta map URLs depict the later redesign and must not be substituted. These English images replace the French Dire Maul and German Scholomance assets; the latter’s third-party reference numbers are no longer present. The normalized room geometry matches the existing route and boss coordinates.

## Blackrock Spire

Lower and Upper are separate entries using seven shared English Blizzard floor images. Lower visits six levels; Upper visits four, including the shared entrance. Floors are shown in route order rather than numeric order. Dimmed rooms are context from other levels. Lower includes optional Urok and rare Crystal Fang; Upper marks Solakar, Goraluk and Jed as optional/rare. Other rare and quest summons are not exhaustively mapped. Boss pins and connections are approximate previews pending in-game verification.

Upper uses Classic Era’s 10-player and Seal of Ascension requirements. The Cataclysm artwork supplies the original geometry only; it does not determine encounter or access rules. Floor 7 comes from the non-Cataclysm archive and was visually checked for the original Stadium, Furnace and Spire Throne. No Warlords of Draenor layout is used.

## Blackrock Depths

Two English Blizzard floors, one Emperor route using the Shadowforge Key shortcut. This is not a full-clear or key-acquisition route. Lower-city encounters are optional detours. The walkthrough includes the Shadowforge Lock, Rocknot/Phalanx bar exit, both Lyceum braziers and the Moira rescue choice. Main route encounters retain the Lantern frame; optional detours and Moira use diamond pins. Ring of Law groups the random encounter into one card with selected mechanics. Vault keepers, other bar encounters, Panzor and special summons are not exhaustively mapped. Positions and route geometry remain approximate pending in-game validation.

## Data

Multi-floor entries in `web/maps/<id>.js` contain `floors` (`id`, `name`, `image`, `route`). A stop’s fifth element is its floor ID; bosses also have a `floor`. Existing single-floor entries remain supported. Separate SVG `M` subpaths indicate disconnected map sections, not passages across blank artwork. The floor selector jumps to the first route stop on that floor; the full walkthrough stays available in the sidebar.

## Checks

```sh
node --test tests/atlas.test.cjs
LANTERN_TEST_URL=http://127.0.0.1:8080 node tests/atlas.browser.cjs
```

Browser checks require Playwright with Chromium. `LANTERN_LOCAL_ASSETS=1` intercepts requests using local `web/` files, so no running server is needed. Use `NODE_PATH` if Playwright is installed outside the repo. Playwright is an optional test dependency, not an app dependency.

## Artwork

Retrieved 2026-10-23. Map art © Blizzard Entertainment. No redistribution license is asserted. Files are served locally and embedded in the Go binary.

| Local file | Original source |
| --- | --- |
| `web/scholomance-1.jpg` | [Wowhead, English pre-redesign floor 1](https://wow.zamimg.com/images/wow/cata/maps/enus/original/2057-1.jpg) |
| `web/scholomance-2.jpg` | [Wowhead, English pre-redesign floor 2](https://wow.zamimg.com/images/wow/cata/maps/enus/original/2057-2.jpg) |
| `web/scholomance-3.jpg` | [Wowhead, English pre-redesign floor 3](https://wow.zamimg.com/images/wow/cata/maps/enus/original/2057-3.jpg) |
| `web/scholomance-4.jpg` | [Wowhead, English pre-redesign floor 4](https://wow.zamimg.com/images/wow/cata/maps/enus/original/2057-4.jpg) |
| `web/dire-maul-east-upper.jpg` | [Wowhead, English floor 5](https://wow.zamimg.com/images/wow/maps/enus/original/2557-5.jpg) |
| `web/dire-maul-east-lower.jpg` | [Wowhead, English floor 6](https://wow.zamimg.com/images/wow/maps/enus/original/2557-6.jpg) |
| `web/dire-maul-north.jpg` | [Wowhead, English floor 1](https://wow.zamimg.com/images/wow/maps/enus/original/2557-1.jpg) |
| `web/dire-maul-west-gardens.jpg` | [Wowhead, English floor 2](https://wow.zamimg.com/images/wow/maps/enus/original/2557-2.jpg) |
| `web/dire-maul-west-balcony.jpg` | [Wowhead, English floor 3](https://wow.zamimg.com/images/wow/maps/enus/original/2557-3.jpg) |
| `web/dire-maul-west-prison.jpg` | [Wowhead, English floor 4](https://wow.zamimg.com/images/wow/maps/enus/original/2557-4.jpg) |
| `web/blackrock-spire-1.jpg` | [Wowhead, English floor 1](https://wow.zamimg.com/images/wow/cata/maps/enus/original/1583-1.jpg) |
| `web/blackrock-spire-2.jpg` | [Wowhead, English floor 2](https://wow.zamimg.com/images/wow/cata/maps/enus/original/1583-2.jpg) |
| `web/blackrock-spire-3.jpg` | [Wowhead, English floor 3](https://wow.zamimg.com/images/wow/cata/maps/enus/original/1583-3.jpg) |
| `web/blackrock-spire-4.jpg` | [Wowhead, English floor 4](https://wow.zamimg.com/images/wow/cata/maps/enus/original/1583-4.jpg) |
| `web/blackrock-spire-5.jpg` | [Wowhead, English floor 5](https://wow.zamimg.com/images/wow/cata/maps/enus/original/1583-5.jpg) |
| `web/blackrock-spire-6.jpg` | [Wowhead, English floor 6](https://wow.zamimg.com/images/wow/cata/maps/enus/original/1583-6.jpg) |
| `web/blackrock-spire-7.jpg` | [Wowhead, English floor 7](https://wow.zamimg.com/images/wow/maps/enus/original/1583-7.jpg) |
| `web/blackrock-depths-1.jpg` | [Wowhead, English BRD floor 1](https://wow.zamimg.com/images/wow/cata/maps/enus/original/1584-1.jpg) |
| `web/blackrock-depths-2.jpg` | [Wowhead, English BRD floor 2](https://wow.zamimg.com/images/wow/cata/maps/enus/original/1584-2.jpg) |

## Mechanics references

Checked Classic mechanics against Icy Veins’ [Scholomance](https://www.icy-veins.com/wow-classic/scholomance-dungeon-guide), [East](https://www.icy-veins.com/wow-classic/dire-maul-east-dungeon-guide), [North](https://www.icy-veins.com/wow-classic/dire-maul-north-dungeon-guide), and [West](https://www.icy-veins.com/wow-classic/dire-maul-west-dungeon-guide) guides, plus [Millenium’s Scholomance ability list](https://us.millenium.gg/guide/6066.html). Season of Discovery loot sections are outside this feature’s scope. Cards contain selected abilities, not exhaustive spell lists.

Blackrock Spire references: Icy Veins [Lower](https://www.icy-veins.com/wow-classic/lower-blackrock-spire-guide) and [Upper](https://www.icy-veins.com/wow-classic/upper-blackrock-spire-guide), plus Wowhead’s [LBRS](https://www.wowhead.com/classic/guide/lower-blackrock-spire-lbrs-dungeon-strategy-wow-classic) and [UBRS](https://www.wowhead.com/classic/guide/upper-blackrock-spire-ubrs-dungeon-strategy-wow-classic) Classic guides. Checked 2026-10-23.

Blackrock Depths references (checked 2026-10-23): Icy Veins [Detention Block](https://www.icy-veins.com/wow-classic/blackrock-depths-detention-block-dungeon-guide) and [Upper City](https://www.icy-veins.com/wow-classic/blackrock-depths-upper-city-dungeon-guide), Wowhead’s [Shadowforge City route](https://www.wowhead.com/classic/guide/blackrock-depths-shadowforge-city-dungeon-strategy-wow-classic), and [Warcraft Tavern](https://www.warcrafttavern.com/wow-classic/guides/blackrock-depths) for the bar, Lyceum and rescue mechanics. Classic dungeon rules, not the retail anniversary raid.

## Floor transition markers

Dire Maul West has paired stair markers (up to Upper Walkways, down to Capital Gardens), destination labels and sidebar cues. Selecting a stair switches to its target route step and updates the floor URL; keyboard Enter/Space and touch work too. The return to Capital Gardens is an explicit stop before the prison. Stair markers follow the Show route toggle.

Optional map-level `transitions` entries declare `id`, `floor`, `x`, `y`, `direction` (`up`/`down`), `toFloor`, zero-based `toStep` and `afterStep`, and a destination `label`. Elevation is explicit rather than inferred from floor array order. Other dungeons can add verified transition positions through the same data. Stair positions, like the current routes, remain approximate.

Stair artwork is now 20% smaller, with unchanged 40×40 hit targets. Scholomance, Dire Maul East, Lower/Upper Blackrock Spire and Blackrock Depths also have paired route links at their floor changes. Optional `pairId` identifies the exact return endpoint when two floors connect in multiple places. Return links without `afterStep` support backtracking without adding sidebar instructions. Connections use the current illustrative route endpoints; their in-game positions remain unverified.

## Freehand route editor

Select **Draw Route**, then drag on a floor map with a mouse or finger. Each stroke replaces that floor’s suggested line on first use; later strokes add separate SVG subpaths. Drag numbered stops, bosses and stair markers to reposition them. Undo reverses the latest stroke or marker move; Clear removes the sketch. **Copy map entry** exports the full selected dungeon object, including edited floor routes and marker coordinates. Replace the entire contents of that dungeon’s `web/maps/<id>.js` file with the copied output and save. The browser preview is temporary and does not write files. Route points are simplified to keep the exported SVG concise. Direction arrows are generated from the route geometry and oriented along each segment, rather than stored as hand-drawn shapes. Dire Maul North now uses its clean, straight-segment route in both the map and floor data.
