# homeassistant-analog-cards

A family of Home Assistant Lovelace custom cards styled as realistic analog
instruments — dial gauges, a mercury-tube thermometer, and a clock face —
sharing a consistent set of configurable "face styles" (`classic`, `silver`,
`dark`, `light`, `led-backlit`, `fluorescent`, `futuristic`) across the whole
family.

## Cards in this repo

| Card | Custom element | Form | Notes |
| --- | --- | --- | --- |
| Barometer | `analog-barometer-card` | radial dial + needle | Pressure trend tracking (rising/falling/steady) |
| Thermometer (Radial) | `analog-thermometer-radial-card` | radial dial + needle | °C/°F, cold/comfortable/hot zone bands, trend tracking |
| Thermometer (Mercury) | `analog-thermometer-mercury-card` | vertical glass tube + liquid column | °C/°F, classic mercury-thermometer look, trend tracking |
| Humidity (Radial) | `analog-humidity-radial-card` | radial dial + needle | Dry/comfortable/humid/very-humid zone bands, trend tracking |
| Clock | `analog-clock-card` | radial face, 3 hands | Time-driven (not tied to an entity); optional time zone, tick or sweep second hand |

## Installation

### HACS (recommended)

1. In HACS, go to **Frontend** → the **⋮** menu → **Custom repositories**.
2. Add this repository URL with category **Lovelace**.
3. Install **Analog Cards** and add the resource when prompted. This installs
   `dist/analog-cards.js` — a single combined bundle that registers every
   card above, so one Lovelace resource gives you the whole family.

### Manual

You can install the combined bundle, or just the individual card(s) you want:

1. Copy either `dist/analog-cards.js` (all cards) or one of the per-card
   bundles under `packages/<card>/dist/*.js` into your Home Assistant
   `config/www/` directory.
2. In **Settings → Dashboards → Resources**, add a resource pointing at
   `/local/<file-you-copied>.js` with resource type **JavaScript Module**.

## Configuration

Add a card via the dashboard UI ("Add Card" → search by name) and use its
visual editor, or configure it directly in YAML. All cards accept a
`face_style` option; most also accept `min`/`max`/`trend_hours`/
`trend_threshold` to tune the dial scale and trend sensitivity.

```yaml
type: custom:analog-barometer-card
entity: sensor.outdoor_pressure
face_style: classic
```

```yaml
type: custom:analog-thermometer-radial-card
entity: sensor.living_room_temperature
face_style: futuristic
```

```yaml
type: custom:analog-thermometer-mercury-card
entity: sensor.outdoor_temperature
face_style: silver
```

```yaml
type: custom:analog-humidity-radial-card
entity: sensor.basement_humidity
face_style: dark
```

```yaml
type: custom:analog-clock-card
face_style: led-backlit
time_zone: America/New_York
second_hand_motion: sweep
```

See each card's own README under `packages/<card>/README.md` for its full
option table (where present) and screenshots.

## Future ideas

Cards not built yet, but that fit naturally into the two existing rendering
forms (radial dial, or vertical tube) without needing new core primitives:

- **Wind direction compass** — radial dial with a compass rose face and a
  needle driven by a 0–360° wind-direction sensor
- **Power / energy VU-style gauge** — radial dial with zone-arc coloring,
  reusing the barometer's zone-band pattern, for live power draw
- **UV index gauge** — radial dial
- **Air quality / CO2 gauge** — radial dial
- **Rain gauge** — vertical tube, reusing the mercury thermometer's tube form
- **Battery-level tube** — vertical tube

## Repo structure

This is an npm-workspaces monorepo. `packages/core` holds shared, generic
code used by every card — angle/arc/tick math for radial dials, the linear
math for tube gauges, the 7 face-style CSS token sets, Home Assistant glue
types, and the `<ha-form>` editor-schema helpers — so adding a new card means
composing existing building blocks rather than re-deriving them.

```
packages/
├── core/                        # shared math, theming tokens, HA glue (no card of its own)
├── barometer-card/
├── thermometer-radial-card/
├── thermometer-mercury-card/
├── humidity-radial-card/
├── clock-card/
└── all-cards-bundle/             # combined dist/analog-cards.js used by the root hacs.json
```

## Development

```bash
npm install
npm run build       # builds core, then every card, then the combined bundle
npm run typecheck
npm run lint
```

`dev/gallery.html` is a standalone browser test page (mocked `hass` object,
no real Home Assistant instance required) that renders every card in every
face style, with live sliders/controls, for visual verification while
developing — open it via a local static server, e.g. `python3 -m http.server`
from the repo root, then browse to `/dev/gallery.html`.

## License

Apache-2.0 — see [LICENSE](LICENSE).
