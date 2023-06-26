FROM node:18

WORKDIR /code

ENTRYPOINT ["/code/entrypoint.sh"]

EXPOSE 3000