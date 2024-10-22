---
head:
  - - meta
    - name: description
      content: "Alles was du über das ioBroker Docker image wissen musst."
  - - meta
    - name: charset
      content: UTF‑8
  - - meta
    - name: robots
      content: "index, follow"
  - - meta
    - property: og:title
      content: "Offizielles ioBroker Docker Image"
  - - meta
    - property: og:description
      content: "Alles was du über das ioBroker Docker image wissen musst."
  - - meta
    - property: og:url
      content: "https://docs.buanet.de/de/iobroker-docker-image/"
  - - meta
    - property: og:image
      content: "https://docs.buanet.de/images/opengraph/default.png"
  - - meta
    - property: og:type
      content: "article"
  - - meta
    - property: og:locale
      content: "de_DE"
---

<!---
When using comments plugin on this site, the permalink tag length can be max 27 (location.href max 50) 
-->

# ioBroker Docker Image

![ioBroker Logo](/images/iobroker_logo.png)

[![Release](https://img.shields.io/github/v/release/buanet/ioBroker.docker?style=flat)](https://github.com/buanet/ioBroker.docker/releases)&nbsp;
[![Pre-Release)](https://img.shields.io/github/v/tag/buanet/ioBroker.docker?include_prereleases&label=pre-release)](https://github.com/buanet/ioBroker.docker/releases)&nbsp;
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/buanet/ioBroker.docker/build-debian-image-latest.yml?branch=main)](https://github.com/buanet/ioBroker.docker/actions/workflows/build-debian-image-latest.yml)&nbsp;
[![Github Issues](https://img.shields.io/github/issues/buanet/ioBroker.docker?style=flat)](https://github.com/buanet/ioBroker.docker/issues)&nbsp;
[![Github Pull Requests](https://img.shields.io/github/issues-pr/buanet/ioBroker.docker?style=flat)](https://github.com/buanet/ioBroker.docker/pulls)&nbsp;
[![GitHub Discussions](https://img.shields.io/github/discussions/buanet/ioBroker.docker)](https://github.com/buanet/ioBroker.docker/discussions)<br>
[![Arch](https://img.shields.io/badge/arch-amd64%20%7C%20arm32v7%20%7C%20arm64v8-blue)](https://hub.docker.com/repository/docker/buanet/iobroker)&nbsp;
[![Docker Image Size (tag)](https://img.shields.io/docker/image-size/buanet/iobroker/latest?style=flat)](https://hub.docker.com/repository/docker/buanet/iobroker)&nbsp;
[![Docker Pulls](https://img.shields.io/docker/pulls/buanet/iobroker?style=flat)](https://hub.docker.com/repository/docker/buanet/iobroker)&nbsp;
[![Docker Stars](https://img.shields.io/docker/stars/buanet/iobroker?style=flat)](https://hub.docker.com/repository/docker/buanet/iobroker)<br>
[![Source](https://img.shields.io/badge/source-github-blue?style=flat)](https://github.com/buanet/ioBroker.docker)&nbsp;
[![GitHub forks](https://img.shields.io/github/forks/buanet/ioBroker.docker)](https://github.com/buanet/ioBroker.docker/network)&nbsp;
[![GitHub stars](https://img.shields.io/github/stars/buanet/ioBroker.docker)](https://github.com/buanet/ioBroker.docker/stargazers)&nbsp;
[![License](https://img.shields.io/github/license/buanet/ioBroker.docker?style=flat)](https://github.com/buanet/ioBroker.docker/blob/master/LICENSE.md)&nbsp;
[![Donate](https://img.shields.io/badge/donate-paypal-blue?style=flat)](https://paypal.me/buanet)

## Überblick

Ich habe dieses Projekt 2017 gestartet, als ich nach einer sauberen und einfachen Lösung suchte um meine ioBroker-Instanz auf meiner Synology DiskStation auszuführen ohne ein ganzes Betriebssystem zu virtualisieren. Heute ist dieses Image zum offiziellen Docker-Image der ioBroker-Smarthome-Software gewachsen.

### Was ist ioBroker?

IoBroker ist eine in JavaScript geschriebene Open-Source-IoT-Plattform die Smarthome-Komponenten verschiedener Hersteller verbindet. Mit Hilfe von Plugins (genannt: "Adapter") ist ioBroker in der Lage mit einer Vielzahl von IoT-Hardware und -Diensten über verschiedene Protokolle und APIs zu kommunizieren.
Alle Daten werden in einer zentralen Datenbank gespeichert auf die alle Adapter zugreifen können. Damit ist es sehr einfach logische Verbindungen, Automatisierungsskripte und schöne Visualisierungen aufzubauen.
Weitere Einzelheiten findest du unter [iobroker.net](https://www.iobroker.net).

### Was ist Docker?

Docker ist eine Open-Source-Containerisierungsplattform die es einfach macht Anwendungen in kleinen Containern zu entwickeln, bereitzustellen und zu teilen. „Containerisierung“ oder „Containervirtualisierung“ ist der nächste Schritt in den Virtualisierungstechnologien. Während typische virtuelle Maschinen virtualisierte Hardware verwenden um ein vollständiges Betriebssystem auszuführen, enthalten Container nur das absolute Minimum an Abhängigkeiten die eine Software zur Ausführung benötigt, und teilen direkt den Kernel des Host-Systems. Im Vergleich zu virtuellen Maschinen spart Container-Virtualisierung viele Ressourcen.
Container fungieren auch als kleine Sandboxen die eine zusätzliche Sicherheitsebene hinzufügen und es einfach machen sie von einem Host auf einen anderen zu verschieben.
Weitere Informationen zu Docker findest du in der offiziellen [Docker Dokumentation](https://docs.docker.com). Alternativ kannst du aber auch eine kleine YouTube-Session einlegen. Es gibt unzählige Videos die erklären was Docker ist und wie es funktioniert.

## Dokumentation

Die grundlegenden Informationen zum Ausführen des ioBroker-Docker-Images findest du auf der [Docker Hub Seite (englisch)](https://hub.docker.com/r/buanet/iobroker). Für weitere, detailliertere Anweisungen solltest du dir die offizielle Dokumentation mit folgendem Inhalt ansehen:

* [Einstieg](/de/iobroker-docker-image/docs/readme.md#einstieg)
  * [Starten per Kommandozeile](/de/iobroker-docker-image/docs/readme.md#starten-per-kommandozeile)
  * [Starten per docker-compose](/de/iobroker-docker-image/docs/readme.md#starten-per-docker-compose)
* [Persistente Daten](/de/iobroker-docker-image/docs/readme.md#persistente-daten)
* [Umgebungsvariablen (ENV)](/de/iobroker-docker-image/docs/readme.md#umgebungsvariablen-env)
* [Netzwerke](/de/iobroker-docker-image/docs/readme.md#netzwerke)
* [Erweiterte Konfiguration](/de/iobroker-docker-image/docs/readme.md#erweiterte-konfiguration)
  * [Einbinden von USB-Geräten](/de/iobroker-docker-image/docs/readme.md#einbinden-von-usb-geraten)
  * [Startskripte](/de/iobroker-docker-image/docs/readme.md#startskripte)
  * [Multihost](/de/iobroker-docker-image/docs/readme.md#multihost)
* [Wartung](/de/iobroker-docker-image/docs/readme.md#wartung)
  * [Sicherung](/de/iobroker-docker-image/docs/readme.md#sicherung)
  * [Wiederherstellung](/de/iobroker-docker-image/docs/readme.md#wiederherstellung)
  * [Aktualisierung (Update)](/de/iobroker-docker-image/docs/readme.md#aktualisierung-update)
  * [Hochrüstung (Upgrade)](/de/iobroker-docker-image/docs/readme.md#hochrustung-upgrade)
  * [Docker Health Check](/de/iobroker-docker-image/docs/readme.md#docker-health-check)
* [Bewährte Methoden](/de/iobroker-docker-image/docs/readme.md#bewahrte-methoden)
  * [Vermeide latest Tag](/de/iobroker-docker-image/docs/readme.md#vermeide-latest-tag)
  * [Benutze maintenance Script](/de/iobroker-docker-image/docs/readme.md#benutze-maintenance-script)
  * [Migrieren der States zu Redis](/de/iobroker-docker-image/docs/readme.md#migrieren-der-states-zu-redis)
* [Sonstiges](/de/iobroker-docker-image/docs/readme.md#sonstiges)
  * [Beta Tester](/de/iobroker-docker-image/docs/readme.md#beta-tester)
  * [Hinweise für Entwickler](/de/iobroker-docker-image/docs/readme.md#hinweise-fur-entwickler)

<!---
## Tutorials

  Während die Dokumentation eher allgemein gehalten ist habe ich einige Tutorials erstellt denen du Schritt für Schritt folgen kannst um deinen Container erfolgreich einzurichten.

  Links folgen!
-->

## Unterstütze das Projekt

Der einfachste Weg dieses Projekt zu unterstützen ist mir ein paar Likes/Sterne auf Github und Docker Hub zu hinterlassen!
Wenn du mir etwas zurückgeben möchtest, wirf gerne einen Blick in die [offenen Issues](https://github.com/buanet/ioBroker.docker/issues) oder den [ioBroker Forum Thread](http://forum.iobroker.net/viewtopic.php?f=17&t=5089) und hilf mir dort Fragen zu beantworten, Fehler zu beheben oder neue Funktionen zu entwickeln!
Wenn du mich stattdessen auf eine Pizza einladen möchtest, kannst du das hier tun: <a href="https://www.paypal.me/buanet" target="_blank"><img src="https://buanet.de/wp-content/uploads/2017/08/pp128.png" height="20" width="20"></a><br>
Danke!