import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import { CATEGORY_LABELS } from '../data/questions'

export default function Quiz({ quiz, nivel }) {
  const {
    questaoAtual, indice, total, progresso,
    pontos, combo, respondida, selecionada,
    responder, proxima
  } = quiz

  if (!questaoAtual) return null

  return (
    <>
      {nivel && <span className="chip" style={{ marginBottom: 10, display: 'inline-block' }}>Nível: {CATEGORY_LABELS[nivel]}</span>}
      <div className="hud">
        <span>Pergunta {indice + 1} / {total}</span>
        {combo > 1 && <span className="combo">🔥 combo x{combo}</span>}
        <span className="score">{pontos} pts</span>
      </div>
      <ProgressBar percent={progresso} />

      <QuestionCard
        questao={questaoAtual}
        respondida={respondida}
        selecionada={selecionada}
        onResponder={responder}
      />

      {respondida && (
        <div className="actions-row">
          <button className="btn btn-primary" onClick={proxima}>
            {indice + 1 >= total ? 'Ver resultado' : 'Próxima pergunta'}
          </button>
        </div>
      )}
    </>
  )
}
