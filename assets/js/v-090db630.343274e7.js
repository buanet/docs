"use strict";(self.webpackChunkdocs_buanet_de=self.webpackChunkdocs_buanet_de||[]).push([[490],{4569:(e,t,o)=>{o.r(t),o.d(t,{data:()=>r});const r={key:"v-090db630",path:"/iobroker-docker-image/docs/",title:"ioBroker Docker Image Docs",lang:"en-US",frontmatter:{head:[["meta",{name:"description",content:"Documentation for the official ioBroker Docker image."}],["meta",{name:"charset",content:"UTF‑8"}],["meta",{name:"robots",content:"index, follow"}],["meta",{property:"og:title",content:"Official ioBroker Docker Image Docs"}],["meta",{property:"og:description",content:"Documentation for the official ioBroker Docker image."}],["meta",{property:"og:url",content:"https://docs.buanet.de/iobroker-docker-image/docs/"}],["meta",{property:"og:image",content:"https://docs.buanet.de/images/opengraph/default.png"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"en_US"}]],permalink:"/iobroker-docker-image/docs"},excerpt:"",headers:[{level:2,title:"Getting Started",slug:"getting-started",children:[{level:3,title:"Running from command-line",slug:"running-from-command-line",children:[]},{level:3,title:"Running with docker-compose",slug:"running-with-docker-compose",children:[]}]},{level:2,title:"Persistent data",slug:"persistent-data",children:[]},{level:2,title:"Environment variables (ENV)",slug:"environment-variables-env",children:[]},{level:2,title:"Networks",slug:"networks",children:[]},{level:2,title:"Advanced configuration",slug:"advanced-configuration",children:[{level:3,title:"Mounting USB devices",slug:"mounting-usb-devices",children:[]},{level:3,title:"Startup scripts",slug:"startup-scripts",children:[]},{level:3,title:"Multihost",slug:"multihost",children:[]}]},{level:2,title:"Maintenance",slug:"maintenance",children:[{level:3,title:"Backup",slug:"backup",children:[]},{level:3,title:"Restore",slug:"restore",children:[]},{level:3,title:"Updates & Upgrades",slug:"updates-upgrades",children:[]},{level:3,title:"Healthcheck",slug:"healthcheck",children:[]}]},{level:2,title:"Best practices",slug:"best-practices",children:[{level:3,title:"Avoid using latest tag",slug:"avoid-using-latest-tag",children:[]},{level:3,title:"Use maintenance script (beta)",slug:"use-maintenance-script-beta",children:[]},{level:3,title:"Migrating states to redis",slug:"migrating-states-to-redis",children:[]}]},{level:2,title:"Miscellaneous",slug:"miscellaneous",children:[{level:3,title:"Beta testing",slug:"beta-testing",children:[]},{level:3,title:"Notes for developers",slug:"notes-for-developers",children:[]}]}],filePathRelative:"projects/iobroker-docker-image/docs.md",git:{updatedTime:163908009e4}}},8951:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Yt});var r=o(6252);const a=(0,r._)("h1",{id:"iobroker-docker-image-docs",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#iobroker-docker-image-docs","aria-hidden":"true"},"#"),(0,r.Uk)(" ioBroker Docker Image Docs")],-1),n=(0,r._)("p",null,"This is the official documentation for the ioBroker Docker image. It covers everything you need to set up and configure a ioBroker Docker container.",-1),i=(0,r.Uk)("If you got questions on how to configure your ioBroker and its adapters please refer to the "),s={href:"https://www.iobroker.net/#en/documentation",target:"_blank",rel:"noopener noreferrer"},l=(0,r.Uk)("Official ioBroker Docs"),c=(0,r.Uk)("."),d=(0,r._)("h2",{id:"getting-started",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),(0,r.Uk)(" Getting Started")],-1),u=(0,r.Uk)("A detailed tutorial (German, based on v3.0.0) can be found here: "),h={href:"https://smarthome.buanet.de/2019/05/iobroker-unter-docker-auf-der-synology-diskstation-v3/",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("https://smarthome.buanet.de"),k=(0,r.Uk)("."),m=(0,r.Uk)("For discussion and support please visit "),g={href:"http://forum.iobroker.net/viewtopic.php?f=17&t=5089",target:"_blank",rel:"noopener noreferrer"},b=(0,r.Uk)("ioBroker forum thread"),f=(0,r.Uk)(" or join the ioBroker Community on Discord, Facebook or Telegram."),_=(0,r.uE)('<p>Please do not contact me directly for any support-reasons. Every support question should be answered in a public place so every user can benefit from it . Thanks in advance.</p><p>If you think you found a bug or simply want to request a new feature please open an issue on Github so we can talk about.</p><p>The following ways to get iobroker-container running are only examples. Maybe you have to change, add or replace parameters to configure ioBroker for fitting your needs.</p><h3 id="running-from-command-line" tabindex="-1"><a class="header-anchor" href="#running-from-command-line" aria-hidden="true">#</a> Running from command-line</h3><p>For taking a first look at the iobroker docker container it would be enough to simply run the following basic docker run command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -p <span class="token number">8081</span>:8081 --name iobroker -v iobrokerdata:/opt/iobroker buanet/iobroker:latest\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',6),y={class:"custom-container tip"},v=(0,r._)("p",{class:"custom-container-title"},"TIP",-1),w=(0,r.Uk)('It is always a good choice to avoid using the "latest" tag for production. For more details see '),B=(0,r.Uk)('"Best practices"'),U=(0,r.Uk)("."),T=(0,r.uE)('<h3 id="running-with-docker-compose" tabindex="-1"><a class="header-anchor" href="#running-with-docker-compose" aria-hidden="true">#</a> Running with docker-compose</h3><p>You can also run iobroker by using docker-compose. Here is an example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">iobroker</span><span class="token punctuation">:</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> buanet/iobroker<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iobroker\n    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> iobroker\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;8081:8081&quot;</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> iobrokerdata<span class="token punctuation">:</span>/opt/iobroker\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',3),D={class:"custom-container tip"},x=(0,r._)("p",{class:"custom-container-title"},"TIP",-1),I=(0,r.Uk)('It is always a good choice to avoid using the "latest" tag for production. For more details see '),S=(0,r.Uk)('"Best practices"'),E=(0,r.Uk)("."),A=(0,r._)("h2",{id:"persistent-data",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#persistent-data","aria-hidden":"true"},"#"),(0,r.Uk)(" Persistent data")],-1),O=(0,r._)("p",null,[(0,r.Uk)("It is absolutely recommended to mount an (empty) folder or Docker volume to "),(0,r._)("code",null,"/opt/iobroker"),(0,r.Uk)(" during first startup of your container. The startup script will check this folder and install ioBroker if it is empty. After ioBroker is installed/ started successfully this folder will contain your whole ioBroker setup. So if your container crashes or you simply have to do some changes to it you can just deploy a new one and mount the folder/ volume again without loosing your ioBroker config.")],-1),W={class:"custom-container warning"},q=(0,r._)("p",{class:"custom-container-title"},"NOTE",-1),j=(0,r.Uk)('If you use a shared storage oder external devices mounted to your Docker host to store the iobroker folder make sure the mount point on your host does NOT have the "noexec" flag activated. Otherwise you will get problems executing ioBroker inside the container! For mor details please take a look at the corresponding '),N={href:"https://github.com/buanet/ioBroker.docker/issues?q=is%3Aissue+noexec",target:"_blank",rel:"noopener noreferrer"},F=(0,r.Uk)("Github issues"),P=(0,r._)("h2",{id:"environment-variables-env",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#environment-variables-env","aria-hidden":"true"},"#"),(0,r.Uk)(" Environment variables (ENV)")],-1),M=(0,r._)("p",null,"To configure your ioBroker container as you need it, it is possible to set some environment variables. You do not have to declare every single variable when setting up your container. Variables you do not set will come up with their default value.",-1),C=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"ENV"),(0,r._)("th",null,"Default"),(0,r._)("th",null,"Description")])],-1),R=(0,r._)("tr",null,[(0,r._)("td",null,"AVAHI"),(0,r._)("td",null,"false"),(0,r._)("td",null,'Installs and activates avahi-daemon for supporting yahka-adapter, can be "true" or "false"')],-1),V=(0,r._)("tr",null,[(0,r._)("td",null,"IOB_ADMINPORT"),(0,r._)("td",null,"8081"),(0,r._)("td",null,"Sets ioBroker adminport on startup")],-1),L=(0,r._)("tr",null,[(0,r._)("td",null,"IOB_MULTIHOST"),(0,r._)("td",null,"[not set]"),(0,r._)("td",null,'Sets ioBroker instance as "master" or "slave" for multihost support (needs additional config for objectsdb and statesdb!)')],-1),G=(0,r._)("tr",null,[(0,r._)("td",null,"IOB_OBJECTSDB_HOST"),(0,r._)("td",null,"127.0.0.1"),(0,r._)("td",null,"Sets host for ioBroker objects db")],-1),Y=(0,r._)("tr",null,[(0,r._)("td",null,"IOB_OBJECTSDB_PORT"),(0,r._)("td",null,"9001"),(0,r._)("td",null,"Sets port for ioBroker objects db")],-1),H=(0,r._)("td",null,"IOB_OBJECTSDB_TYPE",-1),z=(0,r._)("td",null,"file",-1),J=(0,r.Uk)('Sets type of ioBroker objects db, cloud be "file" or "redis" '),Z=(0,r._)("br",null,null,-1),K=(0,r.Uk)("(at the moment redis as objects db is "),Q={href:"https://github.com/ioBroker/ioBroker#databases",target:"_blank",rel:"noopener noreferrer"},X=(0,r.Uk)("not officially supported by ioBroker"),$=(0,r.Uk)(")"),ee=(0,r._)("tr",null,[(0,r._)("td",null,"IOB_STATESDB_HOST"),(0,r._)("td",null,"127.0.0.1"),(0,r._)("td",null,"Sets host for ioBroker states db")],-1),te=(0,r._)("tr",null,[(0,r._)("td",null,"IOB_STATESDB_PORT"),(0,r._)("td",null,"9000"),(0,r._)("td",null,"Sets port for ioBroker states db")],-1),oe=(0,r._)("tr",null,[(0,r._)("td",null,"IOB_STATESDB_TYPE"),(0,r._)("td",null,"file"),(0,r._)("td",null,'Sets type of ioBroker states db, could be "file" or "redis"')],-1),re=(0,r._)("tr",null,[(0,r._)("td",null,"LANG"),(0,r._)("td",null,"de_DE.UTF‑8"),(0,r._)("td",null,"The following locales are pre-generated: de_DE.UTF-8, en_US.UTF-8")],-1),ae=(0,r._)("tr",null,[(0,r._)("td",null,"LANGUAGE"),(0,r._)("td",null,"de_DE:de"),(0,r._)("td",null,"The following locales are pre-generated: de_DE:de, en_US:en")],-1),ne=(0,r._)("tr",null,[(0,r._)("td",null,"LC_ALL"),(0,r._)("td",null,"de_DE.UTF-8"),(0,r._)("td",null,"The following locales are pre-generated: de_DE.UTF-8, en_US.UTF-8")],-1),ie=(0,r._)("tr",null,[(0,r._)("td",null,"PACKAGES"),(0,r._)("td",null,"[not set]"),(0,r._)("td",null,'Installs additional linux packages to your container, packages should be seperated by whitespace like this: "package1 package2 package3"')],-1),se=(0,r._)("tr",null,[(0,r._)("td",null,"SETGID"),(0,r._)("td",null,"1000"),(0,r._)("td",null,"For some reasons it might be useful to specify the gid of the containers iobroker user to match an existing group on the docker host")],-1),le=(0,r._)("tr",null,[(0,r._)("td",null,"SETUID"),(0,r._)("td",null,"1000"),(0,r._)("td",null,"For some reasons it might be useful to specify the uid of the containers iobroker user to match an existing user on the docker host")],-1),ce=(0,r._)("tr",null,[(0,r._)("td",null,"TZ"),(0,r._)("td",null,"Europe/Berlin"),(0,r._)("td",null,"All valid Linux-timezones")],-1),de=(0,r._)("tr",null,[(0,r._)("td",null,"USBDEVICES"),(0,r._)("td",null,"none"),(0,r._)("td",null,'Sets relevant permissions on mounted devices like "/dev/ttyACM0", for more than one device separate with ";" like this: "/dev/ttyACM0;/dev/ttyACM1"')],-1),ue=(0,r._)("tr",null,[(0,r._)("td",null,"ZWAVE"),(0,r._)("td",null,"false"),(0,r._)("td",null,'Will install openzwave to support zwave-adapter, can be "true" or "false"')],-1),he=(0,r._)("div",{class:"custom-container warning"},[(0,r._)("p",{class:"custom-container-title"},"NOTE"),(0,r._)("p",null,'In v4.2.0 the environment variables "ADMINPORT" and "REDIS" were renamed/ reorganized. Please check when migrating your Docker image from a lower version.')],-1),pe=(0,r._)("h2",{id:"networks",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#networks","aria-hidden":"true"},"#"),(0,r.Uk)(" Networks")],-1),ke=(0,r.Uk)("The examples above are dealing with the Docker default bridge network. In general there are "),me={href:"https://docs.docker.com/network/bridge/#differences-between-user-defined-bridges-and-the-default-bridge",target:"_blank",rel:"noopener noreferrer"},ge=(0,r.Uk)("some reasons"),be=(0,r.Uk)(" why it might be the better choice to use a user-defined bridge network."),fe=(0,r.Uk)("Using a Docker bridge network works fine for taking a first look and with most of the ioBroker adapters (if you don't forget to redirect the ports your adapers use)."),_e=(0,r._)("br",null,null,-1),ye=(0,r.Uk)(" But some ioBroker adapters are using techniques like "),ve={href:"https://en.wikipedia.org/wiki/Multicast",target:"_blank",rel:"noopener noreferrer"},we=(0,r.Uk)("Multicast"),Be=(0,r.Uk)(" or "),Ue={href:"https://en.wikipedia.org/wiki/Broadcasting_(networking)",target:"_blank",rel:"noopener noreferrer"},Te=(0,r.Uk)("Broadcast"),De=(0,r.Uk)(" for automatic detection of IoT devices"),xe=(0,r._)("br",null,null,-1),Ie=(0,r.Uk)(" In this case it may be useful to switch to "),Se={href:"https://docs.docker.com/network/host/",target:"_blank",rel:"noopener noreferrer"},Ee=(0,r.Uk)("host"),Ae=(0,r.Uk)(" or "),Oe={href:"https://docs.docker.com/network/macvlan/",target:"_blank",rel:"noopener noreferrer"},We=(0,r.Uk)("MACVLAN"),qe=(0,r.Uk)(" network."),je=(0,r.Uk)("For more information about networking with Docker please refer to the "),Ne={href:"https://docs.docker.com/network/",target:"_blank",rel:"noopener noreferrer"},Fe=(0,r.Uk)("official Docker docs"),Pe=(0,r.Uk)("."),Me=(0,r._)("h2",{id:"advanced-configuration",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#advanced-configuration","aria-hidden":"true"},"#"),(0,r.Uk)(" Advanced configuration")],-1),Ce=(0,r._)("h3",{id:"mounting-usb-devices",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#mounting-usb-devices","aria-hidden":"true"},"#"),(0,r.Uk)(" Mounting USB devices")],-1),Re=(0,r.Uk)("If you want to use a USB device within ioBroker inside your container don´t forget to "),Ve={href:"https://docs.docker.com/engine/reference/commandline/run/#add-host-device-to-container---device",target:"_blank",rel:"noopener noreferrer"},Le=(0,r.Uk)("mount the device"),Ge=(0,r.Uk)(' on container startup and use the ENV "USBDEVICES" to give ioBroker access to it.'),Ye=(0,r.uE)('<h3 id="startup-scripts" tabindex="-1"><a class="header-anchor" href="#startup-scripts" aria-hidden="true">#</a> Startup scripts</h3><p>It is possible to add some script code to container startup with the help of the userscripts feature. You can get this to work by mounting an additional folder to <code>/opt/userscripts</code> into the container.</p><p>When you mount an empty folder the startup script will restore two example scripts in there. To activate the scripts you have to remove the <code>_example</code> part of the name. The &quot;userscript_firststart.sh&quot; will execute only at the very first start of a new container, while the &quot;userscript_everystart.sh&quot; will execute on every container start.</p><p>Feel free to test it with my example code. Take a look at the log. In &quot;Step 4 of 5: Applying special settings&quot; you will see the messages generated by the example userscripts.</p><h3 id="multihost" tabindex="-1"><a class="header-anchor" href="#multihost" aria-hidden="true">#</a> Multihost</h3><p>With the help of the ENV &quot;IOB_MULTIHOST&quot; and the ENVs for objects and states db connections (see ENVs table above) it is possible to run a container as standalone, multihost master or multihost slave. This is more or less a feature for advanced users. Please make sure you know how ioBroker multihost is working and set the ENVs as with <code>ìobroker setup custom</code>.</p><p>There is no need for executing <code>iobroker multihost enable</code> or <code>iobroker multihost connect</code> inside the container. Just configure the mentioned ENVs. The startup script will do all the magic.</p>',7),He=(0,r.Uk)("For general information about iobroker multihost feature please see "),ze={href:"https://www.iobroker.net/docu/index-24.htm?page_id=3068&lang=de",target:"_blank",rel:"noopener noreferrer"},Je=(0,r.Uk)("Official ioBroker Docs"),Ze=(0,r.Uk)("."),Ke=(0,r._)("h2",{id:"maintenance",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#maintenance","aria-hidden":"true"},"#"),(0,r.Uk)(" Maintenance")],-1),Qe=(0,r._)("h3",{id:"backup",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#backup","aria-hidden":"true"},"#"),(0,r.Uk)(" Backup")],-1),Xe=(0,r.Uk)("The easiest way to backup your ioBroker configuration is to use the builtin "),$e=(0,r._)("code",null,"iobroker backup",-1),et=(0,r.Uk)(" command or the iobroker.backitup adapter like described at the "),tt={href:"https://www.iobroker.net/#en/documentation",target:"_blank",rel:"noopener noreferrer"},ot=(0,r.Uk)("Official ioBroker Docs"),rt=(0,r.Uk)("."),at=(0,r._)("p",null,"You are also able to backup (e.g. tar or copy) the whole directory you mounted into your ioBroker container on the Docker host.",-1),nt=(0,r._)("h3",{id:"restore",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#restore","aria-hidden":"true"},"#"),(0,r.Uk)(" Restore")],-1),it=(0,r.Uk)("Restoring your Data can be done by using the ioBroker builtin options like "),st=(0,r._)("code",null,"iobroker restore",-1),lt=(0,r.Uk)(" command or the iobroker.backitup adapter like described at the "),ct={href:"https://www.iobroker.net/#en/documentation",target:"_blank",rel:"noopener noreferrer"},dt=(0,r.Uk)("Official ioBroker Docs"),ut=(0,r.Uk)("."),ht=(0,r.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>When setting up a new container it is also possible to restore a backup by putting a single backup file into the empty folder which is mounted to /opt/iobroker in your ioBroker container. Please make sure the name of your backup file ends like this: <code>*_backupiobroker.tar.gz</code>.<br> The startup script of the container then will detect this backup file and restore it during the first start of the container. Please see container logs to follow the restore process and get more details!</p></div><h3 id="updates-upgrades" tabindex="-1"><a class="header-anchor" href="#updates-upgrades" aria-hidden="true">#</a> Updates &amp; Upgrades</h3><div class="custom-container danger"><p class="custom-container-title">WARNING</p><p>Be sure to have a valid backup of your ioBroker installation before applying any updates!</p></div><h4 id="linux-system-package-updates" tabindex="-1"><a class="header-anchor" href="#linux-system-package-updates" aria-hidden="true">#</a> Linux system (package) updates</h4><p>These updates are usually coming through the systems package manager. In case of the ioBroker Docker container it is <code>apt</code>. To manually install these updates to your container you can just execute the following in the containers commmad line</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> upgrade\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>As this updates will still be included in an actual ioBroker Docker Image, it might be a best practice attempt to simply recreate your container with the actual image instead ob applying the updates manually on the command line.</p><h4 id="iobroker-adapter-updates" tabindex="-1"><a class="header-anchor" href="#iobroker-adapter-updates" aria-hidden="true">#</a> ioBroker Adapter updates</h4>',8),pt=(0,r.Uk)("Typically you will be notified about and can install these updates in the ioBroker admin interface. See "),kt={href:"https://www.iobroker.net/#en/documentation",target:"_blank",rel:"noopener noreferrer"},mt=(0,r.Uk)("Official ioBroker Docs"),gt=(0,r.Uk)(" for details."),bt=(0,r.uE)('<h4 id="iobroker-js-controller-core-updates" tabindex="-1"><a class="header-anchor" href="#iobroker-js-controller-core-updates" aria-hidden="true">#</a> ioBroker js-controller (core) updates</h4><p>Typically you will be notified about js-controller updates in the ioBroker admin interface. As ioBroker has to be stopped to apply these updates it is not able to install it from the admin interface. You have to do it manually on the containers command line.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pkill</span> -u iobroker\niobroker update\niobroker upgrade self\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>After this you have to restart your container.</p>',4),ft={class:"custom-container tip"},_t=(0,r._)("p",{class:"custom-container-title"},"TIP",-1),yt=(0,r.Uk)("To easily apply js-controller updates you can also use the maintenance script. For more details see "),vt=(0,r.Uk)('"Best practices"'),wt=(0,r.Uk)("."),Bt=(0,r._)("h4",{id:"upgrades",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#upgrades","aria-hidden":"true"},"#"),(0,r.Uk)(" Upgrades")],-1),Ut=(0,r.Uk)('When moving your ioBroker to an new major version of the ioBroker Docker Image (e.g. from v5.x.x to v6.0.0) you are going to perform an Upgrade. While updates should have no impact to the function of ioBroker, upgrades might include some "breaking changes" and the need of performing some additional steps.'),Tt=(0,r._)("br",null,null,-1),Dt=(0,r.Uk)(" For example this always happens when ioBroker will recommend a new version of node as prerequisite. What updating the node version means to ioBroker you can read in this "),xt={href:"https://forum.iobroker.net/topic/44566/how-to-node-js-f%C3%BCr-iobroker-richtig-updaten-2021-edition",target:"_blank",rel:"noopener noreferrer"},It=(0,r.Uk)("ioBroker forum post"),St=(0,r.Uk)("."),Et=(0,r.uE)('<p>In general it is possible to move to a new major version of the ioBroker Docker image by simply recreating your container from the new ioBroker Docker image as you do it in the normal update process, when your js-controller is at the latest stable version. In most cases the js-controller will detect the new node version and tries to fix adapters which are having problems with the change. But in some other cases the &quot;recompiling&quot; will fail and you got some additional steps to do like described at the linked ioBroker forum post.</p><p>To avoid these problems when upgrading your ioBroker Docker container we recommend using the &quot;Backup and Restore&quot; procedure as &quot;best practice&quot; whenever switching an existing ioBroker Docker installation to a new major version.<br> This means it will be the best and less risky way to perform your upgrade with the following steps:</p><ol><li>Create a new ioBroker Backup</li><li>Create a new and empty folder for your ioBroker data</li><li>Copy the latest backup file from the old ioBroker data folder to the new one</li><li>Stop and delete your old container</li><li>Create a new ioBroker Docker container from the actual ioBroker image with the same configuration but mount the new ioBroker data folder</li><li>Start the new container and follow the process in the containers logs</li></ol><p>Now your ioBroker should be restored automatically and starts up the admin interface. After that it will automatically start to install missing adapters. You can watch the Process at the ioBroker Logs. When all Adapters are installed (this might take some time) you will be able to start your instances in the instances tab of the ioBroker admin interface.</p><h3 id="healthcheck" tabindex="-1"><a class="header-anchor" href="#healthcheck" aria-hidden="true">#</a> Healthcheck</h3><p>Since v5.1.0 the image contains a Docker healthcheck. It simply checks if js-controller is running inside the container and reports the container as &quot;healthy&quot; or &quot;unhealthy&quot; to the Docker daemon.</p><p>The healthcheck itself is configured to 5 retries in an 15s interval with a timeout of 5s. So a container needs a minimum of one minute to get unhealthy after the js-controller was killed.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>As the Docker daemon itself gives no opportunity to automatically restart an unhealthy container you might want to setup some kind of &quot;watchdog container&quot; like this simple one: https://github.com/buanet/docker-watchdog.</p></div><h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices" aria-hidden="true">#</a> Best practices</h2><h3 id="avoid-using-latest-tag" tabindex="-1"><a class="header-anchor" href="#avoid-using-latest-tag" aria-hidden="true">#</a> Avoid using latest tag</h3><p>The Docker tag &quot;latest&quot; (buanet/iobroker:latest) will always pull the latest available version of the ioBroker Docker image. This might cause some trouble when it changes to a new major version of the docker image. To avoid this you always should use a single version tag (e.g. buanet/iobroker:v5.2.0) or the major versions latest tag (e.g. buanet/iobroker:latest-v5) when creating your Docker image for production.</p><h3 id="use-maintenance-script-beta" tabindex="-1"><a class="header-anchor" href="#use-maintenance-script-beta" aria-hidden="true">#</a> Use maintenance script (beta)</h3><p>There is now a maintenance script coming with the actual ioBroker Docker images. You can use this script to set your container into maintenance mode (stops ioBroker but keeps container healthy) and apply js-controller updates (more options will follow). Simply type <code>maintenance --help</code> on the containers command line to see what the script can do. Feedback welcome!</p><h3 id="migrating-states-to-redis" tabindex="-1"><a class="header-anchor" href="#migrating-states-to-redis" aria-hidden="true">#</a> Migrating states to redis</h3>',14),At=(0,r.Uk)('If you want to switch ioBroker states db from file to redis in an existing container you might want to keep all your actual states and move them to redis. As simply setting the needed ENVs won\'t migrate your existing states into the redis db (it would just start with an empty database) it is best practice to first run "iobroker setup custom" in your containers command line before adding the ENVs (your redis container should still be up and running). During the wizard you will configure your iobroker to connect to the redis db and get the choice to migrate your states into the new database. For more details how to configure ioBroker to connect to redis, please refer to the '),Ot={href:"https://www.iobroker.net/#en/documentation",target:"_blank",rel:"noopener noreferrer"},Wt=(0,r.Uk)("Official ioBroker Docs"),qt=(0,r.Uk)("."),jt=(0,r._)("h2",{id:"miscellaneous",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#miscellaneous","aria-hidden":"true"},"#"),(0,r.Uk)(" Miscellaneous")],-1),Nt=(0,r._)("h3",{id:"beta-testing",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#beta-testing","aria-hidden":"true"},"#"),(0,r.Uk)(" Beta testing")],-1),Ft=(0,r.Uk)("If you want to get the newest features and changes feel free to use/ test the beta version of the Docker image. You can find the readme.md file for beta versions "),Pt={href:"https://github.com/buanet/ioBroker.docker/blob/beta/README.md",target:"_blank",rel:"noopener noreferrer"},Mt=(0,r.Uk)("here"),Ct=(0,r.Uk)(". Please make sure to read the changelog before testing beta versions."),Rt=(0,r._)("h3",{id:"notes-for-developers",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#notes-for-developers","aria-hidden":"true"},"#"),(0,r.Uk)(" Notes for developers")],-1),Vt=(0,r._)("h4",{id:"detecting-docker-environment",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#detecting-docker-environment","aria-hidden":"true"},"#"),(0,r.Uk)(" Detecting Docker environment")],-1),Lt=(0,r._)("p",null,[(0,r.Uk)("For adapter developers it is now possible to easily detect if ioBroker is running inside the official docker container. Please simply check if the file "),(0,r._)("code",null,"/opt/scripts/.docker_config/.thisisdocker"),(0,r.Uk)(" exists. The content of the file will always tell the image version.")],-1),Gt={},Yt=(0,o(3744).Z)(Gt,[["render",function(e,t){const o=(0,r.up)("OutboundLink"),Gt=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,n,(0,r._)("p",null,[i,(0,r._)("a",s,[l,(0,r.Wm)(o)]),c]),d,(0,r._)("p",null,[u,(0,r._)("a",h,[p,(0,r.Wm)(o)]),k]),(0,r._)("p",null,[m,(0,r._)("a",g,[b,(0,r.Wm)(o)]),f]),_,(0,r._)("div",y,[v,(0,r._)("p",null,[w,(0,r.Wm)(Gt,{to:"/iobroker-docker-image/docs/#best-practices"},{default:(0,r.w5)((()=>[B])),_:1}),U])]),T,(0,r._)("div",D,[x,(0,r._)("p",null,[I,(0,r.Wm)(Gt,{to:"/iobroker-docker-image/docs/#best-practices"},{default:(0,r.w5)((()=>[S])),_:1}),E])]),A,O,(0,r._)("div",W,[q,(0,r._)("p",null,[j,(0,r._)("a",N,[F,(0,r.Wm)(o)])])]),P,M,(0,r._)("table",null,[C,(0,r._)("tbody",null,[R,V,L,G,Y,(0,r._)("tr",null,[H,z,(0,r._)("td",null,[J,Z,K,(0,r._)("a",Q,[X,(0,r.Wm)(o)]),$])]),ee,te,oe,re,ae,ne,ie,se,le,ce,de,ue])]),he,pe,(0,r._)("p",null,[ke,(0,r._)("a",me,[ge,(0,r.Wm)(o)]),be]),(0,r._)("p",null,[fe,_e,ye,(0,r._)("a",ve,[we,(0,r.Wm)(o)]),Be,(0,r._)("a",Ue,[Te,(0,r.Wm)(o)]),De,xe,Ie,(0,r._)("a",Se,[Ee,(0,r.Wm)(o)]),Ae,(0,r._)("a",Oe,[We,(0,r.Wm)(o)]),qe]),(0,r._)("p",null,[je,(0,r._)("a",Ne,[Fe,(0,r.Wm)(o)]),Pe]),Me,Ce,(0,r._)("p",null,[Re,(0,r._)("a",Ve,[Le,(0,r.Wm)(o)]),Ge]),Ye,(0,r._)("p",null,[He,(0,r._)("a",ze,[Je,(0,r.Wm)(o)]),Ze]),Ke,Qe,(0,r._)("p",null,[Xe,$e,et,(0,r._)("a",tt,[ot,(0,r.Wm)(o)]),rt]),at,nt,(0,r._)("p",null,[it,st,lt,(0,r._)("a",ct,[dt,(0,r.Wm)(o)]),ut]),ht,(0,r._)("p",null,[pt,(0,r._)("a",kt,[mt,(0,r.Wm)(o)]),gt]),bt,(0,r._)("div",ft,[_t,(0,r._)("p",null,[yt,(0,r.Wm)(Gt,{to:"/iobroker-docker-image/docs/#best-practices"},{default:(0,r.w5)((()=>[vt])),_:1}),wt])]),Bt,(0,r._)("p",null,[Ut,Tt,Dt,(0,r._)("a",xt,[It,(0,r.Wm)(o)]),St]),Et,(0,r._)("p",null,[At,(0,r._)("a",Ot,[Wt,(0,r.Wm)(o)]),qt]),jt,Nt,(0,r._)("p",null,[Ft,(0,r._)("a",Pt,[Mt,(0,r.Wm)(o)]),Ct]),Rt,Vt,Lt],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,r]of t)o[e]=r;return o}}}]);