---
title: URPlans Documentation
description: URPlans is a Java CLI task planner using the Eisenhower Matrix, with persistence via Spring Data JPA and Hibernate. Insert, list, search, and delete tasks.
---


# URPlans Overview

# MADE BY MAIFOSS AND My8OSS

URPlans is a lightweight task‐planning core written in Java that is based on [Eisenhower Matrix](https://asana.com/resources/eisenhower-matrix) and is powered by [Spring Data JPA](https://spring.io/projects/spring-data-jpa), [Hibernate](https://hibernate.org/), and [Project Lombok](https://projectlombok.org/). You can run it as a standalone CLI tool to insert, list, show, delete, and search tasks backed by an H2 file‐based database.

Key features:

- Java 21 compatible, built with Maven
- Uses Eisenhower Matrix method
- Persistence via Spring Data JPA + Hibernate, defaulting to H2 file storage  
- CLI‐only runner reading non-option arguments (no web server by default)  
- Deployable as a standalone jar: `target/urplans-1.0-SNAPSHOT.jar`  
- Supports filtering by date, priority, paging, and full-text search  

Use URPlans to manage simple to-do items, recurring schedules, or integrate its core into larger Spring Boot apps.

| Document |
|----------|
| [Setup](./setup) |
| [Usage](./usage) |
| [Architecture](./architecture) |