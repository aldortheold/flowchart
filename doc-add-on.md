# Flowchart — Authoritative Documentation Add-on

## 1. Status, purpose, and precedence

This file is the implementation-facing add-on to `project-doc-sat.docx`. It records the product decisions made after the academic document was written and resolves requirements that the document leaves vague, overstates, or contradicts.

The separate direct Codex instruction (`The Flowchart Prompt(2).md`) governs **how the implementation task is executed**: inspect first, plan, implement in the stated order, verify, and report honestly. The `.docx` plus this add-on govern **what the product is**. These roles are complementary. If the direct instruction says to re-read or follow “the documentation,” that means the `.docx` and this add-on together, with this add-on taking priority wherever they overlap.

When building Flowchart, use the following precedence:

1. This add-on is authoritative wherever it clarifies, narrows, corrects, or contradicts the `.docx`.
2. The `.docx` remains authoritative only for requirements that this add-on does not address and that still fit the product defined here.
3. Existing code is a prototype and is not a third specification. Preserve useful working code, but do not preserve prototype behavior that conflicts with either documentation file.
4. A `.docx` requirement that is not corrected, narrowed, deferred, or excluded here remains required; silence in this add-on is not cancellation.
5. Ideas described as optional, future work, opportunities, examples, SWOT items, TRIZ proposals, or possible implementation techniques are not build requirements unless this add-on explicitly promotes them to one.

The target is the polished, fully working **current complete build** of the actual product—not another rough MVP and not a literal implementation of every speculative feature mentioned in the academic analysis. “Treat it like the final version” means complete every settled requirement in the current scope, wire every visible control, test it thoroughly, and leave no placeholders. It does not promote roadmap items or explicitly excluded `.docx` ideas into the current scope.

## 2. Product definition and release boundary

Flowchart is a client-side web application for generating and manually editing flower-based wallpapers and decorative backgrounds from curated SVG assets. It exists to let a user obtain the exact color palette, layout, density, flower selection, and canvas dimensions they want without needing a professional graphics editor.

The main differentiators remain:

- a narrow focus on flower compositions rather than generic procedural shapes;
- detailed, curated, editable SVG flower artwork;
- direct manipulation of every flower after generation;
- arbitrary canvas proportions and dimensions instead of fixed export sizes;
- a responsive editor that remains usable on phones;
- free, registration-free use without geographic restrictions;
- SVG-quality output and a fast, approachable workflow for non-designers.

The primary users are ordinary people making device wallpapers. Web designers and frontend developers are a secondary audience who may use exported SVG/PNG/JPG backgrounds in their work. Social-media use is supported naturally through ratios such as 1:1 and 9:16, but batch campaign generation is not part of the first release.

### 2.1 Required current-build scope

- Homepage/welcome page.
- Full `/editor` route.
- Curated flower library and flower insertion.
- Random, editable composition generation.
- Direct selection and per-flower editing.
- Canvas/background/size controls.
- Layer ordering and standard editor actions.
- Undo/redo, destructive-action confirmation, and keyboard shortcuts.
- Autosaving and restoring the latest design locally.
- JPG, PNG, and SVG export.
- Responsive desktop and mobile layouts.
- Light/dark theme toggle.
- Fully client-side operation.

### 2.2 Explicitly out of scope for the current build

The following items appear in parts of the `.docx` but must not be treated as current-build requirements:

- CSS-code export;
- named configuration presets or a gallery of multiple saved designs;
- generating 5–10 images as one batch;
- shape-divider generation;
- automatic application of the result as the operating-system wallpaper;
- accounts, authentication, cloud storage, collaboration, or user-uploaded asset libraries;
- sharing/social features;
- subscriptions, premium content, payments, or other monetization;
- Figma, Tilda, WordPress, or other platform plugins;
- analytics/conversion targets stated as project-completion criteria;
- a native desktop or mobile application;
- server-side rendering or generation;
- automatic comparison against previous outputs to prove global uniqueness.

An `/about` route may be added after the editor and homepage are complete, but it is optional and must not displace core work. This matches the direct instruction; omitting `/about` is not an incomplete build.

## 3. Flower library and visual direction

### 3.1 Current canonical sets

The confirmed current style sets are **Botanical** and **Minimal**. Do not rename Botanical back to “Realistic,” and do not invent a third style merely because the academic document says “minimum 3 styles.”

The confirmed initial species are:

- rose;
- tulip;
- daisy.

