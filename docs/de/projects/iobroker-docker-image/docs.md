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

Bei Fragen melde dich einfach im [ioBroker Forum Thread](http://forum.iobroker.net/viewtopic.php?f=17&t=5089) zu Wort oder tritt der ioBroker Community auf [Discord](https://discord.gg/kN7nhx6C) oder [Facebook](https://www.facebook.com/groups/440499112958264) bei.

Bitte vermeide es mich bei Support-Fragen direkt zu kontaktieren. Stelle deine Frage stattdessen lieber in der ioBroker Community und markiere mich bei Bedarf. So können alle ioBroker Benutzer von der Antwort profitieren und du erhältst ggf. auch Unterstützung von anderen Mitgliedern aus der Community.

Wenn du einen Fehler im ioBroker Docker Image gefunden oder eine Idee zur Verbesserung hast würde ich mich freuen wenn du einen [Issue auf Github](https://github.com/buanet/ioBroker.docker/issues) meldest. 

Die nun folgenden Möglichkeiten einen ioBroker Container zu starten sind nur Beispiele und können von Platform zu Platform variieren. Möglicherweise musst du Parameter ändern, hinzufügen oder ersetzen um ioBroker für dich und deine Umgebung passend zu konfigurieren.

### Starten per Kommandozeile

Um einen ersten Blick auf den Docker-Container von ioBroker zu werfen reicht es aus einfach den folgenden `docker run`-Befehl auszuführen:

```sh
docker run -p 8081:8081 --name iobroker -v iobrokerdata:/opt/iobroker buanet/iobroker:latest
```

::: tip TIP
Es ist immer eine gute Idee, die Verwendung des "latest" Tags für deine  Produktivumgebung zu vermeiden. Weitere Einzelheiten findest du unter ["Bewährte Methoden"](/de/iobroker-docker-image/docs/#bewahrte-methoden).
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
Es ist immer eine gute Idee, die Verwendung des "latest" Tags für deine  Produktivumgebung zu vermeiden. Weitere Einzelheiten findest du unter ["Bewährte Methoden"](/de/iobroker-docker-image/docs/#bewahrte-methoden).
:::

## Persistente Daten

Alle Konfigurationsdaten werden in `/opt/iobroker`gespeichert. Damit deine Daten nicht verloren gehen, ist es empfehlenswert beim Start des Containers ein (leeres) Verzeichnis oder ein Docker Volume für `/opt/iobroker` einzuhängen. Seit ioBroker Docker Image v8.0.0 wird Docker ein Standard-Volume erstellen, wenn kein Verzeichnis oder Volume für `/opt/iobroker` eingebunden ist. 

::: warning Anmerkung
Wenn du einen externen Speicher oder eine Dateifreigabe als ioBroker-Verzeichnis in den Container durchreichst, stelle sicher, dass der Speicher OHNE `noexec` Parameter eingebunden wurde. Andernfalls kann es zu Problemen bei der Ausführung des ioBroker innerhalb des Containers kommen. Für weitere Informationen wirf einen Blick in die zugehörigen [Github Issues](https://github.com/buanet/ioBroker.docker/issues?q=is%3Aissue+noexec).
:::

## Umgebungsvariablen (ENV)

Um deinen ioBroker-Container entsprechend deiner Anforderungen zu konfigurieren, ist es möglich, einige Umgebungsvariablen zu setzen. Bitte setze nur die Variablen, die du wirklich benötigst. Variablen, die du nicht setzt und die in der folgenden Tabelle als "Im Standard gesetzt = ja" markiert sind, werden dem Container automatisch hinzugefügt, wenn du einen neuen Container erstellst.

|Umgebungsvariable (ENV)|Im Standard gesetzt|Standardwert|Beschreibung|
|---|---|---|---|
|AVAHI|nein|false|Aktiviert den Avahi-Dienst, welcher z.B. vom yahka Adapter verwendet wird, kann "true" oder "false" sein.|
|DEBUG|nein|false|Aktiviert die erweiterte Logausgabe für den container, kann `true`oder `false` sein. (!!! Bitte nur setzen wenn wirklich benötigt !!!)|
|IOB_ADMINPORT|nein|8081|Setzt den Port des ioBroker Admin, muss eine Zahl sein|
|IOB_BACKITUP_EXTDB|nein|false|Aktiviert die Backupmöglichkeit von externen Datenbanken im ioBroker backitup Adapter, kann `true`oder `false` sein. (!!! Bitte stelle sicher, dass du [dies](#backup) gelesen hast !!!)|
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
|PACKAGES|nein|[not set]|Installiert zusätzliche Linux Pakete. Pakete sollten durch Leerzeichen getrennt sein. Beispiel: "Paket1 Paket2 Paket3".|
|PERMISSION_CHECK|nein|true|Prüft alle nötigen Berechtigungen beim Start des Containers, kann `true` oder `false` sein (Verwendung auf eigene Gefahr)|
|SETGID|ja|1000|In manchen Fällen ist es notwendig die GID des ioBroker Benutzers im Container anzupassen, damit diese zu einer entsprechenden Gruppe auf dem Host System passt.|
|SETUID|ja|1000|In manchen Fällen ist es notwendig die UID des ioBroker Benutzers im Container anzupassen, damit diese zu einem entsprechenden Benutzer auf dem Host System passt.|
|TZ|ja|Europe/Berlin|Setzt die Zeitzone des Containers. Alle gültigen Linux Zeitzonen sind möglich.|
|USBDEVICES|nein|none|Setzt die notwendigen Berechtigungen auf gemountete Geräte wie z.B. `/dev/ttyACM0`. Mehrere Geräte mit Semikolon `;` trennen `/dev/ttyACM0;/dev/ttyACM1`|
|ZWAVE|nein|false|Installiert Openzwave zur Ünterstützung des zwave Adapters, kann `true` or `false` sein|

## Netzwerke

Die oben genannten Beispiele besitzen keine spezielle Netzwerkkonfiguration. In einem solchen Fall greift Docker auf das standard Bridge-Netzwerk zurück. Grundsätzlich gibt es allerdings [ein paar Gründe](https://docs.docker.com/network/bridge/#differences-between-user-defined-bridges-and-the-default-bridge) weshalb es sinnvoll sein könnte, ein benutzerdefiniertes Bridge-Netzwerk zu verwenden.

Iobroker in einem Bridge-Netzwerk zu betreiben funktioniert grundsätzlich gut (sofern man die vom Adapter benötigten Ports entsprechend durch reicht) für die meisten ioBroker Adapter, und ist die perfekte Option um einen ersten Blick auf ioBroker zu werfen. Allerdings gibt es Adapter die Techniken wie [Multicast](https://en.wikipedia.org/wiki/Multicast) oder [Braoadcast](https://en.wikipedia.org/wiki/Broadcasting_(networking)), z.B. zur automatischen Erkennung von IoT-Geräten im Netzwerk, verwenden. In diesem Fall ist es notwendig sich mit dem Netzwerkmodus [host](https://docs.docker.com/network/host/) oder dem [MACVLAN](https://docs.docker.com/network/macvlan/) auseinander zu setzen. 

Weitere Informationen zu Netzwerk unter Docker findest du in der [Offiziellen Docker Dokumentation](https://docs.docker.com/network/). 

## Erweiterte Konfiguration

### Einbinden von USB-Geräten

Für das Einbinden von USB-Geräten in den ioBroker Docker Container ist es erforderlich, das Gerät [beim Start des Containers entsprechend einzubinden](https://docs.docker.com/engine/reference/commandline/run/#add-host-device-to-container---device). Außerdem ist es erforderlich das eingebundene Gerät in der Umgebungsvariable `USBDEVICES` aufzuführen. Letzteres sorgt dafür, dass der ioBroker innerhalb des Containers die nötigen Berechtigungen auf das Gerät bekommt.

::: warning Hinweis
Dies ist eine UND Bedingung. Für eine ordnungsgemäße Funktion müssen beide Punkte umgesetzt werden. Allein das setzen der [Umgebungsvariable](#umgebungsvariablen-env) `USBDEVICES` ist nicht ausreichend.
:::

### Startskripte

Mit Hilfe der Startskripte (userscripts) ist es möglich beim Start des ioBroker Containers eigene Skripte ausführen zu lassen. Aktiviert wird das Feature indem man, analog zum ioBroker Ordner, einen weiteren Ordner (oder ein Volume)  unter `/opt/userscripts` mountet.

Nach dem Start befinden sich dann zwei Beispielscripte im Ordner. Zur Aktivierung der Scripte muss lediglich die Endung `_example` im Namen des Scripts entfernt werden. Das Script `userscript_firststart.sh` wird nur beim allerersten Start eines neuen Containers ausgeführt, das Script `userscript_everystart.sh` bei jedem Containerstart.

Probiere es einfach aus. In den Scripten ist Beispielcode enthalten der eine Ausgabe im Log des Containers erzeugt. Den entsprechenden Abschnitt findest du im Log in `Step 4 of 5: Applying special settings`.

### Multihost

Mit Hilfe der Umgebungsvariablen `IOB_MULTIHOST` und den Umgebungsvariablen für Objects und States DB Verbindungen lässt sich der ioBroker Container als Multihost Master oder Slave betreiben. Diese Funktion richtet sich mehr oder weniger an erfahrene Benutzer. Bitte stelle vor der Konfiguration der Umgebungsvariablen sicher, dass du mit dem Multihost-Feature von ioBroker vertraut bist und weißt was der Befehl  `ìobroker setup custom` tut. 

Bei der Verwendung der Umgebungsvariablen für den Multihost Betrieb ist keine Ausführung von  `iobroker multihost enable` oder `iobroker multihost connect` innerhalb des Containers notwendig. Bei korrekter Konfiguration wird all dies durch das Startscript des Containers erledigt.   

Allgemeine Informationen zur Multihost-Funktion von ioBroker findest du in der [Offiziellen ioBroker Dokumentation](https://www.iobroker.net/docu/index-24.htm?page_id=3068&lang=de).

### Redis

Mit v8.0.0 des ioBroker Docker Images wurde die Integration von Redis als Object und/ oder States DB komplett überarbeitet und erweitert. Grundsätzlich basiert die Konfiguration öediglich auf den Umgebungsvariablen für DB `TYPE`, `HOST` und `PORT`. Mit der Unterstüzung von Authentifizierung und Redis Sentinel sind jetzt allerdings noch weitere Features verfügbar.

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

Der einfachste Weg ist allerdings das Herunterladen des aktuellen ioBroker Docker Images und anschließende Neuerstellen des Containers. 

#### ioBroker Adapter Aktualisierungen
Die ioBroker Adapter sind Teil deiner ioBroker Installation und werden daher nicht durch erneuten Download des Docker Images aktualisiert. Ob Aktualisierungen für deine Adapter vorliegen erfährst du über die ioBroker Admin Oberfläche. In der Regel lassen sich die Aktualisierungen auch dort durchführen. Mehr Informationen dazu findest du in der [Offiziellen ioBroker Dokumentation](https://www.iobroker.net/#de/documentation).

#### ioBroker js-controller Aktualisierungen
Ähnlich wie bei den Adapter Aktualisierungen verhält es sich beim js-controller. In der Admin Oberfläche erhältst du Informationen ob eine neue Aktualisierung zur Verfügung steht. Allerdings lässt sich der js-controller derzeit nur über die Kommandozeile aktualisieren, da für den Vorgang alle Prozesse des js-controllers beendet sein müssen. 
Eine manuelle Aktualisierung des js-controllers über die Kommandozeile des Docker Containers erfolgt mit den folgenden Kommandos:
```sh
pkill -u iobroker
iobroker update
iobroker upgrade self
```
Anschließend muss der Container manuell neu gestartet werden.

::: tip Pro Tip
Zur Vereinfachung der Prozedur für die Aktualisierung wurde ein Wartungsscript (maintenance script) in das Docker Image integriert. Mehr Informationen im Abschnitt ["Bewährte Methoden"](#bewahrte-methoden).
:::

### Hochrüstung (Upgrade)

::: danger WARNUNG
Bitte versichere dich, dass du ein gültiges Backup hast bevor du Updates oder Upgrades durchführst!<br>
Außerdem ist es absolut empfehlenswert vor dem Update des Containers alle Adapter, sowie den js-controller, auf den letzten Stand (stable) zu bringen!
:::

Beim Wechsel der Hauptversion des ioBroker Docker Images (z.B. von v7.x.x auf v8.0.0) sprechen wir von einer Hochrüstung (Upgrade).
Im Gegensatz zur Aktualisierung (Update) kann eine Hochrüstung (Upgrade) sogenannte "Breaking Changes" enthalten. Dabei handelt es sich um Änderungen im Image die ggf. weitere Schritte erfordern um ioBroker wieder zum Laufen zu bringen.<br>
Wenn du also eine Hochrüstung auf eine neue Hauptversion planst, stelle bitte sicher, dass du einen Blick in die [Release Notes](https://github.com/buanet/ioBroker.docker/releases/latest) der aktuellen Version geworfen hast.

Im Grunde genommen ist es möglich das Upgrade einfach durch Herunterladen des neuen Images und Neusterstellen des ioBroker Docker Containers durchzuführen. So wie es auch bei einfachen Updates gemacht werden kann. In den meisten Fällen erkennt der js-controller das Upgrade und versucht alle Adapter entsprechend zu prüfen und zu aktualisieren. In manchen Fällen können jedoch Probleme auftreten. Die kann im Anschluss weitere Schritte erfordern. Etwa das Neuinstallieren von Adaptern. Sofern du ein aktuelles Backup deines ioBrokers hast, schlage ich vor, dass du diesen Schritt einfach probierst.

Für den Fall, dass etwas schief geht, oder du von vorn herein auf Nummer sicher gehen willst, ist es imemr eine gute Wahl das Upgrade über "Backup und Restore" durchzuführen. Dabei erstellst du einen neuen, frischen Container aus der neusten Image Version und stellst ein Backup wieder her.  

Hier ein Beispiel der notwendigen Schritte: 

1. Erstellen eines neuen Backups
2. Erstellen eines neuen, leeren Verzeichnisses für die ioBroker Daten auf dem Host
3. Kopieren des letzten Backupfiles in das neue Verzeichnis
4. Stoppen und Löschen des alten Containers
5. Erstellen eines neuen Containers aus dem aktuellsten Image mit der selben Konfiguration wie zuvor, aber mit dem neuen Verzeichnis als ioBroker Datenverzeichnis
6. Beobachten des Container Logs beim Start des neuen Containers bis ioBroker gestartet wurde
7. Wiederherstellen des Backups über die Kommandozeile oder den ioBroker.backitup Adapter
8. Überprüfen der Installation der Adapter nach erfolgreicher Wiederherstellung

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

Falls du eine existierende ioBroker Installation zu Redis als Objects und/ oder States DB migrieren willst, empfiehlt es sich, die Migration mit Hilfe des Befehls `iob setup custom` zunächst innerhalb des Containers durchzuführen. Nur so ist es möglich die bereits vorhandenen Objekte und Zustände zu Redis zu migrieren. Im Anschluss daran sind dann natürlich die entsprechenden Umgebungsvariablen für den Container zu setzen. Für weitere Informationen zu `iob setup custom` wirf bitte einen Blick in die [offizielle ioBroker Dokumentation](https://www.iobroker.net/#de/documentation).

::: warning HINWEIS
Damit `iob setup custom` funktioniert muss der ioBroker innerhalb des Containers gestoppt werden. Dazu empfiehlt es sich den Container mit Hilfe des [Maintenance Scripts](/de/iobroker-docker-image/docs/#benutze-maintenance-script) in den Maintenance Mode zu versetzen.
:::

## Sonstiges

### Beta Tester

Falls du stets die neusten Korrekturen und Funktionen des Docker Images nutzen möchtest bist du herzlich dazu eingeladen unsere Beta-Versionen zu verwenden. Für mehr Informationen wirf am Besten einen Blick auf die [Docker image releases](https://github.com/buanet/ioBroker.docker/releases) und/ oder beteilige dich an der Diskussion im [ioBroker Discord Channel > Beta Testing & Feedback > docker-image](https://discord.gg/kN7nhx6C).<br>Vielen Dank. 

### Hinweise für Entwickler

...sind leider nur in [englisch](/iobroker-docker-image/docs/#notes-for-developers) verfügbar.

---

#### :warning: In Arbeit :warning:

Diese Dokumentation ist noch in Arbeit. Wenn du Verbesserungsvorschläge hast, lass es mich wissen indem du einen [issue](https://github.com/buanet/docs/issues) meldest oder gleich [selbst editierst](https://github.com/buanet/docs/blob/main/docs/de/projects/iobroker-docker-image/docs.md) und einen pull request erstellst.

Falls noch Fragen unbeantwortet geblieben sind, schaue gerne in der ioBroker Community auf [Discord](https://discord.gg/kN7nhx6C), [Facebook](https://www.facebook.com/groups/440499112958264) oder im [ioBroker Forum](https://forum.iobroker.net) vorbei.
