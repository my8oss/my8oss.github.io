---
title: print with "insert"
description: print function in SQE
---

To print, ```insert``` method is used:

```
insert <TEXT>
```

```
insert Hello World!
```

![Single Line Insert](/src/images/sqe/single-line-insert.webp)

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

![Multiple Line Insert](/src/images/sqe/multiple-line-insert.webp)