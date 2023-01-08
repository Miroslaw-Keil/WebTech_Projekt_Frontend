# frontend

## Benutzerhandbuch
```
Die WebApp startet auf der Homepage.
Von dort kann man über die Navbar durch die unterschiedlichen Seiten navigieren.
Zuerst muss man sich über den Login anmelden, da sonst die restlichen Fundktionen gesperrt sind.

Auf der Hinzufügen Seite kann man ein Gericht anlegen. Dafür muss man alle Felder ausfüllen und den Create Button drücken. 
Der reset Button stellt die default Felder wieder her.

Auf der Bearbeiten Seite kann man die zu löschenden Gerichte per Checkbox aktivieren und mit dem Löschen Button löschen. 
Außerdem kann man den verlinkten Gerichtenamen folgen um auf eine eigene Seite zu kommen. 
Dort kann man die Eigenschaften des ausgewählten Gerichts verändern und updaten. 
Dafür muss man auf den Überschreiben Button drücken und anschließend über die Navbar zurück navigieren. 
Wenn man den Abbrechen Button drückt wird man automatisch auf die Bearbeitenseite zurückgechickt.

Auf der Auslesen Seite kann man den Randomize Button klicken um ein zufälliges Gericht zu erhalten.

Auf der Alle Einsehen Seite sieht man eine Tabelle mit allen Gerichten, außerdem kann man nach der ID suchen.

In dem Tab Protected Profile erhält man alle Profilinformationen von Okta.

Über den Logout Button meldet man sich ab und wird zurück zur Homepage geleitet.
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
