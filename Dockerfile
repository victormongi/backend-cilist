FROM node:16-bullseye-slim
WORKDIR /apps
COPY . .
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]