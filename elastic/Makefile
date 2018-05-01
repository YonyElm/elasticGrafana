java:
	# OpenJDK, also contains JRE
	$ sudo apt-get install default-jdk -y

init:
	$ wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.2.4.deb
	$ wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.2.4.deb.sha512
	$ shasum -a 512 -c elasticsearch-6.2.4.deb.sha512
	$ sudo dpkg -i elasticsearch-6.2.4.deb

systemd:
	#Start the server
	$ sudo systemctl start elasticsearch.service
