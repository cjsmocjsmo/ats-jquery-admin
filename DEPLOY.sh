#!/bin/sh

# VERSION="ats-admin-jq-httpd:0.0.1";

# docker build -t $VERSION .;
# docker run -d -p 8080:80 $VERSION

##################################################

VERSION="us-central1-docker.pkg.dev/atsgo-340504/ats/ats-admin-jq364-httpd:0.0.3";

docker build -t $VERSION .;
docker push $VERSION