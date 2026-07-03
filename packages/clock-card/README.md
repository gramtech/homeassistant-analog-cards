# analog-clock-card

A Home Assistant Lovelace custom card that displays a classic analog clock
face — hour, minute, and second hands. Unlike the other cards in this
family, it is time-driven rather than tied to any Home Assistant entity.

## Configuration

```yaml
type: custom:analog-clock-card
name: Kitchen Clock
face_style: classic
time_zone: America/New_York
show_seconds: true
second_hand_motion: tick
```

### Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | none | Optional title shown above the clock face |
| `face_style` | string | `classic` | Dial appearance: `classic`, `silver`, `dark`, `light`, `led-backlit`, `fluorescent`, or `futuristic` |
| `time_zone` | string | local browser time zone | An IANA time zone name (e.g. `America/New_York`) to display instead of local time |
| `show_seconds` | boolean | `true` | Whether to render the second hand |
| `second_hand_motion` | string | `tick` | `tick` (jumps once per second, like a quartz clock) or `sweep` (smooth continuous motion) |

## Development

See the repo root's `dev/gallery.html` and top-level `README.md`.

## License

Apache-2.0 — see [LICENSE](../../LICENSE).
