---
booklet: "0.20"
id: my/study-guide
title: Study guide
description: What you are studying, flashcards you write yourself, a short quiz for you or a teacher to write, and a log of your study sessions.
lang: en
version: "0.2"
license: Apache-2.0
---

# Study guide

For anything you are learning: say what you are studying and what you need to know, test yourself with your own flashcards, keep a log of your sessions, and, if you or a teacher write one, take a short quiz.

> [!module|study-guide] Study guide

What you are studying, your own flashcards, a short quiz and a study log.

<!-- Piece: What I am studying -->

> [!activity|studying icon:graduation-cap] What I am studying

Fill this in once, and change it as you go.

> [!text|subject] What are you studying?
> A subject, a topic or a chapter.

> [!date|by-when] When do you need to know it by?
> An exam, a test or a date of your own. Leave it blank if there is none.

> [!lines|must-know] What do you need to know?
> One line each.

> [!text|notes long] Notes
> Anything worth writing down as you go.

<!-- Piece: Flashcards -->

> [!activity|flashcards repeat icon:layers] Flashcards

A card for each thing to remember: a question or a word on the front, the answer on the back. Say the answer out loud first, then open the card to check, and say how it went.

```booklet query
from: cards
as: cards
label: front
add
delete
empty: No cards yet. Add the first one.
```

> [!choice|knew each:cards] How did it go?
- [ ] Knew it
- [ ] Nearly
- [ ] Not yet

```booklet data
{ "fields": { "front": { "label": "Front", "edit": "text" }, "back": { "label": "Back", "edit": "long" } },
  "idFormat": "card-{n}",
  "rows": [] }
```
^cards

<!-- Piece: Quiz -->

> [!activity|quiz icon:circle-help] Quiz

Answer each question, then check yourself. Nothing is scored.

> [!choice|q1] [Your first question]
- [x] [The right answer]
  - [Why it is right.]
- [ ] [A wrong answer]
  - [Why it is wrong.]
- [ ] [Another wrong answer]
  - [Why it is wrong.]

> [!hint]- Hint
> [A nudge toward the answer.]

> [!multi|q2] [A question with more than one right answer.] Pick every one.
- [x] [A right answer]
- [x] [Another right answer]
- [ ] [A wrong answer]

> [!solution]- Why
> [Why those are the right ones.]

> [!text|q3 long] [A question to answer in your own words]
> [A hint on how much to write, such as "Two or three sentences."]

> [!solution]- A sample answer
> [A good answer, to check against.]

<!-- Piece: Study log -->

> [!activity|study-log repeat icon:clipboard-list] Study log

Log a session each time you study. It helps to see how much you have done.

> [!tab|log] Log a session

> [!text|studied] What did you study?
> A topic or a chapter.

> [!number|minutes min:0 max:600 step:5] How many minutes?

> [!scale|confidence] How well do you know it now?

1. Not yet
2. A little
3. Mostly
4. Well

> [!text|next-time] What to look at next time?
> Leave it blank if nothing.

> [!tab|history] Progress

Your confidence over your sessions.

```booklet query
from: study-log
as: line
label: date
fields: confidence
limit: 14
empty: Nothing to draw yet. Log a session first.
```

```booklet query
from: study-log
as: list
label: studied
value: minutes
limit: 10
empty: No sessions yet.
```

<!-- End of pieces -->

> [!module|study-guide end] End of Study guide
