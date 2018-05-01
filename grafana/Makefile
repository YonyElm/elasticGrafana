init:
	# Installing Grafana according to Grafana website
	$ wget https://s3-us-west-2.amazonaws.com/grafana-releases/release/grafana_5.0.4_amd64.deb
	$ sudo apt-get install -y adduser libfontconfig
	$ sudo dpkg -i grafana_5.0.4_amd64.deb
	$ curl https://packagecloud.io/gpg.key | sudo apt-key add -
	$ sudo apt-get update
	$ sudo apt-get install grafana -y
	$ echo "add: deb https://packagecloud.io/grafana/stable/debian/ stretch main"
	$ echo "to: /etc/apt/sources.list"

start:
	$ sudo service grafana-server start


