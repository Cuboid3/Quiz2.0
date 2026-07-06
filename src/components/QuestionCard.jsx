import { CATEGORY_LABELS } from '../data/questions'

const LETRAS = ['A', 'B', 'C', 'D']

export default function QuestionCard({ questao, respondida, selecionada, onResponder }) {
  return (
    <div className="glass q-card">
      <span className={`q-eyebrow ${questao.category}`}>
        {CATEGORY_LABELS[questao.category]}
      </span>
      <h3 className="q-text">{questao.question}</h3>

      <div className="options">
        {questao.opcoesEmbaralhadas.map((opcao, idx) => {
          const ehCorreta = opcao.idxOriginal === questao.answer
          const ehSelecionada = selecionada === idx
          let classe = 'option'
          if (respondida && ehCorreta) classe += ' correta'
          else if (respondida && ehSelecionada && !ehCorreta) classe += ' incorreta'

          return (
            <button
              key={idx}
              className={classe}
              disabled={respondida}
              onClick={() => onResponder(idx)}
            >
              <span className="letra">{LETRAS[idx]}</span>
              <span>{opcao.texto}</span>
            </button>
          )
        })}
      </div>

      {respondida && (
        <div className="explanation">
          <strong>Por quê?</strong> {questao.explanation}
        </div>
      )}
    </div>
  )
}
