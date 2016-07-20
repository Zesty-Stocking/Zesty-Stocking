# Zesty-Stocking

Install dependencies:

      $ npm install
      
Then [install MariaDB](https://mariadb.com/kb/en/mariadb/building-mariadb-on-mac-os-x-using-homebrew/)
  

Create the database:

      $ mysql -u root -p
      MariaDB [(none)]> create database zestydb;
      MariaDB [(none)]> use zestydb;
      MariaDB [(none)]> exit;



To start the local server and db ([MariaDB](https://mariadb.com/kb/en/mariadb/starting-and-stopping-mariadb/)), run 

      $ mysql.server start
      $ npm start

  