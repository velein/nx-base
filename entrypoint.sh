#!/bin/sh

set -xe

echo "USER: $(whoami)"
npm run workspace:set


echo "Command \"$@\""

$@
