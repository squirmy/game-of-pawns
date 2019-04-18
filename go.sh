#!/usr/bin/env bash

yarn install -s

if [ "$1" == "--html" ]
then
  yarn run www
else
  node -r esm src/index.js $@
fi
