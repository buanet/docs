---
head:
  - - meta
    - name: description
      content: "Everything you need to know about the official ioBroker Raspberry Pi OS image."
  - - meta
    - name: charset
      content: UTF‑8
  - - meta
    - name: robots
      content: "index, follow"
  - - meta
    - property: og:title
      content: "Official ioBroker Raspberry Pi OS Image"
  - - meta
    - property: og:description
      content: "Everything you need to know about the official ioBroker Raspberry Pi OS image."
  - - meta
    - property: og:url
      content: "https://docs.buanet.de/iobroker-raspberrypios/"
  - - meta
    - property: og:image
      content: "https://docs.buanet.de/images/opengraph/default.png"
  - - meta
    - property: og:type
      content: "article"
  - - meta
    - property: og:locale
      content: "en_US"
permalink: /iobroker-raspberrypios
---

<!---
When using comments plugin on this site, the permalink tag length can be max 27 (location.href max 50) 
-->

# ioBroker Raspberry Pi OS Image

## Overview

This project was started in January 2021 in result of a growing number of outdated os images for single-board computers (SBC) on the [ioBroker Website](https://www.iobroker.net). The goal was to automate the whole build process of the images and always offer an up-to-date version.
Since then the latest image can always be found attached to the [latest release on Github](https://github.com/buanet/ioBroker.raspberry-os/releases). 

The ioBroker Raspberry Pi OS image is based on the official Raspberry Pi OS lite image, but it is optimized and pre configured for the use as an headless ioBroker smarthome server. So all you got to do is flashing the image to an sd card, putting the card back to you Raspberry Pi and plug it in. Your ioBroker will be ready to go in seconds. For more information how to start see the [ioBroker Raspberry Pi OS Image Docs](/projects/iobroker-raspberrypios-image/docs.md).

## What is ioBroker?

IoBroker is a open source IoT platform written in JavaScript that easily connects smarthome components from different manufactures. With the help of plugins (called: "adapters") ioBroker is able to communicate with a big variety of IoT hardware and services using different protocols and APIs.<br>
All data is stored in a central database that all adapters can access. With this it is very easy to build up logical connections, automation scripts and beautiful visualizations.<br>
For further details please check out [iobroker.net](https://www.iobroker.net).

## What is Raspberry Pi OS?

Raspberry Pi OS is an operating system based on Debian Linux for Raspberry Pi single-board computers. You can call it the "official" operating system for Raspberry Pis, distributed by the [Raspberry Pi Foundation](https://www.raspberrypi.org/).

## Docs

For more information see the [ioBroker Raspberry Pi OS Image Docs](/projects/iobroker-raspberrypios-image/docs.md).

* [Getting Started](/projects/iobroker-raspberrypios-image/docs.md#getting-started)
  * [Things you need](/projects/iobroker-raspberrypios-image/docs.md#things-you-need)
  * [Flash the image](/projects/iobroker-raspberrypios-image/docs.md#flash-the-image)
  * [Access ioBroker](/projects/iobroker-raspberrypios-image/docs.md#access-iobroker)
* [Default Image Settings](/projects/iobroker-raspberrypios-image/docs.md#default-image-settings)
  * [System](/projects/iobroker-raspberrypios-image/docs.md#system)
  * [Users](/projects/iobroker-raspberrypios-image/docs.md#users)
  * [Language and locales](/projects/iobroker-raspberrypios-image/docs.md#language-and-locales)