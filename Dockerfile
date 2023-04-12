FROM httpd:2-alpine

WORKDIR /usr/local/apache2/htdocs

COPY index.html .
COPY admin.html .
COPY estimates.html .
COPY reviews.html .
COPY favicon.ico .
COPY jquery.cookie.js .