The same species must exist in every style set, producing six canonical initial flower assets: Botanical/Minimal × rose/tulip/daisy. The intended long-term library is roughly 30 real-world flower species represented consistently across all style sets, but that expansion is a roadmap target rather than a gate for the current complete build. Do not generate a large quantity of unreviewed filler art merely to satisfy the academic document's numeric target. The architecture and asset manifest must make later curated additions routine and data-driven.

Do not count leaves, stems, geometric shapes, or style variants as extra flower species to satisfy the long-term target.

### 3.2 Final asset requirements

All canonical flower assets must follow the latest visual corrections:

- Show the flower head from directly overhead, as if the viewer is looking straight down at the bloom.
- Do not include stems or leaves in the flower asset.
- Use colored filled shapes. Do not reduce a style to black line art or stroke-only artwork.
- Prefer no dark/black contour outlines. If a tiny outline is genuinely necessary for legibility, keep it subtle and color-integrated.
- Avoid gradients inside flower assets as much as possible, including in Botanical. Flat layered fills are preferred.
- Each SVG must remain an original interpretation of its real flower. Public-domain reference SVGs may be studied for the visual grammar of a style, but must not be copied or traced exactly.
- Keep a clean `viewBox`, transparent outer background, sensible grouping, and recolorable fill slots. Do not bake editor UI or a background rectangle into the flower file.

**Botanical** must be visibly more detailed and naturalistic: more petal layers, organic asymmetry, depth through flat tonal variation, and recognisable species-specific structure. “More detailed” must not be implemented by adding stems/leaves, heavy outlines, or gradient effects.

**Minimal** must reduce the same species to a small number of bold, clean shapes. It should remain recognisable, colored, top-down, and materially simpler than Botanical.

Earlier generated files containing side-view blooms, stems, leaves, extensive gradients, or dark outlines are superseded by these directions even if they have a later-looking filename.

### 3.3 Decorative non-flower elements

The general engine may support leaves, stems, and other decorative SVG elements as independent assets or attached sub-elements in the future. They are not forbidden as a product category. However, they must not be baked into the six canonical flower-head assets, and their absence must not block the current build.

### 3.4 Asset data and color editing

- Store assets as static, pre-generated SVGs in a dedicated repository directory and expose them through a small data manifest.
- Every asset has a fixed default palette.
- After insertion, each flower instance has its own editable palette; changing one instance must not mutate the source asset or other instances.
- Expose every meaningful distinct fill as an editable color slot. There is no fixed maximum number of colors per flower or composition.
- Flower color slots use solid colors. “Avoid gradients” for flowers does not prohibit gradient canvas backgrounds.
- Preserve semantic slot identity where possible (for example outer petals, inner petals, centre) so recoloring remains stable even if the asset file changes.

## 4. Editor layout and navigation

### 4.1 Desktop

The editor should resemble a conventional graphics editor such as Haikei or Canva:

- a large interactive canvas/preview area fixed on the left and occupying most of the viewport;
- a vertically scrollable control panel on the right;
- a draggable divider that resizes the control-panel width within sane minimum and maximum bounds;
- the artwork always fitted safely inside the preview area as its aspect ratio changes, similar to responsive-design preview tools;
- no page-level scrolling that accidentally moves the primary canvas out of view during ordinary desktop editing.

### 4.2 Mobile

On narrow screens, stack the editor:

- keep the canvas at the top in a fixed or sticky preview region;
- place the control panel below it and allow the controls to scroll;
- keep the canvas large enough to edit but small enough that controls remain reachable;
- make all handles, buttons, menus, and color controls touch-friendly;
- do not reproduce the desktop resizable split pane on mobile.

### 4.3 Header

Use a thin editor header separated by a subtle rule:

- left: the Flowchart logo, implemented as an original SVG;
- right: Undo, Redo, Discard, and Export;
- Undo, Redo, and Discard should be icon buttons with accessible labels/tooltips;
- Export should use an icon plus visible text.

The page/favicon mark should be a simple original SVG compatible with the main logo. A large capital **F** was explored as one possible icon concept, not established as a mandatory final logo; prefer an existing approved repository logo if one is already present and suitable.

## 5. Control-panel structure

Use accordions/collapsible groups, ordered from the most important/high-frequency controls to less important controls. A selected-object inspector temporarily appears at the top of the panel so the user does not need to hunt for it.

Recommended order:

