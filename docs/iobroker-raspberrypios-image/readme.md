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
---

# ioBroker Raspberry Pi OS Image

## Overview

This project was started in January 2021 in result of a growing number of outdated os images for single-board computers (SBC) on the [ioBroker Website](https://www.iobroker.net). The goal was to automate the whole build process of the images and always offer an up-to-date version.
Since then the latest image can always be found attached to the [latest release on Github](https://github.com/buanet/ioBroker.raspberry-os/releases). 

The ioBroker Raspberry Pi OS image is based on the official Raspberry Pi OS lite image, but it is optimized and pre configured for the use as an headless ioBroker smarthome server. So all you got to do is flashing the image to an sd card, putting the card back to you Raspberry Pi and plug it in. Your ioBroker will be ready to go in seconds. For more information how to start see the [ioBroker Raspberry Pi OS Image Docs](/iobroker-raspberrypios-image/docs/readme.md).

## What is ioBroker?

IoBroker is a open source IoT platform written in JavaScript that easily connects smarthome components from different manufactures. With the help of plugins (called: "adapters") ioBroker is able to communicate with a big variety of IoT hardware and services using different protocols and APIs.<br>
All data is stored in a central database that all adapters can access. With this it is very easy to build up logical connections, automation scripts and beautiful visualizations.<br>
For further details please check out [iobroker.net](https://www.iobroker.net).

## What is Raspberry Pi OS?

Raspberry Pi OS is an operating system based on Debian Linux for Raspberry Pi single-board computers. You can call it the "official" operating system for Raspberry Pis, distributed by the [Raspberry Pi Foundation](https://www.raspberrypi.org/).

## Docs

For more information see the [ioBroker Raspberry Pi OS Image Docs](/iobroker-raspberrypios-image/docs/readme.md).

* [Getting Started](/iobroker-raspberrypios-image/docs/readme.md#getting-started)
  * [Things you need](/iobroker-raspberrypios-image/docs/readme.md#things-you-need)
  * [Flash the image](/iobroker-raspberrypios-image/docs/readme.md#flash-the-image)
  * [Access ioBroker](/iobroker-raspberrypios-image/docs/readme.md#access-iobroker)
* [Default Image Settings](/iobroker-raspberrypios-image/docs/readme.md#default-image-settings)
  * [System](/iobroker-raspberrypios-image/docs/readme.md#system)
  * [Users](/iobroker-raspberrypios-image/docs/readme.md#users)
  * [Language and locales](/iobroker-raspberrypios-image/docs/readme.md#language-and-locales)