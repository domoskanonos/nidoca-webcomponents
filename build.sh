#!/bin/sh
echo "build nidoca"
git clone https://github.com/domoskanonos/nidoca.git /nidoca
cd /nidoca
npm install
npm run build_ts
npm run build
rm -r /nidoca