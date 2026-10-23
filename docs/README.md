<img width="2172" height="724" alt="image" src="https://github.com/user-attachments/assets/3a4be19e-d169-4b16-a63b-a46e02e76a98" />

<img width="892" height="591" alt="image" src="https://github.com/user-attachments/assets/b8709700-c83b-49c3-b22f-8086c8727808" />

# Lantern

Dark-mode WoW Classic dungeon route viewer prototype. Go serves embedded static assets with no third-party Go dependencies.

## Run

Requires Go 1.25 or newer.

```sh
go run .
```

Default address: `127.0.0.1:8080`. Override with `ADDR`, for example `ADDR=0.0.0.0:8080 go run .`.

```sh
go test ./...
go vet ./...
go build -o /tmp/lantern .
```

The route overlay and instructions are illustrative, not verified dungeon navigation. The viewer includes Stratholme’s two wings, Scholomance, distinct Dire Maul East, North, and West routes, and separate Lower and Upper Blackrock Spire routes, and a Blackrock Depths Emperor run; this artwork is not evidence that the route matches Classic Era. Review the route in-game before using it as a dungeon guide. Google Fonts are optional; system fonts work offline.

Map definitions, artwork paths, routes, stops, and source credits live one dungeon per file in `web/maps/`; `web/app.js` is the shared viewer. Choose a wing with the atlas selector. The `?map=stratholme-main-gate` URL opens that map directly, and browser Back/Forward restores the selected map. Switching maps resets selection and zoom while preserving route visibility. The viewer supports synchronized stop selection, previous/next navigation, zoom, drag to pan, and a route visibility toggle. A local map image and the interactive route share the SVG coordinate system in `web/index.html` (1000 × 660). Labels printed into the map remain visible when the route is hidden.

## Map artwork

`web/stratholme-service-entrance.png` is the unmodified parchment map (1998 × 1318), © Blizzard Entertainment, retrieved from [JudgeHype’s Stratholme guide](https://wowclassic.judgehype.com/article/donjon-stratholme/). [Source image](https://main.judgehype.com/images/froala/2018/10/1539184620_116162.png). Retrieved 2026-10-22. The artwork remains third-party content; no redistribution license is asserted by this repository.

The image is embedded in the Go binary and served locally; viewing the map requires no external image request.

`web/stratholme-main-gate.png` is the unmodified Main Gate parchment map (1996 × 1320), © Blizzard Entertainment, from the same JudgeHype guide. [Source image](https://main.judgehype.com/images/froala/2018/10/1539184506_116162.png). Retrieved 2026-10-22. The same third-party artwork caveat applies.

## Adding a map

1. Place the artwork in `web/`.
2. Create `web/maps/<id>.js` by copying an existing map file, then update its unique `id`, display metadata, image path, coordinate `width` and `height`, source credit, SVG route path, and stops (`[x, y, title, guidance]`). Register the file in `web/index.html` before `app.js` so it is loaded into the atlas.
3. Keep the route and stops in that entry’s coordinate space. The selector, heading, breadcrumb, stop count, and attribution are populated automatically.
4. Verify the route against the intended game version and restart the Go server to embed updated assets.

## Boss encounter cards

Each dungeon includes encounter markers, separate from the numbered route stops. Hover or focus a skull for key abilities and a short mindset note; click/tap to pin it. Escape, the close button, or a click outside dismisses it. Enter/Space opens the card and moves keyboard focus to its close button. The Bosses toggle is independent of Show route.

Boss entries live alongside each map in `web/maps/<id>.js` (`id`, `name`, `x`, `y`, `kind`, `mainBoss`, `abilities`, `mindset`), with a map-level `bossSource` link. Notes summarize Classic mechanics from [Icy Veins’ Undead guide](https://www.icy-veins.com/wow-classic/stratholme-undead-dungeon-guide) and [Live guide](https://www.icy-veins.com/wow-classic/stratholme-live-dungeon-guide), checked 2026-10-23. They are brief reminders, not exhaustive ability descriptions. Pins indicate approximate encounter areas on the artwork; route and location verification in Classic remains pending. Rare, profession-summoned, and quest-event encounters are not exhaustively mapped.

Browser regression checks are in `tests/bosses.browser.cjs`. With Playwright and its Chromium browser available, run against a running server:

```sh
LANTERN_TEST_URL=http://127.0.0.1:8080 node tests/bosses.browser.cjs
```

If Playwright is installed outside this repository, point `NODE_PATH` at that installation's `node_modules`. Checks cover hover retention, pinning, keyboard/touch access, dismissal, independent overlays, map changes, and mobile card bounds.

Main encounters (`mainBoss: true`) carry a mint Lantern frame behind the skull, using the header’s four-point sparkle rotated 45 degrees. Optional or rare encounters should leave this flag false or unset.

See [Expanded atlas and floor maps](atlas.md) for floor data, additional artwork sources, route scope, and browser checks.

The atlas and floor selectors share styled menus with arrow-key navigation, Home/End, type-to-find, Enter/Space to select, and Escape to dismiss. Native selects remain their data source; visible selection stays synchronized with route steps and browser history. Boss artwork is scaled to 78% while retaining the original hit areas. `tests/selectors.browser.cjs` checks menu interaction and synchronization using local asset interception.
