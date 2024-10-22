---
head:
  - - meta
    - name: description
      content: "Backup remote databases with iobroker.backitup."
  - - meta
    - name: charset
      content: UTF‑8
  - - meta
    - name: robots
      content: "index, follow"
  - - meta
    - property: og:title
      content: "Official ioBroker Docker Image Docs - iobroker.backitup"
  - - meta
    - property: og:description
      content: "Documentation for the official ioBroker Docker image."
  - - meta
    - property: og:url
      content: "https://docs.buanet.de/iobroker-docker-image/docs/"
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

:arrow_backward: [back to "Official ioBroker Docker Image Docs - Backup"](readme.md#backup)

::: danger  Work In Progress
:warning:
This documentation is still work in progress. If you got any improvements simply let me know by opening an [issue](https://github.com/buanet/docs/issues) or [edit it](https://github.com/buanet/docs/blob/main/docs/projects/iobroker-docker-image/docs_backitup.md) by yourself and create a pull request. Thank you.
:::

# Backup remote databases with iobroker.backitup

By default, the options for backing up remote databases are grayed out in iobroker.backitup settings when running inside a Docker container. This is made because backing up remote databases is not working "out of the box". This guide will give some information about how to make the settings available and what needs to be done to get the backup working.

## Prerequisites

To run a backup of external databases the container must fulfill some prerequisites. In some cases the prerequisites depend on the cpu architecture your Docker container is running on. To find out which architecture your ioBroker Docker container is running on take a look at the container log on startup. You will find something like this: 

```
--------------------------------------------------------------------------------
-----                          System Information                          -----
-----                    arch:                x86_64                       -----
-----                    hostname:            iobroker                     -----
```

<br>

---

### Redis

::: warning Note
Restoring a remote redis database from iobroker.backitup ui is not supported! You have to restore the backup manually. For details see [iobroker.backitup docs](https://github.com/simatec/ioBroker.backitup/wiki/ioBroker.backitup-Wiki-English#redis-backup). 
:::

#### x86_64
- add `redis-tools`to PACKAGES environment variable to fulfill prerequisites 

#### aarch64

Sorry, no information available/ not tested yet!

#### armv7l

Sorry, no information available/ not tested yet!

<br>

---

### InfluxDB

The following is valid for all supported cpu architectures.<br>
You need to run ioBroker Image Version v8.1.0 or greater.

To fulfill the prerequisites for running an InfluxDB backup/ restore with ioBroker.backitup adapter you need to add the following packages to your containers environment variable `PACKAGES`:

...for InfluxDB v1.8 and older add `influxdb`

...for InfluxDB InfluxDB v2 and newer add `influxdb2-cli`

::: warning Note
It is not possible to install both packages together. So it is only possible to backup a InfluxDB v1.8 and older OR an InfluxDB v2 and newer.
:::

<br>

---

### MySQL

#### x86_64
- add `default-mysql-client` to PACKAGES environment variable to fulfill prerequisites 

#### aarch64

Sorry, no information available/ not tested yet!

#### armv7l

Sorry, no information available/ not tested yet!

<br>

---

### Postgres SQL

#### x86_64

Sorry, no information available/ not tested yet!

#### aarch64

Sorry, no information available/ not tested yet!

#### armv7l

Sorry, no information available/ not tested yet!

## Enable options in iobroker.backitup

To enable the greyed out checkboxes in iobroker.backitup settings you simply have to configure the environment variable `IOB_BACKITUP_EXTDB`and set it to `true`. For more information see [Environment variables (ENV)](/iobroker-docker-image/docs/#environment-variables-env).
<p>&nbsp</p>

---

#### :warning: Work In Progress :warning:

This documentation is still work in progress. If you got any improvements simply let me know by opening an [issue](https://github.com/buanet/docs/issues) or [edit it](https://github.com/buanet/docs/blob/main/docs/projects/iobroker-docker-image/docs_backitup.md) by yourself and create a pull request.

If you got any unanswered questions please join the ioBroker community on Discord, Telegram, Facebook or [ioBroker Forum](https://forum.iobroker.net).