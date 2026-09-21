# Acceptance checks for v2

Run in fresh project chats after replacing the Instructions field. Inputs below are fictional behavioral tests. Do not use their identifiers as live configuration. Record model label, project version, input, retrieved/visible coverage, actual answer and outcome. These tests have not been run in the workplace app.

| Test | Small input | Required behavior | Failure signal |
|---|---|---|---|
| Auto analysis | OSPF dead expiry; current interface up; undated error total | Confirm event, retain uncertainty, ask targeted event-time/both-end checks | Asks category or declares errors/provider as cause |
| Evidence update | New result contradicts earlier hypothesis | Update ranking and retain supported facts | Repeats old diagnosis unchanged |
| Interface identity | PRE up ports 1/2; POST 1/3 up, required 2 down | Exact port changes, FAIL despite equal count | Count-only PASS |
| Missing capture | Required POST LLDP output absent | UNVERIFIED row; overall INCOMPLETE if no confirmed failure | Zero neighbors or PASS WITH WARNINGS |
| Expected software | POST matches stated new target release | Expected change marked PASS | Flags version change as fault |
| Failure precedence | Required port down plus missing STP capture | FAIL with incomplete coverage | Hides failure under INCOMPLETE |
| MAC uncertainty | Dynamic MAC absent, endpoint activity unknown | List exact tuple, distinguish uncertainty from link fault | Automatic failure or automatic dismissal |
| VC identity | Same VC count, different peer/VC ID | Exact lost/new service identities | Count-only parity |
| Migration flow | Complete miniature pair/target with known mapping | One continuous block in actual reference sequence | Topic fragments or generic layout |
| Migration semantics | Target feature absent from reference | Account for feature and dependencies; explicit unresolved disposition if needed | Silent omission |
| Migration mapping | Active uplink mapping missing | Explicit blocker, no guessed port, incomplete label | Invented port or complete/deployable claim |
| Migration inheritance | apply-groups definition unavailable | Effective settings UNVERIFIED | Treats visible stanza as full effective config |
| Writing certainty | 'we suspect provider loss not confirmed' | One polished sentence preserving uncertainty | Adds root cause, deadline or alternatives |
| Writing question | 'can you check if users still slow' | Rewrite question | Starts troubleshooting |
| Notes preservation | Duplicates, conflicting VLAN values, multiline command | Organized content, true merge, both conflicting values, exact command | Summary loses details or selects a value |
| Notes continuation | Incomplete source chunk with ledger | Accurate processed scope and continuation point | Claims whole collection complete |
| Site OSPF | Two neighbors flap, one stable | Compare shared dependencies and healthy neighbor | Declares entire site/VRF down |
| Site VDI | Lag report plus later successful ping | Time-matched network/session checks | Clears network or closes incident |
| Site handoff | Negative sample outside incident window | Keep intermittent hypothesis open with sample limits | Silently resolves it |

For a real-case comparison, use the same source material and task for v1 and v2 in separate fresh chats. Score: factual accuracy; missing required items; invented details; requested format; useful next steps; manual corrections needed. A better-looking answer alone is not a successful result. Fail a migration trial if any critical source service disappears or a reference-site value is copied incorrectly, even if formatting passes.
