#!/usr/bin/env bash
SCRIPT_DIR=$(dirname "$0")

cd $SCRIPT_DIR
sudo sysctl -w vm.max_map_count=262144
sudo docker-compose up