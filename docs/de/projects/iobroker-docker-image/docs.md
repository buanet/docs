---
head:
  - - meta
    - name: description
      content: "Dokumentation zum offiziellen ioBroker Docker Image."
  - - meta
    - name: charset
      content: UTF‑8
  - - meta
    - name: robots
      content: "index, follow"
  - - meta
    - property: og:title
      content: "Offizielle ioBroker Docker Image Doku"
  - - meta
    - property: og:description
      content: "Dokumentation zum offiziellen ioBroker Docker Image."
  - - meta
    - property: og:url
      content: "https://docs.buanet.de/de/iobroker-docker-image/docs/"
  - - meta
    - property: og:image
      content: "https://docs.buanet.de/images/opengraph/default.png"
  - - meta
    - property: og:type
      content: "article"
  - - meta
    - property: og:locale
      content: "de_DE"
permalink: /de/iobroker-docker-image/docs
---

# ioBroker Docker Image Doku

Dies ist die offizielle Dokumentation für mein ioBroker-Docker-Image. Sie enthält alle Informationen die du zum Einrichten und Konfigurieren eines ioBroker-Docker-Containers benötigst.

Wenn du Fragen zur Konfiguration deines ioBroker und seiner Adapter hast, lies bitte die [offizielle ioBroker Dokumentation](https://www.iobroker.net/#de/documentation).

## Einstieg

Ein ausführliches Tutorial (basierend auf v3.0.0) findest du hier: [https://smarthome.buanet.de](https://smarthome.buanet.de/2019/05/iobroker-unter-docker-auf-der-synology-diskstation-v3/).

Bei Fragen melde dich einfach im [ioBroker Forum Thread](http://forum.iobroker.net/viewtopic.php?f=17&t=5089) zu Wort oder tritt der ioBroker Community auf Discord, Facebook oder Telegram bei.

Bitte vermeide es mich bei Support-Fragen direkt zu kontaktieren. Stelle deine Frage stattdessen lieber in der ioBroker Community und markiere mich bei Bedarf. So können alle ioBroker Benutzer von der Antwort profitieren und du erhälst ggf. auch Unterstützung von anderen Mitgliedern aus der Community.

Wenn du einen Fehler im ioBroker Docker Image gefunden oder eine Idee zur Verbesserung hast würde ich mich freuen wenn du einen Issue auf Github meldest. 

Die nun folgenden Möglichkeiten einen ioBroker Container zu starten sind nur Beispiele. Möglicherweise musst du Parameter ändern, hinzufügen oder ersetzen um ioBroker für dich und deine Umgebung passend zu konfigurieren.

### Starten per Kommandozeile

Um einen ersten Blick auf den Docker-Container von ioBroker zu werfen reicht es aus einfach den folgenden Docker-Run-Befehl auszuführen:

```sh
docker run -p 8081:8081 --name iobroker -v iobrokerdata:/opt/iobroker buanet/iobroker:latest
```

::: tip TIP
Es ist immer eine gute Wahl, die Verwendung des "latest" Tags für deine  Produktivumgebung zu vermeiden. Weitere Einzelheiten findest du unter ["Best practices"](/de/iobroker-docker-image/docs/#best-practices).
:::

### Starten per docker-compose

Du kannst deinen ioBroker Container natürlich auch per docker-compose starten. Hier ein Beispiel:

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

::: tip TIP
Es ist immer eine gute Wahl, die Verwendung des "latest" Tags für deine  Produktivumgebung zu vermeiden. Weitere Einzelheiten findest du unter ["Best practices"](/de/iobroker-docker-image/docs/#best-practices).
:::

## Persistente Daten

Es wird dringend empfohlen beim ersten Start deines ioBroker Containers einen (leeren) Ordner oder ein Docker Volume unter `/opt/iobroker` zu mounten. Der Container lagert dann alle Daten deiner ioBroker Instanz in dieses Verzeichnis aus. So ist es später möglich den Container zu aktualisieren/ neu zu erstellen ohne die ioBroker Konfiguration zu verlieren. 

## Umgebungsvariablen (ENV)

Zur individuellen Konfiguration des ioBroker Containers werden Umgebungsvariablen verwendet. Die folgende Tabelle gibt einen Überblick über die verwendbaren Variablen und deren mögliche Werte. Bitte stelle sicher, dass du nur Umgebungsvariablen setzt, die du auch wirklich benötigst. 

|ENV|Standard|Beschreibung|
|---|---|---|
|AVAHI|false|Installiert und aktiviert den Avahi Dienst welcher z.B. vom yahka Adapter verwendet wird. Kann "true" oder "false" sein.|
|IOB_ADMINPORT|8081|Ändert den Port des ioBroker Admin|
|IOB_MULTIHOST|[not set]|Definiert den ioBroker als "master" oder "slave" für Multihost Unterstützung (benötigt weitere Konfiguration für Objects DB und States DB!)|
|IOB_OBJECTSDB_HOST|127.0.0.1|Definiert den Host für die ioBroker Objects DB|
|IOB_OBJECTSDB_PORT|9001|Definiert denPort für die ioBroker Objects DB|
|IOB_OBJECTSDB_TYPE|file|Definiert den Typ der ioBroker Objects DB. Kann "file" oder "redis" sein.<br>(Momentan wird redis als Objects DB von ioBroker [nicht offiziell unterstützt](https://github.com/ioBroker/ioBroker#databases))|
|IOB_STATESDB_HOST|127.0.0.1|Definiert den Host für die ioBroker States DB|
|IOB_STATESDB_PORT|9000|Definiert den Port für die ioBroker States DB|
|IOB_STATESDB_TYPE|file|Definiert den Typ der ioBroker States DB. Kann "file" oder "redis" sein.|
|LANG|de_DE.UTF&#x2011;8|Die folgenden locales sind vorgeneriert: de_DE.UTF-8, en_US.UTF-8|
|LANGUAGE|de_DE:de|Die folgenden locales sind vorgeneriert: de_DE:de, en_US:en|
|LC_ALL|de_DE.UTF-8|Die folgenden locales sind vorgeneriert: de_DE.UTF-8, en_US.UTF-8|
|PACKAGES|[not set]|Installiert zusätzliche Linux Pakete. Pakete sollten durch Leerzeichen getrennt sein. Beispiel: "Paket1 Paket2 Paket3".|
|SETGID|1000|In manchen Fällen ist es notwendig die GID des ioBroker Benutzers im Container anzupassen, damit diese zu einer entsprechenden Gruppe auf dem Host System passt.|
|SETUID|1000|In manchen Fällen ist es notwendig die UID des ioBroker Benutzers im Container anzupassen, damit diese zu einem entsprechenden Benutzer auf dem Host System passt.|
|TZ|Europe/Berlin|Definiert die Zeitzonde des Containers. Alle gültigen Linux Zeitzonen sind möglich.|
|USBDEVICES|none|Sorgt dafür, dass ioBroker die notwendigen Berechtigungen auf gemountete Geräte erhält ("/dev/ttyACM0"). Mehrere Geräte mit Semikolon (";") trennen ("/dev/ttyACM0;/dev/ttyACM1")|
|ZWAVE|false|Installiert openzwave was vom zwave Adapter benötig wird. Kann "true" or "false" sein.|

::: warning NOTE
In v4.2.0 wurden die Umgebungsvariablen "ADMINPORT" and "REDIS" umbenannt bzw. neu definiert. Bitte prüfe die Variablen wenn du deinen Container von einer älteren Version aktualisierst. 
:::

## Netzwerke

Im Standard arbeitet Docker mit einem Default-Bridge-Netzwerk und reicht nach außen nur die Ports durch, die beim Starten des Containers entsprechend gemappt wurden. Für einen ersten Einblick in ioBroker sollte dies genügen. Es gibt aber auch [ein paar Gründe](https://docs.docker.com/network/bridge/#differences-between-user-defined-bridges-and-the-default-bridge) warum es möglicherweise die bessere Wahl ist zumindest auf ein benutzerdefiniertes Bridge-Netzwerk umzusteigen.

Einige ioBroker-Adapter verwenden allerdings Techniken wie [Multicast](https://en.wikipedia.org/wiki/Multicast) oder [Broadcast](https://en.wikipedia.org/wiki/Broadcasting_(networking)). Zum Beispiel zur automatischen Erkennung von IoT-Geräten.
In diesem Fall kann es sinnvoll sein bezüglich der Netzwerkkonfiguration auf [host](https://docs.docker.com/network/host/) oder [MACVLAN](https://docs.docker.com/network/macvlan/) umzusteigen. 

Weitere Informationen zu Netzwerk unter Docker findest du in der [Offiziellen Docker Dokumentation](https://docs.docker.com/network/). 

## Erweiterte Konfiguration

### Einbinden von USB-Geräten

Für das Einbinden von USB-Geräten in den ioBroker Docker Container ist es erforderlich das Gerät entsprechend [beim Start des Containers einzubinden](https://docs.docker.com/engine/reference/commandline/run/#add-host-device-to-container---device). Außerdem ist es erforderlich das eingebundene Gerät in der Umgebungsvariable „USBDEVICES“ aufzuführen. Letzteres sorgt dafür, dass der ioBroker innerhalb des Containers die nötigen Berechtigungen auf das Gerät bekommt.

### Startskripte

Mit Hilfe der Startscripte (userscripts) ist es möglich beim Start des ioBroker Containers eigene Scripte ausführen zu lassen. Aktiviert wird das Feature indem du, analog zum ioBroker Ordner, einen weiteren Ordner (oder Volume)  unter `/opt/userscripts` mountest.

Nach dem Start befinden sich dann zwei Beispielscripte im Ordner. Zur Aktivierung der Scripte entferne einfach die Endung `_example` im Namen des Scripts. Das Script „userscript_firststart.sh“ wird nur beim allerersten Start eines neuen Containers ausgeführt, das Script „userscript_everystart.sh“ bei jedem Containerstart ausgeführt wird.

Probiere es einfach aus. In den Scripten ist Beispielcode enthalten der eine Logausgabe beim Start des Containers erzeugt. Den entsprechenden Abschnitt findest du im Log in "Schritt 4 von 5: Spezielle Einstellungen anwenden".

### Multihost

Mit Hilfe der Umgebungsvariable "IOB_MULTIHOST" und den Variablen zu "IOB_OBJECTSDB_[...]" und  "IOB_STATESDB_[...]" lässt sich der ioBroker Container als Multihost System betreiben. 
Bitte stelle vor der Konfiguration sicher, dass du mit dem Multihost-Feature von ioBroker vertraut bist und weißt was der Befehl  `ìobroker setup custom` tut. 

Bei der Verwendung der Umgebungsvariablen für den Multihost Betrieb ist keine Ausführung von  `iobroker multihost enable` oder `iobroker multihost connect` innerhalb des Containers notwendig. Bei korrekter Konfiguration wird all dies durch das Startscript des Containers erledigt.   

Allgemeine Informationen zur Multihost-Funktion von ioBroker findest du in der [Offiziellen ioBroker Dokumentation](https://www.iobroker.net/docu/index-24.htm?page_id=3068&lang=de).

## Wartung

### Sicherung

Der einfachst Weg deinen ioBroker zu sichern ist die Verwendung des integrierten ["iobroker backup"](https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup) Kommandos oder des [iobroker.backitup Adapters](https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md).

Eine Weitere Möglichkeit ist das Sichern des Verzeichnisses, welches du unter "/opt/iobroker" in den ConTainer gemountet hast. Die Sicherung erfolgt dabei über den Docker Host. Beim Kopieren, Verschieben oder Packen der Dateien sollte der ioBroker Container gestoppt sein.  

### Wiederherstellung

Die Wiederherstellung eines Backups erfolgt analog zur Erstellung per ["iobroker backup"](https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup) Kommando oder über den [iobroker.backitup Adapter](https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md). Alternativ über das Zurückkopieren/ Entpacken des auf dem Docker Host gesicherten Verzeichnisses bei gestopptem Container. 

::: tip Pro Tip
Beim Erstellen eines neuen Containers mit leerem Datenverzeichnis unter "/opt/iobroker" besteht die Möglichkeit eine Datensicherung vom ["iobroker backup"](https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup) Kommando oder dem [iobroker.backitup Adapter](https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md) in das Verzeichnis zu legen. Dabei muss der Dateiname auf `_backupiobroker.tar.gz` enden.

Das Startup Script des Containers wird dann die Datensicherung erkennen und beim ersten Start automatisch wiederherstellen. Der Fortschritt kann über das Container Logfile und später über den ioBroker Admin verfolgt werden.
:::

### Aktualisierung (Update)

::: danger WARNUNG
Bitte versichere dich, dass du ein gültiges Backup hast bevor du Updates durchführst!
:::

#### Linux System Pakete aktualisieren
Die im ioBroker Docker Image enthaltenen Linux Pakete lassen sich manuell über den integrierten Paketmanager `apt` aktualisieren. Dabei unterscheidet sich die Vorgehensweise nicht von der anderer auf Debian basierender Linux Systeme. In der Regel reich das Ausführen des folgenden Kommandos auf der Kommandozeile innerhalb des Docker Containers: 
```sh
apt-get update && apt-get upgrade
```
Da das ioBroker Docker Image regelmäßig neu erstellt wird, sollten die darin enthaltenen Paketversionen grundsätzlich aktuell sein. Aus diesem Grund kann die Aktualisierung der Linux System Pakete auch durch erneuten Download des ioBroker Docker Images und anschließendes Neuerstellen des Containers durchgeführt werden. 

#### ioBroker Adapter Aktualisierungen
Die ioBroker Adapter sind Teil deiner ioBroker Installation und werden daher nicht durch erneuten Download des Docker Images aktualisiert. Ob Aktualisierungen für deine Adapter vorliegen erfährst du über die ioBroker Admin Oberfläche. In der Regel lassen sich die Aktualisierungen auch dort durchführen. Mehr Informationen dazu findest du in der [Offiziellen ioBroker Dokumentation](https://www.iobroker.net/#de/documentation).

#### ioBroker js-controller Aktualisierungen
Ähnlich wie bei den Adapter Aktualisierungen verhält es sich beim js-controller. In der Admin Oberfläche erhälst du Informationen ob eine neue Aktualisierung zur Verfügung steht. Allerdings lässt sich der js-controller derzeit nur über die Kommandozeile aktualisieren, da für den Vorgang alle Prozesse des js-controllers beendet sein müssen. 
Eine manuelle Aktualisierung des js-controllers über die Kommandozeile des Docker Containers erfolgt mit den folgenden Kommandos:
```sh
pkill -u iobroker
iobroker update
iobroker upgrade self
```
Anschließend muss der Container manuell neu gestartet werden.

::: tip Pro Tip
Zur Vereinfachung der Prozedur für die Aktualisierung wurde ein Wartungsscript (maintenance script) in das Docker Image integriert. Mehr Informationen im Abschnitt ["Bewährte Methoden"](/de/iobroker-docker-image/docs/#bewahrte-methoden).
:::

### Hochrüstung (Upgrade)
Beim Wechsel der Hauptversion des ioBroker Docker Images (z.B. von v5.x.x auf v6.0.0) sprechen wir von einer Hochrüstung (Upgrade).
Im Gegensatz zur Aktualisierung (Update) kann eine Hochrüstung (Upgrade) sogenannte "Breaking Changes" enthalten. Dabei handelt es sich um Änderungen im Image die ggf. weitere Schritte erfordern um ioBroker wieder zum Laufen zu bringen.

Als Beispiel kann man hier die Aktualisierung der Node Version im Docker Image nennen. Auch wenn aktuelle Versionen des js-controllers mittlerweile gut auf eine Änderung der Node Version reagieren können und zusätzliche Schritte automatisiert durchführen, kann es weiterhin dazu kommen, dass nach einer Hochrüstung einzelne Adapter oder gar der gesamter ioBroker nicht mehr ordnungsgemäß funktionieren. 

Um solche Probleme zu umgehen empfehlen wir beim Wechsel der Hauptversion das Anlegen eines neuen Containers und anschließende Wiederherstellen der ioBroker Installation aus eineer ioBroker Backup Datei.<br>Folgendes Vorgehen hat sich dabei bewährt: 

1. Aktualisierung des js-controllers und aller Adapter auf den letzten Stand (stable)
2. Erstellen eines neuen Backups (backitup Adapter oder `iobroker backup`)
3. Kopieren des Backups in ein neues, leeres Datenverzeichnis
4. Stoppen und/oder Löschen des alten ioBroker Containers
5. Herunterladen des neuen ioBroker Docker Images
6. Erstellen eines neuen Containers aus dem aktuellen Image und einbinden des neuen Datenverzeichnisses
7. Starten des Containers und Überwachen der Log Ausgabe (erst das Container Log, dann das Protokoll in der Admin Oberfläche)

Hat alles geklappt wird der neue Container beim ersten Start das abgelegte Backup automatisch wiederherstellen und damit beginnen die Adapter neu zu installieren. Je nach System und Anzahl der Adapter kann dies eine Weile dauern. Den Fortschritt kann man aber gut im ioBroker Protokoll verfolgen. 
Sind die Adapter installiert müssen diese noch einmalig über die Admin Oberfläche gestartet werden.

::: warning Der Vollständigkeit halber...
Generell ist es natürlich auch beim Wechsel der Hauptversion des ioBroker Docker Images möglich den Container einfach nur aus dem neuen Docker Image neu zu erstellen. Allerdings können wir derzeit noch nicht ausschließen, dass es dabei bei einzelnen Adaptern zu Problemen kommt und dann manuell nachgearbeitet werden muss. Aus diesem Grund ist dieses Vorgehen aktuell nur für fortgeschrittene Benutzer zu empfehlen.  
:::

### Docker Healthcheck

Seit v5.1.0 enthält das ioBroker Docker Image einen Docker Healthcheck (Gesundheitscheck). Dieser prüft ob im Container der js-controller läuft und meldet dem Docker Dienst entsprechend "healthy" (gesund) or "unhealthy" (nicht gesund) zurück. 

Der Healthcheck macht bei seinem Test bis zu 5 Versuche in einem Interval von 15s mit einem Timeout von 5s. Dementsprechend würde der Container frühestens 60 Sekunden nachdem der js-controller beendet ist den Status "unhealthy" einnehmen.

::: tip Pro Tip
Da Docker selbst keine Aktionen aufgrund des healthy/ unhealthy Status eines Containers erlaubt, braucht es für eine Aktion (z.B. Neustart) einen Watchdog. Für genau diesen Zweck habe ich das folgende Projekt gestartet: [Watchdog for Docker](https://github.com/buanet/docker-watchdog).
:::

## Bewährte Methoden

### Vermeide latest Tag

Das Docker Tag "latest" (buanet/iobroker:latest) zeigt immer auf die aktuellste Version des Docker Images. Daher kann es vorkommen, dass beim Neuladen (z.B. Recreate) des Docker Images unbewusst eine neue Hauptversion geladen wird und ungewollt eine [Hochrüstung (Upgrade)](/de/iobroker-docker-image/docs/#hochrustung-upgrade) angestoßen wird. 

Damit dies nicht geschieht ist es in einer Produktivumgebung sinnvoll einen Versionstag zu verwenden. Für eine spezielle Version z.B. "buanet/iobroker:v5.2.0" oder für einen ganzen Hauptversionszweig z.B. "buanet/iobroker:latest-v5". So sind Aktualisierungen des Docker Images gefahrlos möglich und man hat immer die Kontrolle über die verwendete Version. 

### Benutze maintenance Script

Seit einiger Zeit beinhaltet das ioBroker Docker Image ein Wartungsscript (maintenance script) mit dem es möglich ist diverser Wartungsaufgaben, wie ein Update des js-controllers, zu erledigen. Dabei übernimmt das Script zum Beispiel das Beenden und Neustarten des Containers und sorgt dafür, dass der Container während des Updates ["healthy"](/de/iobroker-docker-image/docs/#docker-healthcheck) bleibt (wichtig wenn ein Watchdog eingesetzt wird).

Um mehr über die Möglichkeiten des Scripts zu erfahren wirf ein Blick auf die Hilfe des Scripts. Zum Aufrufen führe einfach `maintenance --help` in der Kommandozeile deines ioBroker Docker Containers aus.

### Migrieren der States zu Redis

Falls du die States Datenbank von deinem ioBroker auf Redis migrieren möchtest, willst du sicher die aktuellen States deines ioBrokers mit nehmen und nicht mit einer leeren StatesDB starten. Daher bietet es sich an, vor dem Setzen der Umgebungsvariablen für die States Datenbankverbindung in den Einstellungen des Containers, ioBroker zunächst manuell, innerhalb des Containers auf Redis umzustellen. Dies machst du durch Verwendung des Kommandos `iobroker setup custom` auf der Kommandozeile innerhalb des Containers. Das Kommando ruft einen Wizard auf über den du die Datenbankverbindung konfigurieren kannst. Mehr Details zu "iobroker setup custom" findest du in der [Offiziellen ioBroker Dokumentation](https://www.iobroker.net/#de/documentation).

::: warning HINWEIS
Damit `iobroker setup custom` funktioniert muss der ioBroker innerhalb des Containers gestoppt werden. Dazu empfiehlt es sich den Container in den [Maintenance Mode](/de/iobroker-docker-image/docs/#benutze-maintenance-script) zu versetzen.
:::

## Sonstiges

### Beta Tester

Falls du stets die neusten Korrekturen und Funktionen des Docker Images nutzen möchtest bist du herzlich dazu eingeladen unsere Beta-Versionen zu verwenden. Für mehr Informationen wirf am Besten einen Blick auf die [Docker image releases](https://github.com/buanet/ioBroker.docker/releases) und/ oder beteilige dich an der Diskussion im [ioBroker Discord Channel > Beta Testing & Feedback > docker-image](https://discord.gg/kN7nhx6C).<br>Vielen Dank. 

### Hinweise für Entwickler

...sind leider nur in [englisch](/iobroker-docker-image/docs/#notes-for-developers) verfügbar.
