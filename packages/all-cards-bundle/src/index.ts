// Side-effect-only imports: each card's built bundle self-registers its
// custom element and pushes itself onto window.customCards. Importing the
// already-built dist/*.js (not the TS source) keeps this bundle's build
// simple and fast — no cross-package TypeScript resolution involved, just
// plain ES module concatenation.
import '../../barometer-card/dist/analog-barometer-card.js';
import '../../thermometer-radial-card/dist/analog-thermometer-radial-card.js';
import '../../thermometer-mercury-card/dist/analog-thermometer-mercury-card.js';
import '../../humidity-radial-card/dist/analog-humidity-radial-card.js';
import '../../clock-card/dist/analog-clock-card.js';
