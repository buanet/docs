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

Dies ist die offizielle Dokumentation für das ioBroker-Docker-Image. Sie enthält alle Informationen die du zum Einrichten und Konfigurieren eines ioBroker-Docker-Containers benötigst.

Wenn du Fragen zur Konfiguration deines ioBroker und seiner Adapter hast, lies bitte die [offizielle ioBroker Dokumentation](https://www.iobroker.net/#de/documentation).

::: warning Hinweis
Die Dokumentation zum ioBroker Docker Image wird grundsätzlich in Englisch geführt. Es kann daher vorkommen, dass die Übersetzung nicht immer auf dem aktuellsten Stand ist. Die englische Version der Dokumentation findest du [hier](/iobroker-docker-image/docs/).
:::

## Einstieg

Bei Fragen melde dich gerne in den [ioBroker Docker Image Discussions](https://github.com/buanet/ioBroker.docker/discussions) zu Wort oder tritt der ioBroker Community im [ioBroker Forum](https://forum.iobroker.net), [Discord](https://discord.gg/5jGWNKnpZ8) oder [Facebook](https://www.facebook.com/groups/440499112958264) bei.

Bitte vermeide es mich bei Support-Fragen direkt zu kontaktieren. Stelle deine Frage stattdessen lieber in der ioBroker Community und markiere mich bei Bedarf. So können alle ioBroker Benutzer von der Antwort profitieren und du erhältst ggf. auch Unterstützung von anderen Mitgliedern aus der Community.

Wenn du einen Fehler im ioBroker Docker Image gefunden oder eine Idee zur Verbesserung hast würde ich mich freuen wenn du einen [Issue auf Github](https://github.com/buanet/ioBroker.docker/issues) meldest. 

Die folgenden Möglichkeiten, einen ioBroker-Container einzurichten, sind nur Beispiele und können je nach Plattform variieren. Möglicherweise musst du Parameter ändern, hinzufügen oder ersetzen, um ioBroker so zu konfigurieren, wie es deinen Anforderungen entspricht.

### Starten per Kommandozeile

Um einen ersten Blick auf den ioBroker Docker-Container zu werfen, genügt es, einfach den folgenden sehr einfachen Docker-Befehl auszuführen:

```sh
docker run -p 8081:8081 --name iobroker -v iobrokerdata:/opt/iobroker buanet/iobroker:latest
```

::: tip TIP
Es ist immer eine gute Idee, die Verwendung des "latest" Tags für deine  Produktivumgebung zu vermeiden. Weitere Einzelheiten findest du unter ["Bewährte Methoden"](/de/iobroker-docker-image/docs/#bewahrte-methoden).
:::

### Starten per docker-compose

Du kannst deinen ioBroker Container natürlich auch per [docker-compose](https://docs.docker.com/compose/) starten. Hier ein Beispiel:

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
Es ist immer eine gute Idee, die Verwendung des "latest" Tags für deine  Produktivumgebung zu vermeiden. Weitere Einzelheiten findest du unter ["Bewährte Methoden"](/de/iobroker-docker-image/docs/#bewahrte-methoden).
:::

## Persistente Daten

Alle Konfigurationsdaten von ioBroker werden in `/opt/iobroker` gespeichert. Um diese Daten dauerhaft zu speichern, wird empfohlen, während des ersten Starts deines Containers einen (leeren) Ordner oder ein Docker-Volume nach `/opt/iobroker` zu mounten.<br />Seit der ioBroker Docker-Version 8.0.0 wird standardmäßig ein Volumen erstellt, wenn du keinen Ordner oder kein Volume nach `/opt/iobroker` mountest.

::: warning Anmerkung
Wenn du einen externen Speicher oder eine Dateifreigabe als ioBroker-Verzeichnis in den Container durchreichst, stelle sicher, dass der Speicher OHNE `noexec` Parameter eingebunden wurde. Andernfalls kann es zu Problemen bei der Ausführung des ioBroker innerhalb des Containers kommen. Für weitere Informationen wirf einen Blick in die zugehörigen [Github Issues](https://github.com/buanet/ioBroker.docker/issues?q=is%3Aissue+noexec).
:::

## Umgebungsvariablen (ENV)

Um deinen ioBroker-Container entsprechend deiner Anforderungen zu konfigurieren, ist es möglich, einige Umgebungsvariablen zu setzen. Bitte setze nur die Variablen, die du wirklich benötigst. Variablen, die du nicht setzt und die in der folgenden Tabelle als "Im Standard gesetzt = ja" markiert sind, werden dem Container automatisch hinzugefügt, wenn du einen neuen Container erstellst.

|Umgebungsvariable (ENV)|Im Standard gesetzt|Standardwert|Beschreibung|
|---|---|---|---|
|AVAHI|nein|false|Aktiviert den Avahi-Dienst, welcher z.B. vom yahka Adapter verwendet wird, kann "true" oder "false" sein.|
|DEBUG|nein|false|Aktiviert die erweiterte Log-Ausgabe für den container, kann `true`oder `false` sein. (!!! Bitte nur setzen wenn wirklich benötigt !!!)|
|IOB_ADMINPORT|nein|8081|Setzt den Port des ioBroker Admin, muss eine Zahl sein|
|IOB_BACKITUP_EXTDB|nein|false|Aktiviert die Backup-Möglichkeit von externen Datenbanken im ioBroker backitup Adapter, kann `true`oder `false` sein. (!!! Bitte stelle sicher, dass du [dies](#backup) gelesen hast !!!)|
|IOB_MULTIHOST|nein|[not set]|Setzt den ioBroker als `master` oder `slave` für Multihost Unterstützung|
|IOB_OBJECTSDB_TYPE|nein|jsonl|Setzt den Typ der ioBroker Objects DB, kann `jsonl`, `file`(veraltet) oder `redis` sein|
|IOB_OBJECTSDB_HOST|nein|127.0.0.1|Setzt den/ die Host(s) für die ioBroker Objects DB, kann im Fall von Redis Sentinel eine Komma getrennte Liste sein|
|IOB_OBJECTSDB_PORT|nein|9001|Setzt den/ die Port(s) für die ioBroker Objects DB, kann im Fall von Redis Sentinel eine Komma getrennte Liste sein|
|IOB_OBJECTSDB_PASS|nein|none|Setzt (optionales) Passwort für die ioBroker Objects DB in Redis|
|IOB_OBJECTSDB_NAME|nein|mymaster|Setzt den Namen des Redis Sentinel Masters|
|IOB_STATESDB_TYPE|nein|jsonl|Setzt den Typ der ioBroker States DB, kann `jsonl`, `file`(veraltet) oder `redis` sein|
|IOB_STATESDB_HOST|nein|127.0.0.1|Setzt den/ die Host(s) für die ioBroker States DB, kann im Fall von Redis Sentinel eine Komma getrennte Liste sein|
|IOB_STATESDB_PORT|nein|9000|Setzt den/ die Port(s) für die ioBroker States DB, kann im Fall von Redis Sentinel eine Komma getrennte Liste sein|
|IOB_STATESDB_PASS|nein|none|Setzt (optionales) Passwort für die ioBroker States DB in Redis|
|IOB_STATESDB_NAME|nein|mymaster|Setzt den Namen des Redis Sentinel Masters|
|LANG|ja|de_DE.UTF&#x2011;8|Die folgenden locales sind vorgeneriert: de_DE.UTF-8, en_US.UTF-8|
|LANGUAGE|ja|de_DE:de|Die folgenden locales sind vorgeneriert: de_DE:de, en_US:en|
|LC_ALL|ja|de_DE.UTF-8|Die folgenden locales sind vorgeneriert: de_DE.UTF-8, en_US.UTF-8|
|OFFLINE_MODE|nein|false| Setze dies aud `true` wenn dein ioBroker keine oder nur eingeschränkte Verbindung zum Internet hat. (!!! Verwendung auf eigene Gefahr !!!)|
|PACKAGES|nein|[not set]|Installiert zusätzliche Linux Pakete. Pakete sollten durch Leerzeichen getrennt sein. Beispiel: "Paket1 Paket2 Paket3".|
|PERMISSION_CHECK|nein|true|Prüft alle nötigen Berechtigungen beim Start des Containers, kann `true` oder `false` sein (!!! Verwendung auf eigene Gefahr !!!)|
|SETGID|ja|1000|In manchen Fällen ist es notwendig die GID des ioBroker Benutzers im Container anzupassen, damit diese zu einer entsprechenden Gruppe auf dem Host System passt.|
|SETUID|ja|1000|In manchen Fällen ist es notwendig die UID des ioBroker Benutzers im Container anzupassen, damit diese zu einem entsprechenden Benutzer auf dem Host System passt.|
|TZ|ja|Europe/Berlin|Setzt die Zeitzone des Containers. Alle gültigen Linux Zeitzonen sind möglich.|
|USBDEVICES|nein|none|Setzt die notwendigen Berechtigungen auf gemountete Geräte wie z.B. `/dev/ttyACM0`. Mehrere Geräte mit Semikolon `;` trennen `/dev/ttyACM0;/dev/ttyACM1`|

## Netzwerke

Die oben genannten Beispiele besitzen keine spezielle Netzwerkkonfiguration. In einem solchen Fall greift Docker auf das standard Bridge-Netzwerk zurück. Grundsätzlich gibt es allerdings [ein paar Gründe](https://docs.docker.com/network/bridge/#differences-between-user-defined-bridges-and-the-default-bridge) weshalb es sinnvoll sein könnte, ein benutzerdefiniertes Bridge-Netzwerk zu verwenden.

Iobroker in einem Bridge-Netzwerk zu betreiben funktioniert grundsätzlich gut (sofern man die vom Adapter benötigten Ports entsprechend durch reicht) für die meisten ioBroker Adapter, und ist die perfekte Option um einen ersten Blick auf ioBroker zu werfen. Allerdings gibt es Adapter die Techniken wie [Multicast](https://en.wikipedia.org/wiki/Multicast) oder [Broadcast](https://en.wikipedia.org/wiki/Broadcasting_(networking)), z.B. zur automatischen Erkennung von IoT-Geräten im Netzwerk, verwenden. In diesem Fall ist es notwendig sich mit dem Netzwerkmodus [host](https://docs.docker.com/network/host/) oder dem [MACVLAN](https://docs.docker.com/network/macvlan/) auseinander zu setzen. 

Weitere Informationen zu Netzwerk unter Docker findest du in der [Offiziellen Docker Dokumentation](https://docs.docker.com/network/). 

## Erweiterte Konfiguration

### Einbinden von USB-Geräten

Für das Einbinden von USB-Geräten in den ioBroker Docker Container ist es erforderlich, das Gerät [beim Start des Containers entsprechend einzubinden](https://docs.docker.com/engine/reference/commandline/run/#add-host-device-to-container---device). Außerdem ist es erforderlich das eingebundene Gerät in der Umgebungsvariable `USBDEVICES` aufzuführen. Letzteres sorgt dafür, dass der ioBroker innerhalb des Containers die nötigen Berechtigungen auf das Gerät bekommt.

::: warning Hinweis
Dies ist eine UND Bedingung. Für eine ordnungsgemäße Funktion müssen beide Punkte umgesetzt werden. Allein das setzen der [Umgebungsvariable](#umgebungsvariablen-env) `USBDEVICES` ist nicht ausreichend.
:::

### Startskripte

Mit Hilfe der Startskripte (user scripts) ist es möglich beim Start des ioBroker Containers eigene Skripte ausführen zu lassen. Aktiviert wird das Feature indem man, analog zum ioBroker Ordner, einen weiteren Ordner (oder ein Volume) unter `/opt/userscripts` mountet.

Nach dem Start befinden sich dann zwei Beispielscripte im Ordner. Zur Aktivierung der Scripte muss lediglich die Endung `_example` im Namen des Scripts entfernt werden. Das Script `userscript_firststart.sh` wird nur beim allerersten Start eines neuen Containers ausgeführt, das Script `userscript_everystart.sh` bei jedem Containerstart.

Probiere es einfach aus. In den Scripten ist Beispielcode enthalten der eine Ausgabe im Log des Containers erzeugt. Den entsprechenden Abschnitt findest du im Log in `Step 4 of 5: Applying special settings`.

### Multihost

Mit Hilfe der Umgebungsvariablen `IOB_MULTIHOST` und den Umgebungsvariablen für Objects und States DB Verbindungen lässt sich der ioBroker Container als Multihost Master oder Slave betreiben. Diese Funktion richtet sich mehr oder weniger an erfahrene Benutzer. Bitte stelle vor der Konfiguration der Umgebungsvariablen sicher, dass du mit dem Multihost-Feature von ioBroker vertraut bist und weißt was der Befehl  `iobroker setup custom` tut. 

Bei der Verwendung der Umgebungsvariablen für den Multihost Betrieb ist keine Ausführung von  `iobroker multihost enable` oder `iobroker multihost connect` innerhalb des Containers notwendig. Bei korrekter Konfiguration wird all dies durch das Startscript des Containers erledigt.   

Allgemeine Informationen zur Multihost-Funktion von ioBroker findest du in der [Offiziellen ioBroker Dokumentation](https://www.iobroker.net/docu/index-24.htm?page_id=3068&lang=de).

### Redis

Mit v8.0.0 des ioBroker Docker Images wurde die Integration von Redis als Object und/ oder States DB komplett überarbeitet und erweitert. Grundsätzlich basiert die Konfiguration lediglich auf den Umgebungsvariablen für DB `TYPE`, `HOST` und `PORT`. Mit der Unterstützung von Authentifizierung und Redis Sentinel sind jetzt allerdings noch weitere Features verfügbar wie etwa [Authentifizierung](#authentifizierung) oder die Unterstützung für [Redis Sentinel Cluster](#redis-sentinel-cluster).

Für einige grundlegende Informationen zum Thema Redis und ioBroker lies bitte unbedingt diesen [ioBroker Forum Post von Apollon77](https://forum.iobroker.net/topic/26327/redis-in-iobroker-%C3%BCberblick). 

#### Authentifizierung

Mit den Umgebungsvariablen  `IOB_OBJECTS_DB_PASS` und `IOB_STATESDB_PASS` ist es möglich eine Authentifizierung beim Zugriff auf die Redis Datenbank zu benutzen. Damit dies funktioniert ist eine entsprechende Konfiguration von Redis über die redis.conf erforderlich.

#### Redis Sentinel Cluster

Es ist außerdem möglich einen Redis Sentinel Cluster für die Objects und/ oder States DB zu verwenden. Diese Feature wird in ioBroker automatisch konfiguriert, wenn die Umgebungsvariablen `IOB_OBJECTSDB_HOST` und/ oder `IOB_STATESDB_HOST` eine Komma getrennte Liste enthalten. Falls gewünscht können analog dazu auch die Umgebungsvariablen `IOB_OBJECTSDB_PORT`und/ oder `IOB_STATESDB_PORT` Komma separierte Listen enthalten. Die Ports werden dann in der angegebenen Reihenfolge für die Hosts verwendet.<br>
Die Verwendung der Umgebungsvariablen `IOB_OBJECTSDB_NAME` und `IOB_STATESDB_NAME`ist optional. Wird kein Wert gesetzt nutzt der ioBroker den Redis Default Wert `mymaster`als Namen für die Redis Sentinel Master DB.

## Wartung

### Sicherung

Der einfachst Weg deinen ioBroker zu sichern ist die Verwendung des integrierten [`iobroker backup` Kommandos](https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup) oder des [iobroker.backitup Adapters](https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md).

Eine Weitere Möglichkeit ist das Sichern des Verzeichnisses, welches du unter "/opt/iobroker" in den Container gemountet hast. Die Sicherung erfolgt dabei über den Docker Host. Beim Kopieren, Verschieben oder Packen der Dateien sollte der ioBroker Container gestoppt sein.  

::: warning Hinweis
Beim direkten Kopieren des Verzeichnisses sollte darauf geachtet werden, dass alle Berechtigungen der Dateien und Verzeichnisse erhalten bleiben.
:::

#### Sichern von externen Datenbanken mit iobroker.backitup im Docker Container

Für die Sicherung von externen Datenbanken (z.B. Redis, InfluxDB, PostgresSQL und MySQL) über den iobroker.backitup Adapter im Docker Container gibt es einige Einschränkungen. [Dieser kleine Leitfaden](hdocs_backitup.md) hilft dir dabei zu verstehen warum einige Optionen im Adapter standardmäßig ausgegraut sind und was man dagegen tun kann. 

### Wiederherstellung

Die Wiederherstellung deines ioBrokers kannst du über das integrierte [`iobroker backup` Kommando](https://www.iobroker.net/docu/index-98.htm?page_id=3971&lang=de#iobroker_backup) oder den [iobroker.backitup Adapter](https://github.com/simatec/ioBroker.backitup/blob/master/docs/de/backitup.md) erledigen.

### Aktualisierung (Update)

::: danger WARNUNG
Bitte versichere dich, dass du ein gültiges Backup hast bevor du Updates oder Upgrades durchführst!<br>
Außerdem ist es absolut empfehlenswert vor dem Update des Containers alle Adapter, sowie den js-controller auf den letzten Stand (stable) zu bringen!
:::

#### Linux System Pakete aktualisieren
Die im ioBroker Docker Image enthaltenen Linux Pakete lassen sich manuell über den integrierten Paketmanager `apt` aktualisieren. Dabei unterscheidet sich die Vorgehensweise nicht von der anderer auf Debian basierender Linux Systeme und erfolgt über die Kommandozeile des Containers.

Beachte, dass der empfohlene Weg allerdings das Herunterladen des aktuellen ioBroker Docker Images und anschließende Neuerstellen des Containers ist. 

#### ioBroker Adapter Aktualisierungen
Die ioBroker Adapter sind Teil deiner ioBroker Installation und werden daher nicht durch erneuten Download des Docker Images aktualisiert. Ob Aktualisierungen für deine Adapter vorliegen erfährst du über die ioBroker Admin Oberfläche. In der Regel lassen sich die Aktualisierungen auch dort durchführen. Mehr Informationen dazu findest du in der [Offiziellen ioBroker Dokumentation](https://www.iobroker.net/#de/documentation).

#### ioBroker js-controller Aktualisierungen

Mit mindestens ioBroker Docker Image v8.1.0, js-controller v5.0.10 und admin v6.9.1 ist es jetzt möglich, js-controller direkt von der Admin-Benutzeroberfläche aus zu aktualisieren, indem du einfach auf die Schaltfläche "Aktualisieren" im Tab "Hosts" klickst.

Natürlich kannst du immer noch das js-controller-Upgrade über die Befehlszeile durchführen.

**Ohne die Hilfe des [Maintenance-Scripts](#use-maintenance-script), auch bekannt als "der hacky Weg"**
```sh
pkill -u iobroker
iobroker update
iobroker upgrade self
```
Anschließend muss der Container manuell neu gestartet werden.

**Mit Hilfe des [Maintenance-Scripts](#use-maintenance-script), auch bekannt als "der empfohlene Weg"**
```sh
maintenance on
maintenance upgrade
maintenance off
```
Abhängig von der Restart Policy des Containers wir der Container automatisch gestoppt/ neu gestartet.  

### Hochrüstung (Upgrade)

Wenn du deine ioBroker-Installation auf eine neue Hauptversion des ioBroker Docker-Images (z. B. von v7.x.x auf v8.x.x) aktualisierst, führt dies zu einem Upgrade. Während Updates normalerweise keine Auswirkungen auf die Funktion deines ioBrokers haben sollten, können Upgrades einige "Breaking Changes" enthalten und zusätzliche Schritte erfordern.<br>
Wenn du planst, deinen Docker-Container auf eine neue Hauptversion zu aktualisieren, stelle sicher, dass du die [Release Notes](https://github.com/buanet/ioBroker.docker/releases/latest) gelesen hast.

::: danger WARNUNG
Es besteht immer ein geringes Risiko eines Fehlers beim Upgrade auf eine neue Hauptversion. Um dieses Risiko zu minimieren, stelle sicher, dass dein js-controller und deine Adapter auf dem neuesten Stand sind und prüfe erneut ob du ein gültiges [Backup](#backup) deines ioBrokers hast!
:::

Im Allgemeinen erfolgt das Upgrade auf eine neue Hauptversion genauso wie jedes andere Update eines Docker-Images, indem du deinen Container einfach aus dem neuen ioBroker Docker-Image neu erstellst.

Es gibt einige seltene Fälle, wenn die neue Hauptversion des Docker-Images eine neue Hauptversion von Node enthält, bei denen der js-controller einige Adapter nicht erfolgreich neu kompilieren kann. Wenn dies geschieht, versuche bitte, die betroffenen Adapter neu zu installieren, und sieh dir das interne ioBroker-Protokoll an.

Falls du mögliche Upgrade-Probleme von vornherein vermeiden oder mit einem sauberen ioBroker-Verzeichnis beginnen möchtest, ist es immer eine gute Option, das Backup- und Wiederherstellungsverfahren zu verwenden. Du kannst dies durch folgende einfache Schritte tun:

1. Erstellen eines neuen Backups
2. Erstellen eines neuen, leeren Verzeichnisses für die ioBroker Daten auf dem Host
3. Kopieren der letzten Backup-Datei in das neue Verzeichnis
4. Stoppen und Löschen des alten Containers
5. Erstellen eines neuen Containers aus dem aktuellsten Image mit der selben Konfiguration wie zuvor, aber mit dem neuen Verzeichnis als ioBroker Datenverzeichnis
6. Beobachten des Container Logs beim Start des neuen Containers bis ioBroker gestartet wurde
7. Wiederherstellen des Backups über die Kommandozeile oder den ioBroker.backitup Adapter
8. Überprüfen der Installation der Adapter nach erfolgreicher Wiederherstellung

### Docker Health Check

Seit v5.1.0 enthält das ioBroker Docker Image einen Docker Health Check (Gesundheitscheck). Dieser prüft ob im Container der js-controller läuft und meldet dem Docker Dienst entsprechend "healthy" (gesund) or "unhealthy" (nicht gesund) zurück. 

Der Health Check macht bei seinem Test bis zu 5 Versuche in einem Interval von 15s mit einem Timeout von 5s. Dementsprechend würde der Container frühestens 60 Sekunden nachdem der js-controller beendet ist den Status "unhealthy" einnehmen.

::: tip Pro Tip
Da Docker selbst keine Aktionen aufgrund des healthy/ unhealthy Status eines Containers erlaubt, braucht es für eine Aktion (z.B. Neustart) einen Watchdog. Für genau diesen Zweck habe ich das folgende Projekt gestartet: [Watchdog for Docker](https://github.com/buanet/docker-watchdog).
:::

## Bewährte Methoden

### Vermeide latest Tag

Das Docker Tag "latest" (buanet/iobroker:latest) zeigt immer auf die aktuellste Version des Docker Images. Daher kann es vorkommen, dass beim Neuladen (z.B. Recreate) des Docker Images unbewusst eine neue Hauptversion geladen wird und ungewollt eine [Hochrüstung (Upgrade)](/de/iobroker-docker-image/docs/#hochrustung-upgrade) angestoßen wird. 

Damit dies nicht geschieht ist es in einer Produktivumgebung sinnvoll einen Versionstag zu verwenden. Für eine spezielle Version z.B. "buanet/iobroker:v5.2.0" oder für einen ganzen Hauptversionszweig z.B. "buanet/iobroker:latest-v5". So sind Aktualisierungen des Docker Images gefahrlos möglich und man hat immer die Kontrolle über die verwendete Version. 

### Benutze Maintenance Script

Das ioBroker Docker-Image enthält ein kleines Wartungsskript, das dir bei der Verwaltung deines ioBroker Docker-Containers hilft. Du kannst dieses Skript beispielsweise verwenden, um deinen Container in den Wartungsmodus zu versetzen (ioBroker wird gestoppt, aber der Container bleibt gesund) und js-controller-Updates anzuwenden. 
Gib einfach `maintenance --help` an der Befehlszeile des Containers ein, um zu sehen, was das Skript für dich tun kann.

Mit Docker-Image v9.0.0 wurden einige Sicherheitsänderungen am Wartungsskript vorgenommen. Es ist jetzt nicht mehr möglich, das Skript als Benutzer `root` aufzurufen. Da die Verwendung von root auf der Befehlszeile von Containern sehr geläufig ist, wurde dieses Problem behoben, indem der Befehl `maintenance` in den `iobroker`-Befehl aufgenommen wurde. Zum Beispiel so:

```sh
iobroker maintenance on
iob maint on
iob m on
```
Dadurch wird sichergestellt, dass der Befehl immer als Benutzer `iobroker` ausgeführt wird.

### Migrieren der States zu Redis

Falls du eine existierende ioBroker Installation zu Redis als Objects und/ oder States DB migrieren willst, empfiehlt es sich, die Migration mit Hilfe des Befehls `iob setup custom` zunächst innerhalb des Containers durchzuführen. Nur so ist es möglich die bereits vorhandenen Objekte und Zustände zu Redis zu migrieren. Im Anschluss daran sind dann natürlich die entsprechenden Umgebungsvariablen für den Container zu setzen. Für weitere Informationen zu `iob setup custom` wirf bitte einen Blick in die [offizielle ioBroker Dokumentation](https://www.iobroker.net/#de/documentation).

::: warning HINWEIS
Damit `iob setup custom` funktioniert muss der ioBroker innerhalb des Containers gestoppt werden. Dazu empfiehlt es sich den Container mit Hilfe des [Maintenance Scripts](/de/iobroker-docker-image/docs/#benutze-maintenance-script) in den Maintenance Mode zu versetzen.
:::

## Sonstiges

### Beta Tester

Falls du stets die neusten Korrekturen und Funktionen des Docker Images nutzen möchtest bist du herzlich dazu eingeladen unsere Beta-Versionen zu verwenden. Für mehr Informationen wirf am Besten einen Blick auf die [Docker image releases](https://github.com/buanet/ioBroker.docker/releases) und/ oder beteilige dich an der Diskussion im [ioBroker Discord Channel > Beta Testing & Feedback > docker-image](https://discord.gg/5jGWNKnpZ8).<br>Vielen Dank. 

### Hinweise für Entwickler

...sind leider nur in [englisch](/iobroker-docker-image/docs/#notes-for-developers) verfügbar.

---

#### :warning: In Arbeit :warning:

Diese Dokumentation ist noch in Arbeit. Wenn du Verbesserungsvorschläge hast, lass es mich wissen indem du einen [issue](https://github.com/buanet/docs/issues) meldest oder gleich [selbst editierst](https://github.com/buanet/docs/blob/main/docs/de/projects/iobroker-docker-image/docs.md) und einen pull request erstellst.

Falls noch Fragen unbeantwortet geblieben sind, schaue gerne in der ioBroker Community auf [Discord](https://discord.gg/5jGWNKnpZ8), [Facebook](https://www.facebook.com/groups/440499112958264) oder im [ioBroker Forum](https://forum.iobroker.net) vorbei.
