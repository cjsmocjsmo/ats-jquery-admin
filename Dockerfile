FROM httpd:2-alpine
COPY js /usr/local/apache2/htdocs/
COPY admin.html /usr/local/apache2/htdocs/
COPY estimates.html /usr/local/apache2/htdocs/
COPY favicon.ico /usr/local/apache2/htdocs/
COPY index.html /usr/local/apache2/htdocs/
COPY reviews.html /usr/local/apache2/htdocs/