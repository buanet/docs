---
head:
  - - meta
    - name: description
      content: "Everything you need to know about the official ioBroker Docker image."
  - - meta
    - name: charset
      content: UTF‑8
  - - meta
    - name: robots
      content: "index, follow"
  - - meta
    - property: og:title
      content: "Official ioBroker Docker Image"
  - - meta
    - property: og:description
      content: "Everything you need to know about the official ioBroker Docker image."
  - - meta
    - property: og:url
      content: "https://docs.buanet.de/iobroker-docker-image/"
  - - meta
    - property: og:image
      content: "https://docs.buanet.de/images/opengraph/default.png"
  - - meta
    - property: og:type
      content: "article"
  - - meta
    - property: og:locale
      content: "en_US"
permalink: /iobroker-docker-image
---

<!---
When using comments plugin on this site, the permalink tag length can be max 27 (location.href max 50) 
-->

# ioBroker Docker Image

![ioBroker Logo](/images/iobroker_logo.png)

![Source](https://img.shields.io/badge/source-github-blue?style=flat) ![Release](https://img.shields.io/github/v/release/buanet/ioBroker.docker?style=flat)  ![Github Issues](https://img.shields.io/github/issues/buanet/ioBroker.docker?style=flat) ![Docker Pulls](https://img.shields.io/docker/pulls/buanet/iobroker?style=flat) ![Docker Stars](https://img.shields.io/docker/stars/buanet/iobroker?style=flat) ![Docker Image Size (tag)](https://img.shields.io/docker/image-size/buanet/iobroker/latest?style=flat) ![License](https://img.shields.io/github/license/buanet/ioBroker.docker?style=flat)

## Overview

I started this project in 2017 when I was looking for a clean and easy solution to run my ioBroker instance on my Synology DiskStation without virtualizing a whole operating system. Today this image is grown to the official Docker Image of ioBroker smarthome software.  

### What is ioBroker?

IoBroker is a open source IoT platform written in JavaScript that easily connects smarthome components from different manufactures. With the help of plugins (called: "adapters") ioBroker is able to communicate with a big variety of IoT hardware and services using different protocols and APIs.<br>
All data is stored in a central database that all adapters can access. With this it is very easy to build up logical connections, automation scripts and beautiful visualizations.<br>
For further details please check out [iobroker.net](https://www.iobroker.net).

### What is Docker?

Docker is an open source containerization platform that makes it easy to build, deploy and share applications in small containers. "Containerization" or "container virtualization" is the next step in virtualization technologies. While typical virtual machines use virtualized hardware to run a complete operating system, containers just include the absolute minimum of dependencies a software needs to run and directly share the kernel of the host system. Compared to virtual machines that saves a lot resources.
Containers also act as little sandboxes which adds an additional security layer and makes it easy to move them from one host to another.
For more information please check out the officials [Docker Docs](https://docs.docker.com) or take a small youtube break. There are tons of videos explaining what Docker is and how it works.

## Docs

The very basic information about how to run the ioBroker Docker image can be found at the Docker Hub page. For further, more detailed instructions you should check out the official docs with the following content: 

* [Getting Started](/projects/iobroker-docker-image/docs.md#getting-started)
  * [Running from command-line](/projects/iobroker-docker-image/docs.md#running-from-command-line)
  * [Running with docker-compose](/projects/iobroker-docker-image/docs.md#running-with-docker-compose)
* [Persistent data](/projects/iobroker-docker-image/docs.md#persistent-data)
* [Environment variables](/projects/iobroker-docker-image/docs.md#environment-variables)
* [Networks](/projects/iobroker-docker-image/docs.md#networks)
* [Advanced configuration](/projects/iobroker-docker-image/docs.md#advanced-configuration)
  * [Mounting USB devices](/projects/iobroker-docker-image/docs.md#mounting-usb-devices)
  * [Startup scripts](/projects/iobroker-docker-image/docs.md#startup-scripts)
  * [Multihost](/projects/iobroker-docker-image/docs.md#multihost)
* [Maintenance](/projects/iobroker-docker-image/docs.md#maintenance)
  * [Backup & Restore](/projects/iobroker-docker-image/docs.md#backup-restore)
  * [Updates & Upgrades](/projects/iobroker-docker-image/docs.md#updates-upgrades)
* [Best practices](/projects/iobroker-docker-image/docs.md#best-practices)
  * [Use maintenance script (beta)](/projects/iobroker-docker-image/docs.md#use-maintenance-script-beta)
  * [Migrating states to redis](/projects/iobroker-docker-image/docs.md#migrating-states-to-redis)
* [Miscellaneous](/projects/iobroker-docker-image/docs.md#miscellaneous)
  * [Beta testing](/projects/iobroker-docker-image/docs.md#beta-testing)
  * [Notes for developers](/projects/iobroker-docker-image/docs.md#notes-for-developers)

## Tutorials

While the docs are kept general I made some Tutorials you can follow step-by-step to successfully set up your container. 

Links Coming soon!

## Support the project

The easiest way to support this project is to leave me some likes/ stars on Github and Docker Hub!<br>
If you want to give something back, feel free to take a look into the [open issues](https://github.com/buanet/ioBroker.docker/issues) or the [ioBroker forum thread](http://forum.iobroker.net/viewtopic.php?f=17&t=5089) and helping me answering questions, fixing bugs or adding new features!<br>
If you want to buy me a beer instead, you can do this here: <a href="https://www.paypal.me/buanet" target="_blank"><img src="https://buanet.de/wp-content/uploads/2017/08/pp128.png" height="20" width="20"></a><br>
Thank you!
