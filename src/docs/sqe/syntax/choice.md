---
title: choice
description: Choice function includes Boolean questions, multiple questions, yes/no questions
---

SQE covers both "Boolean (yes/no) questions" and "multiple questions" under one umbrella, "choice."

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
![choice](/images/sqe/choice.webp)