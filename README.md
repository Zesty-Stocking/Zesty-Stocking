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

---

## Client Setup

### Setting up React Native

The idea is to write one code base for Android & iOS devices. Setup for both
platforms is similar and this guide will walk you through both.

#### Helpful links

* [Official Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)
* [Troubleshooting](http://facebook.github.io/react-native/docs/troubleshooting.html)
* [Installation & setup for Mac & iOS](https://github.com/checkraiser/beginning-react-native/blob/master/1.Installation_and_setup.md)

### Installation list

These are things you need to have to run code on either iOS or Android.

* react-native-cli
  * `npm install -g react-native-cli`

##### Install the project dependencies

```sh
# server side dependencies
npm install

# client side dependencies
cd client/zestyreactnative && npm install
```

##### Optional (for iOS or Android), but recommended  

* watchman (helpful for hot reloading)
  * installation will be specific to your computer's operating system

##### Android only

* Android Studio
* Gradle (optional, but can speed up build times)

##### iOS only

* XCode

---

## Running the application

It may be helpful to have one terminal tab open per process

1. run the (node) server from the root directory of this project
  * `npm start` if IOS only
  * `myLocalIP=123.45.678.90 npm start` if running Android
1. run the react native packager server from `client/zestyreactnative`
  * `react-native run-ios` AND/OR `react-native run-android`
1. run the client packager server from `client/zestyreactnative`
  * `npm start`
1. run the emulator or connect a device to your computer

### Android

*If you are not writing for Android, then skip down to the iOS section.*

Something to note, if you are developing for Android you will have to
manually set the authentication endpoints with the local IP address of your
computer.

##### Why do I need the local IP of my computer?

An Android emulator has its own IP address. So if the client code sees an
address with `localhost`, it will think to look for a port on its own device
instead of an endpoint on your local Node server. [Credit](http://stackoverflow.com/a/33978246/2908123)

##### How do I get my local IP address?

``` sh
ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p'
```

Or if you have a Mac, you can try this:

[Find your IP address on a Mac](http://www.wikihow.com/Find-Your-IP-Address-on-a-Mac)

##### OK, I have my IP. Now what?

Once you have this number, export it from the file:
`client/zestyreactnative/src/helpers/scaffolding.js`

```js
module.exports.myLocalIp = '123.45.678.90';
```

##### Back-end server

```sh
myLocalIp=123.45.678.90 npm start
```

##### Front-end client

```sh
cd client/zestyreactnative
react-native run-android
```

### iOS

##### Back-end server

```sh
npm start
```

##### Front-end client

```sh
cd client/zestyreactnative
react-native run-ios
```

---

## Production

To configure production on Heroku, follow [these instructions](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction). Don't forget to set the following environment variables using 'heroku config':

      GITHUB_CLIENT_ID
      GITHUB_CLIENT_SECRET
      JAWSDB_MARIA_URL (this one should be set automatically after you [provision a MariaDB database](https://devcenter.heroku.com/articles/jawsdb-maria) on Heroku)



To deploy to production, run

      $ git push heroku master
      $ heroku open
