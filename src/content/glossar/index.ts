import type { GlossarEintrag } from "../../lib/glossar/types"

import { aBisD } from "./a-d"
import { eBisH } from "./e-h"
import { iBisL } from "./i-l"
import { mBisP } from "./m-p"
import { qBisS } from "./q-s"
import { tBisZ } from "./t-z"

export const glossarEintraege: GlossarEintrag[] = [
  ...aBisD,
  ...eBisH,
  ...iBisL,
  ...mBisP,
  ...qBisS,
  ...tBisZ,
]
