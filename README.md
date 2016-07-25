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


To configure production on Heroku, follow [these instructions](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction). Don't forget to set the following environment variables using 'heroku config':

      GITHUB_CLIENT_ID
      GITHUB_CLIENT_SECRET
      JAWSDB_MARIA_URL (this one should be set automatically after you [provision a MariaDB database](https://devcenter.heroku.com/articles/jawsdb-maria) on Heroku)



To deploy to production, run

      $ git push heroku master
      $ heroku open