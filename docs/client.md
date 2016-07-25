# Client Setup

## Setting up React Native

The idea is to write one code base for Android & iOS devices. Setup for both
platforms is similar and we'll try to walk you through both.

### Helpful links

* [Official Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)
* [Troubleshooting](http://facebook.github.io/react-native/docs/troubleshooting.html)
* [Installation & setup for Mac & iOS](https://github.com/checkraiser/beginning-react-native/blob/master/1.Installation_and_setup.md)

### Installation list

These are things you need to have to run code on either iOS or Android.

* react-native-cli
  * `npm install -g react-native-cli`

##### Android only

* Android Studio

##### iOS only

* XCode

##### Optional (for iOS or Android), but recommended  

* watchman (helpful for hot reloading)
  * installation will be specific to your computer's operating system

---

## Running our application

* run the emulator or connect a device to your computer
* run the (node) server
* run the react native packager server

### Android

Something to note, if you are developing for Android you will have to
manually set the authentication endpoints with the local IP address of your
computer.

##### Why do I need the local IP of my computer?

An Android emulator has its own IP address. So if the client code sees an
address with `localhost`, it will

##### How do I get my local IP address?

``` sh
ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p'
```

[Find your IP address on a Mac](http://www.wikihow.com/Find-Your-IP-Address-on-a-Mac)

Once you have this number, export it from the file:
`client/zestyreactnative/src/helpers/scaffolding.js`

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
