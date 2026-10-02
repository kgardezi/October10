# Idea Board v2.2.1 — Visio compatibility correction

Open IdeaBoard-v2.2.1.html in your browser. Use Menu → Export Visio (.vsdx) to export again. Old v2.2 exports are not automatically repaired by updating the app.

Before switching versions, use Save to file in your current app. Then use Open file as new board in v2.2.1 to load your saved board. Keep that original board backup.

## Correction

Visio rejected a v2.2 export as missing or invalid. The exporter contained invalid font declarations: FaceName used an unsupported ID attribute, and Font cells used a numeric ID rather than the font's NameU. A page-root xml:space attribute was also outside the published schema. These have been corrected.

References: [Microsoft font table rules](https://learn.microsoft.com/en-us/openspecs/sharepoint_protocols/ms-vsdx/96277f82-5231-4f46-bd64-e0e5a496df19) and [FaceName schema](https://learn.microsoft.com/en-us/office/client-developer/visio/facename_type-complextypevisio-xml).

## Validation and limits

26 automated tests passed, including regression checks that reproduce the old declarations. The exported multipage fixture passes ZIP CRC, XML parsing, relationship and connector-reference checks. XML diagnostic checks use Microsoft's published schema appendix adapted from its older namespace to 2012/main, with its unused unresolved DrawingML theme declaration removed. This is additional structural validation, not a substitute for opening the file in Microsoft Visio.

Microsoft Visio is unavailable on the development machine. Native opening, rendering and connector glue behavior still need confirmation; export remains Preview. Example-preview.vsdx provides a small test file.

Devices export as labelled boxes, clouds as ellipses, pencil strokes as polylines, and pictures as embedded PNG/JPEG. Connector paths can change when rerouted in Visio. There is no Visio import. Use Idea Board's Save to file for editable backups.

The standalone app works offline, has no tldraw dependency, and can be hosted as a static HTML page. Existing connector, pencil, search, annotation, PDF and keyboard tools are unchanged.
