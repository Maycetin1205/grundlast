import type { GlossarEintrag } from "../../lib/glossar/types"

import { grundlagen } from "./grundlagen"
import { hardware } from "./hardware"
import { betriebssysteme } from "./betriebssysteme"
import { netzwerke } from "./netzwerke"
import { software } from "./software"
import { projekt } from "./projekt"
import { sicherheit } from "./sicherheit"
import { wirtschaft } from "./wirtschaft"
import { vertragsrecht } from "./vertragsrecht"

export const glossarEintraege: GlossarEintrag[] = [
  ...grundlagen,
  ...hardware,
  ...betriebssysteme,
  ...netzwerke,
  ...software,
  ...projekt,
  ...sicherheit,
  ...wirtschaft,
  ...vertragsrecht,
]
