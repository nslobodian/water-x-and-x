# Project overview
This project was created to gather in one place best practices of JS Backend developing based of Nest.JS

## Solution concept
Inspiration of business logic is [Airbnb data](http://insideairbnb.com/get-the-data/). Population of DB and SQL schema are based on it.
Create property for rent with growing description properties
Verify landlord
Book place at the specific time
Signup with FB, gmail

// TODO: event storming process

## Business requirements
- Minimize operational complexity.
- Decrease cloud operational costs and adapt to seasonality.
- Increase speed and reliability of development workflow.
- Be able to search throw reviews and hosts
- We have tones of data which has to be imported and can be imported in the future

## Technical requirements
- Support ACID transactions
- Flexible API for customers (GraphQl)
- Adapt to workload speaks (K8S)
- Transactional Database (PostgreSQL)
- Self-managed text engine (Elastic Search)
- Decouple seasonality by adding queue (Pub/Sub)
- Minimize latency time by caching (Memorystore or Redis)
