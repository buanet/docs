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

A detailed tutorial (German, based on v3.0.0) can be found here: [https://smarthome.buanet.de](https://smarthome.buanet.de/2019/05/iobroker-unter-docker-auf-der-synology-diskstation-v3/).

For discussion and support please visit [ioBroker forum thread](http://forum.iobroker.net/viewtopic.php?f=17&t=5089) or join the ioBroker Community on Discord, Facebook or Telegram.

Please do not contact me directly for any support-reasons. Every support question should be answered in a public place so every user can benefit from it . Thanks in advance.

If you think you found a bug or simply want to request a new feature please open an issue on Github so we can talk about.

The following ways to get iobroker-container running are only examples. Maybe you have to change, add or replace parameters to configure ioBroker for fitting your needs.

### Running from command-line

For taking a first look at the iobroker docker container it would be enough to simply run the following basic docker run command:

```sh
docker run -p 8081:8081 --name iobroker -v iobrokerdata:/opt/iobroker buanet/iobroker:latest
```

::: tip Pro Tip
It is always a good choice to avoid using the "latest" tag for production. For more details see ["Best practices"](/iobroker-docker-image/docs/#best-practices).
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
It is always a good choice to avoid using the "latest" tag for production. For more details see ["Best practices"](/iobroker-docker-image/docs/#best-practices).
:::

## Persistent data

It is absolutely recommended to mount an (empty) folder or Docker volume to `/opt/iobroker` during first startup of your container. The startup script will check this folder and install ioBroker if it is empty. After ioBroker is installed/ started successfully this folder will contain your whole ioBroker setup. So if your container crashes or you simply have to do some changes to it you can just deploy a new one and mount the folder/ volume again without loosing your ioBroker config. 

::: warning Note
If you use a shared storage oder external devices mounted to your Docker host to store the iobroker folder make sure the mount point on your host does NOT have the "noexec" flag activated. Otherwise you will get problems executing ioBroker inside the container! For mor details please take a look at the corresponding [Github issues](https://github.com/buanet/ioBroker.docker/issues?q=is%3Aissue+noexec).
:::

## Environment variables (ENV)

To configure your ioBroker container as you need it, it is possible to set some ENVironment variables.
Please only set the variables where you need to change the default value. Variables you do not set and are marked as "Set by default = yes" will be automatically set using their default values when your run a new container. 

|ENV|Set by<br>default|Default<br>Value|Description|
|---|---|---|---|
|AVAHI|no|false|Installs and activates avahi-daemon for supporting yahka-adapter, can be "true" or "false"|
|DEBUG|no|false|Activates extended log output for your container, can be "true" or "false"|
|IOB_ADMINPORT|no|8081|Sets ioBroker adminport on startup|
|IOB_BACKITUP_EXTDB|no|false|Activates backing up external databases in ioBroker backitup adapter, can be "true" or "false" (!!! Make sure your have read [this](#backup) !!!)|
|IOB_MULTIHOST|no|none|Sets ioBroker instance as "master" or "slave" for multihost support|
|IOB_OBJECTSDB_HOST|no|127.0.0.1|Sets host for ioBroker objects db|
|IOB_OBJECTSDB_PORT|no|9001|Sets port for ioBroker objects db|
|IOB_OBJECTSDB_TYPE|no|jsonl|Sets type of ioBroker objects db, could be "jsonl", "file" (deprecated) or "redis" <br>(at the moment redis as objects db is [not officially supported by ioBroker](https://github.com/ioBroker/ioBroker#databases))|
|IOB_STATESDB_HOST|no|127.0.0.1|Sets host for ioBroker states db|
|IOB_STATESDB_PORT|no|9000|Sets port for ioBroker states db|
|IOB_STATESDB_TYPE|no|jsonl|Sets type of ioBroker states db, could be "jsonl", "file" (deprecated) or "redis"|
|LANG|yes|de_DE.UTF&#x2011;8|The following locales are pre-generated: de_DE.UTF-8, en_US.UTF-8|
|LANGUAGE|yes|de_DE:de|The following locales are pre-generated: de_DE:de, en_US:en|
|LC_ALL|yes|de_DE.UTF-8|The following locales are pre-generated: de_DE.UTF-8, en_US.UTF-8|
|PACKAGES|no|none|Installs additional linux packages to your container, packages should be seperated by whitespace like this: "package1 package2 package3"|
|PERMISSION_CHECK|no|true|Checks and corrects all relevant permissions on container startup, can be "true" or "false" (!!! Use at your own risk !!!)|
|SETGID|yes|1000|For some reasons it might be useful to specify the gid of the containers iobroker user to match an existing group on the docker host|
|SETUID|yes|1000|For some reasons it might be useful to specify the uid of the containers iobroker user to match an existing user on the docker host|
|TZ|yes|Europe/Berlin|Sets the containers timezone, all valid Linux-timezones are possible|
|USBDEVICES|no|none|Sets relevant permissions on mounted devices like "/dev/ttyACM0", for more than one device separate with ";" like this: "/dev/ttyACM0;/dev/ttyACM1"|
|ZWAVE|no|false|Installs openzwave to support zwave-adapter, can be "true" or "false"|

## Networks

The examples above are dealing with the Docker default bridge network. In general there are [some reasons](https://docs.docker.com/network/bridge/#differences-between-user-defined-bridges-and-the-default-bridge) why it might be the better choice to use a user-defined bridge network. 

Using a Docker bridge network works fine for taking a first look and with most of the ioBroker adapters (if you don't forget to redirect the ports your adapers use).<br>
But some ioBroker adapters are using techniques like [Multicast](https://en.wikipedia.org/wiki/Multicast) or [Broadcast](https://en.wikipedia.org/wiki/Broadcasting_(networking)) for automatic detection of IoT devices<br>
In this case it may be useful to switch to [host](https://docs.docker.com/network/host/) or [MACVLAN](https://docs.docker.com/network/macvlan/) network. 

For more information about networking with Docker please refer to the [official Docker docs](https://docs.docker.com/network/). 

## Advanced configuration

### Mounting USB devices

If you want to use an USB device within ioBroker inside your container don´t forget to [mount the device](https://docs.docker.com/engine/reference/commandline/run/#add-host-device-to-container---device) on container startup AND use the [ENV "USBDEVICES"](#environment-variables-env) to give ioBroker access to it.

::: warning Note
This is an AND condition. You have to do both. Just setting the ENV "USBDEVICES" will not work.
:::

### Startup scripts

It is possible to add some script code to container startup with the help of the userscripts feature. You can get this to work by mounting an additional folder to `/opt/userscripts` into the container.

When you mount an empty folder the startup script will restore two example scripts in there. To activate the scripts you have to remove the `_example` part of the name. The "userscript_firststart.sh" will execute only at the very first start of a new container, while the "userscript_everystart.sh" will execute on every container start.

Feel free to test it with my example code. Take a look at the log. In "Step 4 of 5: Applying special settings" you will see the messages generated by the example userscripts.

### Multihost 

With the help of the ENV "IOB_MULTIHOST" and the ENVs for objects and states db connections (see ENVs table above) it is possible to run a container as standalone, multihost master or multihost slave. This is more or less a feature for advanced users. Please make sure you know how ioBroker multihost is working and set the ENVs as with `ìobroker setup custom`.

There is no need for executing `iobroker multihost enable` or `iobroker multihost connect` inside the container. Just configure the mentioned ENVs. The startup script will do all the magic.

For general information about iobroker multihost feature please see [Official ioBroker Docs](https://www.iobroker.net/docu/index-24.htm?page_id=3068&lang=de).

## Maintenance

### Backup

The easiest way to backup your ioBroker config is to use the builtin ["iobroker backup" command](https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup) or the [iobroker.backitup adapter](https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md).

Another option is to simply tar or copy the whole directory you mounted into your ioBroker container on the Docker host. Make sure ioBroker container is stopped when backing up the directory.

#### Backup remote databases with iobroker.backitup in Docker

There are some limitations in backing up remote databases (Redis, InfluxDB, PostgresSQL, MySQL) with iobroker.backitup adapter when running inside a Docker container.
[This small guide](docs_backitup.md) will help you to understand why options are grayed out by default and how to change it. 

### Restore

Restoring your Data can be done by using the ioBroker builtin options like `iobroker restore` command or the iobroker.backitup adapter like described at the [Official ioBroker Docs](https://www.iobroker.net/#en/documentation).  

::: tip Pro Tip 
When setting up a new container simply place your backup file into the empty folder which you will mount to /opt/iobroker. Please make sure the name of your backup file ends like this: `*_backupiobroker.tar.gz`.<br>
The containers startup script will recognize the file and prepare it for restore. When your container ist sucessfully started you will be able to restore you ioBroker by using the web ui of backitup or the commandline of your Docker container.  
:::


### Updates & Upgrades

::: danger WARNING
Be sure to have a valid backup of your ioBroker installation before applying any updates! 
:::

#### Linux system (package) updates 
These updates are usually coming through the systems package manager. In case of the ioBroker Docker container it is `apt`. To manually install these updates to your container you can just execute the following in the containers commmad line
```sh
apt-get update && apt-get upgrade
```
As this updates will still be included in an actual ioBroker Docker Image, it might be a best practice attempt to simply recreate your container with the actual image instead ob applying the updates manually on the command line. 

#### ioBroker Adapter updates
Typically you will be notified about and can install these updates in the ioBroker admin interface. See [Official ioBroker Docs](https://www.iobroker.net/#en/documentation) for details.

#### ioBroker js-controller (core) updates
Typically you will be notified about js-controller updates in the ioBroker admin interface. As ioBroker has to be stopped to apply these updates it is not able to install it from the admin interface. You have to do it manually on the containers command line.
```sh
pkill -u iobroker
iobroker update
iobroker upgrade self
```
After this you have to restart your container.

::: tip Pro Tip
To easily apply js-controller updates you can also use the maintenance script. For more details see ["Best practices"](/iobroker-docker-image/docs/#best-practices).
:::

#### Upgrades

When moving your ioBroker to an new major version of the ioBroker Docker Image (e.g. from v5.x.x to v6.0.0) you are going to perform an Upgrade. While updates should have no impact to the function of ioBroker, upgrades might include some "breaking changes" and the need of performing some additional steps.<br>
For example this always happens when ioBroker will recommend a new version of node as prerequisite. What updating the node version means to ioBroker you can read in this [ioBroker forum post](https://forum.iobroker.net/topic/44566/how-to-node-js-f%C3%BCr-iobroker-richtig-updaten-2021-edition).

In general it is possible to move to a new major version of the ioBroker Docker image by simply recreating your container from the new ioBroker Docker image as you do it in the normal update process, when your js-controller is at the latest stable version. 
In most cases the js-controller will detect the new node version and tries to fix adapters which are having problems with the change. But in some other cases the "recompiling" will fail and you got some additional steps to do like described at the linked ioBroker forum post. 

To avoid these problems when upgrading your ioBroker Docker container we recommend using the "Backup and Restore" procedure as "best practice" whenever switching an existing ioBroker Docker installation to a new major version.<br>
This means it will be the best and less risky way to perform your upgrade with the following steps:

1. Create a new ioBroker Backup
2. Create a new and empty folder for your ioBroker data    
3. Copy the latest backup file from the old ioBroker data folder to the new one
4. Stop and delete your old container
5. Create a new ioBroker Docker container from the actual ioBroker image with the same configuration but mount the new ioBroker data folder
6. Start the new container and follow the process in the containers logs 

Now your ioBroker should be restored automatically and starts up the admin interface. After that it will automatically start to install missing adapters. You can watch the Process at the ioBroker Logs. When all Adapters are installed (this might take some time) you will be able to start your instances in the instances tab of the ioBroker admin interface.

### Docker Healthcheck

Since v5.1.0 the image contains a Docker healthcheck. It simply checks if js-controller is running inside the container and reports the container as "healthy" or "unhealthy" to the Docker daemon.

The healthcheck itself is configured to 5 retries in an 15s interval with a timeout of 5s. So a container needs a minimum of one minute to get unhealthy after the js-controller was killed.

::: tip Pro Tip
As the Docker daemon itself gives no opportunity to automatically restart an unhealthy container you might want to setup some kind of "watchdog container" like this simple one: https://github.com/buanet/docker-watchdog.
:::

## Best practice

### Avoid using latest tag

The Docker tag "latest" (buanet/iobroker:latest) will always pull the latest available version of the ioBroker Docker image. This might cause some trouble when it changes to a new major version of the docker image.
To avoid this you always should use a single version tag (e.g. buanet/iobroker:v5.2.0) or the major versions latest tag (e.g. buanet/iobroker:latest-v5) when creating your Docker container for production.  

### Use maintenance script

The ioBrocker Docker image includes a maintenance script which helps you to manage your ioBroker Docker container. For example you can use this script to set your container into maintenance mode (stops ioBroker but keeps container healthy) and apply js-controller updates (more options will follow). 
Simply type `maintenance --help` on the containers command line to see what the script can do for you.

### Migrating states to redis

If you want to switch ioBroker states db from file to redis in an existing container you might want to keep all your actual states and move them to redis. As simply setting the needed ENVs won't migrate your existing states into the redis db (it would just start with an empty database) it is best practice to first run "iobroker setup custom" in your containers command line before adding the ENVs (your redis container should still be up and running). During the wizard you will configure your iobroker to connect to the redis db and get the choice to migrate your states into the new database. For more details how to configure ioBroker to connect to redis, please refer to  the [Official ioBroker Docs](https://www.iobroker.net/#en/documentation).

## Miscellaneous

### Beta testing

If you want to get the newest features and fixes feel free to use/ test the beta version of the Docker image. For more information take a look at the [Docker image releases](https://github.com/buanet/ioBroker.docker/releases) and/ or join our discussion on [ioBroker Discord > Beta Testing & Feedback > docker-image](https://discord.gg/kN7nhx6C).<br>Thank you. 


### Notes for developers

#### Detecting Docker environment

For adapter developers it is now possible to easily detect if ioBroker is running inside the official docker container. Please simply check if the file `/opt/scripts/.docker_config/.thisisdocker` exists. The content of the file will always tell the image version.  

---

#### :warning: Work In Progress :warning:

This documentation is still work in progress. If you got any improvements simply let me know by opening an [issue](https://github.com/buanet/docs/issues) or [edit it](https://github.com/buanet/docs/blob/main/docs/projects/iobroker-docker-image/docs.md) by yourself and create a pull request.

If you got any unanswered questions please join the ioBroker community on Discord, Telegram, Facebook or [ioBroker Forum](https://forum.iobroker.net).