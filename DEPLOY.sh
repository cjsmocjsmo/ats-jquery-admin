#!/bin/sh

# VERSION="ats-admin-jq-httpd:0.0.1";

# docker build -t $VERSION .;
# docker run -d -p 8080:80 $VERSION

##################################################

VERSION="gcr.io/atsgo-340504/ats-admin-jq364-httpd:0.0.1";

docker build -t $VERSION .;
docker push $VERSION