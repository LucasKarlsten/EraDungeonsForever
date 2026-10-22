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

The SVG layout and all route instructions are illustrative, not verified Stratholme navigation. Replace them with licensed map artwork and independently reviewed routes before publishing as a dungeon guide. No Blizzard assets or third-party guide content are included. Google Fonts are optional; system fonts work offline.

Map stops and guidance currently live in `web/app.js`. The viewer supports synchronized stop selection, previous/next navigation, zoom, drag to pan, and a label toggle. An original schematic is embedded in `web/index.html`.
