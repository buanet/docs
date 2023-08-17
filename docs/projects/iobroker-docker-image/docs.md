---
head:
  - - meta
    - name: description
      content: "Documentation for the official ioBroker Docker image."
  - - meta
    - name: charset
      content: UTF‑8
  - - meta
    - name: robots
      content: "index, follow"
  - - meta
    - property: og:title
      content: "Official ioBroker Docker Image Docs"
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
permalink: /iobroker-docker-image/docs
---

# ioBroker Docker Image Docs

This is the official documentation for the ioBroker Docker image. It covers everything you need to set up and configure a ioBroker Docker container.

If you got questions on how to configure your ioBroker and its adapters please refer to the [Official ioBroker Docs](https://www.iobroker.net/#en/documentation). 

## Getting Started

For discussion and support please visit [ioBroker forum thread](http://forum.iobroker.net/viewtopic.php?f=17&t=5089) or join the ioBroker Community on [Discord](https://discord.gg/kN7nhx6C), or [Facebook](https://www.facebook.com/groups/440499112958264).

Please do not contact me directly for any support-reasons. Every support question should be answered in a public place so all users can benefit from it . Thanks in advance.

If you think you found a bug or simply want to request a new feature please open an [issue](https://github.com/buanet/ioBroker.docker/issues) on Github so we can talk about.

The following ways to set up an ioBroker container are only examples and may vary from platform to platform. Maybe you have to change, add or replace parameters to configure ioBroker for fitting your needs.

### Running from command-line

For taking a first look at the iobroker docker container it would be enough to simply run the following basic docker run command:

```sh
docker run -p 8081:8081 --name iobroker -v iobrokerdata:/opt/iobroker buanet/iobroker:latest
```

::: tip Pro Tip
It is always a good choice to avoid using the "latest" tag for production. For more details see ["Best practice"](/iobroker-docker-image/docs/#best-practice).
:::

### Running with docker-compose

You can also run iobroker by using docker-compose. Here is an example:

```yml
version: '2'
services:
  iobroker:
    restart: always
    image: buanet/iobroker:latest
    container_name: iobroker
    hostname: iobroker
    ports:
      - "8081:8081"
    volumes:
      - iobrokerdata:/opt/iobroker
```

::: tip Pro Tip
It is always a good choice to avoid using the "latest" tag for production. For more details see ["Best practice"](/iobroker-docker-image/docs/#best-practice).
:::

## Persistent data

All configuration data of ioBroker is stored in `/opt/iobroker`. To make this data persistent it is recommended to mount an (empty) folder or Docker volume to `/opt/iobroker` during first startup of your container. Since ioBroker Docker image v8.0.0 Docker will create a default volume when you do not mount any folder or volume to `/opt/iobroker`. 

::: warning Note
If you use a shared storage oder external device mounted to your Docker host to store the iobroker folder make sure the mount point on your host does NOT have the `noexec` flag activated. Otherwise you will get problems executing ioBroker inside the container! For mor details please take a look at the corresponding [Github issues](https://github.com/buanet/ioBroker.docker/issues?q=is%3Aissue+noexec).
:::

## Environment variables (ENV)

To configure your ioBroker container as you need, it is possible to set some ENVironment variables. Please only set variables you really need.<br>Variables you do not set and are marked as "Set by default = yes" in the following table, will be automatically set using their default values when your run a new container. 

|ENV|Set by<br>default|Default<br>Value|Description|
|---|---|---|---|
|AVAHI|no|false|Activates avahi-daemon for supporting yahka-adapter, can be `true` or `false`|
|DEBUG|no|false|Activates extended log output for your container, can be `true` or `false`<br>(!!! Only set if you really need !!!)|
|IOB_ADMINPORT|no|8081|Sets ioBroker adminport on startup, must be a number|
|IOB_BACKITUP_EXTDB|no|false|Activates backing up external databases in ioBroker backitup adapter, can be `true` or `false` (!!! Make sure your have read [this](#backup) !!!)|
|IOB_MULTIHOST|no|none|Sets ioBroker instance as `master` or `slave` for multihost support|
|IOB_OBJECTSDB_TYPE|no|jsonl|Sets type of ioBroker objects db, could be `jsonl`, `file` (deprecated) or `redis`|
|IOB_OBJECTSDB_HOST|no|127.0.0.1|Sets host(s) for ioBroker objects db, can be a comma separated list when using Redis Sentinel|
|IOB_OBJECTSDB_PORT|no|9001|Sets port(s) for ioBroker objects db, can be a comma separated list when using Redis Sentinel|
|IOB_OBJECTSDB_PASS|no|none|Sets (optional) password for ioBroker objects db in Redis|
|IOB_OBJECTSDB_NAME|no|mymaster|Sets name of Redis Sentinel master|
|IOB_STATESDB_TYPE|no|jsonl|Sets type of ioBroker states db, could be `jsonl`, `file` (deprecated) or `redis`|
|IOB_STATESDB_HOST|no|127.0.0.1|Sets host(s) for ioBroker states db, can be a comma separated list when using Redis Sentinel|
|IOB_STATESDB_PORT|no|9000|Sets port(s) for ioBroker states db, can be a comma separated list when using Redis Sentinel|
|IOB_STATESDB_PASS|no|none|Sets (optional) password for ioBroker states db in Redis|
|IOB_STATESDB_NAME|no|mymaster|Sets name of Redis Sentinel master|
|LANG|yes|de_DE.UTF&#x2011;8|The following locales are pre-generated: de_DE.UTF-8, en_US.UTF-8|
|LANGUAGE|yes|de_DE:de|The following locales are pre-generated: de_DE:de, en_US:en|
|LC_ALL|yes|de_DE.UTF-8|The following locales are pre-generated: de_DE.UTF-8, en_US.UTF-8|
|PACKAGES|no|none|Installs additional linux packages to your container, packages should be seperated by whitespace like this: `package1 package2 package3`|
|PERMISSION_CHECK|no|true|Checks and corrects all relevant permissions on container startup, can be `true` or `false` (!!! Use at your own risk !!!)|
|SETGID|yes|1000|For some reasons it might be useful to specify the gid of the containers iobroker user to match an existing group on the docker host|
|SETUID|yes|1000|For some reasons it might be useful to specify the uid of the containers iobroker user to match an existing user on the docker host|
|TZ|yes|Europe/Berlin|Sets the containers timezone, all valid Linux-timezones are possible|
|USBDEVICES|no|none|Sets relevant permissions on mounted devices like `/dev/ttyACM0`, for more than one device separate with `;` like this: `/dev/ttyACM0;/dev/ttyACM1`|
|ZWAVE|no|false|Installs openzwave to support zwave-adapter, can be `true` or `false`|

## Networks

The [examples](#running-from-command-line) above have no specific networking configuration. In this case Docker is using its default bridge network. In general there are [some reasons](https://docs.docker.com/network/bridge/#differences-between-user-defined-bridges-and-the-default-bridge) why it might be a better choice to use a user-defined bridge network. 

Running ioBroker with a Docker bridge network works fine with most of the ioBroker adapters (make sure to map all ports your adapters need!), and may be perfect for taking a first look into ioBroker. But some ioBroker adapters are using techniques like [Multicast](https://en.wikipedia.org/wiki/Multicast) or [Broadcast](https://en.wikipedia.org/wiki/Broadcasting_(networking)) for automatic detection of IoT devices and other features. In this case it may be useful to switch your network to [host](https://docs.docker.com/network/host/) or [MACVLAN](https://docs.docker.com/network/macvlan/). 

For more information about networking with Docker please refer to the [official Docker docs](https://docs.docker.com/network/). 

## Advanced configuration

### Mounting USB devices

If you want to use an USB device within ioBroker inside your container don´t forget to [mount the device](https://docs.docker.com/engine/reference/commandline/run/#add-host-device-to-container---device) on container startup AND use the [ENV](#environment-variables-env) `USBDEVICES` to give ioBroker access to it.

::: warning Note
This is an AND condition. You have to do both. Just setting the [ENV](#environment-variables-env) `USBDEVICES` will not work.
:::

### Startup scripts

It is possible to add some script code to container startup with the help of the userscripts feature. You can get this to work by mounting an additional folder or volume to `/opt/userscripts`.

When you mount an empty folder the startup script will restore two example scripts in there. To activate the scripts you have to remove the `_example` part of the filename. The `userscript_firststart.sh` will execute only at the very first start of a new container, while the `userscript_everystart.sh` will execute on every container start.

Feel free to test it with my example code. Take a look at the log. In `Step 4 of 5: Applying special settings` you will see the messages generated by the example userscripts.

### Multihost 

With the help of [ENV](#environment-variables-env) `IOB_MULTIHOST` and the [ENVs](#environment-variables-env) for objects and states db connections it is possible to run a container as standalone (default), multihost `master` or multihost `slave`. This is more or less a feature for advanced users. Please make sure you know how ioBroker multihost is working and what `ìobroker setup custom` does.

Further there is no need for executing `iobroker multihost enable` or `iobroker multihost connect` inside the container. Just configure the mentioned [ENVs](#environment-variables-env). The startup script will do all the magic.

For general information about iobroker multihost feature please see [Official ioBroker Docs](https://www.iobroker.net/docu/index-24.htm?page_id=3068&lang=de).

### Redis

In ioBroker Docker Image v8.0.0 the implementation of using Redis as objects and/ or states db was completely rebuild. In general the configuration is still done by setting the [ENVs](#environment-variables-env) for db `TYPE`, `HOST` and `PORT`. But there are some more Features available now.

For some basic information about using Redis with ioBroker please see this [ioBroker Forum Post by apollon77](https://forum.iobroker.net/topic/26327/redis-in-iobroker-%C3%BCberblick).

#### Authentification

With the [ENVs](#environment-variables-env) `IOB_OBJECTSDB_PASS`and `IOB_STATESDB_PASS` it is possible to use a password authentication when connecting to a Redis db. To make this work authentication must be also enabled in `redis.conf`.  

#### Redis Sentinel Cluster

It is now also possible to use a Redis Sentinel cluster as objects/ states db in ioBroker. This feature will be automatically configured when you set a comma separated list of `IOB_OBJECTSDB_HOST`and/or `IOB_STATESDB_HOST`. If you want to use different ports for your Redis Sentinel nodes, you are also able so use a comma separated list in `IOB_OBJECTSDB_PORT`and/or `IOB_STATESDB_PORT`.<br>
The use of [ENVs](#environment-variables-env) for `IOB_OBJECTSDB_NAME` and `IOB_STATESDB_NAME` is optional. If nothing is set, ioBroker will use the Redis default `mymaster` as name for Redis Sentinel master db. 

## Maintenance

### Backup

The easiest way to backup your ioBroker config is to use the builtin [`iobroker backup` command](https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup) or the [iobroker.backitup adapter](https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md).

Another option is to simply tar or copy the whole directory you mounted into your ioBroker container on the Docker host. Make sure ioBroker container is stopped when backing up the directory.

::: warning Note
When copying the ioBroker directory, always take care of preserving the correct permissions.
:::

#### Backup remote databases with iobroker.backitup in Docker

There are some limitations in backing up remote databases (Redis, InfluxDB, PostgresSQL, MySQL) with iobroker.backitup adapter when running inside a Docker container.
[This small guide](docs_backitup.md) will help you to understand why options are grayed out by default and how to change it. 

### Restore

Restoring your Data can be done by using the builtin [`iobroker restore` command](https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup) or the [iobroker.backitup adapter](https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md) as described at the [Official ioBroker Docs](https://www.iobroker.net/#en/documentation).  

### Updates & Upgrades

::: danger WARNING
Be sure to have a valid backup of your ioBroker installation before applying any updates! 
:::

#### Linux system (package) updates 

These updates are usually coming through the systems package manager. In case of the ioBroker Docker container it is `apt`. So you will be able to install these updates using the command line of your container.

But the easiest way is always pulling the newest image and/ or simply recreate your container.

#### ioBroker Adapter updates

You will be notified about available adapter updates in the ioBroker admin interface. You can find an option to install it there too. See [Official ioBroker Docs](https://www.iobroker.net/#en/documentation) for details.

#### ioBroker js-controller (core) updates

You will be notified about js-controller updates in the ioBroker admin interface. As ioBroker has to be stopped to apply these updates it is not able to install it from the admin interface. You have to do it manually on the containers command line.
```sh
pkill -u iobroker
iobroker update
iobroker upgrade self
```
After this you have to restart your container.

::: tip Pro Tip
To easily apply js-controller updates you can also use the built in maintenance script. This is recommended if you have some kind of watchdog monitoring your containers health status. For more details on how to use the script see [Best practice](/iobroker-docker-image/docs/#best-practice).
:::

#### Upgrades

When bringing your ioBroker to an new major version of the ioBroker Docker Image (e.g. from v7.x.x to v8.x.x) you are going to perform an upgrade. While updates should normally have no impact to the function of your ioBroker, upgrades might include some "breaking changes" and the need of performing some additional steps.<br>
So if you are planning to upgrade your Docker Container to a new major version make sure you checked the [release notes](https://github.com/buanet/ioBroker.docker/releases/latest) of the latest release first.

::: danger WARNING
Make sure to have a valid backup of your ioBroker installation and your js-controller is up to date before performing an upgrade! 
:::

In general it is possible to upgrade to a new major version of the ioBroker Docker image by simply recreating your container from the new ioBroker Docker image as you do it in the normal update process.
In most cases the js-controller will detect the new node version and tries to fix adapters which having problems with the change. But in some rare cases the "recompiling" will fail and you got some additional steps to do like rebuilding or simply reinstalling the adapter.
In case you have a valid backup, you should simply give it a try. 

In case the above don't work, or you simply want to void the described problems it is always a smooth option to use the backup and restore procedure whenever switching an existing ioBroker Docker installation to a new major version of the ioBroker Docker image.

So your upgrade might be done like this, for example:
1. Create a new ioBroker Backup
2. Create a new and empty folder for your ioBroker data    
3. Copy the latest backup file from the old ioBroker data folder to the new one
4. Stop and delete your old container
5. Create a new ioBroker Docker container from the latest ioBroker image with the same config, but mount the new ioBroker data folder
6. Take a look at the container logs while the container is starting
7. Restore the backup file from command line or with the help of iobroker.backitup adapter
8. Watch progress of reinstalling your adapters at the iobroker log

### Docker Healthcheck

Since v5.1.0 the image contains a Docker healthcheck. It simply checks if js-controller is running inside the container and reports the container as `healthy` or `unhealthy` to the Docker daemon.

The healthcheck itself is configured to 5 retries in an 15s interval with a timeout of 5s. So a container needs a minimum of one minute to get unhealthy after the js-controller was killed.

::: tip Pro Tip
As the Docker daemon itself gives no opportunity to automatically restart an unhealthy container you might want to setup some kind of "watchdog container". Check out [this one](https://github.com/buanet/docker-watchdog) I build some time ago.
:::

## Best practice

### Avoid using latest tag

The Docker tag `latest` (buanet/iobroker:latest) will always pull the latest available version of the ioBroker Docker image. This might cause some trouble when it switches to a new major version of the Docker image and performing an [upgrade](#updates-upgrades) of your ioBroker.
To avoid this you always should use a single version tag (e.g. buanet/iobroker:v7.2.0) or the major versions latest tag (e.g. buanet/iobroker:latest-v7) when creating an ioBroker Docker container for production.

### Use maintenance script

The ioBrocker Docker image includes a small maintenance script which helps you to manage your ioBroker Docker container. For example you can use this script to set your container into maintenance mode (stops ioBroker but keeps container healthy) and apply js-controller updates. 
Simply type `maintenance --help` at the containers command line to see what the script can do for you.

### Migrating to Redis

If you want to migrate an existing ioBroker installation to Redis as objects and/ or states db, it is recommended to do the migration first from inside the container before setting the needed [ENVs](#environment-variables-env) to the container. This could be done by running `iobroker setup custom` at the containers command line. The wizard will guide you through the process and also asks for the migration of existing objects and/ or states. For more details on how to configure ioBroker to connect to Redis, please refer to the [Official ioBroker Docs](https://www.iobroker.net/#en/documentation).

::: warning NOTE
For running `iob setup custom` ioBroker has to be stopped inside the container. It is recommended to use the  [maintenance script](#use-maintenance-script) to set the container in maintenance mode and stop iobroker gracefully.
:::

## Miscellaneous

### Beta testing

If you want to get the newest features and fixes feel free to use/ test the beta version of the Docker image. For more information take a look at the [Docker image releases](https://github.com/buanet/ioBroker.docker/releases) and/ or join our discussion on [ioBroker Discord > Beta Testing & Feedback > docker-image](https://discord.gg/kN7nhx6C).<br>Thank you. 


### Notes for developers

#### Detecting Docker environment

For adapter developers it is now possible to easily detect if ioBroker is running inside the official docker container. Please simply check if the file `/opt/scripts/.docker_config/.thisisdocker` exists. The content of the file will always tell the image version.  

---

#### :warning: Work In Progress :warning:

This documentation is still work in progress. If you got any improvements simply let me know by opening an [issue](https://github.com/buanet/docs/issues) or [edit it](https://github.com/buanet/docs/blob/main/docs/projects/iobroker-docker-image/docs.md) by yourself and create a pull request.

If you got any unanswered questions please join the ioBroker community on [Discord](https://discord.gg/kN7nhx6C), [Facebook](https://www.facebook.com/groups/440499112958264) or [ioBroker Forum](https://forum.iobroker.net).
