# Setup base version
From node

# App location
WORKDIR ~/app

# Install required packages
RUN apt update
RUN apt install apt-utils -y
RUN apt install vim -y

# Fetch repository from git
RUN git init .
RUN git remote add origin https://github.com/techyE/elasticGrafana.git
RUN git fetch
RUN git checkout master

# Run required installations before launch
RUN npm install --prefix node

# Indicates that the app listens on port 3500 (attribute "run -P" will publish this port automatically)
EXPOSE 3500

# Create an environment variable inside docker
ENV ELASTIC_DB_HOST=localhost:9200

CMD npm start --prefix node