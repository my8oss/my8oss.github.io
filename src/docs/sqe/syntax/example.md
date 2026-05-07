---
title: SQE Example
description: A full SQE script example demonstrating imports, multiple pages, a boolean question and a multiple‑choice question.
---

# SQE Example

This example script imports external CSS, JS, and HTML files, then creates three pages: a welcome page with a boolean question, a page with a multiple‑choice question, and a final thank‑you page.

```
import css "styles.css"
import js "base.js"
import html "index.html"

@p page 1

insert Welcome!

boolean q1 {
Do you like this company?
true >> 0
false >> 1
}

@p page 2

multiple_choice my_multiple_choice {
q2val
Which one do you prefer?
windows >> 0
macos >> 1
linux >> 2
}


@p page 3

insert thanks!

```
