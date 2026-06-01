export type TrainingDifficulty = 'easy' | 'exam' | 'mixed'
export type SubnetAnswerKey = 'network' | 'firstHost' | 'lastHost' | 'broadcast' | 'usableHosts'

export type SubnetTrainingAnswers = Record<SubnetAnswerKey, string>

export interface ParsedIp {
  octets: number[]
  numeric: number
}

export interface SubnetResult {
  ip: ParsedIp
  prefix: number
  maskOctets: number[]
  network: number
  broadcast: number
  firstHost: number
  lastHost: number
  hostBits: number
  totalAddresses: number
  usableHosts: number
  usableHostsLabel: string
  blockSize: number
  partialOctetIndex: number | null
  magicNumber: number | null
  subnetRangeLabel: string
}

export interface TrainingTask {
  ip: string
  prefix: number
  result: SubnetResult
}

export interface AnswerFeedback {
  correct: boolean
  expected: string
  message: string
}

const difficultyPrefixes: Record<TrainingDifficulty, number[]> = {
  easy: [24, 25, 26],
  exam: [25, 26, 27, 28, 29, 30],
  mixed: [24, 25, 26, 27, 28, 29, 30],
}

export function parseIp(value: string): ParsedIp | null {
  const cleanValue = value.trim()
  const parts = cleanValue.split('.')

  if (parts.length !== 4) {
    return null
  }

  const octets = parts.map((part) => {
    if (!/^\d+$/.test(part)) {
      return Number.NaN
    }

    return Number(part)
  })

  if (octets.some((octet) => !Number.isInteger(octet) || octet < 0 || octet > 255)) {
    return null
  }

  return {
    octets,
    numeric: octets.reduce((numeric, octet) => numeric * 256 + octet, 0),
  }
}

export function prefixToMaskOctets(prefix: number) {
  return [0, 1, 2, 3].map((index) => {
    const remainingBits = prefix - index * 8

    if (remainingBits >= 8) return 255
    if (remainingBits <= 0) return 0

    return 256 - 2 ** (8 - remainingBits)
  })
}

export function numberToIp(value: number) {
  return [
    Math.floor(value / 256 ** 3) % 256,
    Math.floor(value / 256 ** 2) % 256,
    Math.floor(value / 256) % 256,
    value % 256,
  ].join('.')
}

export function formatGermanNumber(value: number) {
  return new Intl.NumberFormat('de-DE').format(value)
}

export function calculateSubnet(ipValue: string, prefix: number): SubnetResult | null {
  const ip = parseIp(ipValue)

  if (!ip || !Number.isInteger(prefix) || prefix < 0 || prefix > 32) {
    return null
  }

  const hostBits = 32 - prefix
  const totalAddresses = 2 ** hostBits
  const blockSize = totalAddresses
  const network = Math.floor(ip.numeric / blockSize) * blockSize
  const broadcast = network + blockSize - 1
  const maskOctets = prefixToMaskOctets(prefix)
  const partialOctetIndex = prefix % 8 === 0 ? null : Math.floor(prefix / 8)
  const magicNumber = partialOctetIndex === null ? null : 256 - maskOctets[partialOctetIndex]

  let firstHost = network + 1
  let lastHost = broadcast - 1
  let usableHosts = Math.max(totalAddresses - 2, 0)
  let usableHostsLabel = formatGermanNumber(usableHosts)

  if (prefix === 31) {
    firstHost = network
    lastHost = broadcast
    usableHosts = 2
    usableHostsLabel = '2 als Punkt-zu-Punkt-Sonderfall'
  }

  if (prefix === 32) {
    firstHost = network
    lastHost = network
    usableHosts = 1
    usableHostsLabel = '1 einzelne Adresse'
  }

  return {
    ip,
    prefix,
    maskOctets,
    network,
    broadcast,
    firstHost,
    lastHost,
    hostBits,
    totalAddresses,
    usableHosts,
    usableHostsLabel,
    blockSize,
    partialOctetIndex,
    magicNumber,
    subnetRangeLabel: buildSubnetRangeLabel(network, broadcast, partialOctetIndex),
  }
}

