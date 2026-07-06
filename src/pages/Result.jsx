import { CATEGORY_LABELS } from '../data/questions'

export default function Result({ quiz, stats, nivel, onJogarNovamente, onVoltarInicio }) {
  const { pontos, acertos, erros, total, maiorCombo } = quiz
  const porcentagem = total > 0 ? Math.round((acertos / total) * 100) : 0
  const ehRecorde = pontos >= stats.recorde && pontos > 0

  let mensagem = 'Continue estudando os modelos atômicos!'
  if (porcentagem >= 90) mensagem = 'Performance de nível Nobel! 🏅'
  else if (porcentagem >= 70) mensagem = 'Excelente domínio da matéria!'
  else if (porcentagem >= 50) mensagem = 'Bom trabalho, siga explorando o átomo.'

  return (
    <>
      <div className="glass result-hero" style={{ padding: '28px 20px' }}>
        {nivel && <span className="chip" style={{ marginBottom: 8, display: 'inline-block' }}>Nível: {CATEGORY_LABELS[nivel]}</span>}
        {ehRecorde && <span className="chip" style={{ color: 'var(--amber)', borderColor: 'var(--amber)' }}>★ Novo recorde</span>}
        <div className="big-score">{pontos}</div>
        <div className="pct">{porcentagem}% de acerto · {acertos}/{total} corretas</div>
        <p style={{ color: 'var(--text-lo)', marginTop: 14 }}>{mensagem}</p>
      </div>

      <div className="result-grid">
        <div className="glass stat-box">
          <div className="num" style={{ color: 'var(--success)' }}>{acertos}</div>
          <div className="label">Acertos</div>
        </div>
        <div className="glass stat-box">
          <div className="num" style={{ color: 'var(--danger)' }}>{erros}</div>
          <div className="label">Erros</div>
        </div>
        <div className="glass stat-box">
          <div className="num" style={{ color: 'var(--amber)' }}>{maiorCombo}</div>
          <div className="label">Maior combo</div>
        </div>
        <div className="glass stat-box">
          <div className="num">{stats.recorde}</div>
          <div className="label">Recorde geral</div>
        </div>
      </div>

      <div className="glass" style={{ padding: '18px', marginTop: 4 }}>
        <strong style={{ fontFamily: 'var(--font-display)', fontSize: '.9rem' }}>Ranking local — últimas partidas</strong>
        <div className="ranking-list">
          {stats.historico.slice(0, 5).map((p, i) => (
            <div key={i} className={`ranking-item ${p.pontos === stats.recorde ? 'melhor' : ''}`}>
              <span>#{i + 1} · {p.acertos}/{p.total} acertos</span>
              <span>{p.pontos} pts · {p.porcentagem}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={onJogarNovamente}>Jogar novamente</button>
        <button className="btn btn-ghost" onClick={onVoltarInicio}>Início</button>
      </div>
    </>
  )
}
