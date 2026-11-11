---
booklet: "0.20"
id: my/project-board
title: Project board
description: One project on one page, with what it is, its tasks by stage, its milestones and a log of what happened.
lang: en
version: "0.2"
license: Apache-2.0
---

# Project board

One project on one page: what it is and what done looks like, its tasks by stage, the milestones that mark real progress, and a log of what happened along the way. For another project, use another copy of this booklet.

> [!module|project-board] Project board

What the project is, its tasks by stage, its milestones and a log of what happened.

<!-- Piece: The project -->

> [!activity|the-project icon:file-text] The project

A few lines to say what this is. Come back and change them as the project changes.

> [!text|what] What is the project?
> One or two sentences.

> [!text|done-looks-like long] What does done look like?
> How you will know it is finished.

> [!date|deadline] When should it be done?

> [!text|who] Who is involved?
> Names, or leave it blank.

> [!text|not-doing] What is not part of it?
> Naming it keeps the project a size you can finish.

<!-- Piece: The board -->

> [!activity|board repeat icon:layout-grid] The board

Every task, by stage. Add a task, move it on by changing its stage, and remove one that no longer matters.

```booklet query
from: tasks
as: list
group: stage
label: task
note: note
fields: stage, who, due
add
delete
empty: No tasks yet. Add the first one.
```

```booklet data
{ "fields": {
    "task": { "label": "Task", "edit": "text" },
    "stage": { "label": "Stage", "edit": "choice", "options": ["To do", "Doing", "Done"] },
    "who": { "label": "Who", "edit": "text" },
    "due": { "label": "Due", "edit": "date" },
    "note": { "label": "Note", "edit": "long" } },
  "idFormat": "task-{n}",
  "rows": [] }
```
^tasks

<!-- Piece: Milestones -->

> [!activity|milestones repeat icon:milestone] Milestones

The few points that mark real progress, each with the date you aim for.

```booklet query
from: milestone-rows
as: table
fields: milestone, aim, status
add
delete
empty: No milestones yet. Add the first one.
```

```booklet data
{ "fields": {
    "milestone": { "label": "Milestone", "edit": "text" },
    "aim": { "label": "Aim for", "edit": "date" },
    "status": { "label": "Status", "edit": "choice", "options": ["Not yet", "Reached"] } },
  "idFormat": "milestone-{n}",
  "rows": [] }
```
^milestone-rows

<!-- Piece: Project log -->

> [!activity|project-log repeat icon:notebook-pen] Project log

A line or two each time something happens: a decision, a blocker, a bit of progress.

> [!tab|write] Write an update

> [!text|what-happened] What happened?
> Short is fine.

> [!choice|kind open] What kind of update is it?
> Pick one, or add your own.
- [ ] Progress
- [ ] Decision
- [ ] Blocker
- [ ] Note

> [!text|next-step] What is the next step?
> Leave blank if there is none.

> [!tab|log-so-far] The log

```booklet query
from: project-log
as: table
fields: kind, what-happened, next-step
limit: 15
empty: Nothing logged yet.
```

<!-- End of pieces -->

> [!module|project-board end] End of Project board
