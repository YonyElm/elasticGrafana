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
RUN git pull

# Run required installations before launch
RUN npm install --prefix node

# Indicates that the app listens on port 3500 (attribute "run -P" will publish this port automatically)
EXPOSE 3500

# Execution command on boot
CMD npm start --prefix node