# The Codex — how to add lore

All lore lives in **`lore.js`**. The other files are the viewer; you don't need to touch them.

## Add an entry
Copy an existing entry, paste it into `entries`, and change its fields:

```js
{
  id: "frostholm", parent: "kaldmark", type: "city", name: "Frostholm",
  summary: "A border fortress city.",
  body: `First paragraph.

Second paragraph. Mentions [[kaldmark]] as a link.`,
  facts: { Population: "12,000" },
},
```

- `parent` decides where it shows up. Everything else (cards, breadcrumbs, index, search) updates by itself.
- `id` must be unique: lowercase, with dashes.
- `[[some-id]]` inside `body` or `facts` becomes a link. If that entry doesn't exist yet, it shows as a dotted placeholder.
- `related: ["id1", "id2"]` adds "Related" links, and they appear on both entries.
- Inside `body`: a blank line starts a new paragraph, lines starting with `- ` or `1. ` become lists, and `**text**` is bold.
- `status: "Working name"` adds a small badge for anything that isn't final canon yet.
- Need a new level (cities, characters, religions…)? Add it to `types`.

## Faction looks
Each faction has a `theme` (colors and heading font, defined under `themes` at the top of `lore.js`) and an `emblem` (a transparent PNG in `img/emblems/`). Everything inside a faction picks up its look automatically and shows a small "part of" badge with the faction's emblem. To give a new faction its own look, add a theme and set `theme: "name"` on it.

## Pictures
Put images in an `img/` folder next to `index.html`. Then add `image: "img/name.jpg"` for a banner and/or `icon: "img/crest.png"` for the round emblem.

## Preview locally
Run `serve.ps1` and open http://localhost:8140/
