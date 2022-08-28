FROM node:lts-gallium
WORKDIR /apps
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]