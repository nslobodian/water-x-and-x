# Title
Modular monolith

## Status

What is the status, such as proposed, , rejected, deprecated, superseded, etc.? \
*Accepted*

## Context

What is the issue that we're seeing that is motivating this decision or change?
Project possess multiple developers. We want to force same code style and test coverage before every commit and push to remove branch.

## Decision

What is the change that we're proposing and/or doing?
We have chosen husky library to run precommit scripts. Library were chosen since it's updating and maintaining on regular basis.

## Consequences

What becomes easier or more difficult to do because of this change?
