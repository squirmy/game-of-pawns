#!/usr/bin/env bash

yarn install -s

if [ "$1" == "--html" ]
then
  yarn run www
else
  node -r esm src/app/index.js $@
fi
