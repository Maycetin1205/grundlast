export const tokens = {
  color: {
    ink:         '#1a2332',
    paper:       '#faf7f2',
    paperDeep:   '#f3ede2',
    accent:      '#8b2f1d',
    accentSoft:  '#c7a888',
    muted:       '#6b6355',
    rule:        '#d9cfbf',
    tippBg:      '#eef2e8',
    tippBorder:  '#6b8e4e',
    warnBg:      '#f9ece7',
    analogyBg:   '#f7f0dc',
    term:        '#4a6fa5',
  },
  font: {
    display: "'Playfair Display', Georgia, serif",
    body:    "'Source Serif 4', 'Source Serif Pro', Georgia, serif",
    ui:      "'Inter', ui-sans-serif, system-ui, sans-serif",
    mono:    "ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
  },
  space: {
    contentMaxWidth: 'min(820px, 92vw)',
    sidebarWidth:    '320px',
  },
} as const

export type TokenColor = keyof typeof tokens.color
