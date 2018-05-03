From node

WORKDIR ~/app

RUN apt update
RUN apt install apt-utils -y
RUN apt install vim -y

RUN git init .
RUN git remote add origin https://github.com/techyE/elasticGrafana.git
RUN git fetch
RUN git checkout develop
RUN npm install --prefix node

CMD npm start --prefix node