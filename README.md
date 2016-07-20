# Zesty-Stocking

Install dependencies:

      $ npm install
      
Then [install MariaDB](https://mariadb.com/kb/en/mariadb/building-mariadb-on-mac-os-x-using-homebrew/). When installing, set both your username and your password to 'root'
  

Start up mysql server and then create the database:

      $ mysql.server start
      $ mysql -u root -p
      MariaDB [(none)]> create database zestydb;
      MariaDB [(none)]> use zestydb;
      MariaDB [(none)]> exit;



To start the local server, first start the mysql server (if not already running) and then run

      $ npm start

  