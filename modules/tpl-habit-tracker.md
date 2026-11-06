---
booklet: "0.18"
id: template/habit-tracker
title: Habit tracker template
description: A starter habit tracker with a daily tick-list, a weekly look back and a short list of habit ideas.
lang: en
version: "0.1"
license: Apache-2.0
---

# Habit tracker template

A starter tracker for people who want to see, plainly, which small habits they kept up this week. You tick what you did, add a count or two, and look back at the last seven days. It sets no targets and keeps no score. Every habit in it is a sample for you to change. Delete the pieces you do not need. Copy and edit the ones you do.

> [!module|tpl-habit-tracker] Habit tracker template

A daily tick-list, a weekly look back and some habit ideas, each one a piece you can keep or delete.

Delete the pieces you do not need. Copy and edit the ones you do.

<!-- PIECE 1 of 4: Daily habits. This is one separate piece of the template. You can delete it, or copy it and edit the copy (give every id in the copy a new name). To change the habits, edit the list of options under "Which habits did you do today?". -->

> [!activity|daily-habits repeat daily icon:list-checks] Today's habits

A quick tick-list, once a day. If you come back later the same day, you pick up where you left off.

> [!tab|today] Today

> [!multi|habits open] Which habits did you do today?
> Tick what you did, and add your own if you like. Leave the rest empty.
- [ ] Drank water
- [ ] Went for a walk
- [ ] Read a few pages
- [ ] Stretched
- [ ] Tidied one thing

> [!number|glasses min:0 max:20] How many glasses of water?
> A count of what happened. There is no right number.

> [!number|walk-minutes min:0 max:600 step:5] Minutes outside
> Roughly is fine.

> [!text|habit-note] Anything to note?
> One line, or nothing.

> [!tab|this-week] This week

The last seven days, as a table.

```booklet query
from: daily-habits
as: table
fields: habits, glasses, walk-minutes
limit: 7 days
empty: Nothing ticked yet. Fill in Today first.
```

Glasses of water, day by day.

```booklet query
from: daily-habits
as: line
label: date
fields: glasses
limit: 14
empty: Nothing to draw yet. Come back after a few days.
```

Minutes outside, day by day.

```booklet query
from: daily-habits
as: line
label: date
fields: walk-minutes
limit: 14
empty: Nothing to draw yet. Come back after a few days.
```

<!-- PIECE 2 of 4: Weekly look back. This is one separate piece of the template. You can delete it, or copy it and edit the copy (give every id in the copy a new name). -->

> [!activity|weekly-habits repeat icon:calendar] Weekly look back

Once a week, a few lines on how your habits went. Short answers are fine.

> [!tab|review] Review

> [!text|stuck] Which habit felt easiest this week?

> [!text|slipped] Which one slipped, and why do you think so?
> A guess is fine. No blame.

> [!text|next-week] What will you try next week?
> Maybe make one habit smaller, or move it to a better time.

> [!tab|earlier-weeks] Earlier weeks

```booklet query
from: weekly-habits
as: cards
limit: 4
empty: No weekly reviews yet.
```

<!-- PIECE 3 of 4: Habit ideas. This is one separate piece of the template. It only has words to read. You can delete it, or copy it and edit the copy (give every id in the copy a new name). -->

> [!activity|habit-ideas icon:lightbulb] Habit ideas

Not sure what to track? Here are some small ones, with a way to make each easier to start.

| Habit | A small way to start |
| --- | --- |
| Drink water | Keep a glass by the kettle |
| Walk | Ten minutes after lunch |
| Read | One page before bed |
| Stretch | While the kettle boils |
| Tidy | One drawer, once |
| Write | One line in a journal |

> [!tip] Start smaller than you think
> A habit you can do on your worst day is easier to keep than one that needs your best day.

<!-- PIECE 4 of 4: Habit log. This is one separate piece of the template. You can delete it, or copy it and edit the copy (give every id in the copy a new name). -->

> [!activity|new-habit-log repeat icon:flag] Try a new habit

Use this when you start something new, to note how the first days go.

> [!tab|try] Try it

> [!text|which-habit] What habit are you trying?
> One short phrase, like "stretch after lunch".

> [!choice|how-it-went] How did today go?
- [ ] Did it
- [ ] Did a smaller version
- [ ] Did not get to it

> [!tab|trial-so-far] So far

```booklet query
from: new-habit-log
as: list
label: which-habit
badge: how-it-went
limit: 14
empty: Nothing yet.
```

> [!module|tpl-habit-tracker end] End of Habit tracker template
