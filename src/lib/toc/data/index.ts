/**
 * Grundlast · Inhaltsverzeichnis — Daten-Aggregator
 *
 * Sammelt alle 14 Lernfelder in der kanonischen Lernreihenfolge.
 * Reihenfolge wird hier definiert — sie ist die Wahrheit für die UI.
 */

import type { Lernfeld } from "../types"
import { grundlagen } from "./grundlagen"
import { hardware } from "./hardware"
import { betriebssysteme } from "./betriebssysteme"
import { netzwerke } from "./netzwerke"
import { daten } from "./daten"
import { software } from "./software"
import { projekt } from "./projekt"
import { sicherheit } from "./sicherheit"
import { wirtschaft } from "./wirtschaft"
import { vertragsrecht } from "./vertragsrecht"
import { qualitaet } from "./qualitaet"
import { webmedia } from "./webmedia"
import { aktuell } from "./aktuell"
import { arbeitsrecht } from "./arbeitsrecht"

export const lernfelder: Lernfeld[] = [
  grundlagen,
  hardware,
  betriebssysteme,
  netzwerke,
  daten,
  software,
  projekt,
  sicherheit,
  wirtschaft,
  vertragsrecht,
  qualitaet,
  webmedia,
  aktuell,
  arbeitsrecht,
]
