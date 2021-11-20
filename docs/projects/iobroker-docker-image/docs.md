---
head:
  - - meta
    - name: charset
      content: UTF‑8
  - - meta
    - name: robots
      content: "index, follow"
permalink: /iobroker-docker-image/docs
---

# ioBroker Docker Image Docs

This is the official documentation about the ioBroker Docker image. It covers everything you need to set up and configure a ioBroker Docker container.

If you got questions on how to configure your ioBroker and its adapters please refer to the [official ioBroker documentation](https://www.iobroker.net/#en/documentation). 

## Getting Started

A detailed tutorial (German, based on v3.0.0) can be found here: [https://smarthome.buanet.de](https://smarthome.buanet.de/2019/05/iobroker-unter-docker-auf-der-synology-diskstation-v3/). Please notice that the old tutorial is outdated and does no longer work!

For discussion and support please visit [ioBroker forum thread](http://forum.iobroker.net/viewtopic.php?f=17&t=5089) or use the comments section at the linked tutorial.

Please do not contact me directly for any support-reasons. Every support question should be answered in a public place so every user can benefit from it . Thanks in advance.

If you think you found a bug or simply want to request a new feature please open an issue on Github so we can talk about.

The following ways to get iobroker-container running are only examples. Maybe you have to change, add or replace parameters to configure ioBroker for fitting your needs.

### Running from command-line

For taking a first look at the iobroker docker container it would be enough to simply run the following basic docker run command:

```sh
docker run -p 8081:8081 --name iobroker -v iobrokerdata:/opt/iobroker buanet/iobroker:latest
```

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

## Persistent data

It is absolutely recommended to mount an (empty) folder/ volume to `/opt/iobroker during` first startup of your container. The startup script will check this folder and install ioBroker if it is empty. After ioBroker is installed/ started successfully this folder will contain your whole ioBroker setup. So if your container crashes or you simply have to do some changes to it you can just deploy a new one and mount the folder/ volume again without loosing your ioBroker config. 

Since v4.1.0 it is also possible mount a folder filled up with an iobroker backup file created using `iobroker backup` command or the ioBroker.backitup adapter. Please make sure the name of your backup file ends like this: `*_backupiobroker.tar.gz`.

The startup script of the container then will detect this backup and restore it during the first start. Please see container logs when starting the container for more details!

::: warning Note
If you use shared storage oder external devices mounted to your Docker host to store the iobroker folder make sure the mount point on your host does NOT have the "noexec" flag activated. Otherwise you will get problems executing ioBroker inside the container! For mor details please take a look at the corresponding [Github issues](https://github.com/buanet/ioBroker.docker/issues?q=is%3Aissue+noexec)
:::

## Environment variables

To configure your ioBroker container as you need it, it is possible to set some environment variables.
You do not have to declare every single variable when setting up your container. Variables you do not set will come up with their default value.

|ENV|Default|Description|
|---|---|---|
|AVAHI|false|Installs and activates avahi-daemon for supporting yahka-adapter, can be "true" or "false"|
|IOB_ADMINPORT|8081|Sets ioBroker adminport on startup|
|IOB_MULTIHOST|[not set]|Sets ioBroker instance as "master" or "slave" for multihost support (needs additional config for objectsdb and statesdb!)|
|IOB_OBJECTSDB_HOST|127.0.0.1|Sets host for ioBroker objects db|
|IOB_OBJECTSDB_PORT|9001|Sets port for ioBroker objects db|
|IOB_OBJECTSDB_TYPE|file|Sets type of ioBroker objects db, cloud be "file" or "redis" <br>(at the moment redis as objects db is [not officially supported by ioBroker](https://github.com/ioBroker/ioBroker#databases))|
|IOB_STATESDB_HOST|127.0.0.1|Sets host for ioBroker states db|
|IOB_STATESDB_PORT|9000|Sets port for ioBroker states db|
|IOB_STATESDB_TYPE|file|Sets type of ioBroker states db, could be "file" or "redis"|
|LANG|de_DE.UTF&#x2011;8|The following locales are pre-generated: de_DE.UTF-8, en_US.UTF-8|
|LANGUAGE|de_DE:de|The following locales are pre-generated: de_DE:de, en_US:en|
|LC_ALL|de_DE.UTF-8|The following locales are pre-generated: de_DE.UTF-8, en_US.UTF-8|
|PACKAGES|[not set]|Installs additional linux packages to your container, packages should be seperated by whitespace like this: "package1 package2 package3"|
|SETGID|1000|For some reasons it might be useful to specify the gid of the containers iobroker user to match an existing group on the docker host|
|SETUID|1000|For some reasons it might be useful to specify the uid of the containers iobroker user to match an existing user on the docker host|
|TZ|Europe/Berlin|All valid Linux-timezones|
|USBDEVICES|none|Sets relevant permissions on mounted devices like "/dev/ttyACM0", for more than one device separate with ";" like this: "/dev/ttyACM0;/dev/ttyACM1"|
|ZWAVE|false|Will install openzwave to support zwave-adapter, can be "true" or "false"|

::: warning Note
In v4.2.0 the environment variables "ADMINPORT" and "REDIS" were renamed/ reorganized. Please check when migrating your Docker image from a lower version. 
:::

## Networks

The examples above are dealing with the Docker default bridge network. In general there are [some reasons](https://docs.docker.com/network/bridge/#differences-between-user-defined-bridges-and-the-default-bridge) why it might be the better choice to use a user-defined bridge network. 

Using a Docker bridge network works fine for taking a first look and with most of the ioBroker adapters (if you don't forget to redirect the ports your adapers use).<br>
But some ioBroker adapters are using techniques like [Multicast](https://en.wikipedia.org/wiki/Multicast) or [Broadcast](https://en.wikipedia.org/wiki/Broadcasting_(networking)) for automatic detection of IoT devices<br>
In this case it may be useful to switch to [host](https://docs.docker.com/network/host/) or [MACVLAN](https://docs.docker.com/network/macvlan/) network. 

For more information about networking with Docker please refer to the [official Docker docs](https://docs.docker.com/network/). 

## Advanced configuration

### Mounting USB devices

If you want to use a USB device within ioBroker inside your container don´t forget to [mount the device](https://docs.docker.com/engine/reference/commandline/run/#add-host-device-to-container---device) on container startup and use the environment variable "USBDEVICES".

### Startup scripts

It is possible to add some script code to container startup with the help of the userscripts feature. You can get this to work by mounting an additional folder to `/opt/userscripts` into the container.

When you mount an empty folder the startup script will restore two example scripts in there. To activate the scripts you have to remove the `_example` part of the name. The "userscript_firststart.sh" will execute only at the very first start of a new container, while the "userscript_everystart.sh" will execute on every container start.

Feel free to test it with my example code. Take a look at the log. In "Step 4 of 5: Applying special settings" you will see the messages generated by the example userscripts.

### Multihost 

With the help of the ENV "IOB_MULTIHOST" and the ENVs for objects and states db connections (see ENVs table above) it is possible to run a container as standalone, multihost master or multihost slave. This is more or less a feature for advanced users. Please make sure you know how ioBroker multihost is working and set the ENVs as with `ìobroker setup custom`.

There is no need for executing `iobroker multihost enable` or `iobroker multihost connect` inside the container. Just configure the mentioned ENVs. The startup script will do all the magic.

For general information about iobroker multihost feature please see [official ioBroker documentation](https://www.iobroker.net/docu/index-24.htm?page_id=3068&lang=de).

## Maintenance

### Backup & Restore

### Updates & Upgrades

::: warning WARNING
Be sure to have a backup of your ioBroker before applying any updates! 
:::

#### Linux system updates 
These updates are usually coming through the systems package manager. In case of the ioBroker Docker container it is `apt`. To manually install these updates to your container you can just execute the following in the containers commmad line
```sh
apt-get update && apt-get upgrade
```
As the updates will also be automatically installed on the first startup of your container it is also possible to simply recreate you container. 

#### ioBroker Adapter updates
Typically you will be notified and can install these updates in the ioBroker admin ui. See [official ioBroker documentation](https://www.iobroker.net/#en/documentation) for more details.

#### ioBroker js-controller updates (core updates)
Typically you will be notified about js-controller updates in the ioBroker admin ui. As ioBroker hs to be stopped to apply these updates it is not able to install it from the admin ui. You have to do it manually on the containers command line.
```sh
pkill -u iobroker
iobroker update
iobroker upgrade self
```
After this you have to restart your container.

::: tip TIP
You can also use the builtin ioBroker maintenance script of the container. 
:::

If you are about to move into a new major version (for example from v4.x.x to v5.0.0) it's called an upgrade.

## Best practices

### Use maintenance script (beta)

There is now a maintenance script coming with the actual ioBroker Docker images. You can use this script to set your container into maintenance mode (stops ioBroker but keeps container healthy) and apply js-controller updates (more options will follow). 
Simply type `maintenance --help` on the containers command line to see what the script can do. Feedback welcome!

### Migrating states to redis

If you want to switch ioBroker states db from file to redis in an existing container you might want to keep all your actual states and move them to redis. As simply setting the needed ENVs won't migrate your existing states into the redis db (it would just start with an empty database) it is best practice to first run "iobroker setup custom" in your containers command line before adding the ENVs (your redis container should still be up and running). During the wizard you will configure your iobroker to connect to the redis db and get the choice to migrate your states into the new database. For more details how to configure ioBroker to connect to redis, please refer to  the [official ioBroker documentation](https://www.iobroker.net/#en/documentation).

## Miscellaneous

### Beta testing

If you want to get the newest features and changes feel free to use/ test the beta version of the Docker image. You can find the readme.md file for beta versions [here](https://github.com/buanet/ioBroker.docker/blob/beta/README.md). Please make sure to read the changelog before testing beta versions.

### Notes for developers

#### Detecting Docker environment

For adapter developers it is now possible to easily detect if ioBroker is running inside the official docker container. Please simply check if the file `/opt/scripts/.docker_config/.thisisdocker` exists. The content of the file will always tell the image version.  
