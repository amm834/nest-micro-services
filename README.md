# Nest JS Microservice

All of the services are communicating with each other using the TCP protocol.

## Services

- API Gateway
- Communication Service
- Analytics Service

## API Gateway

Send commands to the communication service and receive events from the analytics service.

## Communication Service

Receive commands from the API Gateway and send events to the analytics service.

## Analytics Service (Hybrid)

Receive events from the API Gateway and store them in the database.
