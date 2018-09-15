#!/usr/bin/env bash

docker build . --tag dmfi
docker run -it --rm -p 3000:3000 --name dmfi dmfi
