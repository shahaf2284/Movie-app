FROM node:20-alpine 
WORKDIR /app
COPY app/package.json .
COPY app/package-lock.json .
RUN npm install
COPY app/ .
ENV PORT=5001
EXPOSE 5001
CMD ["npm", "run", "dev"]
