#!/usr/bin/env bash

yarn install -s
node -r esm src/index.js $@
