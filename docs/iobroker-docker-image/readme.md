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
---

# ioBroker Docker Image

![ioBroker Logo](/images/iobroker_logo.png)

[![Release](https://img.shields.io/github/v/release/buanet/ioBroker.docker?style=flat)](https://github.com/buanet/ioBroker.docker/releases)
[![Pre-Release)](https://img.shields.io/github/v/tag/buanet/ioBroker.docker?include_prereleases&label=pre-release)](https://github.com/buanet/ioBroker.docker/releases)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/buanet/ioBroker.docker/build-debian12-latest_sep.yml?branch=main)](https://github.com/buanet/ioBroker.docker/actions/workflows/build-debian12-latest_sep.yml)
[![Github Issues](https://img.shields.io/github/issues/buanet/ioBroker.docker?style=flat)](https://github.com/buanet/ioBroker.docker/issues)
[![Github Pull Requests](https://img.shields.io/github/issues-pr/buanet/ioBroker.docker?style=flat)](https://github.com/buanet/ioBroker.docker/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/buanet/ioBroker.docker)](https://github.com/buanet/ioBroker.docker/discussions)<br>
[![Arch](https://img.shields.io/badge/arch-amd64%20%7C%20arm64v8-blue)](https://hub.docker.com/repository/docker/buanet/iobroker)
[![Docker Image Size (tag)](https://img.shields.io/docker/image-size/buanet/iobroker/latest?style=flat)](https://hub.docker.com/repository/docker/buanet/iobroker)
[![Docker Pulls](https://img.shields.io/docker/pulls/buanet/iobroker?style=flat)](https://hub.docker.com/repository/docker/buanet/iobroker)
[![Docker Stars](https://img.shields.io/docker/stars/buanet/iobroker?style=flat)](https://hub.docker.com/repository/docker/buanet/iobroker)<br>
[![Source](https://img.shields.io/badge/source-github-blue?style=flat)](https://github.com/buanet/ioBroker.docker)
[![GitHub forks](https://img.shields.io/github/forks/buanet/ioBroker.docker)](https://github.com/buanet/ioBroker.docker/network)
[![GitHub stars](https://img.shields.io/github/stars/buanet/ioBroker.docker)](https://github.com/buanet/ioBroker.docker/stargazers)
[![License](https://img.shields.io/github/license/buanet/ioBroker.docker?style=flat)](https://github.com/buanet/ioBroker.docker/blob/master/LICENSE.md)
[![Donate](https://img.shields.io/badge/donate-paypal-blue?style=flat)](https://paypal.me/buanet)

## Overview

I started this project in 2017 when I was looking for a clean and easy solution to run my ioBroker instance on my Synology DiskStation without virtualizing a whole operating system. Today this image is grown to the official Docker Image of ioBroker smarthome software.  

### What is ioBroker?

IoBroker is a open source IoT platform written in JavaScript that easily connects smarthome components from different manufactures. With the help of plugins (called: "adapters") ioBroker is able to communicate with a big variety of IoT hardware and services using different protocols and APIs.<br>
All data is stored in a central database that all adapters can access. With this it is very easy to build up logical connections, automation scripts and beautiful visualizations.<br>
For further details please check out [iobroker.net](https://www.iobroker.net).

### What is Docker?

Docker is an open source containerization platform that makes it easy to build, deploy and share applications in small containers. "Containerization" or "container virtualization" is the next step in virtualization technologies. While typical virtual machines use virtualized hardware to run a complete operating system, containers just include the absolute minimum of dependencies a software needs to run and directly share the kernel of the host system. Compared to virtual machines container virtualization lets you save a lot resources.<br>
Containers also act as little sandboxes which adds an additional security layer and makes it easy to move them from one host to another.<br>
For more information please check out the officials [Docker Docs](https://docs.docker.com) or take a small YouTube session. There are tons of videos explaining what Docker is and how it works.

## Docs

The very basic information about how to run the ioBroker Docker image can be found at the [Docker Hub page](https://hub.docker.com/r/buanet/iobroker). For further, more detailed instructions you should check out the official docs with the following content: 

* [Getting Started](/iobroker-docker-image/docs/readme.md#getting-started)
  * [Running from command-line](/iobroker-docker-image/docs/readme.md#running-from-command-line)
  * [Running with docker-compose](/iobroker-docker-image/docs/readme.md#running-with-docker-compose)
* [Persistent data](/iobroker-docker-image/docs/readme.md#persistent-data)
* [Environment variables (ENV)](/iobroker-docker-image/docs/readme.md#environment-variables-env)
* [Networks](/iobroker-docker-image/docs/readme.md#networks)
* [Advanced configuration](/iobroker-docker-image/docs/readme.md#advanced-configuration)
  * [Mounting USB devices](/iobroker-docker-image/docs/readme.md#mounting-usb-devices)
  * [Startup scripts](/iobroker-docker-image/docs/readme.md#startup-scripts)
  * [Multihost](/iobroker-docker-image/docs/readme.md#multihost)
  * [Redis](/iobroker-docker-image/docs/readme.md#redis)
* [Maintenance](/iobroker-docker-image/docs/readme.md#maintenance)
  * [Backup](/iobroker-docker-image/docs/readme.md#backup)
  * [Restore](/iobroker-docker-image/docs/readme.md#restore)
  * [Updates & Upgrades](/iobroker-docker-image/docs/readme.md#updates-upgrades)
  * [Docker Health Check](/iobroker-docker-image/docs/readme.md#docker-health-check)
* [Best practice](/iobroker-docker-image/docs/readme.md#best-practice)
  * [Avoid using latest tag](/iobroker-docker-image/docs/readme.md#avoid-using-latest-tag)
  * [Use maintenance script](/iobroker-docker-image/docs/readme.md#use-maintenance-script)
  * [Migrating to redis](/iobroker-docker-image/docs/readme.md#migrating-to-redis)
* [Miscellaneous](/iobroker-docker-image/docs/readme.md#miscellaneous)
  * [Beta testing](/iobroker-docker-image/docs/readme.md#beta-testing)
  * [Notes for developers](/iobroker-docker-image/docs/readme.md#notes-for-developers)

<!--
## Tutorials

While the docs are kept general I made some Tutorials you can follow step-by-step to successfully set up your container. 

Links Coming soon!
-->

## Support the project

The easiest way to support this project is to leave me some likes/ stars on Github and Docker Hub!<br>
If you want to give something back, feel free to take a look into the [open issues](https://github.com/buanet/ioBroker.docker/issues) or the [ioBroker forum thread](http://forum.iobroker.net/viewtopic.php?f=17&t=5089) and helping me answering questions, fixing bugs or adding new features!<br>
If you want to buy me a pizza instead, you can do this here: <a href="https://www.paypal.me/buanet" target="_blank"><img src="/images/pp128.png" height="20" width="20"></a><br>
Thank you!
