# Idea Board v2.2 — Visio Export Preview

Open IdeaBoard-v2.2.html in a modern browser. No installation, internet, account, server, or tldraw license is required. The HTML contains the app and exporter. It can also be served by a static website host.

## Export to Visio

Open Menu → Export Visio (.vsdx), choose All pages or Current page, then Download .vsdx. Export runs entirely in your browser.

The file contains native editable shapes, text, page names, connection points and connector attachment records. PNG/JPEG pictures are embedded. Network annotations and endpoint labels are included. Blank pages are retained.

This is a preview. Microsoft Visio is not installed on the development machine, so opening, rendering, editing and glue behavior in Microsoft Visio have not been verified. File structure checks are not equivalent to native Visio compatibility testing.

### Conversion limits

- Devices become labelled boxes, not Microsoft/Cisco stencils. Their name, type, role and network annotations are included.
- Clouds become ellipses. Pencil strokes become editable polylines without pressure variation.
- Curved and bent connectors retain sampled paths; Visio rerouting may change their appearance.
- A light palette is used. Text layout, symbols and manual styling can differ from the canvas.
- Export is limited to 200 pages and 10,000 objects per page. Missing/unsupported pictures produce an explicit error.
- Visio import is not included. Keep using Save to file for an editable Idea Board backup; .vsdx is not an Idea Board backup format.

## Existing boards

Before switching versions or moving the HTML file, use Save to file in the old app. In v2.2, use Open file as new board to load that backup. Browser storage can depend on the file location/browser and can be removed by clearing browser data. Downloaded board backups are the reliable way to transfer your work.

## Preserved tools

Drag-to-connect + handles, fixed attachments that follow device movement/resizing, straight/elbow/curved connectors, optional smart routing, pencil smoothing and Shift-constrained strokes remain available. Search/outline, PDF, structured network annotations, bounded undo history, keyboard editing, transparent device icons, icon size and left/middle/right positioning are retained.

## Verification

- 24 automated tests passed: 21 existing geometry, routing, drawing, history, annotation and PDF checks, plus 3 Visio export tests.
- Generated fixtures and a browser-downloaded sample passed independent ZIP CRC, XML parsing, relationship-target, unique-cell and connector-reference checks.
- Browser verified v2.2 loading, export dialog, and download of the built-in sample network.
- Not verified in native Microsoft Visio.

Exporter format reference: [Microsoft Visio file format documentation](https://learn.microsoft.com/en-us/office/client-developer/visio/introduction-to-the-visio-file-formatvsdx).
