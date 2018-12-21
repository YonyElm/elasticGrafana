# Setup base version
From node

# App location
WORKDIR /node_app

# Install required packages
RUN apt update
RUN apt install apt-utils -y
RUN apt install vim -y

# Fetch repository from git
ADD . /node_app

# Run required installations before launch
RUN npm install

# Indicates that the app listens on port 3500 (attribute "run -P" will publish this port automatically)
EXPOSE 3500

# Create an environment variable inside docker
ENV ELASTIC_DB_HOST=localhost:9200

# Execution command on boot
CMD npm start