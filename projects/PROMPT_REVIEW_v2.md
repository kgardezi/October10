# Prompt review and revision — v2

Reviewed the nine current project instruction files, nine task-prompt menus, migration format supplement, setup guide and supporting templates against the requested workflows. Base commit: `850c9515d09b94b7851439920e2d5a5bafd6207c`.

## Findings

The old project instructions were not literally empty. They already contained useful evidence rules, item-level comparison, status definitions and migration coverage requirements. The weakness was uneven task detail and packaging: optional task menus were only 256–627 bytes, crucial migration layout requirements were a separate supplement, and there were no worked output examples. These are plausible contributors to weak responses, not proof of what failed in the workplace deployment. No failing model transcript or actual migration configuration was supplied for this revision.

| Area | Observed weakness | Revision |
|---|---|---|
| Daily analysis | Broad general instructions; limited symptom-specific decision guidance | Explicit evidence-to-assessment-to-next-check workflow, protocol/service branches and follow-up behavior |
| Upgrades | Good comparison rules but little guidance for staged captures and report-scope ambiguity | PRE-only/POST-only handling, precise identity keys, required versus optional scope, exact table contract and failure precedence examples |
| Migration | Output flow requirement separate from main instructions; target prompt too brief | Main instructions and generation/repair prompts enforce one continuous reference-ordered config; block adaptation, dependencies, inheritance, mapping and unresolved values are explicit |
| Writing | Useful concise policy but no demonstrations | Tense/commitment/certainty rules, common message types and one-version examples |
| Notes | Good preservation principles, few concrete transformation examples | Actual document output required; record structure, merge behavior and continuation method clarified |
| Sites | Broad shared instructions; deeper validation depended on an attached workflow | Embedded essential validation rules, OSPF and VDI investigation methods, evidence-based handoff and escalation prompts |
| Setup | Task starters easy to mistake for complete prompts; later migration supplement easy to miss | Replace-not-append setup, one prompt block at a time, main instructions self-contained |

## Design choices

- Keep all nine projects and existing paths, so replacement is straightforward.
- Preserve concise operational output while making the underlying checks specific.
- Give reusable task prompts enough substance for Favorite Prompt use outside a project.
- Keep user/site facts in real evidence files. Four site projects share analytical methods; inventing different topology or causes for each would weaken them.
- Keep templates optional. Blank forms do not improve retrieval.
- Keep examples explicitly fictional. They demonstrate expected behavior, not Cisco deployment syntax or actual incidents.
- No new universal command cookbook: exact CLI depends on the platform/release and should come from approved runbooks or official documentation when available.
- Preserve unrelated repository material and the historical conversation notes.

## Validation and remaining limits

Repository checks verify all nine instruction/prompt pairs and worked examples exist, the migration's main instructions carry the output requirement, and all four site validation copies match the central workflow. The acceptance cases describe expected behavior; they are not claims of model execution.

These prompts have NOT been executed in LLM@CIB. Model settings, application instruction handling, retrieval coverage and output limits can still affect results. Prompt changes cannot restore a source section that RAG does not supply. The next useful evaluation is one known real case per workflow, keeping the exact input and output. For migration, provide the approved reference, target requirements and one failed generated section to diagnose semantic deviations beyond formatting.
