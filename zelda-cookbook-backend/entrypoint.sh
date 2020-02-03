#!/bin/sh
while ! nc db 5432; do sleep 1 
done
echo "Migrating data"
knex migrate:latest
echo "Seeding the tables"
knex seed:run 
echo "Starting service"
node server.js