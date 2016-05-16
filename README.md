# Evothings Studio Documentation

This repository contains the documentation files for Evothings Studio.

## Documentation web site

This version of the documentation is available for browsing online at the [Evothings 2.1 documentation web site](https://evothings.com/2.1/doc/).

## Build of generated documentation

JSDoc is used to build documentation for JavaScript libraries. Here are instructions for how to build if you want to do this yourself.

Library source files used are found in repository [evothings-libraries](https://github.com/evothings/evothings-libraries) and [cordova-ble](https://github.com/evothings/cordova-ble).

The 'evothings-libraries' and the 'cordova-ble' repos must be cloned as siblings to this repo for the build script to work. Like this:

    parent-folder
        evothings-doc
        evothings-libraries
        cordova-ble

Build using npm (Node Package Manager):

    npm install
    npm start

The output folder that contains the generated documentation is:

    lib-doc/

This folder is under version control for convince.

## Get started quickly with mobile apps for IoT

[Download Evothings Studio](https://evothings.com/download/) and get up and running in minutes!
