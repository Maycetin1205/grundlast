import { ap1ScopeItems } from './ap1.ts'
import { fiausbvFirst18MonthScopeItems } from './fiausbv.ts'
import { kmkScopeItems } from './kmk.ts'

export const scopeItems = [
  ...kmkScopeItems,
  ...fiausbvFirst18MonthScopeItems,
  ...ap1ScopeItems,
] as const

export { ap1ScopeItems } from './ap1.ts'
export { examCatalogDeltas, examCatalogEvidence } from './examCatalog.ts'
export { fiausbvFirst18MonthScopeItems } from './fiausbv.ts'
export { kmkScopeItems } from './kmk.ts'
export type { Ap1Relation, ExamCatalogDelta, ScopeAction, ScopeItem, ScopeOrigin, ScopeReference } from './types.ts'
