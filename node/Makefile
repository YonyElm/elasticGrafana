init:
	# Adding the NodeSource APT repository for Debian-based distributions repository AND the PGP key for verifying packages
	$ sudo curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
	
	# Install Node.js from the Debian-based distributions repository
	$ sudo apt-get install -y nodejs
	
	# Install NPM - Node.js package repo
	$ sudo npm install npm@latest -g
	
	# Generates framework basic tools
	$ sudo npm install express-generator -g
	
# Run inside develop environment to create it
basic_env:

	# create an app with pug templates
	$ express --view=pug .

	# Jade is deprecated pug is the new template module
	$ npm install pug

	# Enables getting arguments from user on running command: https://github.com/yargs/yargs
	$ npm install yargs
	
	# NodeJS server framework
	$ npm install express
	
	# Debug and assertion tools
	$ npm install assert

	# Debug and assertion tools
	$ npm install debug

	# Easy way to generate logs for debug
	$ npm install morgan
	
	# HTML body parser to add/get values
	$ npm install body-parser
	
	# Http errors handler
	$ npm install http-errors
	
	# Cookies and session handler
	$ npm install cookie-parser

	# Favicon handler
	$ npm install serve-favicon

	#---- project Specific ------------

	# CSV file parser + CSV=>JSON converter
	$ npm install csvtojson

	# Connecting to ElasticSearch DB
	$npm install elasticsearch

	$ npm install system-sleep

	# File uploading module
	$ sudo npm install multer

run:
	# Use "$ nohup npm start" in order to run server forever
	$ npm start
