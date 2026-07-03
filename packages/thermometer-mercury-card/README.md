# analog-thermometer-mercury-card

A Home Assistant Lovelace custom card that displays temperature as a classic
mercury-tube thermometer — a rising liquid column in a glass tube against a
graduated backing, with temperature trend tracking (rising/falling/steady).

## Configuration

```yaml
type: custom:analog-thermometer-mercury-card
entity: sensor.outdoor_temperature
name: Outside
unit: °C
trend_hours: 3
trend_threshold: 1
face_style: classic
liquid_color: "#c0392b"
```

### Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `entity` | string | **required** | A `sensor` entity reporting temperature |
| `name` | string | entity's friendly name | Title shown above the tube |
| `unit` | string | auto-detected from the entity | `°C` or `°F` |
| `min` | number | -20 °C / -4 °F | Bottom of the tube's scale |
| `max` | number | 45 °C / 113 °F | Top of the tube's scale |
| `trend_hours` | number | 3 | How many hours back to look up for computing the trend |
| `trend_threshold` | number | 1 °C (auto-scaled for °F) | Minimum change over `trend_hours` to be considered rising/falling |
| `face_style` | string | `classic` | Tube appearance: `classic`, `silver`, `dark`, `light`, `led-backlit`, `fluorescent`, or `futuristic` |
| `liquid_color` | string | set per `face_style` | CSS color for the liquid column and bulb; overrides the face style's default (`silver` uses a literal mercury tone) |

## Development

See the repo root's `dev/gallery.html` and top-level `README.md`.

## License

Apache-2.0 — see [LICENSE](../../LICENSE).
