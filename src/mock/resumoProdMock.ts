export let buscarResumoProdMock = [
  // Módulo de Resumo de Produtividade - > Pesquisar
  {
    id: 1,
    linha: "3",
    metaHora: 30,
    produzidoHora: 40,
    eficienciaHora: 130,
    metaTurno: 514,
    produzidoTurno: 501,
    eficienciaTurno: 97.47,
    total: 501,
  },
  {
    id: 2,
    linha: "81",
    metaHora: 24,
    produzidoHora: 19,
    eficienciaHora: 79.17,
    metaTurno: 403,
    produzidoTurno: 430,
    eficienciaTurno: 106.7,
    total: 430,
  },
];

export let operacoesResumoProd = [
  // Módulo de Resumo de Produtividade
  {
    id: 1,
    dsTipoOperacao: "EMBALAGEM",
    cdTipoOperacao: "1",
  },
  {
    id: 2,
    dsTipoOperacao: "MONTAGEM",
    cdTipoOperacao: "2",
  },
  {
    id: 3,
    dsTipoOperacao: "REPARO",
    cdTipoOperacao: "3",
  },
];

export let turnoResumoProd = [
  // Módulo de Resumo de Produtividade
  {
    id: 1,
    dsTipoTurno: "1",
    cdTipoTurno: "1",
  },
  {
    id: 2,
    dsTipoTurno: "2",
    cdTipoTurno: "2",
  },
  {
    id: 3,
    dsTipoTurno: "3",
    cdTipoTurno: "3",
  },
];

export let listaDetalhesProdMock = [
  {
    id: 1,
    linha: 3,
    operacao: "Embalagem",
    produto: "3003055",
    totalHora: 0,
    totalTurno: 2,
    totalDia: 2,
  },
  {
    id: 2,
    linha: 3,
    operacao: "Embalagem",
    produto: "3003056",
    totalHora: 0,
    totalTurno: 2,
    totalDia: 2,
  },
  {
    id: 3,
    linha: 3,
    operacao: "Embalagem",
    produto: "3003057",
    totalHora: 0,
    totalTurno: 2,
    totalDia: 2,
  },
  {
    id: 4,
    linha: 3,
    operacao: "Embalagem",
    produto: "3003058",
    totalHora: 0,
    totalTurno: 2,
    totalDia: 2,
  },
  {
    id: 5,
    linha: 3,
    operacao: "Embalagem",
    produto: "3003059",
    totalHora: 0,
    totalTurno: 2,
    totalDia: 2,
  },
  {
    id: 6,
    linha: 3,
    operacao: "Embalagem",
    produto: "3003060",
    totalHora: 0,
    totalTurno: 2,
    totalDia: 2,
  },
];

export let listaDetalhesProdEficienciaMock = {
  dataInicio: "2025-02-04T07:00:00",
  turno: "1",
  linha: "3",
  operacao: "Embalagem",
  listaHora: [
    {
      id: 1,
      hora: 6,
      meta: 76,
      produzido: 54,
      eficiencia: 71.05,
    },
    {
      id: 2,
      hora: 7,
      meta: 63,
      produzido: 75,
      eficiencia: 119.05,
    },
    {
      id: 3,
      hora: 8,
      meta: 60,
      produzido: 83,
      eficiencia: 138.33,
    },
    {
      id: 4,
      hora: 9,
      meta: 60,
      produzido: 83,
      eficiencia: 138.33,
    },
    {
      id: 5,
      hora: 10,
      meta: 60,
      produzido: 83,
      eficiencia: 138.33,
    },
    {
      id: 6,
      hora: 11,
      meta: 60,
      produzido: 83,
      eficiencia: 138.33,
    },
    {
      id: 7,
      hora: 12,
      meta: 60,
      produzido: 83,
      eficiencia: 138.33,
    },
    {
      id: 8,
      hora: 13,
      meta: 60,
      produzido: 83,
      eficiencia: 138.33,
    },
    {
      id: 9,
      hora: 14,
      meta: 60,
      produzido: 83,
      eficiencia: 138.33,
    },
    {
      id: 10,
      hora: 15,
      meta: 60,
      produzido: 83,
      eficiencia: 138.33,
    },
  ],
};