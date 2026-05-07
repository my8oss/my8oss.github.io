---
title: SQE Functions, Block Types, and Methods
description: Learn how SQE block types (html, css, js) work, the flow overview, and the window.SQE API for getting and setting answers.
---

# SQE Functions, Block Types, and Methods

## Block Types

`html { ... }`

* Inserts raw HTML directly where the block appears.
* Best for **placeholders** or static markup fragments.

`css { ... }`

* Wrapped in a `<style>` tag and inserted inline where the block appears.
:::caution
 For cleaner organization, consider consolidating CSS into the page hea
 (see **Best Practices**).
:::

`js { ... }`

* Treated as **per-page setup scripts**.
* Collected into `PAGE_SCRIPTS` and executed by the runtime.
* Runs inside an **async IIFE** (immediately invoked async function).
* May be re-run automatically when answers change.

---

## Flow overview

```
User input
   ↓
collectAnswers() updates state
   ↓
window.SQE_ANSWERS refreshed
   ↓
runScriptsForPage() re-executes js { ... } blocks
   ↓
Placeholders update
```

Key details:

* Scripts live in a per-page array called `PAGE_SCRIPTS`.
* Runtime executes them via `runScriptsForPage(...)`.
* Script objects look like:

  ```json
  { "script": "<source>" }
  { "id": "placeholder-id", "script": "<source>" }
  ```

* If an `id` is present, the runtime looks up a matching placeholder:

  
```
<div data-sqe-fn="placeholder-id"></div>
```

* By default, `js { ... }` blocks are setup scripts (no `id`). To update placeholders, pair with an `html { ... }` block.

---

## Accessing Answers

SQE exposes an API to your scripts:

| Input type          | Return value     |
|---------------------|------------------|
| `window.SQE_ANSWERS`       | object holding all collected answers.   |
| `SQE.getAnswer(key)`          | retrieve stored answer.  |
| `SQE.setAnswer(key, value)`         | set an answer programmatically (triggers re-run).           |
| `SQE.collectAnswers()`     |    scan DOM inputs (`data-sqe-key`) and refresh answers.      | 

Supported input types:

* Radios and checkboxes → arrays of values
* Text inputs → strings

---

## Example Usage

### 1. Placeholder + JS Renderer

```
html {
  <div data-sqe-fn="my_result"></div>
}

js {
  (async function(){
    const id = "my_result";

    function render() {
      const a = window.SQE_ANSWERS || {};
      const v = a["q1"];
      const res = (v === 1 || v === "1") ? "Yes"
               : (v === 0 || v === "0") ? "No"
               : "No answer";

      const target = document.querySelector('[data-sqe-fn="'+id+'"]');
      if (!target) return;

      target.innerHTML = '';
      const d = document.createElement('div');
      d.className = 'text-block';
      d.textContent = res;
      target.appendChild(d);
    }

    // run once; runtime will re-run on input/change
    render();
  }());
}
```

### 2. Using SQE Helpers

```
js {
  (function(){
    const val = SQE.getAnswer("q1");
    if (val == null) {
      SQE.insert("No answer yet");
    } else {
      SQE.insert("Answer: " + String(val));
    }
  }());
}
```

---

## Best Practices

* Keep **logic in `js {}`**, markup in `html {}`, styles in `css {}`.
* Prefer SQE APIs (`SQE.getAnswer`, `SQE.setAnswer`, `SQE.insert`) over manual DOM manipulation.
* Runtime debounces script re-runs (30ms), so avoid heavy DOM work inside event handlers.
* Multi-select checkboxes → treat values as arrays.
* For one-time scripts, add a guard (e.g. `if (window.__init_done) return;`).
* 
:::caution
Untrusted JS runs in page context. Sanitize inputs or isolate in a Worker if needed.
:::