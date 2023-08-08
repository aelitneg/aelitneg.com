#!/bin/bash

bash +o history
mc alias set minio http://minio:9000 $MINIO_ROOT_USER $MINIO_ROOT_PASSWORD
bash -o history

mc mb minio/strapi
mc anonymous set download minio/strapi
