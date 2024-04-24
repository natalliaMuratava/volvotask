FROM webdriverio/selenium-standalone:latest
WORKDIR /app
ADD . /app
RUN npm install
CMD npx wdio