---
title: Setting Up URPlans
description: Step‑by‑step instructions to set up URPlans from source, install dependencies, clone the repo, and build with Maven.
---

# Setting Up URPlans

Follow these steps to setup ```urplans```:

### 1. Install dependencies

Make sure the following are installed on your system:

- Java Development Kit (JDK) 21 or later (includes the JRE)  
- Apache Maven 3.6+  
- Git (for cloning the repository)

### 2. Clone the repository

Use one of these commands to clone URPlans:

- via HTTPS:
   ```bash
   git clone https://github.com/MaiFOSS/urplans.git
    ```
- via SSH:
   ```bash
   git@github.com:MaiFOSS/urplans.git
    ```
- via Github CLI:
   ```bash
   gh repo clone MaiFOSS/urplans
    ```

Alternatively, you can clone via your IDE’s Git integration.

### 3. Build the project

3.1. Move to the project's directory

```bash
cd urplans
```

3.2 Secondly, build the file:

```bash
mvn -DskipTests clean package
```

The output should be similar to this:

```txt
[INFO] Scanning for projects...
[INFO] 
[INFO] --------------------< org.maifoss.urplans:urplans >---------------------
...
[INFO] BUILD SUCCESS
...
```

The built JAR will be at ```target/urplans-1.0-SNAPSHOT.jar```

You’re all set! Run URPlans with:

```bash
java -jar target/urplans-1.0-SNAPSHOT.jar
```