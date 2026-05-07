---
title: Printing Output with insert
description: Use the insert statement to print single‑line and multi‑line text in SQE. Includes syntax and visual examples.
---

# Printing Output with insert


The `insert` statement outputs text in your SQE survey or questionnaire.

```
insert <TEXT>
```

```
insert Hello World!
```

![Single Line Insert](/images/sqe/single-line-insert.webp)

To print multiple line text, use curly brackets:
```
insert {
<MULTIPLE LINES>
}
```

```
insert {
line 1
line 2 
}
```

![Multiple Line Insert](/images/sqe/multiple-line-insert.webp)