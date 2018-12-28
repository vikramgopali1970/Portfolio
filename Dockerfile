#Install NodeJS
FROM node:10.8.0

#Working Directory
WORKDIR /usr/portfolio

#install dependencies
COPY package-lock.json .
COPY package.json .
RUN npm install

#copy the source code
COPY . .

#expose the port
EXPOSE 3000

#Run the code
CMD ["npm","start"]


