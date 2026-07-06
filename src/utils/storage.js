const STORAGE_KEY = 'nucleo-quiz-v1'

const defaultData = {
  recorde: 0,           // melhor pontuação já alcançada
  partidas: 0,          // total de partidas jogadas
  acertos: 0,           // total de acertos acumulados (todas as partidas)
  erros: 0,             // total de erros acumulados
  melhorPorcentagem: 0, // melhor % de acerto numa única partida
  tema: 'cyan',         // tema visual escolhido
  historico: []         // últimas partidas: {data, pontos, acertos, total, porcentagem}
}

export function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaultData }
    return { ...defaultData, ...JSON.parse(raw) }
  } catch {
    return { ...defaultData }
  }
}

export function saveStats(stats) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
  } catch {
    // localStorage indisponível (modo privado, etc.) — falha silenciosa
  }
}

export function registrarPartida({ pontos, acertos, erros, total }) {
  const stats = loadStats()
  const porcentagem = total > 0 ? Math.round((acertos / total) * 100) : 0

  stats.partidas += 1
  stats.acertos += acertos
  stats.erros += erros
  stats.recorde = Math.max(stats.recorde, pontos)
  stats.melhorPorcentagem = Math.max(stats.melhorPorcentagem, porcentagem)

  stats.historico = [
    { data: new Date().toISOString(), pontos, acertos, total, porcentagem },
    ...stats.historico
  ].slice(0, 10)

  saveStats(stats)
  return stats
}

export function setTema(tema) {
  const stats = loadStats()
  stats.tema = tema
  saveStats(stats)
}

export function resetStats() {
  saveStats(defaultData)
  return { ...defaultData }
}
