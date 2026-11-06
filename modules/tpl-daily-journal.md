---
booklet: "0.18"
id: template/daily-journal
title: Daily journal template
description: A starter daily journal with a morning plan, an evening entry, a list of small wins and a few prompts.
lang: en
version: "0.1"
license: Apache-2.0
---

# Daily journal template

A starter journal for anyone who wants a few quiet minutes with a page each day: a short plan in the morning, a few lines in the evening, and a place to see how the last week went. Every word in it is sample text for you to change. Delete the pieces you do not need. Copy and edit the ones you do.

> [!module|tpl-daily-journal] Daily journal template

A morning plan, an evening entry, a list of small wins and some prompts, each one a piece you can keep or delete.

Delete the pieces you do not need. Copy and edit the ones you do.

<!-- PIECE 1 of 4: Morning plan. This is one separate piece of the template. You can delete it, or copy it and edit the copy (give every id in the copy a new name). -->

> [!activity|morning-plan repeat daily icon:sunrise] Morning plan

A minute to set up the day. Skipping any line is fine.

> [!lines|top-three] Three things for today
> One line each. Small things count.

> [!text|leave-for-later] One thing to leave for later
> Naming it can make it easier to put down.

<!-- PIECE 2 of 4: Evening entry. This is one separate piece of the template. You can delete it, or copy it and edit the copy (give every id in the copy a new name). -->

> [!activity|evening-entry repeat daily icon:notebook-pen] Evening entry

A few minutes at the end of the day. Nothing has to be interesting, and an entry with one line in it still counts.

> [!tab|write] Write

> [!text|what-happened long] What happened today?
> As much or as little as you like. Nobody reads this.

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

<!-- PIECE 3 of 4: Small wins. This is one separate piece of the template. You can delete it, or copy it and edit the copy (give every id in the copy a new name). -->

> [!activity|small-wins repeat icon:sparkles] Small wins

Add one whenever something small goes right. A cup of tea made properly counts.

> [!tab|add-a-win] Add a win

> [!text|win] What went right?
> A sentence is plenty.

> [!choice|win-kind open] What kind of win was it? Add your own.
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

<!-- PIECE 4 of 4: Writing prompts. This is one separate piece of the template. It only has words to read. You can delete it, or copy it and edit the copy (give every id in the copy a new name). -->

> [!activity|prompts icon:lightbulb] Prompts for a blank page

Stuck on what to write? Pick one of these, or ignore them all.

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

> [!module|tpl-daily-journal end] End of Daily journal template
