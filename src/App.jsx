import { useState, useEffect, useRef } from 'react'
import AtomLogo from './components/AtomLogo'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import { useQuiz } from './hooks/useQuiz'
import { loadStats, registrarPartida } from './utils/storage'

export default function App() {
  const [tela, setTela] = useState('home') // 'home' | 'quiz' | 'resultado'
  const [stats, setStats] = useState(() => loadStats())
  const [nivel, setNivel] = useState('facil')
  const quiz = useQuiz(nivel)
  const registradaRef = useRef(false)

  useEffect(() => {
    if (quiz.finalizado && !registradaRef.current) {
      registradaRef.current = true
      const novasStats = registrarPartida({
        pontos: quiz.pontos,
        acertos: quiz.acertos,
        erros: quiz.erros,
        total: quiz.total
      })
      setStats(novasStats)
      setTela('resultado')
    }
  }, [quiz.finalizado, quiz.pontos, quiz.acertos, quiz.erros, quiz.total])

  function iniciarPartida(nivelEscolhido) {
    const nivelFinal = nivelEscolhido || nivel
    setNivel(nivelFinal)
    quiz.reiniciar(nivelFinal)
    registradaRef.current = false
    setTela('quiz')
  }

  function voltarInicio() {
    setStats(loadStats())
    setTela('home')
  }

  return (
    <>
      <div className="starfield" />
      <div className="app-shell">
        <div className="brand">
          <AtomLogo />
          <div className="brand-text">
            <h1>Núcleo</h1>
            <p>Quiz · Mulheres na Ciência</p>
          </div>
        </div>

        {tela === 'home' && <Home stats={stats} onIniciar={iniciarPartida} />}
        {tela === 'quiz' && <Quiz quiz={quiz} nivel={nivel} />}
        {tela === 'resultado' && (
          <Result
            quiz={quiz}
            stats={stats}
            nivel={nivel}
            onJogarNovamente={iniciarPartida}
            onVoltarInicio={voltarInicio}
          />
        )}
      </div>
    </>
  )
}
