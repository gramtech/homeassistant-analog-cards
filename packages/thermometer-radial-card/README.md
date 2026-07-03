# analog-thermometer-radial-card

A Home Assistant Lovelace custom card that displays temperature as a classic
analog radial thermometer dial — a needle over cold/comfortable/hot zone
bands, with temperature trend tracking (rising/falling/steady).

## Configuration

```yaml
type: custom:analog-thermometer-radial-card
entity: sensor.living_room_temperature
name: Living Room
unit: °C
trend_hours: 3
trend_threshold: 1
face_style: classic
needle_color: "#333333"
```

### Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `entity` | string | **required** | A `sensor` entity reporting temperature |
| `name` | string | entity's friendly name | Title shown above the dial |
| `unit` | string | auto-detected from the entity | `°C` or `°F` |
| `min` | number | -20 °C / -4 °F | Lower bound of the dial scale |
| `max` | number | 45 °C / 113 °F | Upper bound of the dial scale |
| `trend_hours` | number | 3 | How many hours back to look up for computing the trend |
| `trend_threshold` | number | 1 °C (auto-scaled for °F) | Minimum change over `trend_hours` to be considered rising/falling |
| `face_style` | string | `classic` | Dial appearance: `classic`, `silver`, `dark`, `light`, `led-backlit`, `fluorescent`, or `futuristic` |
| `needle_color` | string | set per `face_style` | CSS color for the needle; overrides the face style's default |

## Development

See the repo root's `dev/gallery.html` and top-level `README.md`.

## License

Apache-2.0 — see [LICENSE](../../LICENSE).
