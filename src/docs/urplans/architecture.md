---
title: URPlans Architecture
description: Overview of the URPlans codebase; package structure and responsibilities of CLI, config, controller, repository, service, and entity classes.
---


# URPlans Architecture

Inside src/main/java/org/maifoss/urplans/, the project is organized into clear slices.

## cli/CliRunner.java

The ```cli/CliRunner.java``` class is responsible for orchestrating command‑line interactions. It reads non‑option arguments and maps them to task operations such as insert, list, search, and delete. This class parses and validates each flag and its accompanying arguments, and it prints concise results to the command line for the user.

## config/QuerydslConfig.java

The ```config/QuerydslConfig.java``` class provides the configuration needed for Querydsl, including beans such as ```JPAQueryFactory``` that enable type‑safe dynamic queries. It wires the ```EntityManager``` into the Querydsl factories and centralizes the query infrastructure so that it can be reused across repositories and services.

## controller/TaskController.java

The ```controller/TaskController.java``` class exposes task operations through HTTP endpoints when the application is running in web mode. It defines REST mappings for create, list, search, and delete operations, maps incoming request payloads to domain objects, validates the inputs, delegates the calls to ```TaskService```, and returns the results in JSON format.

## repo/TaskRepositoryCustom.java

The ```repo/TaskRepositoryCustom.java``` interface defines custom query operations that are not covered by the standard Spring Data JPA method names. It serves as the contract for implementing search APIs with filters for title, date, and priority, and it is typically paired with ```TaskRepositoryCustomImpl```, which uses Querydsl to build dynamic predicates.

## service/TaskService.java

The ```service/TaskService.java``` class acts as the business façade, coordinating validation, repository access, and transactional behavior. It is responsible for creating new tasks by parsing the ```"Title|Description|Date>FOREVER|PRIORITY"``` format, validating the date and priority, and persisting the entity. It can list all tasks or filter them by date, supports pagination for search results, and performs searches by combining optional filters such as title, date, and priority through the custom repository. It also handles deletions by removing a task based on its ID, ensuring the task exists before performing the operation.

## Task.java

The ```Task.java``` class is the JPA entity representing a task in the system. It defines the fields ```id```, ```title```, ```description```, ```dueDate```, and ```priority```, and maps them to the database table used for task storage.

## TaskRepository.java

The ```TaskRepository.java``` interface is a Spring Data JPA repository for ```Task```. It provides the standard CRUD operations such as create, read, update, and delete, without requiring explicit SQL or JPQL code.

## UrplansApplication.java

The ```UrplansApplication.java``` class is the Spring Boot application entry point. It contains the ```main``` method, which bootstraps the Spring context and launches the application in either CLI or web mode depending on configuration.