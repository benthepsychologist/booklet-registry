---
booklet: "0.20"
id: my/daily-journal
title: Daily journal
description: A morning plan, an evening entry, a list of small wins and prompts for a blank page.
lang: en
version: "0.2"
license: Apache-2.0
---

# Daily journal

A few quiet minutes with a page each day: a short plan in the morning, a few lines in the evening, the small things that went right, and prompts for when the page is blank.

> [!module|daily-journal] Daily journal

A morning plan, an evening entry, small wins and prompts for a blank page.

<!-- Piece: Morning plan -->

> [!activity|morning-plan repeat daily icon:sunrise] Morning plan

A minute to set up the day. Skipping any line is fine.

> [!lines|top-three] Three things for today
> One line each. Small things count.

> [!text|leave-for-later] One thing to leave for later
> Naming it can make it easier to put down.

<!-- Piece: Evening entry -->

> [!activity|evening-entry repeat daily icon:notebook-pen] Evening entry

A few minutes at the end of the day. Nothing has to be interesting, and an entry with one line in it still counts.

> [!tab|write] Write

> [!text|what-happened long] What happened today?
> As much or as little as you like. This stays in your note.

> [!lines|worth-keeping] Worth keeping
> One line each. A phrase is enough.

> [!scale|busy] How busy was the day?

1. Quiet
2. Steady
3. Busy
4. Packed

> [!text|for-tomorrow] Anything for tomorrow?
> Only if there is something. Leave it blank otherwise.

> [!tab|look-back] Look back

How busy each day was, as a line.

```booklet query
from: evening-entry
as: line
label: date
fields: busy
limit: 14
empty: Nothing to draw yet. Come back after a few entries.
```

The last few entries, with what you wrote.

```booklet query
from: evening-entry
as: cards
fields: what-happened, worth-keeping
limit: 5
empty: No entries yet.
```

<!-- Piece: Small wins -->

> [!activity|small-wins repeat icon:sparkles] Small wins

Add one whenever something small goes right. A cup of tea made properly counts.

> [!tab|add-a-win] Add a win

> [!text|win] What went right?
> A sentence is plenty.

> [!choice|win-kind open] What kind of win was it?
> Pick one, or add your own.
- [ ] Something I made
- [ ] Something I finished
- [ ] Something I noticed
- [ ] Something kind I did

> [!tab|all-wins] All wins

```booklet query
from: small-wins
as: list
label: win
badge: win-kind
limit: 10
empty: Nothing yet. The first one is the hardest to notice.
```

<!-- Piece: Prompts for a blank page -->

> [!activity|prompts icon:lightbulb] Prompts for a blank page

Stuck on what to write in the evening entry? Pick one of these, or ignore them all.

> [!note] How to use these
> Choose one prompt, set a timer for five minutes, and write until it rings. It does not have to be good.

- What did I notice today that I usually miss?
- What am I looking forward to this week?
- Who did I talk to today, and what did we talk about?
- What is one thing I would do differently tomorrow?
- What is a small thing I am glad about?

> [!group]- A few more, if you want them
> - What was the best meal I had this week?
> - What song has been in my head?
> - What do I want to remember about this season?

<!-- End of pieces -->

> [!module|daily-journal end] End of Daily journal
