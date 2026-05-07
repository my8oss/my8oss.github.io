---
title: Yes/No & Multiple Choice in SQE
description: Learn the choice construct in SQE for yes/no and multiple-choice questions with syntax and an example.
---

# Yes/No & Multiple Choice in SQE
The `choice` construct handles yes/no and multiple‑choice questions in SQE.

```txt
choice <VARIABLE NAME> {
<Question>
<Button 1> >> <Button 1 value>
...
<Button n> >> <Button n value>
}
```
```
choice q1 {
Choose one of these buttons
Button one >> 1
Button two >> 2
Button three >> 3
Button four >> 4
}
```
![Example output of the SQE choice construct, showing four labelled buttons](/images/sqe/choice.webp)