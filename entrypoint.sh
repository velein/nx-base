#!/bin/sh

set -xe

echo "USER: $(whoami)"
npm run npm install

echo "Command \"$@\""

$@