export function buildExplanation(result: SubnetResult) {
  const lines = [
    `Host-Bits: 32 - ${result.prefix} = ${result.hostBits}.`,
    `Adressen gesamt: 2^${result.hostBits} = ${formatGermanNumber(result.totalAddresses)}.`,
    result.prefix < 31
      ? `Nutzbare Hosts: ${formatGermanNumber(result.totalAddresses)} - 2 = ${result.usableHostsLabel}.`
      : `Nutzbare Hosts: ${result.usableHostsLabel}.`,
  ]

  if (result.magicNumber !== null && result.partialOctetIndex !== null) {
    lines.push(
      `Blockgröße: 256 - ${result.maskOctets[result.partialOctetIndex]} = ${result.magicNumber}.`,
      `${result.ip.octets[result.partialOctetIndex]} liegt im Block ${result.subnetRangeLabel}.`,
    )
  } else {
    lines.push('Das Präfix endet genau an einer Oktettgrenze; eine Magic Number ist hier nicht nötig.')
  }

  lines.push(
    `Netzadresse: ${numberToIp(result.network)}.`,
    `Broadcast: ${numberToIp(result.broadcast)}.`,
  )

  return lines
}

export function normalizeIpAnswer(value: string) {
  const parsed = parseIpAnswer(value)

  return parsed ? numberToIp(parsed.numeric) : null
}

export function normalizeHostCountAnswer(value: string) {
  const normalized = value.trim().replace(/\./g, '').replace(/\s+/g, '')

  if (!/^\d+$/.test(normalized)) {
    return null
  }

  return Number(normalized)
}

export function getExpectedSubnetAnswer(result: SubnetResult, answerKey: SubnetAnswerKey) {
  switch (answerKey) {
    case 'network':
      return numberToIp(result.network)
    case 'firstHost':
      return numberToIp(result.firstHost)
    case 'lastHost':
      return numberToIp(result.lastHost)
    case 'broadcast':
      return numberToIp(result.broadcast)
    case 'usableHosts':
      return String(result.usableHosts)
  }
}

export function evaluateSubnetAnswer(
  result: SubnetResult,
  answerKey: SubnetAnswerKey,
  rawValue: string,
): AnswerFeedback {
  const expected = getExpectedSubnetAnswer(result, answerKey)

  if (!rawValue.trim()) {
    return {
      correct: false,
      expected,
      message: 'Trag hier zuerst einen Wert ein.',
    }
  }

  if (answerKey === 'usableHosts') {
    const value = normalizeHostCountAnswer(rawValue)

    if (value === null) {
      return {
        correct: false,
        expected,
        message: 'Schreibe nur die Anzahl, zum Beispiel 62.',
      }
    }

    if (value === result.usableHosts) {
      return {
        correct: true,
        expected,
        message: 'Passt: Das ist die Anzahl nutzbarer Hostadressen.',
      }
    }

    if (result.prefix < 31 && value === result.totalAddresses) {
      return {
        correct: false,
        expected,
        message: 'Das ist die Gesamtzahl der Adressen. Netzadresse und Broadcast fallen noch weg.',
      }
    }

    if (result.prefix < 31 && value === result.totalAddresses - 1) {
      return {
        correct: false,
        expected,
        message: 'Du hast nur eine reservierte Adresse abgezogen. In normalen Subnetzen sind es zwei.',
      }
    }

    if (value === result.hostBits) {
      return {
        correct: false,
        expected,
        message: 'Das sind die Host-Bits, nicht die Anzahl der nutzbaren Hosts.',
      }
    }

    return {
      correct: false,
      expected,
      message: `Rechne ${formatGermanNumber(result.totalAddresses)} Gesamtadressen minus die reservierten Adressen.`,
    }
  }

  const parsed = parseIpAnswer(rawValue)

  if (!parsed) {
    return {
      correct: false,
      expected,
      message: 'Nutze eine IPv4-Adresse mit vier Oktetten von 0 bis 255.',
    }
  }

  const normalized = numberToIp(parsed.numeric)

  if (normalized === expected) {
    return {
      correct: true,
      expected,
      message: getCorrectIpMessage(answerKey),
    }
  }

  return {
    correct: false,
    expected,
    message: explainIpMistake(result, answerKey, parsed.numeric),
  }
}

