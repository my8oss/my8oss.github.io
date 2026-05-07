---
title: Usage
description: How to use URPlans.
---

# How to Use URPlans CLI

URPlans provides a command-line interface (CLI) that reads non-option arguments (i.e. arguments that aren’t Spring properties).  

## Command Syntax

```bash
java -jar target/urplans-1.0-SNAPSHOT.jar <command> [parameters]
```

## Available Commands

- Insert a new task.    
`-i "Title|Description|<startDate>><endDate>|<PRIORITY>"`    
- Show tasks for a specific date.   
`-s <YYYY-MM-DD>`     
- List all tasks.   
`-l`    
- Delete a task by its ID.  
`-d <id>`  
    
- Search tasks by keyword, date, priority, and pagination parameters.   
`--search <keyword> <date> <priority> <page> <size>`  

**Date format:** `YYYY-MM-DD`  
**Priority values:**  
- `URGENT_IMPORTANT`  
- `NOT_URGENT_IMPORTANT`  
- `URGENT_NOT_IMPORTANT`  
- `NOT_URGENT_NOT_IMPORTANT`

[Learn more in the Eisenhower Matrix guide](https://asana.com/resources/eisenhower-matrix)

---

## Examples

**Insert a task**  
```bash
java -jar target/urplans-1.0-SNAPSHOT.jar \
  -i "Study Java|Prepare for certification|2025-08-13>FOREVER|URGENT_IMPORTANT"
```

**Show tasks for a date**  
```bash
java -jar target/urplans-1.0-SNAPSHOT.jar -s 2025-08-13
```

**List all tasks**  
```bash
java -jar target/urplans-1.0-SNAPSHOT.jar -l
```

**Delete a task by ID**  
```bash
java -jar target/urplans-1.0-SNAPSHOT.jar -d 42
```

**Search tasks with filters and pagination**  
```bash
java -jar target/urplans-1.0-SNAPSHOT.jar \
  --search "java" 2025-08-13 URGENT_IMPORTANT 0 20
```