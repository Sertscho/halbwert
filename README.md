# Halbwert

**App öffnen: https://sertscho.github.io/halbwert/**

Zeigt, wie viel Koffein gerade in deinem Körper ist und ab wann du schlaffreundlich bist (unter 30 mg).

**Aufs iPhone:** Link in Safari öffnen → Teilen → „Zum Home-Bildschirm“.

- Getränke: Ninja Luxe Single/Double (Gramm einstellbar), McCafé Cappuccino klein/groß, Red Bull Sugarfree, Monster Ultra White, Cola Zero 0,33 l (33 mg), Schwarztee (50 mg/Tasse, EFSA)
- Ansicht: Abbaukurve, Tacho oder Akku (Button oben rechts wechselt reihum)
- Daten bleiben nur auf dem Gerät

## Grundlagen
- Abbau: 1-Kompartiment-Modell, Halbwertszeit 3/5/8 h wählbar ([Grzegorzewski 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC8914174/))
- Schlafgrenze 30 mg, abgeleitet aus [Gardiner 2023](https://pubmed.ncbi.nlm.nih.gov/36870101/) (~107 mg mindestens 8,8 h vor dem Schlafen)
- Trainingsbereich 3–6 mg/kg Körpergewicht (blau in allen Ansichten), nach [ISSN-Positionspapier, Guest 2021](https://pubmed.ncbi.nlm.nih.gov/33388079/) und Meta-Analysen; über 6 mg/kg kein Zusatznutzen. Gewicht in den Einstellungen.
- Ninja: ~7,5 mg Koffein pro Gramm Pulver (Schätzung). McCafé: Schätzung. Red Bull (80 mg) und Monster (150 mg): Herstellerangaben.

Richtwerte, keine medizinische Beratung.

Test: `node engine.test.js`
