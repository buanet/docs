import{_ as l,r as i,o as d,c,b as e,d as t,f as o,w as s,a as r}from"./app.0e64c253.js";const u={},h=e("h1",{id:"iobroker-docker-image-docs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iobroker-docker-image-docs","aria-hidden":"true"},"#"),t(" ioBroker Docker Image Docs")],-1),p=e("p",null,"This is the official documentation for the ioBroker Docker image. It covers everything you need to set up and configure a ioBroker Docker container.",-1),k={href:"https://www.iobroker.net/#en/documentation",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"getting-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),t(" Getting Started")],-1),b={href:"https://smarthome.buanet.de/2019/05/iobroker-unter-docker-auf-der-synology-diskstation-v3/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://forum.iobroker.net/viewtopic.php?f=17&t=5089",target:"_blank",rel:"noopener noreferrer"},g=r(`<p>Please do not contact me directly for any support-reasons. Every support question should be answered in a public place so every user can benefit from it . Thanks in advance.</p><p>If you think you found a bug or simply want to request a new feature please open an issue on Github so we can talk about.</p><p>The following ways to get iobroker-container running are only examples. Maybe you have to change, add or replace parameters to configure ioBroker for fitting your needs.</p><h3 id="running-from-command-line" tabindex="-1"><a class="header-anchor" href="#running-from-command-line" aria-hidden="true">#</a> Running from command-line</h3><p>For taking a first look at the iobroker docker container it would be enough to simply run the following basic docker run command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8081 <span class="token parameter variable">--name</span> iobroker <span class="token parameter variable">-v</span> iobrokerdata:/opt/iobroker buanet/iobroker:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),_={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"Pro Tip",-1),w=r(`<h3 id="running-with-docker-compose" tabindex="-1"><a class="header-anchor" href="#running-with-docker-compose" aria-hidden="true">#</a> Running with docker-compose</h3><p>You can also run iobroker by using docker-compose. Here is an example:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">iobroker</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">image</span><span class="token punctuation">:</span> buanet/iobroker<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iobroker
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> iobroker
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8081:8081&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> iobrokerdata<span class="token punctuation">:</span>/opt/iobroker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={class:"custom-container tip"},B=e("p",{class:"custom-container-title"},"Pro Tip",-1),x=e("h2",{id:"persistent-data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#persistent-data","aria-hidden":"true"},"#"),t(" Persistent data")],-1),T=e("p",null,[t("It is absolutely recommended to mount an (empty) folder or Docker volume to "),e("code",null,"/opt/iobroker"),t(" during first startup of your container. The startup script will check this folder and install ioBroker if it is empty. After ioBroker is installed/ started successfully this folder will contain your whole ioBroker setup. So if your container crashes or you simply have to do some changes to it you can just deploy a new one and mount the folder/ volume again without loosing your ioBroker config.")],-1),D={class:"custom-container warning"},I=e("p",{class:"custom-container-title"},"NOTE",-1),S={href:"https://github.com/buanet/ioBroker.docker/issues?q=is%3Aissue+noexec",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"environment-variables-env",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#environment-variables-env","aria-hidden":"true"},"#"),t(" Environment variables (ENV)")],-1),A=e("p",null,'To configure your ioBroker container as you need it, it is possible to set some environment variables. Please only set the variables where you need to change the default value. Variables you do not set and are marked as "Set by default = yes" will be automatically set using their default values when your run a new container.',-1),j=e("thead",null,[e("tr",null,[e("th",null,"ENV"),e("th",null,[t("Set by"),e("br"),t("default")]),e("th",null,[t("Default"),e("br"),t("Value")]),e("th",null,"Description")])],-1),q=e("tr",null,[e("td",null,"AVAHI"),e("td",null,"no"),e("td",null,"false"),e("td",null,'Installs and activates avahi-daemon for supporting yahka-adapter, can be "true" or "false"')],-1),N=e("tr",null,[e("td",null,"DEBUG"),e("td",null,"no"),e("td",null,"false"),e("td",null,'Activates extended log output for your container, can be "true" or "false"')],-1),O=e("tr",null,[e("td",null,"IOB_ADMINPORT"),e("td",null,"no"),e("td",null,"8081"),e("td",null,"Sets ioBroker adminport on startup")],-1),F=e("tr",null,[e("td",null,"IOB_BACKITUP_EXTDB"),e("td",null,"no"),e("td",null,"false"),e("td",null,[t("❗ ONLY AVAILABLE IN BETA ❗"),e("br"),t('Activates backing up external databases in ioBroker backitup adapter, can be "true" or "false" (!!! Make sure your have read '),e("a",{href:"#backup"},"this"),t(" !!!)")])],-1),U=e("tr",null,[e("td",null,"IOB_MULTIHOST"),e("td",null,"no"),e("td",null,"none"),e("td",null,'Sets ioBroker instance as "master" or "slave" for multihost support')],-1),C=e("tr",null,[e("td",null,"IOB_OBJECTSDB_HOST"),e("td",null,"no"),e("td",null,"127.0.0.1"),e("td",null,"Sets host for ioBroker objects db")],-1),L=e("tr",null,[e("td",null,"IOB_OBJECTSDB_PORT"),e("td",null,"no"),e("td",null,"9001"),e("td",null,"Sets port for ioBroker objects db")],-1),V=e("td",null,"IOB_OBJECTSDB_TYPE",-1),P=e("td",null,"no",-1),M=e("td",null,"jsonl",-1),R=e("br",null,null,-1),G={href:"https://github.com/ioBroker/ioBroker#databases",target:"_blank",rel:"noopener noreferrer"},W=e("tr",null,[e("td",null,"IOB_STATESDB_HOST"),e("td",null,"no"),e("td",null,"127.0.0.1"),e("td",null,"Sets host for ioBroker states db")],-1),H=e("tr",null,[e("td",null,"IOB_STATESDB_PORT"),e("td",null,"no"),e("td",null,"9000"),e("td",null,"Sets port for ioBroker states db")],-1),Y=e("tr",null,[e("td",null,"IOB_STATESDB_TYPE"),e("td",null,"no"),e("td",null,"jsonl"),e("td",null,'Sets type of ioBroker states db, could be "jsonl", "file" (deprecated) or "redis"')],-1),z=e("tr",null,[e("td",null,"LANG"),e("td",null,"yes"),e("td",null,"de_DE.UTF‑8"),e("td",null,"The following locales are pre-generated: de_DE.UTF-8, en_US.UTF-8")],-1),J=e("tr",null,[e("td",null,"LANGUAGE"),e("td",null,"yes"),e("td",null,"de_DE:de"),e("td",null,"The following locales are pre-generated: de_DE:de, en_US:en")],-1),K=e("tr",null,[e("td",null,"LC_ALL"),e("td",null,"yes"),e("td",null,"de_DE.UTF-8"),e("td",null,"The following locales are pre-generated: de_DE.UTF-8, en_US.UTF-8")],-1),Q=e("tr",null,[e("td",null,"PACKAGES"),e("td",null,"no"),e("td",null,"none"),e("td",null,'Installs additional linux packages to your container, packages should be seperated by whitespace like this: "package1 package2 package3"')],-1),Z=e("tr",null,[e("td",null,"PERMISSION_CHECK"),e("td",null,"no"),e("td",null,"true"),e("td",null,[t("❗ ONLY AVAILABLE IN BETA ❗"),e("br"),t('Checks and corrects all relevant permissions on container startup, can be "true" or "false" (!!! Use at your own risk !!!)')])],-1),X=e("tr",null,[e("td",null,"SETGID"),e("td",null,"yes"),e("td",null,"1000"),e("td",null,"For some reasons it might be useful to specify the gid of the containers iobroker user to match an existing group on the docker host")],-1),$=e("tr",null,[e("td",null,"SETUID"),e("td",null,"yes"),e("td",null,"1000"),e("td",null,"For some reasons it might be useful to specify the uid of the containers iobroker user to match an existing user on the docker host")],-1),ee=e("tr",null,[e("td",null,"TZ"),e("td",null,"yes"),e("td",null,"Europe/Berlin"),e("td",null,"Sets the containers timezone, all valid Linux-timezones are possible")],-1),te=e("tr",null,[e("td",null,"USBDEVICES"),e("td",null,"no"),e("td",null,"none"),e("td",null,'Sets relevant permissions on mounted devices like "/dev/ttyACM0", for more than one device separate with ";" like this: "/dev/ttyACM0;/dev/ttyACM1"')],-1),oe=e("tr",null,[e("td",null,"ZWAVE"),e("td",null,"no"),e("td",null,"false"),e("td",null,'Installs openzwave to support zwave-adapter, can be "true" or "false"')],-1),ne=e("h2",{id:"networks",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#networks","aria-hidden":"true"},"#"),t(" Networks")],-1),re={href:"https://docs.docker.com/network/bridge/#differences-between-user-defined-bridges-and-the-default-bridge",target:"_blank",rel:"noopener noreferrer"},ae=e("br",null,null,-1),se={href:"https://en.wikipedia.org/wiki/Multicast",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://en.wikipedia.org/wiki/Broadcasting_(networking)",target:"_blank",rel:"noopener noreferrer"},le=e("br",null,null,-1),de={href:"https://docs.docker.com/network/host/",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://docs.docker.com/network/macvlan/",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://docs.docker.com/network/",target:"_blank",rel:"noopener noreferrer"},he=e("h2",{id:"advanced-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#advanced-configuration","aria-hidden":"true"},"#"),t(" Advanced configuration")],-1),pe=e("h3",{id:"mounting-usb-devices",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mounting-usb-devices","aria-hidden":"true"},"#"),t(" Mounting USB devices")],-1),ke={href:"https://docs.docker.com/engine/reference/commandline/run/#add-host-device-to-container---device",target:"_blank",rel:"noopener noreferrer"},me=r('<h3 id="startup-scripts" tabindex="-1"><a class="header-anchor" href="#startup-scripts" aria-hidden="true">#</a> Startup scripts</h3><p>It is possible to add some script code to container startup with the help of the userscripts feature. You can get this to work by mounting an additional folder to <code>/opt/userscripts</code> into the container.</p><p>When you mount an empty folder the startup script will restore two example scripts in there. To activate the scripts you have to remove the <code>_example</code> part of the name. The &quot;userscript_firststart.sh&quot; will execute only at the very first start of a new container, while the &quot;userscript_everystart.sh&quot; will execute on every container start.</p><p>Feel free to test it with my example code. Take a look at the log. In &quot;Step 4 of 5: Applying special settings&quot; you will see the messages generated by the example userscripts.</p><h3 id="multihost" tabindex="-1"><a class="header-anchor" href="#multihost" aria-hidden="true">#</a> Multihost</h3><p>With the help of the ENV &quot;IOB_MULTIHOST&quot; and the ENVs for objects and states db connections (see ENVs table above) it is possible to run a container as standalone, multihost master or multihost slave. This is more or less a feature for advanced users. Please make sure you know how ioBroker multihost is working and set the ENVs as with <code>ìobroker setup custom</code>.</p><p>There is no need for executing <code>iobroker multihost enable</code> or <code>iobroker multihost connect</code> inside the container. Just configure the mentioned ENVs. The startup script will do all the magic.</p>',7),be={href:"https://www.iobroker.net/docu/index-24.htm?page_id=3068&lang=de",target:"_blank",rel:"noopener noreferrer"},fe=e("h2",{id:"maintenance",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#maintenance","aria-hidden":"true"},"#"),t(" Maintenance")],-1),ge=e("h3",{id:"backup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#backup","aria-hidden":"true"},"#"),t(" Backup")],-1),_e={href:"https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md",target:"_blank",rel:"noopener noreferrer"},we=e("p",null,"Another option is to simply tar or copy the whole directory you mounted into your ioBroker container on the Docker host. Make sure ioBroker container is stopped when backing up the directory.",-1),ve=e("h4",{id:"backup-remote-databases-with-iobroker-backitup-in-docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#backup-remote-databases-with-iobroker-backitup-in-docker","aria-hidden":"true"},"#"),t(" Backup remote databases with iobroker.backitup in Docker")],-1),Be=e("h3",{id:"restore",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#restore","aria-hidden":"true"},"#"),t(" Restore")],-1),xe=e("code",null,"iobroker restore",-1),Te={href:"https://www.iobroker.net/#en/documentation",target:"_blank",rel:"noopener noreferrer"},De=r(`<div class="custom-container tip"><p class="custom-container-title">Pro Tip</p><p>When setting up a new container simply place your backup file into the empty folder which you will mount to /opt/iobroker. Please make sure the name of your backup file ends like this: <code>*_backupiobroker.tar.gz</code>.<br> The containers startup script will recognize the file and prepare it for restore. When your container ist sucessfully started you will be able to restore you ioBroker by using the web ui of backitup or the commandline of your Docker container.</p></div><h3 id="updates-upgrades" tabindex="-1"><a class="header-anchor" href="#updates-upgrades" aria-hidden="true">#</a> Updates &amp; Upgrades</h3><div class="custom-container danger"><p class="custom-container-title">WARNING</p><p>Be sure to have a valid backup of your ioBroker installation before applying any updates!</p></div><h4 id="linux-system-package-updates" tabindex="-1"><a class="header-anchor" href="#linux-system-package-updates" aria-hidden="true">#</a> Linux system (package) updates</h4><p>These updates are usually coming through the systems package manager. In case of the ioBroker Docker container it is <code>apt</code>. To manually install these updates to your container you can just execute the following in the containers commmad line</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>As this updates will still be included in an actual ioBroker Docker Image, it might be a best practice attempt to simply recreate your container with the actual image instead ob applying the updates manually on the command line.</p><h4 id="iobroker-adapter-updates" tabindex="-1"><a class="header-anchor" href="#iobroker-adapter-updates" aria-hidden="true">#</a> ioBroker Adapter updates</h4>`,8),Ie={href:"https://www.iobroker.net/#en/documentation",target:"_blank",rel:"noopener noreferrer"},Se=r(`<h4 id="iobroker-js-controller-core-updates" tabindex="-1"><a class="header-anchor" href="#iobroker-js-controller-core-updates" aria-hidden="true">#</a> ioBroker js-controller (core) updates</h4><p>Typically you will be notified about js-controller updates in the ioBroker admin interface. As ioBroker has to be stopped to apply these updates it is not able to install it from the admin interface. You have to do it manually on the containers command line.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pkill</span> <span class="token parameter variable">-u</span> iobroker
iobroker update
iobroker upgrade self
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After this you have to restart your container.</p>`,4),Ee={class:"custom-container tip"},Ae=e("p",{class:"custom-container-title"},"Pro Tip",-1),je=e("h4",{id:"upgrades",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrades","aria-hidden":"true"},"#"),t(" Upgrades")],-1),qe=e("br",null,null,-1),Ne={href:"https://forum.iobroker.net/topic/44566/how-to-node-js-f%C3%BCr-iobroker-richtig-updaten-2021-edition",target:"_blank",rel:"noopener noreferrer"},Oe=r('<p>In general it is possible to move to a new major version of the ioBroker Docker image by simply recreating your container from the new ioBroker Docker image as you do it in the normal update process, when your js-controller is at the latest stable version. In most cases the js-controller will detect the new node version and tries to fix adapters which are having problems with the change. But in some other cases the &quot;recompiling&quot; will fail and you got some additional steps to do like described at the linked ioBroker forum post.</p><p>To avoid these problems when upgrading your ioBroker Docker container we recommend using the &quot;Backup and Restore&quot; procedure as &quot;best practice&quot; whenever switching an existing ioBroker Docker installation to a new major version.<br> This means it will be the best and less risky way to perform your upgrade with the following steps:</p><ol><li>Create a new ioBroker Backup</li><li>Create a new and empty folder for your ioBroker data</li><li>Copy the latest backup file from the old ioBroker data folder to the new one</li><li>Stop and delete your old container</li><li>Create a new ioBroker Docker container from the actual ioBroker image with the same configuration but mount the new ioBroker data folder</li><li>Start the new container and follow the process in the containers logs</li></ol><p>Now your ioBroker should be restored automatically and starts up the admin interface. After that it will automatically start to install missing adapters. You can watch the Process at the ioBroker Logs. When all Adapters are installed (this might take some time) you will be able to start your instances in the instances tab of the ioBroker admin interface.</p><h3 id="docker-healthcheck" tabindex="-1"><a class="header-anchor" href="#docker-healthcheck" aria-hidden="true">#</a> Docker Healthcheck</h3><p>Since v5.1.0 the image contains a Docker healthcheck. It simply checks if js-controller is running inside the container and reports the container as &quot;healthy&quot; or &quot;unhealthy&quot; to the Docker daemon.</p><p>The healthcheck itself is configured to 5 retries in an 15s interval with a timeout of 5s. So a container needs a minimum of one minute to get unhealthy after the js-controller was killed.</p><div class="custom-container tip"><p class="custom-container-title">Pro Tip</p><p>As the Docker daemon itself gives no opportunity to automatically restart an unhealthy container you might want to setup some kind of &quot;watchdog container&quot; like this simple one: https://github.com/buanet/docker-watchdog.</p></div><h2 id="best-practice" tabindex="-1"><a class="header-anchor" href="#best-practice" aria-hidden="true">#</a> Best practice</h2><h3 id="avoid-using-latest-tag" tabindex="-1"><a class="header-anchor" href="#avoid-using-latest-tag" aria-hidden="true">#</a> Avoid using latest tag</h3><p>The Docker tag &quot;latest&quot; (buanet/iobroker:latest) will always pull the latest available version of the ioBroker Docker image. This might cause some trouble when it changes to a new major version of the docker image. To avoid this you always should use a single version tag (e.g. buanet/iobroker:v5.2.0) or the major versions latest tag (e.g. buanet/iobroker:latest-v5) when creating your Docker container for production.</p><h3 id="use-maintenance-script" tabindex="-1"><a class="header-anchor" href="#use-maintenance-script" aria-hidden="true">#</a> Use maintenance script</h3><p>The ioBrocker Docker image includes a maintenance script which helps you to manage your ioBroker Docker container. For example you can use this script to set your container into maintenance mode (stops ioBroker but keeps container healthy) and apply js-controller updates (more options will follow). Simply type <code>maintenance --help</code> on the containers command line to see what the script can do for you.</p><h3 id="migrating-states-to-redis" tabindex="-1"><a class="header-anchor" href="#migrating-states-to-redis" aria-hidden="true">#</a> Migrating states to redis</h3>',14),Fe={href:"https://www.iobroker.net/#en/documentation",target:"_blank",rel:"noopener noreferrer"},Ue=e("h2",{id:"miscellaneous",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#miscellaneous","aria-hidden":"true"},"#"),t(" Miscellaneous")],-1),Ce=e("h3",{id:"beta-testing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#beta-testing","aria-hidden":"true"},"#"),t(" Beta testing")],-1),Le={href:"https://github.com/buanet/ioBroker.docker/releases",target:"_blank",rel:"noopener noreferrer"},Ve={href:"https://discord.gg/kN7nhx6C",target:"_blank",rel:"noopener noreferrer"},Pe=e("br",null,null,-1),Me=r('<h3 id="notes-for-developers" tabindex="-1"><a class="header-anchor" href="#notes-for-developers" aria-hidden="true">#</a> Notes for developers</h3><h4 id="detecting-docker-environment" tabindex="-1"><a class="header-anchor" href="#detecting-docker-environment" aria-hidden="true">#</a> Detecting Docker environment</h4><p>For adapter developers it is now possible to easily detect if ioBroker is running inside the official docker container. Please simply check if the file <code>/opt/scripts/.docker_config/.thisisdocker</code> exists. The content of the file will always tell the image version.</p><hr><h4 id="work-in-progress" tabindex="-1"><a class="header-anchor" href="#work-in-progress" aria-hidden="true">#</a> ⚠️ Work In Progress ⚠️</h4>',5),Re={href:"https://github.com/buanet/docs/issues",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://github.com/buanet/docs/blob/main/docs/projects/iobroker-docker-image/docs.md",target:"_blank",rel:"noopener noreferrer"},We={href:"https://forum.iobroker.net",target:"_blank",rel:"noopener noreferrer"};function He(Ye,ze){const n=i("ExternalLinkIcon"),a=i("RouterLink");return d(),c("div",null,[h,p,e("p",null,[t("If you got questions on how to configure your ioBroker and its adapters please refer to the "),e("a",k,[t("Official ioBroker Docs"),o(n)]),t(".")]),m,e("p",null,[t("A detailed tutorial (German, based on v3.0.0) can be found here: "),e("a",b,[t("https://smarthome.buanet.de"),o(n)]),t(".")]),e("p",null,[t("For discussion and support please visit "),e("a",f,[t("ioBroker forum thread"),o(n)]),t(" or join the ioBroker Community on Discord, Facebook or Telegram.")]),g,e("div",_,[y,e("p",null,[t('It is always a good choice to avoid using the "latest" tag for production. For more details see '),o(a,{to:"/iobroker-docker-image/docs/#best-practices"},{default:s(()=>[t('"Best practices"')]),_:1}),t(".")])]),w,e("div",v,[B,e("p",null,[t('It is always a good choice to avoid using the "latest" tag for production. For more details see '),o(a,{to:"/iobroker-docker-image/docs/#best-practices"},{default:s(()=>[t('"Best practices"')]),_:1}),t(".")])]),x,T,e("div",D,[I,e("p",null,[t('If you use a shared storage oder external devices mounted to your Docker host to store the iobroker folder make sure the mount point on your host does NOT have the "noexec" flag activated. Otherwise you will get problems executing ioBroker inside the container! For mor details please take a look at the corresponding '),e("a",S,[t("Github issues"),o(n)])])]),E,A,e("table",null,[j,e("tbody",null,[q,N,O,F,U,C,L,e("tr",null,[V,P,M,e("td",null,[t('Sets type of ioBroker objects db, could be "jsonl", "file" (deprecated) or "redis" '),R,t("(at the moment redis as objects db is "),e("a",G,[t("not officially supported by ioBroker"),o(n)]),t(")")])]),W,H,Y,z,J,K,Q,Z,X,$,ee,te,oe])]),ne,e("p",null,[t("The examples above are dealing with the Docker default bridge network. In general there are "),e("a",re,[t("some reasons"),o(n)]),t(" why it might be the better choice to use a user-defined bridge network.")]),e("p",null,[t("Using a Docker bridge network works fine for taking a first look and with most of the ioBroker adapters (if you don't forget to redirect the ports your adapers use)."),ae,t(" But some ioBroker adapters are using techniques like "),e("a",se,[t("Multicast"),o(n)]),t(" or "),e("a",ie,[t("Broadcast"),o(n)]),t(" for automatic detection of IoT devices"),le,t(" In this case it may be useful to switch to "),e("a",de,[t("host"),o(n)]),t(" or "),e("a",ce,[t("MACVLAN"),o(n)]),t(" network.")]),e("p",null,[t("For more information about networking with Docker please refer to the "),e("a",ue,[t("official Docker docs"),o(n)]),t(".")]),he,pe,e("p",null,[t("If you want to use a USB device within ioBroker inside your container don´t forget to "),e("a",ke,[t("mount the device"),o(n)]),t(' on container startup and use the ENV "USBDEVICES" to give ioBroker access to it.')]),me,e("p",null,[t("For general information about iobroker multihost feature please see "),e("a",be,[t("Official ioBroker Docs"),o(n)]),t(".")]),fe,ge,e("p",null,[t("The easiest way to backup your ioBroker config is to use the builtin "),e("a",_e,[t('"iobroker backup" command'),o(n)]),t(" or the "),e("a",ye,[t("iobroker.backitup adapter"),o(n)]),t(".")]),we,ve,e("p",null,[t("There are some limitations in backing up remote databases (Redis, InfluxDB, PostgresSQL, MySQL) with iobroker.backitup adapter when running inside a Docker container. "),o(a,{to:"/projects/iobroker-docker-image/docs_backitup.html"},{default:s(()=>[t("This small guide")]),_:1}),t(" will help you to understand why options are grayed out by default and how to change it.")]),Be,e("p",null,[t("Restoring your Data can be done by using the ioBroker builtin options like "),xe,t(" command or the iobroker.backitup adapter like described at the "),e("a",Te,[t("Official ioBroker Docs"),o(n)]),t(".")]),De,e("p",null,[t("Typically you will be notified about and can install these updates in the ioBroker admin interface. See "),e("a",Ie,[t("Official ioBroker Docs"),o(n)]),t(" for details.")]),Se,e("div",Ee,[Ae,e("p",null,[t("To easily apply js-controller updates you can also use the maintenance script. For more details see "),o(a,{to:"/iobroker-docker-image/docs/#best-practices"},{default:s(()=>[t('"Best practices"')]),_:1}),t(".")])]),je,e("p",null,[t('When moving your ioBroker to an new major version of the ioBroker Docker Image (e.g. from v5.x.x to v6.0.0) you are going to perform an Upgrade. While updates should have no impact to the function of ioBroker, upgrades might include some "breaking changes" and the need of performing some additional steps.'),qe,t(" For example this always happens when ioBroker will recommend a new version of node as prerequisite. What updating the node version means to ioBroker you can read in this "),e("a",Ne,[t("ioBroker forum post"),o(n)]),t(".")]),Oe,e("p",null,[t(`If you want to switch ioBroker states db from file to redis in an existing container you might want to keep all your actual states and move them to redis. As simply setting the needed ENVs won't migrate your existing states into the redis db (it would just start with an empty database) it is best practice to first run "iobroker setup custom" in your containers command line before adding the ENVs (your redis container should still be up and running). During the wizard you will configure your iobroker to connect to the redis db and get the choice to migrate your states into the new database. For more details how to configure ioBroker to connect to redis, please refer to the `),e("a",Fe,[t("Official ioBroker Docs"),o(n)]),t(".")]),Ue,Ce,e("p",null,[t("If you want to get the newest features and fixes feel free to use/ test the beta version of the Docker image. For more information take a look at the "),e("a",Le,[t("Docker image releases"),o(n)]),t(" and/ or join our discussion on "),e("a",Ve,[t("ioBroker Discord > Beta Testing & Feedback > docker-image"),o(n)]),t("."),Pe,t("Thank you.")]),Me,e("p",null,[t("This documentation is still work in progress. If you got any improvements simply let me know by opening an "),e("a",Re,[t("issue"),o(n)]),t(" or "),e("a",Ge,[t("edit it"),o(n)]),t(" by yourself and create a pull request.")]),e("p",null,[t("If you got any unanswered questions please join the ioBroker community on Discord, Telegram, Facebook or "),e("a",We,[t("ioBroker Forum"),o(n)]),t(".")])])}const Ke=l(u,[["render",He],["__file","index.html.vue"]]);export{Ke as default};
