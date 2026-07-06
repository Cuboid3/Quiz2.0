import { useState, useCallback, useMemo } from 'react'
import { questions } from '../data/questions'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const PONTOS_POR_ACERTO = 100

export function useQuiz(nivel = null) {
  const [rodada, setRodada] = useState(() => prepararRodada(nivel))
  const [indice, setIndice] = useState(0)
  const [pontos, setPontos] = useState(0)
  const [combo, setCombo] = useState(0)
  const [maiorCombo, setMaiorCombo] = useState(0)
  const [acertos, setAcertos] = useState(0)
  const [erros, setErros] = useState(0)
  const [respondida, setRespondida] = useState(false)
  const [selecionada, setSelecionada] = useState(null)
  const [finalizado, setFinalizado] = useState(false)

  function prepararRodada(nivelAtual) {
    const banco = nivelAtual ? questions.filter((q) => q.category === nivelAtual) : questions
    const escolhidas = shuffle(banco).slice(0, banco.length)
    return escolhidas.map((q) => {
      const ordem = shuffle(q.options.map((texto, idxOriginal) => ({ texto, idxOriginal })))
      return { ...q, opcoesEmbaralhadas: ordem }
    })
  }

  const questaoAtual = rodada[indice]

  const responder = useCallback((idxEmbaralhado) => {
    if (respondida) return
    const opcao = questaoAtual.opcoesEmbaralhadas[idxEmbaralhado]
    const correta = opcao.idxOriginal === questaoAtual.answer

    setSelecionada(idxEmbaralhado)
    setRespondida(true)

    if (correta) {
      const novoCombo = combo + 1
      const bonusCombo = Math.min(novoCombo - 1, 5) * 10 // bônus crescente, limitado
      setPontos((p) => p + PONTOS_POR_ACERTO + bonusCombo)
      setCombo(novoCombo)
      setMaiorCombo((m) => Math.max(m, novoCombo))
      setAcertos((a) => a + 1)
    } else {
      setCombo(0)
      setErros((e) => e + 1)
    }
  }, [respondida, questaoAtual, combo])

  const proxima = useCallback(() => {
    if (indice + 1 >= rodada.length) {
      setFinalizado(true)
      return
    }
    setIndice((i) => i + 1)
    setRespondida(false)
    setSelecionada(null)
  }, [indice, rodada.length])

  const reiniciar = useCallback((novoNivel) => {
    setRodada(prepararRodada(novoNivel !== undefined ? novoNivel : nivel))
    setIndice(0)
    setPontos(0)
    setCombo(0)
    setMaiorCombo(0)
    setAcertos(0)
    setErros(0)
    setRespondida(false)
    setSelecionada(null)
    setFinalizado(false)
  }, [nivel])

  const progresso = useMemo(
    () => Math.round(((indice + (respondida ? 1 : 0)) / rodada.length) * 100),
    [indice, respondida, rodada.length]
  )

  return {
    questaoAtual,
    indice,
    total: rodada.length,
    progresso,
    pontos,
    combo,
    maiorCombo,
    acertos,
    erros,
    respondida,
    selecionada,
    finalizado,
    responder,
    proxima,
    reiniciar
  }
}
