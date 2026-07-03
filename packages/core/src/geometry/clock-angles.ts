/**
 * Hand angles for an analog clock face, in degrees clockwise from 12
 * o'clock — the same convention as `polarToCartesian`/`valueToAngle`, so a
 * hand can be rotated with the exact same `transform="rotate(angle cx cy)"`
 * pattern used by the radial dial's needle. Time-driven rather than
 * value-driven: there's no min/max/wrap scale, just the wall clock.
 */
export function hourAngle(date: Date): number {
  const hours = date.getHours() % 12;
  const fraction = (hours + date.getMinutes() / 60 + date.getSeconds() / 3600) / 12;
  return fraction * 360;
}

export function minuteAngle(date: Date, smooth = true): number {
  const seconds = smooth ? date.getSeconds() : 0;
  const fraction = (date.getMinutes() + seconds / 60) / 60;
  return fraction * 360;
}

export function secondAngle(date: Date, smooth = true): number {
  const ms = smooth ? date.getMilliseconds() : 0;
  const fraction = (date.getSeconds() + ms / 1000) / 60;
  return fraction * 360;
}