1. **Selected flower** — shown only while one or more flowers are selected.
2. **Flowers** — style/species browser, add/replace actions.
3. **Composition** — randomize/generate, density, global scale or spacing where appropriate.
4. **Canvas & size** — aspect ratio, custom dimensions, orientation.
5. **Background** — transparent, solid, gradient, and SVG-pattern modes.
6. **Layers** — ordering, visibility if implemented, selection, duplication, deletion.

Keep labels conventional and understandable without documentation. Advanced options may be progressively disclosed. Do not fill the panel with speculative controls merely to appear feature-rich.

The direct instruction authorizes Codex to identify missing controls. It may add a control not named here only when the control naturally supports the documented flower-wallpaper workflow, follows a familiar editor convention, creates little additional complexity, and does not conflict with a settled requirement. Any such control becomes a real implemented feature: it must be wired to document state, included in undo/redo and persistence when applicable, exported correctly, tested, and mentioned in the final report. Do not add ornamental or non-functional UI.

## 6. Canvas and background

### 6.1 Canvas sizes

Provide convenient presets for at least:

- 16:9 desktop;
- 9:16 phone/Stories;
- 4:3 tablet;
- 1:1 square;
- Custom.

Custom width and height are required. Exact device-resolution preset lists were deliberately left open; do not let choosing a ratio prevent the user from entering arbitrary dimensions.

Validate dimensions as positive integers and enforce a centralized, clearly documented browser-safe export limit. Do not hard-code the `.docx` claim that PNG is always capped at exactly 3840×2160; landscape 4K may be offered as a preset, but the validation rule must also work for portrait, square, and custom canvases. Show a clear inline validation message and never attempt an obviously unsafe allocation.

Changing ratio or dimensions should resize the canvas without corrupting the composition. Preserve relative element positions and sizes where practical, then keep every object recoverable/selectable.

### 6.2 Background modes

Support all of the following:

- transparent;
- solid color;
- gradient;
- pre-made SVG pattern.

Supply several tasteful SVG patterns with the initial app. Background changes must update the live preview immediately.

Start with a usable blank project. A small starter-template chooser may also be added if it is implemented completely using the same document model and does not delay or weaken the required editor. Templates are an optional enhancement, not a substitute for the blank project or random generation.

For a non-transparent SVG export, serialize an explicit background `<rect>` so the exported file matches the preview. For transparent SVG/PNG, omit or disable the rectangle. JPG cannot preserve transparency; flatten it against a clearly communicated matte/background rather than silently producing an unexpected result.

The requirement for solid-only flower color slots does not limit these background modes.

## 7. Composition generation

- Provide a **Randomize/Generate** action that assembles a composition from the selected style/species pool.
- The generated result is only a starting point. Every generated flower must remain individually selectable and editable.
- Density controls how many elements are placed or how full the composition feels.
- Do **not** create a separate user-facing “composition complexity” control. Complexity was not a user-defined requirement and is superseded by style, density, flower choice, size, layering, and manual editing.
- A deterministic seed is permitted if it simplifies reliable generation, undo/redo, or testing, but it is not a product requirement and does not need to be exposed.
- Generation should avoid immediately unusable layouts, but perfect collision avoidance is not required. Overlap is allowed and often desirable.
- At extreme overlap/density, show a subtle, non-blocking warning that readability or visual consistency may suffer. Do not prevent the user from continuing.
- Mixing Botanical and Minimal elements is allowed. When styles are mixed, a similarly subtle warning or recommendation may note that visual consistency can suffer; do not lock the user into one style.

## 8. Object editing and layers

Every object added to the canvas must be clickable/tappable.

### 8.1 Selection

- Single click/tap selects an object.
- Clicking empty canvas deselects.
- Support multi-selection where it integrates cleanly with the chosen interaction library.
- `Escape` deselects.
- A visible layers list must provide another reliable way to select heavily overlapped objects.
- Selection chrome must never appear in exported output.

### 8.2 Transformations

For a selected flower, provide both:

- direct on-canvas movement, resizing/scaling, and rotation handles; and
- equivalent precise controls in the selected-flower inspector.

Preserve aspect ratio by default when resizing a flower. Include editable position, rotation, and scale/size values. Manual coordinate input and axis-position controls remain valid precision mechanisms in addition to drag-and-drop.

Allow an element to extend partially beyond the canvas for natural edge compositions. Do not allow it to be moved completely off-canvas: clamp the transform so a usable/selectable portion remains visible.

### 8.3 Flower properties

The selected-flower inspector must include at least:

- species;
- style or replace-with equivalent;
- instance palette/color slots;
- X and Y position;
- scale/size;
- rotation;
- duplicate;
- delete;
- layer order controls.

