import { useState } from 'react'
import AtomLogo from '../components/AtomLogo'
import { questions, CATEGORY_LABELS } from '../data/questions'

const NIVEIS = [
  { chave: 'facil', label: CATEGORY_LABELS.facil, desc: 'Perguntas mais diretas, ótimo para começar.' },
  { chave: 'medio', label: CATEGORY_LABELS.medio, desc: 'Um pouco mais de detalhe e contexto.' },
  { chave: 'dificil', label: CATEGORY_LABELS.dificil, desc: 'Perguntas aprofundadas, para quem já manda bem.' },
]

export default function Home({ stats, onIniciar }) {
  const [nivelSelecionado, setNivelSelecionado] = useState('facil')

  const totalPorNivel = (chave) => questions.filter((q) => q.category === chave).length

  return (
    <>
      <div className="hero">
        <AtomLogo size={64} />
        <h2>Mulheres na Ciência</h2>
        <p>
          De Marie Curie a Andrea Ghez — teste o que você sabe sobre as cientistas que
          mudaram a história, seus feitos, descobertas e desafios enfrentados.
        </p>

        <div className="nivel-select" style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 320, margin: '18px auto' }}>
          {NIVEIS.map((n) => (
            <button
              key={n.chave}
              type="button"
              onClick={() => setNivelSelecionado(n.chave)}
              className={`chip nivel-chip${nivelSelecionado === n.chave ? ' nivel-chip-ativo' : ''}`}
              style={{
                width: '100%',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: '10px 14px',
                cursor: 'pointer',
                border: nivelSelecionado === n.chave ? '1px solid var(--cyan, #22d3ee)' : '1px solid transparent',
                background: nivelSelecionado === n.chave ? 'rgba(34, 211, 238, 0.12)' : undefined,
              }}
            >
              <span style={{ fontWeight: 600 }}>{n.label} · {totalPorNivel(n.chave)} perguntas</span>
              <span style={{ fontSize: '.78rem', color: 'var(--text-lo)' }}>{n.desc}</span>
            </button>
          ))}
        </div>

        <button
          className="btn btn-primary"
          onClick={() => onIniciar(nivelSelecionado)}
          style={{ width: '100%', maxWidth: 280 }}
        >
          Iniciar partida · {CATEGORY_LABELS[nivelSelecionado]}
        </button>
      </div>

      <div className="glass" style={{ padding: '20px 18px', marginTop: 10 }}>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="num">{stats.recorde}</div>
            <div className="label">Recorde</div>
          </div>
          <div className="stat-box">
            <div className="num">{stats.partidas}</div>
            <div className="label">Partidas</div>
          </div>
          <div className="stat-box">
            <div className="num">{stats.melhorPorcentagem}%</div>
            <div className="label">Melhor taxa</div>
          </div>
        </div>
        <div className="stats-grid" style={{ marginTop: 0 }}>
          <div className="stat-box">
            <div className="num" style={{ color: 'var(--success)' }}>{stats.acertos}</div>
            <div className="label">Acertos totais</div>
          </div>
          <div className="stat-box">
            <div className="num" style={{ color: 'var(--danger)' }}>{stats.erros}</div>
            <div className="label">Erros totais</div>
          </div>
          <div className="stat-box">
            <div className="num">{totalPorNivel(nivelSelecionado)}</div>
            <div className="label">Perguntas/partida</div>
          </div>
        </div>
      </div>

      <p className="foot-note">Escolha um nível acima: cada partida traz perguntas sorteadas apenas daquele nível, sem repetição. Ao todo o banco tem {questions.length} perguntas — {totalPorNivel('facil')} fáceis, {totalPorNivel('medio')} médias e {totalPorNivel('dificil')} difíceis.</p>
    </>
  )
}
