---
title: Installing SQE (Core & IDLE) on Linux
description: Step-by-step guide to install SQE on Linux; download pre-built binaries or build from source, with tips for Rust setup.
---

# Installing SQE (Core & IDLE) on Linux

SQE consists of two separate applications:

- **SQE Core** – the command-line engine
- **SQE IDLE** – the graphical interface / IDLE layer

:::note
Currently, SQE is available only for Linux devices.
:::

You can install SQE in one of two ways:

---

## Method 1: Download pre-built binaries

1. Download both `sqe-core` and `sqe-idle` from the [latest release](https://github.com/my8oss/SQE/releases/tag/v.0.0.2-alpha).  
   :::tip
   Always verify the SHA-256 checksums after downloading.
   :::

2. Move `sqe-core` to `/usr/local/bin/`:
   ```bash
   mv sqe-core /usr/local/bin/
   ```

3. Run `sqe-idle`:
   ```bash
   ./sqe-idle
   ```

---

## Method 2: Build from source

### Prerequisites

:::note
Make sure you have [Rust](https://www.rust-lang.org/) installed on your system before building.
:::

### Step 1: Clone the repository

```bash
git clone https://github.com/my8oss/sqe.git
cd sqe
```

### Step 2: Build both components

The repository contains two Rust projects:

- `q_generator` – the SQE Core engine
- `sqe_idle` – the GUI layer

Build them one at a time:

```bash
# Build sqe-core
cd q_generator
cargo build

# Build sqe-idle
cd ../sqe_idle
cargo build
```

:::tip
Add the `--release` flag (`cargo build --release`) for optimized performance.
:::

After a successful build, the executables will be located in:

- `target/debug/` (debug build)
- `target/release/` (release build)

### Step 3: Install SQE Core system-wide (optional)

To run `sqe-core` from anywhere, copy it to `/usr/local/bin/`:

```bash
sudo cp ./target/release/sqe-core /usr/local/bin/
```

`sqe-idle` expects `sqe-core` to be available in `/usr/local/bin/`, so this step is important if you plan to use the GUI.

### Step 4: Run SQE IDLE

```bash
./target/release/sqe-idle
```

You can now start creating surveys with SQE!