Changing species/style should use a predictable replacement behavior and retain position, approximate visual size, and rotation unless the user explicitly requests a fresh insertion.

### 8.4 Layers and ordering

Canvas order is meaningful. Provide conventional actions such as bring forward, send backward, bring to front, and send to back. The layers list should reflect the same order and remain usable when objects overlap.

## 9. History, clipboard, persistence, and safeguards

### 9.1 Undo and redo

Maintain reliable undo/redo history for document-changing actions, including insertion, deletion, duplication, transforms, palette edits, layer changes, background changes, dimension changes, and generation/randomization. Selection-only changes need not enter history. Undo/redo must not ask for confirmation.

### 9.2 Keyboard shortcuts

Implement conventional editor shortcuts wherever applicable and support both `Ctrl` and macOS `Cmd` variants:

| Action | Shortcut |
| --- | --- |
| Undo | `Ctrl/Cmd+Z` |
| Redo | `Ctrl/Cmd+Shift+Z`, and `Ctrl+Y` where conventional |
| Delete selection | `Delete` or `Backspace` |
| Duplicate | `Ctrl/Cmd+D` |
| Copy / paste | `Ctrl/Cmd+C` / `Ctrl/Cmd+V` |
| Select all canvas objects | `Ctrl/Cmd+A` while editor focus makes this appropriate |
| Deselect | `Escape` |
| Nudge | Arrow keys |
| Larger nudge | `Shift+Arrow` |

Do not fire editor shortcuts while the user is typing in an input, textarea, or editable control. Do not unnecessarily override browser shortcuts outside the editor context.

### 9.3 Discard and destructive actions

Discard resets the current design only after confirmation in a centered modal. Prefer the native HTML `<dialog>` element with `showModal()` when compatible with the project. The confirmation must state what will be lost and offer clear Cancel/Discard actions.

Also protect destructive leave/clear/replace flows where unsaved work could actually be lost. Use proportionate warnings; do not make ordinary editing tedious with repeated confirmations.

### 9.4 Local persistence

The latest wallpaper design must be autosaved on the client and restored after an accidental refresh/revisit. This supersedes the earlier statement that the initial version would save no configuration at all.

Persist at least:

- canvas dimensions/ratio;
- background configuration;
- all element instances and their transforms, colors, styles, and order;
- enough version/schema metadata to reject or migrate incompatible saved state safely;
- theme preference.

This is one continuously saved current design, not a named-preset system. Saving multiple named layouts is planned for a later iteration but remains out of scope here.

## 10. Export behavior

Export opens a compact Canva-like format menu/dropdown. Each option must show a format icon, the format name, and a one-line description of its intended use.

Required formats:

- **JPG** — compact raster image for general sharing or opaque wallpapers;
- **PNG** — high-quality raster image, including transparency when selected;
- **SVG** — scalable editable vector output.

CSS export is not included.

All formats must match the preview in element placement, layer order, rotation, scale, crop, colors, background, and dimensions. Export only the artwork—not selection boxes, transform handles, warnings, menus, or editor chrome. Generate useful filenames and revoke temporary object URLs after download.

## 11. Homepage, theme, and optional About page

### 11.1 Homepage

The homepage must feel intentionally designed, not like project boilerplate. Before designing it, inspect the repository for usable existing visual resources and then use the product’s own Botanical/Minimal assets, composition examples, and motion to communicate what Flowchart does. Additional external inspiration or resources may be gathered when useful, but do not introduce unlicensed assets, unrelated visual styles, or dependencies that undermine performance. It should be responsive, visually polished, and performant.

Include a prominent link to `/editor` styled as a button with an arrow icon. A strong final CTA near the bottom of the page is specifically required; an additional above-the-fold CTA is acceptable.

Animations should improve presentation and must respect reduced-motion preferences. Do not make visual spectacle interfere with clarity or load time.

### 11.2 Theme

A light/dark theme toggle is required across the product. Persist the preference locally, use the system preference as the initial default when no choice exists, and keep both themes readable and coherent with the flower artwork.

### 11.3 About

`/about` is optional. Add it only after core routes pass verification, and only if it can be made visually consistent rather than bland filler.

## 12. Technical constraints and architecture