export function generateSubnetTrainingTask(difficulty: TrainingDifficulty): TrainingTask {
  const prefixes = difficultyPrefixes[difficulty]
  const prefix = pick(prefixes)
  const [firstOctet, secondOctet, thirdOctet] = generatePrivatePrefix()
  const blockSize = 2 ** (32 - prefix)
  const blockStart = Math.floor(randomInt(0, 255) / blockSize) * blockSize
  const hostOffset = prefix >= 31 ? 0 : randomInt(1, blockSize - 2)
  const ip = `${firstOctet}.${secondOctet}.${thirdOctet}.${blockStart + hostOffset}`
  const result = calculateSubnet(ip, prefix)

  if (!result) {
    return generateSubnetTrainingTask(difficulty)
  }

  return { ip, prefix, result }
}

function parseIpAnswer(value: string) {
  return parseIp(value.trim().replace(/\/\d+$/, ''))
}

function getCorrectIpMessage(answerKey: Exclude<SubnetAnswerKey, 'usableHosts'>) {
  switch (answerKey) {
    case 'network':
      return 'Passt: Das ist der Anfang des Adressblocks.'
    case 'firstHost':
      return 'Passt: Das ist eine Adresse nach der Netzadresse.'
    case 'lastHost':
      return 'Passt: Das ist eine Adresse vor dem Broadcast.'
    case 'broadcast':
      return 'Passt: Das ist die letzte Adresse des Blocks.'
  }
}

function explainIpMistake(
  result: SubnetResult,
  answerKey: Exclude<SubnetAnswerKey, 'usableHosts'>,
  value: number,
) {
  if (answerKey === 'network' && value === result.firstHost) {
    return 'Das ist der erste Host. Die Netzadresse ist der Anfang des Blocks.'
  }

  if (answerKey === 'firstHost' && value === result.network) {
    return 'Das ist die Netzadresse. Der erste Host ist eine Adresse danach.'
  }

  if (answerKey === 'lastHost' && value === result.broadcast) {
    return 'Das ist die Broadcast-Adresse, nicht der letzte Host. Der letzte Host liegt eine Adresse davor.'
  }

  if (answerKey === 'broadcast' && value === result.lastHost) {
    return 'Das ist der letzte Host. Die Broadcast-Adresse liegt eine Adresse danach.'
  }

  if (value === result.network) {
    return 'Diese Adresse ist die Netzadresse. Sie beschreibt das Subnetz selbst.'
  }

  if (value === result.broadcast) {
    return 'Diese Adresse ist die Broadcast-Adresse. Sie wird nicht als normaler Host vergeben.'
  }

  if (value === result.firstHost) {
    return 'Diese Adresse ist der erste Host im Subnetz, aber hier ist ein anderer Wert gefragt.'
  }

  if (value === result.lastHost) {
    return 'Diese Adresse ist der letzte Host im Subnetz, aber hier ist ein anderer Wert gefragt.'
  }

  if (value > result.network && value < result.broadcast) {
    return 'Die Adresse liegt im richtigen Subnetz, ist aber nicht der gesuchte Grenzwert.'
  }

  return `Diese Adresse liegt außerhalb des Blocks ${numberToIp(result.network)} bis ${numberToIp(result.broadcast)}.`
}

function buildSubnetRangeLabel(network: number, broadcast: number, partialOctetIndex: number | null) {
  if (partialOctetIndex === null) {
    return `${numberToIp(network)} bis ${numberToIp(broadcast)}`
  }

  const networkOctets = parseIp(numberToIp(network))!.octets
  const broadcastOctets = parseIp(numberToIp(broadcast))!.octets

  return `${networkOctets[partialOctetIndex]}-${broadcastOctets[partialOctetIndex]}`
}

function generatePrivatePrefix() {
  const ranges = [
    () => [10, randomInt(0, 255), randomInt(0, 255)],
    () => [172, randomInt(16, 31), randomInt(0, 255)],
    () => [192, 168, randomInt(0, 255)],
  ]

  return pick(ranges)()
}

function pick<T>(items: T[]) {
  return items[randomInt(0, items.length - 1)]
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
