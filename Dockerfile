FROM node:alpine
COPY ./ui /ui
WORKDIR /ui
RUN npm install
EXPOSE 4200
CMD ["npm", "start"]