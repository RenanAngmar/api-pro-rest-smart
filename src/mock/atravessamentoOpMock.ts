export let buscarAtravessamentoMock = {
  totalElements: 3,
  content: [
    // Módulo de Atravessamento de OP - > Pesquisar
    {
      id: 1,
      linha: "3",
      turno: "1",
      cdOp: "10419016",
      produto: "3002686",
      descricao: "NTB Positivo Vision1",
      segmento: "Notebook",
      produzir: 501,
      dataInicio: "2025-02-04T07:00:00",
      dataFim: "2025-02-05T07:00:00",
      tempoTotal: "07:00:00",
    },
    {
      id: 2,
      linha: "3",
      turno: "1",
      cdOp: "10419017",
      produto: "3002687",
      descricao: "NTB Positivo Visio2",
      segmento: "Notebook",
      produzir: 501,
      dataInicio: "2025-02-04T07:00:00",
      dataFim: "2025-02-05T07:00:00",
      tempoTotal: "07:00:00",
    },
    {
      id: 3,
      linha: "3",
      turno: "1",
      cdOp: "10419018",
      produto: "3002688",
      descricao: "NTB Positivo Vision3",
      segmento: "Notebook",
      produzir: 501,
      dataInicio: "2025-02-04T07:00:00",
      dataFim: "2025-02-05T07:00:00",
      tempoTotal: "07:00:00",
    },
  ],
};

export let listaSegmentoMock = [
  // Atravessamento de OP
  {
    id: 1,
    dsSegmento: "Notebook",
    cdSegmento: "1",
  },
  {
    id: 2,
    dsSegmento: "Desktop",
    cdSegmento: "2",
  },
  {
    id: 3,
    dsSegmento: "Tablet",
    cdSegmento: "3",
  },
];

export let listaLinhaMock = [
  // Atravessamento de OP
  {
    id: 1,
    dsLinha: "1",
    cdLinha: "1",
  },
  {
    id: 2,
    dsLinha: "2",
    cdLinha: "2",
  },
  {
    id: 3,
    dsLinha: "3",
    cdLinha: "3",
  },
];

export let listaPeriodoMock = [
  // Atravessamento de OP
  {
    id: 1,
    dsPeriodo: "24 hrs",
    cdPeriodo: "1",
  },
  {
    id: 2,
    dsPeriodo: "48 hrs",
    cdPeriodo: "2",
  },
  {
    id: 3,
    dsPeriodo: "72 hrs",
    cdPeriodo: "3",
  },
];