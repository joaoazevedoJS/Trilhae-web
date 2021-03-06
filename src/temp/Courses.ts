interface Props {
  id: number;
  title: string;
  description: string;
  lessons: Array<{
    module: number;
    description: string;
    open: boolean;
    finished: boolean;
  }>;
  question: string;
  questions: Array<{
    id: number;
    description: string;
    selected: boolean;
  }>;
}

const Courses: Array<Props> = [
  {
    id: 1,
    title: 'Comunicação Eficaz',
    description: `Uma das coisas mais importantes e buscadas dentro das organizações
    empresariais é uma comunicação eficaz. Diferente do que muitos
    acreditam, a comunicação não está ligada apenas ao fato de saber
    dizer algo a outras pessoas. Ela consiste em fazer com que o outro
    lado – no caso, o receptor – entenda aquilo que é dito, sem que
    haja qualquer tipo de má interpretação.`,
    lessons: [
      {
        module: 1,
        description: 'A comunicação e suas diferentes formas',
        open: true,
        finished: false,
      },
      {
        module: 2,
        description: 'Envolução das formas de comunicação',
        open: false,
        finished: false,
      },
      {
        module: 3,
        description: 'Como ser Assertivo',
        open: false,
        finished: false,
      },
      {
        module: 4,
        description: 'Exercitando a assertividade',
        open: false,
        finished: false,
      },
    ],
    question:
      'Existem 5 tipos de comunicação temos a Verbal, Escrita, Oral, Não Verbal, qual seria a 5 comunicação:',
    questions: [
      {
        id: 1,
        description: 'Assertiva',
        selected: false,
      },
      {
        id: 2,
        description: 'Digital',
        selected: false,
      },
      {
        id: 3,
        description: 'Não Escrita',
        selected: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Pensamento Criativo',
    description: `O pensamento criativo é a capacidade de criar novas ideias com
    determinado valor. Isso não significa que a criatividade consiste
    em pensar de maneira diferente, uma vez que fabricar portas
    hexagonais é algo diferente do habitual, mas não deixa de ser uma
    proposta criativa porque proporciona nenhum valor.`,
    lessons: [
      {
        module: 1,
        description: 'Introdução a criatividade',
        open: true,
        finished: false,
      },
      {
        module: 2,
        description: 'Ambiente',
        open: false,
        finished: false,
      },
      {
        module: 3,
        description: 'Processo criativo',
        open: false,
        finished: false,
      },
      {
        module: 4,
        description: 'Bloqueios',
        open: false,
        finished: false,
      },
      {
        module: 5,
        description: 'Ativadores Criativos',
        open: false,
        finished: false,
      },
    ],
    question: 'Para possuir um pensamento criativos temos que:',
    questions: [
      {
        id: 1,
        description: 'Nascer criativo',
        selected: false,
      },
      {
        id: 2,
        description: 'Aprender ferramentas para desenvolver a criatividade',
        selected: false,
      },
      {
        id: 3,
        description: 'É um dom natural',
        selected: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Resiliência',
    description: `O que você faz quando os problemas parecem te perseguir? Você é o
    tipo que diante de um contratempo chora, foge ou enfrenta? Saiba
    que existem pessoas que além de enfrentar os problemas, ainda são
    capazes de se beneficiarem com eles, aprender e crescer
    emocionalmente. Elas possuem razões para nunca desistir de suas
    metas e objetivos. Pessoas com essas capacidades são consideradas
    pessoas resilientes.`,
    lessons: [
      {
        module: 1,
        description: 'Visão geral da resiliência',
        open: true,
        finished: false,
      },
      {
        module: 2,
        description: 'Características das pessoas resilientes',
        open: false,
        finished: false,
      },
      {
        module: 3,
        description: 'Como desenvolver a resiliência',
        open: false,
        finished: false,
      },
      {
        module: 4,
        description: 'Avaliando estímulos dados pelo ambiente',
        open: false,
        finished: false,
      },
      {
        module: 5,
        description: 'Como se recuperar de uma crise',
        open: false,
        finished: false,
      },
    ],
    question: 'O que é resiliência?',
    questions: [
      {
        id: 1,
        description: 'Saber se defender sozinho',
        selected: false,
      },
      {
        id: 2,
        description: 'Se abater em circunstâncias adversas',
        selected: false,
      },
      {
        id: 3,
        description: 'Capacidade de lidar com problemas',
        selected: false,
      },
    ],
  },
  {
    id: 4,
    title: 'Empatia',
    description: `O conceito de empatia é, em suma, a capacidade de se identificar
    com outra pessoa a fim de compreender o que ela pensa e sente;
    trata-se de compreensão emocional. Para adentrar o terreno
    empático, é preciso antes aceitar as próprias vulnerabilidades e
    admitir que ninguém que encontrarmos, por melhor que seja, será
    perfeito.`,
    lessons: [
      {
        module: 1,
        description: 'O que é empatia?',
        open: true,
        finished: false,
      },
      {
        module: 2,
        description: 'O que a empatia tem a ver com minha atuação profissional',
        open: false,
        finished: false,
      },
      {
        module: 3,
        description: 'A neurociência da empatia',
        open: false,
        finished: false,
      },
      {
        module: 4,
        description: 'Mapa da empatia',
        open: false,
        finished: false,
      },
      {
        module: 5,
        description: 'Bem estar',
        open: false,
        finished: false,
      },
    ],
    question:
      'Após aprender empatia, se você ver uma pessoa com dificuldades, como você irá agir?',
    questions: [
      {
        id: 1,
        selected: false,
        description:
          'Me colocarei no lugar da pessoa para compreender suas dificuldades',
      },
      {
        id: 2,
        description:
          'Irei julgar a pessoa porque ela está com dificuldades por sua própria culpa.',
        selected: false,
      },
      {
        id: 3,
        description:
          'Darei conselhos sobre minha experiência sobre situações que passei.',
        selected: false,
      },
    ],
  },
  {
    id: 5,
    title: 'Liderança',
    description: `Liderança é a arte de motivar pessoas a agir para alcançar
    determinado objetivo. Em um ambiente de trabalho, liderança pode
    significar a capacidade de conduzir equipe e colegas para atender
    às necessidades da empresa.`,
    lessons: [
      {
        module: 1,
        description: 'Liderança Ambidestra',
        open: true,
        finished: false,
      },
      {
        module: 2,
        description: 'Cultura',
        open: false,
        finished: false,
      },
      {
        module: 3,
        description: 'Contratação e demissão',
        open: false,
        finished: false,
      },
      {
        module: 4,
        description: 'Master class com líder convidado',
        open: false,
        finished: false,
      },
      {
        module: 5,
        description: 'Delegação e motivação',
        open: false,
        finished: false,
      },
      {
        module: 6,
        description: 'Times de alta performance',
        open: false,
        finished: false,
      },
      {
        module: 7,
        description: 'Gestão da mudança',
        open: false,
        finished: false,
      },
      {
        module: 8,
        description: 'influência + feedback',
        open: false,
        finished: false,
      },
      {
        module: 9,
        description: 'Gestão para resultados',
        open: false,
        finished: false,
      },
      {
        module: 10,
        description: 'tendências e inovação',
        open: false,
        finished: false,
      },
    ],
    question: 'Qual o grande desafio da liderança ambidestra?',
    questions: [
      {
        id: 1,
        description: 'Ser um chefe que impõe respeito acima de tudo.',
        selected: false,
      },
      {
        id: 2,
        description: 'Ser amigo de todos os seus funcionários.',
        selected: false,
      },
      {
        id: 3,
        description:
          'Manter um equilíbrio entre a gestão baseada em dados e a gestão holística.',
        selected: false,
      },
    ],
  },
  {
    id: 6,
    title: 'Ética no trabalho',
    description: `A ética no trabalho é o conjunto de valores, normas e atitudes que
    conduzem o comportamento dos profissionais dentro de uma empresa.
    É por meio dela que um profissional apresenta comportamentos
    adequados ao ambiente de trabalho, sendo guiado por princípios que
    impactam diretamente a convivência em grupo.`,
    lessons: [
      {
        module: 1,
        description: 'Conceitos básicos',
        open: true,
        finished: false,
      },
      {
        module: 2,
        description: 'Ética da vida pública',
        open: false,
        finished: false,
      },
      {
        module: 3,
        description: 'Ética e moral',
        open: false,
        finished: false,
      },
      {
        module: 4,
        description: 'Relação humanas na organização',
        open: false,
        finished: false,
      },
      {
        module: 5,
        description: 'Relação humanas e ética profissional',
        open: false,
        finished: false,
      },
    ],
    question: 'Como ser uma pessoa ética no trabalho?',
    questions: [
      {
        id: 1,
        description:
          'Se preocupar com o que seus colegas de equipe estão fazendo de certo e errado.',
        selected: false,
      },
      {
        id: 2,
        description: 'Ser uma pessoa justa e separar o certo e errado.',
        selected: false,
      },
      {
        id: 3,
        selected: false,
        description:
          'Reportar tudo aos seus superiores quando houver algum problema.',
      },
    ],
  },
];

export default Courses;
