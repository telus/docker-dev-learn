FROM node:6-alpine

WORKDIR /app
COPY ./ /app/

EXPOSE 3000
ENTRYPOINT ["node"]
CMD ["server.js"]