- Use the existing React project and its current build system unless repository inspection reveals a compelling reason otherwise.
- React hooks are sufficient; additional npm packages are allowed when they materially improve interaction reliability or export correctness.
- Keep one serializable composition/document state as the source of truth. The preview, property controls, history, persistence, and export must all derive from that same state so they cannot drift apart.
- Keep asset metadata/data separate from editor UI components.
- Prefer readable, minimal, robust code and reuse existing abstractions. Do not perform unrelated refactors.
- Avoid excessively long variable names, while keeping names understandable.
- Apply clear improvements to code written during the task when they materially improve correctness, performance, readability, or simplicity; do not create endless churn in pursuit of theoretical minimalism.
- The app must work fully client-side and require no account or mandatory network request after its static assets load.
- Deployment should be compatible with a straightforward reliable static host accessible to the intended users, such as Timeweb.
- Primary browser support is current Chromium- and Firefox-based browsers. Use standards-based APIs and preserve responsive usability on mobile; do not add browser-specific dependencies without a fallback.
- Offline use after the initial successful load is desirable where the existing project setup makes it straightforward, but building a full installable PWA is not a release requirement.

The `.docx` proposals to swap between low-poly/raster previews, delay full rendering by 500 ms, or move work to Canvas/GPU are optimization ideas, not mandated architecture. Implement them only if real profiling demonstrates a need and they do not compromise preview/export parity.

## 13. Validation and UX quality

- All controls must update the preview immediately and predictably.
- Block or correct invalid numeric input and explain the problem inline.
- Avoid visual artifacts at high density and during export.
- Keep exported colors consistent with the preview within normal browser color-rendering limits.
- The basic flow—open editor, generate/add flowers, customize, and export—should be understandable without reading a manual and achievable in a few minutes.
- Warnings for excess overlap or mixed styles are advisory and non-blocking.
- Provide accessible names, keyboard focus, visible focus states, sufficient contrast, and touch targets.
- Do not use placeholder controls, fake buttons, or UI that appears functional but is not wired to state.

## 14. Required implementation order

1. Inspect the entire repository and read the `.docx` and this add-on completely.
2. Inspect the existing homepage/editor, assets, dependencies, project scripts, and styling conventions.
3. Build a requirement checklist from both documents, applying this add-on’s precedence rules.
4. Choose the simplest robust architecture consistent with the repository.
5. Implement `/editor` completely.
6. Re-read both documentation files and close missed requirement gaps.
7. Implement the polished homepage.
8. Implement `/about` only if appropriate and time remains after the core is complete.
9. Test all interactions and important edge cases; fix every discovered regression.
10. Run the repository’s lint, type-check, test, and production-build commands and leave them passing.

## 15. Acceptance checklist

Do not call the project complete until all applicable items below have been verified:

- Desktop fixed-canvas/resizable-panel layout works at minimum and maximum panel widths.
- Mobile canvas-above-controls layout works at narrow widths and remains touch-usable.
- Accordions and the selected-object inspector behave correctly.
- All six canonical flowers can be inserted and display the correct top-down, stemless visual treatment.
- Every flower can be selected from the canvas and the layers list.
- Drag, numeric positioning, resize/scale, rotation, replacement, recoloring, duplication, deletion, and layer ordering work.
- Partial off-canvas placement works while fully losing an object off-canvas is prevented.
- Random generation creates an editable composition; density works; overlap/style warnings remain non-blocking.
- Undo/redo covers every document mutation and history boundaries are sane.
- Required keyboard shortcuts work and do not hijack text inputs or irrelevant browser contexts.
- Discard confirmation and any other necessary destructive-flow safeguards work.
- Transparent, solid, gradient, and supplied SVG-pattern backgrounds work.
- 16:9, 9:16, 4:3, 1:1, orientation changes, and valid custom dimensions work.
- Invalid/unsafe dimensions are handled without crashes.
- Latest-design restoration and theme persistence work, including malformed/stale local data handling.
- JPG, PNG, and SVG export all match the preview and contain no editor UI.
- Transparent output works in PNG/SVG and JPG flattening is explicit.
- Homepage navigation and CTA work; animations respect reduced motion.
- Light and dark themes are complete and accessible.
- Current Chromium and Firefox behavior is verified.
- Automated tests cover pure state/history/generation/export helpers where practical.
- Lint, type checking, tests, and production build pass.
- There are no knowingly broken controls, placeholder implementations, hidden TODOs, or unreported requirements.

## 16. Final implementation report

After completing the build, report concisely:

- what was implemented;
- significant architectural decisions;
- tests and checks actually run, with results;
- any limitation or requirement that could not be completed.

Never claim a feature or test passed without verifying it. If anything remains incomplete, identify it explicitly rather than disguising it as finished.
