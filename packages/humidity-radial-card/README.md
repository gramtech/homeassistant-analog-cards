# analog-humidity-radial-card

A Home Assistant Lovelace custom card that displays relative humidity as a
classic analog radial hygrometer dial — a needle over dry/comfortable/humid/
very-humid zone bands, with humidity trend tracking (rising/falling/steady).

## Configuration

```yaml
type: custom:analog-humidity-radial-card
entity: sensor.basement_humidity
name: Basement
trend_hours: 3
trend_threshold: 3
face_style: classic
needle_color: "#333333"
```

### Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `entity` | string | **required** | A `sensor` entity reporting humidity (%) |
| `name` | string | entity's friendly name | Title shown above the dial |
| `min` | number | 0 | Lower bound of the dial scale |
| `max` | number | 100 | Upper bound of the dial scale |
| `trend_hours` | number | 3 | How many hours back to look up for computing the trend |
| `trend_threshold` | number | 3 (percentage points) | Minimum change over `trend_hours` to be considered rising/falling |
| `face_style` | string | `classic` | Dial appearance: `classic`, `silver`, `dark`, `light`, `led-backlit`, `fluorescent`, or `futuristic` |
| `needle_color` | string | set per `face_style` | CSS color for the needle; overrides the face style's default |

## Development

See the repo root's `dev/gallery.html` and top-level `README.md`.

## License

Apache-2.0 — see [LICENSE](../../LICENSE).
