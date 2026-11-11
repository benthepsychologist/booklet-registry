---
booklet: "0.20"
id: my/habit-tracker
title: Habit tracker
description: Your own list of habits, marked once a day, with a weekly look back and a few ideas to start from.
lang: en
version: "0.2"
license: Apache-2.0
---

# Habit tracker

See plainly which habits you kept up. List your habits once, mark them each day, and look back once a week. It sets no targets and keeps no score.

> [!module|habit-tracker] Habit tracker

Your habits, marked once a day, a weekly look back and a few ideas to start from.

<!-- Piece: Your habits and today -->

> [!activity|my-habits repeat icon:list-checks] My habits

The habits you want to keep up. Add one, change its name or its moment, and remove one you have let go. Two or three is a good start.

```booklet query
from: habits
as: table
fields: habit, cue
add
delete
empty: No habits yet. Add your first one.
```

```booklet data
{ "fields": { "habit": { "label": "Habit", "edit": "text" }, "cue": { "label": "When, or after what", "edit": "text" } },
  "idFormat": "habit-{n}",
  "rows": [] }
```
^habits

> [!activity|today repeat daily icon:check] Today

Once a day, mark each habit. If you come back later the same day, you can change what you marked.

> [!tab|mark] Today

```booklet query
from: habits
as: table
fields: habit, done
empty: No habits yet. Add them under My habits.
```

> [!choice|done each:habits] Today
- [ ] Done
- [ ] A smaller version
- [ ] Not today

> [!text|habit-note] Anything to note?
> One line, or nothing.

> [!tab|this-week] This week

The last seven days.

```booklet query
from: today
as: table
fields: done, habit-note
limit: 7 days
empty: Nothing marked yet. Start on the Today tab.
```

<!-- Piece: Weekly look back -->

> [!activity|weekly-habits repeat icon:calendar] Weekly look back

Once a week, a few lines on how your habits went. Short answers are fine.

> [!tab|review] Review

> [!text|easiest] Which habit felt easiest this week?

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

<!-- Piece: Habit ideas -->

> [!activity|habit-ideas icon:lightbulb] Habit ideas

Not sure where to start? Some small habits, each with an easy way in.

| Habit | A small way to start |
| --- | --- |
| Drink water | Keep a glass by the kettle |
| Walk | Right after lunch |
| Read | Keep a book by the bed |
| Stretch | While the kettle boils |
| Tidy | Pick one small spot |
| Write | Keep a notebook handy |

> [!tip] Start smaller than you think
> A habit you can do on your worst day is easier to keep than one that needs your best day.

<!-- End of pieces -->

> [!module|habit-tracker end] End of Habit tracker
