# booklet-registry

The modules offered to [Booklet](https://github.com/benthepsychologist/booklet)
readers, and the `registry.json` that lists them. The engine (renderer, format
spec, linter) lives in `booklet`; this repo holds only what is on offer.

**Reading it.** `registry.json` is read straight from this public repo, no
website needed:
`https://raw.githubusercontent.com/benthepsychologist/booklet-registry/main/registry.json`.
Each entry's `file` is relative to it, so a module is at `modules/<name>.md`.

**A listing is not an endorsement or a safety certification.**

## Licences

- The tooling and `registry.json` are Apache-2.0 (`LICENSE`).
- **Every module declares its own `license` in its front matter, and the
  registry has no default.** A module that declares none fails CI and is not
  offered. Terms travel with the module into every booklet that carries it.

## Adding a module

1. Put the file in `modules/`, one v0.5 module per file, with `license:` (and
   `copyright:` where it is not yours to give away) in its front matter.
2. `node build-registry.js` to regenerate `registry.json` and `index.html`.
3. Open a pull request. CI runs the engine's linter, the licence check, and
   checks `registry.json` is current.

The tools need a checkout of `booklet` beside this repo (`../booklet`), or set
`BOOKLET_ENGINE=/path/to/booklet`.
