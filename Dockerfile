FROM httpd:2-alpine
RUN \
    mkdir /usr/local/apache2/htdocs/js

COPY js/*.js /usr/local/apache2/htdocs/js/

WORKDIR /usr/local/apache2/htdocs

COPY admin.html .
COPY estimates.html .
COPY favicon.ico .
COPY index.html .
COPY reviews.html .
COPY admin.js .
COPY estimates.js .
COPY idx.js .
COPY initestimates.js .
COPY initidx.js .
COPY initreviews.js .
COPY jquery.cookie.js .