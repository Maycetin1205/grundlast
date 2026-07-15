export const AUFGABENFAMILIEN=['rechnen','zeichnen','zuordnen','begruenden','diagnostizieren','anwenden'] as const
export type Aufgabenfamilie=(typeof AUFGABENFAMILIEN)[number]
export type LernfeldNr=1|2|3|4|5|6|7|8|9
export type PersonalProgress='not_started'|'learning'|'review'|'mastered'
