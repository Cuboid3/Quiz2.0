// Banco de questões — Mulheres na Ciência e seus feitos
// 25 perguntas em cada nível de dificuldade (facil, medio, dificil)
// category: 'facil' | 'medio' | 'dificil'

export const questions = [
  // ---------- FÁCIL ----------
  {
    id: 'f01',
    category: 'facil',
    question: 'Qual cientista polonesa-francesa descobriu os elementos polônio e rádio e foi a primeira pessoa a ganhar dois Prêmios Nobel em ciências diferentes?',
    options: [
      'Marie Curie',
      'Lise Meitner',
      'Dorothy Hodgkin',
      'Rosalind Franklin',
    ],
    answer: 0,
    explanation: 'Marie Curie (1867-1934) descobriu o polônio e o rádio e venceu os Nobéis de Física (1903) e Química (1911).'
  },
  {
    id: 'f02',
    category: 'facil',
    question: 'Qual física austríaca ajudou a explicar teoricamente o fenômeno da fissão nuclear, mesmo sem receber o Nobel por isso?',
    options: [
      'Lise Meitner',
      'Chien-Shiung Wu',
      'Maria Goeppert-Mayer',
      'Irène Joliot-Curie',
    ],
    answer: 0,
    explanation: 'Lise Meitner, junto com Otto Robert Frisch, interpretou teoricamente a fissão nuclear em 1938.'
  },
  {
    id: 'f03',
    category: 'facil',
    question: 'Qual cientista britânica obteve a famosa \'Foto 51\', essencial para revelar a estrutura do DNA?',
    options: [
      'Rosalind Franklin',
      'Dorothy Hodgkin',
      'Ada Lovelace',
      'Rachel Carson',
    ],
    answer: 0,
    explanation: 'Rosalind Franklin usou difração de raios X para obter a Foto 51, imagem-chave para a descoberta da dupla hélice.'
  },
  {
    id: 'f04',
    category: 'facil',
    question: 'Qual química britânica ganhou o Nobel de Química em 1964 por desvendar as estruturas de moléculas como a penicilina e a vitamina B12?',
    options: [
      'Dorothy Hodgkin',
      'Gertrude Elion',
      'Gerty Cori',
      'Tu Youyou',
    ],
    answer: 0,
    explanation: 'Dorothy Hodgkin aperfeiçoou a cristalografia de raios X e mapeou estruturas biomoleculares complexas.'
  },
  {
    id: 'f05',
    category: 'facil',
    question: 'Qual matemática inglesa do século XIX é considerada a primeira programadora de computadores da história?',
    options: [
      'Ada Lovelace',
      'Grace Hopper',
      'Emmy Noether',
      'Katherine Johnson',
    ],
    answer: 0,
    explanation: 'Ada Lovelace escreveu o primeiro algoritmo destinado a ser processado por uma máquina, a Máquina Analítica de Babbage.'
  },
  {
    id: 'f06',
    category: 'facil',
    question: 'Qual matemática alemã formulou um teorema fundamental que relaciona simetrias e leis de conservação na física?',
    options: [
      'Emmy Noether',
      'Maria Goeppert-Mayer',
      'Vera Rubin',
      'Andrea Ghez',
    ],
    answer: 0,
    explanation: 'Emmy Noether formulou o Teorema de Noether, essencial para a física teórica moderna.'
  },
  {
    id: 'f07',
    category: 'facil',
    question: 'Qual bióloga norte-americana escreveu o livro \'Primavera Silenciosa\', alertando sobre os perigos dos pesticidas?',
    options: [
      'Rachel Carson',
      'Barbara McClintock',
      'Jocelyn Bell Burnell',
      'Mary Anning',
    ],
    answer: 0,
    explanation: 'Rachel Carson publicou \'Silent Spring\' em 1962, impulsionando o movimento ambientalista moderno.'
  },
  {
    id: 'f08',
    category: 'facil',
    question: 'Qual cientista americana descobriu os chamados \'genes saltadores\' (transposons) estudando o milho?',
    options: [
      'Barbara McClintock',
      'Rita Levi-Montalcini',
      'Gerty Cori',
      'Chien-Shiung Wu',
    ],
    answer: 0,
    explanation: 'Barbara McClintock descobriu os transposons e ganhou o Nobel de Medicina de 1983, sozinha.'
  },
  {
    id: 'f09',
    category: 'facil',
    question: 'Qual física chinesa-americana, conhecida como a \'Primeira Dama da Física\', provou que a paridade não se conserva em certas interações?',
    options: [
      'Chien-Shiung Wu',
      'Maria Goeppert-Mayer',
      'Donna Strickland',
      'Hedy Lamarr',
    ],
    answer: 0,
    explanation: 'Chien-Shiung Wu conduziu em 1956 o experimento que derrubou a conservação da paridade nas interações fracas.'
  },
  {
    id: 'f10',
    category: 'facil',
    question: 'Qual astrofísica britânica descobriu os primeiros pulsares, ainda como estudante de doutorado, em 1967?',
    options: [
      'Jocelyn Bell Burnell',
      'Vera Rubin',
      'Andrea Ghez',
      'Caroline Herschel',
    ],
    answer: 0,
    explanation: 'Jocelyn Bell Burnell identificou os sinais regulares dos pulsares durante seu doutorado em Cambridge.'
  },
  {
    id: 'f11',
    category: 'facil',
    question: 'Qual matemática americana calculou trajetórias orbitais para a NASA e teve sua história retratada no filme \'Estrelas Além do Tempo\'?',
    options: [
      'Katherine Johnson',
      'Grace Hopper',
      'Ada Lovelace',
      'Mae Jemison',
    ],
    answer: 0,
    explanation: 'Katherine Johnson calculou trajetórias para missões como a de John Glenn e o programa Apollo.'
  },
  {
    id: 'f12',
    category: 'facil',
    question: 'Qual atriz e inventora austríaca-americana co-desenvolveu uma tecnologia que se tornaria base do Wi-Fi e do Bluetooth?',
    options: [
      'Hedy Lamarr',
      'Irène Joliot-Curie',
      'Rita Levi-Montalcini',
      'Tu Youyou',
    ],
    answer: 0,
    explanation: 'Hedy Lamarr patenteou, com George Antheil, uma técnica de salto de frequência usada hoje em comunicações sem fio.'
  },
  {
    id: 'f13',
    category: 'facil',
    question: 'Qual cientista francesa, filha de Marie Curie, descobriu a radioatividade artificial e ganhou o Nobel de Química em 1935?',
    options: [
      'Irène Joliot-Curie',
      'Gerty Cori',
      'Dorothy Hodgkin',
      'Maria Goeppert-Mayer',
    ],
    answer: 0,
    explanation: 'Irène Joliot-Curie, com o marido Frédéric Joliot, descobriu a radioatividade artificial em 1934.'
  },
  {
    id: 'f14',
    category: 'facil',
    question: 'Qual física alemã-americana propôs o modelo de camadas do núcleo atômico e ganhou o Nobel de Física em 1963?',
    options: [
      'Maria Goeppert-Mayer',
      'Chien-Shiung Wu',
      'Donna Strickland',
      'Andrea Ghez',
    ],
    answer: 0,
    explanation: 'Maria Goeppert-Mayer foi a segunda mulher, após Marie Curie, a ganhar o Nobel de Física.'
  },
  {
    id: 'f15',
    category: 'facil',
    question: 'Qual bioquímica de origem tcheca foi a primeira mulher americana a ganhar um Nobel de ciência, por seus estudos sobre o glicogênio?',
    options: [
      'Gerty Cori',
      'Rita Levi-Montalcini',
      'Gertrude Elion',
      'Barbara McClintock',
    ],
    answer: 0,
    explanation: 'Gerty Cori venceu o Nobel de Medicina de 1947 com o marido Carl Cori pelo estudo do metabolismo do glicogênio.'
  },
  {
    id: 'f16',
    category: 'facil',
    question: 'Qual neurologista italiana descobriu o fator de crescimento neural (NGF) e ganhou o Nobel de Medicina em 1986?',
    options: [
      'Rita Levi-Montalcini',
      'Gertrude Elion',
      'Tu Youyou',
      'Gerty Cori',
    ],
    answer: 0,
    explanation: 'Rita Levi-Montalcini identificou o NGF, proteína essencial ao crescimento e sobrevivência de neurônios.'
  },
  {
    id: 'f17',
    category: 'facil',
    question: 'Qual bioquímica americana desenvolveu medicamentos revolucionários contra leucemia e outras doenças, sendo premiada com o Nobel de Medicina em 1988?',
    options: [
      'Gertrude Elion',
      'Rita Levi-Montalcini',
      'Rosalind Franklin',
      'Mae Jemison',
    ],
    answer: 0,
    explanation: 'Gertrude Elion desenvolveu fármacos por design racional, incluindo tratamentos para leucemia e herpes.'
  },
  {
    id: 'f18',
    category: 'facil',
    question: 'Qual química chinesa descobriu a artemisinina, usada no tratamento da malária, e ganhou o Nobel de Medicina em 2015?',
    options: [
      'Tu Youyou',
      'Gertrude Elion',
      'Irène Joliot-Curie',
      'Vera Rubin',
    ],
    answer: 0,
    explanation: 'Tu Youyou isolou a artemisinina a partir de uma planta usada na medicina tradicional chinesa.'
  },
  {
    id: 'f19',
    category: 'facil',
    question: 'Qual física canadense ganhou o Nobel de Física em 2018 por seu trabalho com pulsos de laser de alta intensidade?',
    options: [
      'Donna Strickland',
      'Andrea Ghez',
      'Maria Goeppert-Mayer',
      'Jocelyn Bell Burnell',
    ],
    answer: 0,
    explanation: 'Donna Strickland foi a terceira mulher da história a ganhar o Nobel de Física.'
  },
  {
    id: 'f20',
    category: 'facil',
    question: 'Qual astrofísica americana ganhou o Nobel de Física em 2020 por evidências de um buraco negro supermassivo no centro da nossa galáxia?',
    options: [
      'Andrea Ghez',
      'Vera Rubin',
      'Donna Strickland',
      'Caroline Herschel',
    ],
    answer: 0,
    explanation: 'Andrea Ghez foi a quarta mulher a ganhar o Nobel de Física, dividido com Genzel e Penrose.'
  },
  {
    id: 'f21',
    category: 'facil',
    question: 'Qual astrônoma americana forneceu evidências decisivas da existência da matéria escura ao estudar a rotação de galáxias?',
    options: [
      'Vera Rubin',
      'Andrea Ghez',
      'Jocelyn Bell Burnell',
      'Mary Anning',
    ],
    answer: 0,
    explanation: 'Vera Rubin observou que estrelas nas bordas das galáxias giravam rápido demais para a massa visível, indicando matéria escura.'
  },
  {
    id: 'f22',
    category: 'facil',
    question: 'Qual paleontóloga inglesa do século XIX descobriu fósseis importantes de ictiossauros e plesiossauros?',
    options: [
      'Mary Anning',
      'Caroline Herschel',
      'Rachel Carson',
      'Barbara McClintock',
    ],
    answer: 0,
    explanation: 'Mary Anning foi uma pioneira da paleontologia, apesar de excluída das sociedades científicas de sua época.'
  },
  {
    id: 'f23',
    category: 'facil',
    question: 'Qual astrônoma alemã-britânica descobriu vários cometas e foi a primeira mulher a receber um salário por trabalho científico na Inglaterra?',
    options: [
      'Caroline Herschel',
      'Vera Rubin',
      'Jocelyn Bell Burnell',
      'Andrea Ghez',
    ],
    answer: 0,
    explanation: 'Caroline Herschel trabalhou com o irmão William Herschel e descobriu diversos cometas no século XVIII.'
  },
  {
    id: 'f24',
    category: 'facil',
    question: 'Qual cientista da computação americana desenvolveu a linguagem de programação COBOL e é pioneira dos compiladores?',
    options: [
      'Grace Hopper',
      'Ada Lovelace',
      'Katherine Johnson',
      'Hedy Lamarr',
    ],
    answer: 0,
    explanation: 'Grace Hopper, também almirante da Marinha americana, foi pioneira no desenvolvimento de compiladores.'
  },
  {
    id: 'f25',
    category: 'facil',
    question: 'Qual engenheira e médica americana se tornou a primeira mulher negra a viajar ao espaço, em 1992?',
    options: [
      'Mae Jemison',
      'Katherine Johnson',
      'Chien-Shiung Wu',
      'Rita Levi-Montalcini',
    ],
    answer: 0,
    explanation: 'Mae Jemison viajou a bordo do ônibus espacial Endeavour em 1992.'
  },
  // ---------- MÉDIO ----------
  {
    id: 'm01',
    category: 'medio',
    question: 'Em que anos e áreas Marie Curie recebeu seus dois Prêmios Nobel?',
    options: [
      'Física em 1903 e Química em 1911',
      'Química em 1903 e Física em 1911',
      'Física em 1898 e Química em 1903',
      'Física em 1911 e Química em 1935',
    ],
    answer: 0,
    explanation: 'Marie Curie venceu o Nobel de Física em 1903 (radioatividade) e o de Química em 1911 (descoberta de novos elementos).'
  },
  {
    id: 'm02',
    category: 'medio',
    question: 'Com qual físico Lise Meitner trabalhou na Suécia para interpretar teoricamente a fissão nuclear?',
    options: [
      'Otto Robert Frisch',
      'Otto Hahn',
      'Werner Heisenberg',
      'Max Planck',
    ],
    answer: 0,
    explanation: 'Já refugiada na Suécia, Lise Meitner colaborou com o sobrinho Otto Robert Frisch para explicar a fissão nuclear.'
  },
  {
    id: 'm03',
    category: 'medio',
    question: 'Quais cientistas usaram os dados de raios X de Rosalind Franklin para propor o modelo da dupla hélice do DNA em 1953?',
    options: [
      'James Watson e Francis Crick',
      'Otto Hahn e Lise Meitner',
      'Linus Pauling e Maurice Wilkins',
      'Erwin Schrödinger e Niels Bohr',
    ],
    answer: 0,
    explanation: 'Watson e Crick se basearam, entre outras evidências, na Foto 51 de Rosalind Franklin para propor a estrutura do DNA.'
  },
  {
    id: 'm04',
    category: 'medio',
    question: 'Além da penicilina e da vitamina B12, qual hormônio Dorothy Hodgkin também ajudou a mapear estruturalmente?',
    options: [
      'Insulina',
      'Adrenalina',
      'Testosterona',
      'Melatonina',
    ],
    answer: 0,
    explanation: 'Dorothy Hodgkin determinou a estrutura tridimensional da insulina usando cristalografia de raios X.'
  },
  {
    id: 'm05',
    category: 'medio',
    question: 'Para qual máquina projetada por Charles Babbage Ada Lovelace escreveu o que é considerado o primeiro algoritmo da história?',
    options: [
      'A Máquina Analítica',
      'A Máquina de Turing',
      'O ENIAC',
      'A Máquina Diferencial',
    ],
    answer: 0,
    explanation: 'Ada Lovelace escreveu notas e um algoritmo para calcular números de Bernoulli na Máquina Analítica de Babbage.'
  },
  {
    id: 'm06',
    category: 'medio',
    question: 'O Teorema de Noether estabelece uma relação fundamental entre quais dois conceitos da física?',
    options: [
      'Simetrias e leis de conservação',
      'Massa e energia',
      'Espaço e tempo',
      'Ondas e partículas',
    ],
    answer: 0,
    explanation: 'O teorema mostra que toda simetria contínua de um sistema físico corresponde a uma lei de conservação.'
  },
  {
    id: 'm07',
    category: 'medio',
    question: 'Em que ano foi publicado \'Primavera Silenciosa\', obra de Rachel Carson sobre os efeitos do DDT?',
    options: [
      '1962',
      '1945',
      '1970',
      '1983',
    ],
    answer: 0,
    explanation: '\'Silent Spring\' foi publicado em 1962 e é considerado um marco do movimento ambientalista.'
  },
  {
    id: 'm08',
    category: 'medio',
    question: 'Em que ano Barbara McClintock recebeu o Nobel de Fisiologia ou Medicina, sozinha, pela descoberta dos elementos genéticos móveis?',
    options: [
      '1983',
      '1962',
      '1998',
      '1975',
    ],
    answer: 0,
    explanation: 'Barbara McClintock recebeu o Nobel em 1983, sendo até hoje a única mulher a vencer sozinha nessa categoria.'
  },
  {
    id: 'm09',
    category: 'medio',
    question: 'O experimento de Chien-Shiung Wu, em 1956, usou a desintegração beta de qual elemento radioativo para testar a conservação da paridade?',
    options: [
      'Cobalto-60',
      'Urânio-235',
      'Polônio-210',
      'Rádio-226',
    ],
    answer: 0,
    explanation: 'Wu observou a desintegração beta do cobalto-60 a temperaturas extremamente baixas para testar a paridade.'
  },
  {
    id: 'm10',
    category: 'medio',
    question: 'O Prêmio Nobel pela descoberta dos pulsares, feita por Jocelyn Bell Burnell, foi concedido em 1974 a quem?',
    options: [
      'Ao seu orientador, Antony Hewish',
      'À própria Jocelyn Bell Burnell',
      'A Stephen Hawking',
      'A Subrahmanyan Chandrasekhar',
    ],
    answer: 0,
    explanation: 'O Nobel de 1974 foi para Antony Hewish e Martin Ryle, gerando controvérsia pela exclusão de Bell Burnell.'
  },
  {
    id: 'm11',
    category: 'medio',
    question: 'Os cálculos manuais de Katherine Johnson foram usados para verificar qual sistema antes da missão orbital de John Glenn, em 1962?',
    options: [
      'Os primeiros computadores eletrônicos da NASA',
      'Os radares de rastreamento soviéticos',
      'Os sistemas de navegação por satélite',
      'Os simuladores de voo da Boeing',
    ],
    answer: 0,
    explanation: 'A confiança nos computadores eletrônicos ainda era baixa, e os cálculos de Johnson serviram de verificação de precisão.'
  },
  {
    id: 'm12',
    category: 'medio',
    question: 'Com qual compositor Hedy Lamarr desenvolveu a tecnologia de salto de frequência, patenteada em 1942?',
    options: [
      'George Antheil',
      'Igor Stravinsky',
      'Charles Ives',
      'Aaron Copland',
    ],
    answer: 0,
    explanation: 'Lamarr e o compositor George Antheil patentearam um sistema de comunicação por salto de frequência.'
  },
  {
    id: 'm13',
    category: 'medio',
    question: 'Com qual cientista, também seu marido, Irène Joliot-Curie descobriu a radioatividade artificial em 1934?',
    options: [
      'Frédéric Joliot',
      'Pierre Curie',
      'Otto Hahn',
      'Ernest Rutherford',
    ],
    answer: 0,
    explanation: 'Irène e Frédéric Joliot-Curie descobriram a radioatividade artificial bombardeando elementos com partículas alfa.'
  },
  {
    id: 'm14',
    category: 'medio',
    question: 'Maria Goeppert-Mayer foi apenas a segunda mulher a ganhar o Nobel de Física. Quem foi a primeira?',
    options: [
      'Marie Curie',
      'Dorothy Hodgkin',
      'Irène Joliot-Curie',
      'Lise Meitner',
    ],
    answer: 0,
    explanation: 'Marie Curie venceu o Nobel de Física em 1903; Maria Goeppert-Mayer só repetiria o feito 60 anos depois, em 1963.'
  },
  {
    id: 'm15',
    category: 'medio',
    question: 'Com qual parceiro científico, também seu marido, Gerty Cori compartilhou o Nobel de Medicina de 1947?',
    options: [
      'Carl Cori',
      'Otto Hahn',
      'Frédéric Joliot',
      'Severo Ochoa',
    ],
    answer: 0,
    explanation: 'Gerty e Carl Cori dividiram o Nobel de 1947 pela descoberta do ciclo de conversão do glicogênio.'
  },
  {
    id: 'm16',
    category: 'medio',
    question: 'Com qual outro cientista Rita Levi-Montalcini compartilhou o Nobel de 1986 pela descoberta do fator de crescimento neural?',
    options: [
      'Stanley Cohen',
      'James Watson',
      'Paul Nurse',
      'Robert Edwards',
    ],
    answer: 0,
    explanation: 'Rita Levi-Montalcini e Stanley Cohen dividiram o Nobel de Medicina de 1986.'
  },
  {
    id: 'm17',
    category: 'medio',
    question: 'Além de tratamentos contra leucemia, para qual doença viral Gertrude Elion ajudou a desenvolver um dos primeiros medicamentos eficazes?',
    options: [
      'Herpes',
      'Sarampo',
      'Gripe',
      'Catapora',
    ],
    answer: 0,
    explanation: 'Gertrude Elion contribuiu para o desenvolvimento de antivirais eficazes contra o herpes.'
  },
  {
    id: 'm18',
    category: 'medio',
    question: 'De qual planta medicinal tradicional chinesa Tu Youyou isolou o composto artemisinina?',
    options: [
      'Artemísia (qinghao)',
      'Ginkgo biloba',
      'Ginseng',
      'Camomila',
    ],
    answer: 0,
    explanation: 'Tu Youyou pesquisou textos da medicina tradicional chinesa e isolou a artemisinina da planta Artemisia annua.'
  },
  {
    id: 'm19',
    category: 'medio',
    question: 'Com qual cientista francês Donna Strickland desenvolveu a técnica de amplificação de pulso gorjeado (chirped pulse amplification)?',
    options: [
      'Gérard Mourou',
      'Alain Aspect',
      'Serge Haroche',
      'Claude Cohen-Tannoudji',
    ],
    answer: 0,
    explanation: 'Strickland e Gérard Mourou desenvolveram essa técnica, reconhecida com o Nobel de Física de 2018.'
  },
  {
    id: 'm20',
    category: 'medio',
    question: 'Com quais dois cientistas Andrea Ghez compartilhou o Nobel de Física de 2020?',
    options: [
      'Reinhard Genzel e Roger Penrose',
      'Kip Thorne e Rainer Weiss',
      'Didier Queloz e Michel Mayor',
      'Barry Barish e Adam Riess',
    ],
    answer: 0,
    explanation: 'O Nobel de 2020 foi dividido entre Roger Penrose, Reinhard Genzel e Andrea Ghez.'
  },
  {
    id: 'm21',
    category: 'medio',
    question: 'O trabalho de Vera Rubin sobre curvas de rotação de galáxias evidenciou a existência de quê?',
    options: [
      'Matéria escura',
      'Energia escura',
      'Buracos negros',
      'Ondas gravitacionais',
    ],
    answer: 0,
    explanation: 'Rubin observou que as estrelas nas bordas das galáxias giravam mais rápido do que a matéria visível permitiria, indicando matéria escura.'
  },
  {
    id: 'm22',
    category: 'medio',
    question: 'Por que Mary Anning foi por muito tempo excluída do reconhecimento científico formal em sua época?',
    options: [
      'Porque era mulher e não podia integrar sociedades científicas',
      'Porque seus fósseis foram considerados falsos',
      'Porque não tinha formação acadêmica em geologia',
      'Porque vivia fora da Inglaterra',
    ],
    answer: 0,
    explanation: 'No século XIX, mulheres eram impedidas de participar formalmente de sociedades científicas como a Geological Society.'
  },
  {
    id: 'm23',
    category: 'medio',
    question: 'Caroline Herschel trabalhou como assistente de qual astrônomo, seu irmão, catalogando nebulosas e estrelas?',
    options: [
      'William Herschel',
      'John Herschel',
      'Edmond Halley',
      'Tycho Brahe',
    ],
    answer: 0,
    explanation: 'Caroline auxiliou seu irmão William Herschel em observações astronômicas e descobriu vários cometas por conta própria.'
  },
  {
    id: 'm24',
    category: 'medio',
    question: 'Grace Hopper é associada à popularização de qual termo usado até hoje na programação, referente à correção de erros?',
    options: [
      '"Debugging"',
      '"Compiling"',
      '"Looping"',
      '"Encoding"',
    ],
    answer: 0,
    explanation: 'O termo \'debugging\' (depurar erros/bugs) é frequentemente associado ao trabalho pioneiro de Grace Hopper.'
  },
  {
    id: 'm25',
    category: 'medio',
    question: 'Em qual missão do transbordador espacial Mae Jemison viajou ao espaço em 1992?',
    options: [
      'Endeavour (STS-47)',
      'Discovery (STS-31)',
      'Columbia (STS-1)',
      'Atlantis (STS-27)',
    ],
    answer: 0,
    explanation: 'Mae Jemison integrou a tripulação da missão STS-47 do ônibus espacial Endeavour.'
  },
  // ---------- DIFÍCIL ----------
  {
    id: 'd01',
    category: 'dificil',
    question: 'Qual é a relação entre Marie Curie e Irène Joliot-Curie, e o que ambas têm em comum em termos de reconhecimento científico?',
    options: [
      'São mãe e filha, e ambas ganharam o Prêmio Nobel de Química',
      'São irmãs, e ambas ganharam o Nobel de Física',
      'Não têm parentesco, mas trabalharam juntas',
      'São mãe e filha, mas apenas Marie ganhou o Nobel',
    ],
    answer: 0,
    explanation: 'Irène Joliot-Curie, filha de Marie Curie, também ganhou o Nobel de Química (1935), como a mãe (1911).'
  },
  {
    id: 'd02',
    category: 'dificil',
    question: 'Por que a exclusão de Lise Meitner do Prêmio Nobel de Química de 1944, concedido apenas a Otto Hahn, é vista como uma injustiça histórica?',
    options: [
      'Porque ela foi essencial para interpretar teoricamente a fissão nuclear, mas foi ignorada, possivelmente por ser mulher e judia refugiada',
      'Porque ela não participou de nenhuma pesquisa sobre fissão nuclear',
      'Porque Otto Hahn nunca trabalhou com ela',
      'Porque o comitê do Nobel considerou o trabalho dela irrelevante para a química',
    ],
    answer: 0,
    explanation: 'Meitner interpretou teoricamente a fissão observada por Hahn, mas foi excluída do prêmio — um caso amplamente reconhecido como injusto.'
  },
  {
    id: 'd03',
    category: 'dificil',
    question: 'Por que a contribuição de Rosalind Franklin para a descoberta da estrutura do DNA é considerada historicamente subestimada?',
    options: [
      'Porque seus dados de raios X foram usados por Watson e Crick sem crédito adequado, e ela morreu antes de qualquer reconhecimento maior',
      'Porque suas imagens de raios X estavam incorretas',
      'Porque ela nunca estudou a estrutura do DNA',
      'Porque ela recusou publicamente participar da pesquisa',
    ],
    answer: 0,
    explanation: 'A Foto 51 de Franklin foi decisiva para o modelo de Watson e Crick, mas seu papel só foi amplamente reconhecido décadas depois.'
  },
  {
    id: 'd04',
    category: 'dificil',
    question: 'O que a técnica de cristalografia de raios X, aperfeiçoada por Dorothy Hodgkin, permitiu revelar sobre moléculas biológicas complexas?',
    options: [
      'Suas estruturas tridimensionais atômicas, essenciais para entender seu funcionamento e desenvolver medicamentos',
      'Apenas sua composição química elementar',
      'Sua massa molecular exata',
      'Sua origem evolutiva',
    ],
    answer: 0,
    explanation: 'A cristalografia de raios X revela a disposição espacial dos átomos, fundamental para o design de fármacos.'
  },
  {
    id: 'd05',
    category: 'dificil',
    question: 'Por que o trabalho de Ada Lovelace sobre a Máquina Analítica é considerado visionário para além de seu tempo?',
    options: [
      'Porque ela previu que máquinas poderiam processar símbolos e até criar música, antecipando a computação moderna',
      'Porque ela construiu fisicamente o primeiro computador funcional',
      'Porque ela inventou o conceito de eletricidade programável',
      'Porque ela previu a internet',
    ],
    answer: 0,
    explanation: 'Lovelace especulou que a máquina poderia manipular símbolos além de números, uma ideia central da computação atual.'
  },
  {
    id: 'd06',
    category: 'dificil',
    question: 'Qual foi o impacto do Teorema de Noether para o desenvolvimento da física teórica moderna?',
    options: [
      'Forneceu a base matemática que conecta simetrias físicas a leis de conservação, sendo fundamental para a física de partículas',
      'Provou que a energia não se conserva em sistemas fechados',
      'Demonstrou que o tempo é uma ilusão física',
      'Eliminou a necessidade da mecânica quântica',
    ],
    answer: 0,
    explanation: 'O teorema é uma das bases matemáticas mais importantes da física teórica, ligando simetria e conservação.'
  },
  {
    id: 'd07',
    category: 'dificil',
    question: 'De que forma o livro de Rachel Carson influenciou políticas públicas nos Estados Unidos?',
    options: [
      'Contribuiu para a proibição do uso do pesticida DDT e para a criação da Agência de Proteção Ambiental (EPA)',
      'Levou à proibição total de agrotóxicos no mundo',
      'Criou o primeiro parque nacional americano',
      'Resultou na criação da ONU',
    ],
    answer: 0,
    explanation: '\'Primavera Silenciosa\' impulsionou debates que culminaram na proibição do DDT e na criação da EPA em 1970.'
  },
  {
    id: 'd08',
    category: 'dificil',
    question: 'Por que a descoberta dos transposons por Barbara McClintock foi inicialmente recebida com ceticismo pela comunidade científica?',
    options: [
      'Porque contradizia a visão então aceita de que os genes ocupavam posições fixas e estáveis nos cromossomos',
      'Porque ela não apresentou nenhuma evidência experimental',
      'Porque o milho não era considerado um organismo válido para pesquisa genética',
      'Porque ela publicou seus resultados de forma anônima',
    ],
    answer: 0,
    explanation: 'A ideia de genes que se movem no cromossomo desafiava o paradigma genético da época, gerando resistência inicial.'
  },
  {
    id: 'd09',
    category: 'dificil',
    question: 'Qual foi a consequência teórica do experimento de Chien-Shiung Wu sobre a paridade na física de partículas?',
    options: [
      'Provou que a paridade não é conservada nas interações fracas, contrariando uma suposição fundamental da física',
      'Confirmou que todas as forças fundamentais conservam paridade',
      'Demonstrou a existência do bóson de Higgs',
      'Refutou a teoria da relatividade de Einstein',
    ],
    answer: 0,
    explanation: 'O experimento de Wu, em 1956, mostrou experimentalmente a violação da paridade nas interações fracas.'
  },
  {
    id: 'd10',
    category: 'dificil',
    question: 'O que a descoberta dos pulsares por Jocelyn Bell Burnell revelou sobre estrelas de nêutrons?',
    options: [
      'Que estrelas de nêutrons em rotação rápida emitem pulsos regulares de radiação, permitindo detectá-las',
      'Que estrelas de nêutrons não emitem nenhum tipo de radiação',
      'Que pulsares são, na verdade, buracos negros disfarçados',
      'Que estrelas de nêutrons só existem em outras galáxias',
    ],
    answer: 0,
    explanation: 'Os pulsos regulares detectados por Bell Burnell correspondem à rotação rápida de estrelas de nêutrons altamente magnetizadas.'
  },
  {
    id: 'd11',
    category: 'dificil',
    question: 'Por que os cálculos manuais de Katherine Johnson foram cruciais mesmo já existindo computadores eletrônicos na NASA?',
    options: [
      'Porque a confiança nos primeiros computadores eletrônicos ainda era baixa, e seus cálculos serviam de verificação de precisão',
      'Porque os computadores eletrônicos ainda não haviam sido inventados',
      'Porque ela trabalhava fora da NASA e não tinha acesso a computadores',
      'Porque seus cálculos substituíam totalmente qualquer verificação eletrônica',
    ],
    answer: 0,
    explanation: 'Antes de confiar plenamente nas máquinas, a NASA pedia que astronautas como John Glenn tivessem os cálculos confirmados manualmente por Johnson.'
  },
  {
    id: 'd12',
    category: 'dificil',
    question: 'Por que a contribuição tecnológica de Hedy Lamarr só foi amplamente reconhecida décadas depois de sua patente original de 1942?',
    options: [
      'Porque a tecnologia não foi usada pela Marinha americana na época e só ganhou relevância prática décadas depois',
      'Porque a patente foi perdida e redescoberta recentemente',
      'Porque ela nunca revelou publicamente sua invenção',
      'Porque a tecnologia foi imediatamente copiada por outro país',
    ],
    answer: 0,
    explanation: 'O sistema de salto de frequência de Lamarr só se tornaria essencial com o avanço das comunicações sem fio, muito depois de sua patente.'
  },
  {
    id: 'd13',
    category: 'dificil',
    question: 'Qual foi a importância científica da descoberta da radioatividade artificial por Irène Joliot-Curie e seu marido?',
    options: [
      'Permitiu produzir isótopos radioativos artificialmente, abrindo caminho para aplicações médicas e industriais',
      'Provou que a radioatividade natural não existia',
      'Eliminou a necessidade de estudar elementos radioativos naturais',
      'Demonstrou que átomos não poderiam ser divididos',
    ],
    answer: 0,
    explanation: 'A radioatividade artificial permitiu criar isótopos usados até hoje em medicina, indústria e pesquisa nuclear.'
  },
  {
    id: 'd14',
    category: 'dificil',
    question: 'O modelo de camadas nucleares proposto por Maria Goeppert-Mayer explicava o quê sobre certos núcleos atômicos?',
    options: [
      'Por que núcleos com determinados números de prótons e nêutrons (\'números mágicos\') são especialmente estáveis',
      'Por que todos os núcleos atômicos têm a mesma estabilidade',
      'Por que elétrons não podem existir dentro do núcleo',
      'Por que a radioatividade é sempre instantânea',
    ],
    answer: 0,
    explanation: 'O modelo de camadas explica a estabilidade excepcional de núcleos com certos números de prótons/nêutrons, os \'números mágicos\'.'
  },
  {
    id: 'd15',
    category: 'dificil',
    question: 'O que o chamado \'ciclo de Cori\', descoberto por Gerty e Carl Cori, descreve no metabolismo humano?',
    options: [
      'O processo de conversão do glicogênio em glicose e sua reconversão, regulando os níveis de energia no corpo',
      'A produção de insulina pelo pâncreas',
      'A formação de anticorpos no sistema imunológico',
      'O transporte de oxigênio pelas células vermelhas',
    ],
    answer: 0,
    explanation: 'O ciclo de Cori descreve como o corpo converte glicogênio em glicose e a recicla, regulando a energia muscular.'
  },
  {
    id: 'd16',
    category: 'dificil',
    question: 'Qual foi a importância biológica da descoberta do Fator de Crescimento Neural (NGF) por Rita Levi-Montalcini?',
    options: [
      'Revelou como certas proteínas regulam o crescimento e a sobrevivência de células nervosas, abrindo caminho para pesquisas sobre neurodegeneração',
      'Provou que os neurônios não se regeneram nunca',
      'Demonstrou que o sistema nervoso não depende de proteínas',
      'Eliminou a necessidade de estudar doenças neurológicas',
    ],
    answer: 0,
    explanation: 'O NGF foi a primeira de uma classe de proteínas chamadas fatores de crescimento, essenciais para entender o desenvolvimento neural.'
  },
  {
    id: 'd17',
    category: 'dificil',
    question: 'Qual método inovador Gertrude Elion utilizou para desenvolver seus medicamentos, diferente da tentativa e erro tradicional?',
    options: [
      'O design racional de fármacos, baseado em diferenças bioquímicas entre células normais e patológicas',
      'A clonagem de células saudáveis em laboratório',
      'O uso exclusivo de plantas medicinais',
      'A engenharia genética de vírus',
    ],
    answer: 0,
    explanation: 'Elion projetava fármacos explorando diferenças bioquímicas específicas entre células doentes e sadias, uma abordagem pioneira.'
  },
  {
    id: 'd18',
    category: 'dificil',
    question: 'Por que a descoberta da artemisinina por Tu Youyou é considerada um marco na medicina global?',
    options: [
      'Porque forneceu um tratamento eficaz contra a malária, doença já resistente a outros medicamentos, salvando milhões de vidas',
      'Porque eliminou totalmente a malária do planeta',
      'Porque substituiu todas as vacinas existentes',
      'Porque foi a primeira vez que uma planta foi usada na medicina',
    ],
    answer: 0,
    explanation: 'A artemisinina tornou-se a base dos tratamentos mais eficazes contra a malária, especialmente em cepas resistentes.'
  },
  {
    id: 'd19',
    category: 'dificil',
    question: 'Qual avanço tecnológico a técnica de amplificação de pulso gorjeado, desenvolvida por Donna Strickland, tornou possível?',
    options: [
      'A geração de pulsos de laser extremamente curtos e intensos, usados em cirurgias oculares de precisão',
      'A criação do primeiro laser da história',
      'A comunicação por fibra óptica',
      'A invenção do microscópio eletrônico',
    ],
    answer: 0,
    explanation: 'Essa técnica permitiu lasers ultrarrápidos e intensos, hoje usados em cirurgias oftalmológicas como a LASIK.'
  },
  {
    id: 'd20',
    category: 'dificil',
    question: 'Como as observações de Andrea Ghez comprovaram a existência de um buraco negro supermassivo no centro da Via Láctea?',
    options: [
      'Rastreando por décadas o movimento orbital de estrelas próximas ao centro galáctico, orbitando um objeto invisível e extremamente massivo',
      'Fotografando diretamente o buraco negro por telescópio óptico comum',
      'Medindo a temperatura da Via Láctea',
      'Detectando ondas gravitacionais isoladamente',
    ],
    answer: 0,
    explanation: 'Ghez acompanhou órbitas estelares ao redor de Sagitário A*, provando a presença de um objeto supermassivo invisível.'
  },
  {
    id: 'd21',
    category: 'dificil',
    question: 'O que caracteriza o caso de Vera Rubin como controverso na história dos prêmios científicos?',
    options: [
      'Ela nunca recebeu o Prêmio Nobel, mesmo suas pesquisas sendo fundamentais para a cosmologia moderna',
      'Ela recebeu o Nobel duas vezes seguidas',
      'Suas descobertas foram desmentidas posteriormente',
      'Ela dividiu o Nobel com quatro outros cientistas',
    ],
    answer: 0,
    explanation: 'A ausência de um Nobel para Vera Rubin, cujas observações sustentam a teoria da matéria escura, é vista como grande omissão.'
  },
  {
    id: 'd22',
    category: 'dificil',
    question: 'De que forma o trabalho de Mary Anning influenciou o desenvolvimento científico da paleontologia como disciplina?',
    options: [
      'Suas descobertas de fósseis marinhos ajudaram a fundamentar teorias sobre extinção e a história geológica da Terra, antes mesmo de Darwin',
      'Ela provou que os fósseis eram sempre rochas comuns',
      'Suas descobertas não tiveram nenhuma repercussão científica',
      'Ela foi a primeira a propor a teoria da evolução',
    ],
    answer: 0,
    explanation: 'Os fósseis de Anning forneceram evidências cruciais sobre espécies extintas décadas antes da publicação de Darwin.'
  },
  {
    id: 'd23',
    category: 'dificil',
    question: 'Qual foi a importância histórica e simbólica de Caroline Herschel ser remunerada pelo rei da Inglaterra por seu trabalho astronômico?',
    options: [
      'Foi um marco por reconhecer formalmente o trabalho científico de uma mulher, algo raro no século XVIII',
      'Significou que ela se tornou membro oficial da realeza britânica',
      'Provou que a astronomia era uma profissão exclusivamente feminina na época',
      'Não teve nenhuma relevância histórica',
    ],
    answer: 0,
    explanation: 'Receber salário real por trabalho científico tornou Caroline Herschel um símbolo do reconhecimento profissional feminino na ciência.'
  },
  {
    id: 'd24',
    category: 'dificil',
    question: 'Por que as contribuições de Grace Hopper para as linguagens de programação são consideradas revolucionárias?',
    options: [
      'Porque ela defendeu que computadores pudessem ser programados em linguagem próxima ao inglês, tornando a programação mais acessível',
      'Porque ela inventou o primeiro computador eletrônico do mundo',
      'Porque ela eliminou a necessidade de qualquer tipo de código',
      'Porque ela trabalhou exclusivamente com hardware, não com software',
    ],
    answer: 0,
    explanation: 'Hopper defendeu compiladores que traduzissem instruções em linguagem próxima ao inglês, base de linguagens como o COBOL.'
  },
  {
    id: 'd25',
    category: 'dificil',
    question: 'Além de astronauta, quais outras áreas profissionais Mae Jemison exerceu, refletindo a interdisciplinaridade de sua carreira?',
    options: [
      'Engenharia e medicina, tendo trabalhado como médica antes de ingressar na NASA',
      'Direito e economia',
      'Artes plásticas e música',
      'Arquitetura e design de interiores',
    ],
    answer: 0,
    explanation: 'Antes de se tornar astronauta, Mae Jemison já era engenheira e médica, com experiência clínica e em pesquisa.'
  }
]

export const CATEGORY_LABELS = {
  facil: 'Fácil',
  medio: 'Médio',
  dificil: 'Difícil'
}
