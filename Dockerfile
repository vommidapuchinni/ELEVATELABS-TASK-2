FROM node:18
WORKDIR /app
COPY app.js .
EXPOSE 6000
CMD ["node", "app.js"]

