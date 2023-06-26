#!/bin/sh

set -xe

echo "USER: $(whoami)"
yarn workspace:set


echo "Command \"$@\""

$@
