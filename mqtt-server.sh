#!/bin/sh

# MQTT server should be running @ localhost:1883

IFS=$'\n'
DATAFILE='example_truck_data_unprocessed.json'

while true
do
  while read -r line
  do
    printf "$line" | mosquitto_pub -h localhost -p 1883 -t test -s
    sleep 1
  done < $DATAFILE
done
