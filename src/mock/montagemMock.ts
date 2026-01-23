export let montagemBateriaTeste = {
  mensagem: "Número de série iniciado.",
  tipoMensagem: 0,
  dados: {
    id: 1486,
    idPassagem: 170491,
    idOperacao: null,
    op: "000010431212",
    centroTrabalho: "1910",
    numeroSerie: "4AJ39PB9C",
    modelo: "NTB POSITIVO VISION C4128A-15",
    qtdMaterial: 4,
    isFinalizaAutomatico: false,
  },
  listaMaterial: [
    {
      id: 990,
      idMaterial: 990,
      ordemAssociacao: 1,
      descricaoMaterial: "PLM CG15D12P 4GB 128GB N4020 DDR4 JABIL",
      materialLido: true,
      qtdItemMaterial: 2,
      qtdItemMaterialLido: 2,
      codMaterial: "000000000011182371",
      numSerieLidos: ["4AJ39PBBB", "4AJ39PBAA"],
      // numSerieLidos: [],
    },
    {
      id: 490,
      idMaterial: 490,
      ordemAssociacao: 2,
      descricaoMaterial: "BATER 2C LI-ION 5000MAH 37WH HENA SKD",
      materialLido: false,
      qtdItemMaterial: 2,
      qtdItemMaterialLido: 0,
      codMaterial: "000000000011182333",
      numSerieLidos: [],
    },
  ],
  eficiencia: {
    turno: "1",
    metaTotalTurno: 4680,
    realizadoTotalTurno: 1,
    metaTotalTurnoInstant: 1955,
    valorEficiencia: 0.05,
    listaMeta: [
      {
        hora: 1,
        valorHora: 600,
        inicioHora: "09:00",
        fimHora: "10:00",
      },
    ],
    listaRealizado: [
      {
        hora: 1,
        valorHora: 1,
        inicioHora: "09:00",
        fimHora: "10:00",
      },
    ],
  },
  listaRegras: [
    "INICIA_ATIVIDADE",
    "MONTAGEM_PLM",
    "MONTAGEM_BATERIA",
    "FINALIZA_ATIVIDADE",
    "FINALIZA_OPERACAO",
  ],
  isImprimirImei: false,
};

export let montagemBateria = {
  mensagem: "Número de série iniciado.",
  tipoMensagem: 0,
  dados: {
    id: 58313,
    idPassagem: 34181,
    idOperacao: null,
    op: "000010438260",
    centroTrabalho: "1910",
    numeroSerie: "4AJ87XQ3P",
    modelo: "POSITIVO VISION C4128B-15",
    qtdMaterial: 2,
    isFinalizaAutomatico: false,
  },
  listaMaterial: [
    {
      id: 4835,
      idMaterial: 4835,
      ordemAssociacao: 1,
      descricaoMaterial: "PLM P15S 4GB 128GB N4500 DDR4 BOREO",
      materialLido: true,
      qtdItemMaterial: 1,
      qtdItemMaterialLido: 1,
      codMaterial: "000000000011229444",
      numSerieLidos: ["11229444A4325A0UX0"],
    },
    {
      id: 288,
      idMaterial: 288,
      ordemAssociacao: 2,
      descricaoMaterial: "BATER 2C LI-PO 5000MAH 37WH BOREO",
      materialLido: null,
      qtdItemMaterial: 1,
      qtdItemMaterialLido: null,
      codMaterial: "000000000011196661",
      numSerieLidos: null,
    },
  ],
  eficiencia: {
    turno: "0",
    metaTotalTurno: 0,
    realizadoTotalTurno: 186,
    metaTotalTurnoInstant: 0,
    valorEficiencia: 0.0,
    listaMeta: [
      {
        hora: 1,
        valorHora: 0,
        inicioHora: "00:00",
        fimHora: "23:59",
      },
      {
        hora: 2,
        valorHora: 0,
        inicioHora: "00:00",
        fimHora: "23:59",
      },
      {
        hora: 3,
        valorHora: 0,
        inicioHora: "00:00",
        fimHora: "23:59",
      },
      {
        hora: 4,
        valorHora: 0,
        inicioHora: "00:00",
        fimHora: "23:59",
      },
      {
        hora: 5,
        valorHora: 0,
        inicioHora: "00:00",
        fimHora: "23:59",
      },
    ],
    listaRealizado: [
      {
        hora: 1,
        valorHora: 30,
        inicioHora: "00:00",
        fimHora: "23:59",
      },
      {
        hora: 2,
        valorHora: 38,
        inicioHora: "00:00",
        fimHora: "23:59",
      },
      {
        hora: 3,
        valorHora: 37,
        inicioHora: "00:00",
        fimHora: "23:59",
      },
      {
        hora: 4,
        valorHora: 37,
        inicioHora: "00:00",
        fimHora: "23:59",
      },
      {
        hora: 5,
        valorHora: 44,
        inicioHora: "00:00",
        fimHora: "23:59",
      },
    ],
  },
  listaRegras: [
    "INICIA_ATIVIDADE",
    "FINALIZA_ATIVIDADE",
    "MONTAGEM_BATERIA",
    "MONTAGEM_PLM",
  ],
  isImprimirImei: false,
};

export let montagemListMetaRealizadoOneEquip = {
  mensagem: "Número de série iniciado.",
  tipoMensagem: 0,
  dados: {
    id: 1240,
    idPassagem: 167204,
    idOperacao: null,
    op: "000010431061",
    centroTrabalho: "1910",
    numeroSerie: "4AJ39JW9X",
    modelo: "NTB POSITIVO VISION C4128A-15",
    qtdMaterial: 1,
    isFinalizaAutomatico: false,
  },
  listaMaterial: [
    {
      id: 1,
      idMaterial: 1,
      ordemAssociacao: 1,
      descricaoMaterial: "MEM 16GB DDR4 PC25600 SODIMM ADATA MONT",
      materialLido: false,
      qtdItemMaterial: 1,
      qtdItemMaterialLido: 0,
      numSerieLidos: null,
      codMaterial: "000000000011176317",
    },
  ],
  eficiencia: {
    turno: "1",
    metaTotalTurno: 14040,
    realizadoTotalTurno: 5,
    metaTotalTurnoInstant: 3144,
    valorEficiencia: 0.1590053894876767,
    listaMeta: [
      {
        hora: 8,
        valorHora: 600,
      },
      {
        hora: 9,
        valorHora: 600,
      },
    ],
    listaRealizado: [
      {
        hora: 8,
        valorHora: 3,
      },
      {
        hora: 9,
        valorHora: 2,
      },
    ],
  },
  listaRegras: [
    "INICIA_OPERACAO",
    "PERMITE_APONTAR_NS_REINCIDENTE",
    "INICIA_ATIVIDADE",
  ],
  isImprimirImei: false,
};

export let montagemListMetaRealizado = {
  mensagem: "Número de série iniciado.",
  tipoMensagem: 0,
  dados: {
    id: 1240,
    idPassagem: 167204,
    idOperacao: null,
    op: "000010431061",
    centroTrabalho: "1910",
    numeroSerie: "4AJ39JW9X",
    modelo: "NTB POSITIVO VISION C4128A-15",
    qtdMaterial: 0,
    isFinalizaAutomatico: true,
  },
  listaMaterial: [],
  eficiencia: {
    turno: "1",
    metaTotalTurno: 14040,
    realizadoTotalTurno: 5,
    metaTotalTurnoInstant: 3144,
    valorEficiencia: 0.1590053894876767,
    listaMeta: [
      {
        hora: 8,
        valorHora: 600,
      },
      {
        hora: 9,
        valorHora: 600,
      },
    ],
    listaRealizado: [
      {
        hora: 8,
        valorHora: 3,
      },
      {
        hora: 9,
        valorHora: 2,
      },
    ],
  },
  listaRegras: [
    "INICIA_OPERACAO",
    "PERMITE_APONTAR_NS_REINCIDENTE",
    "INICIA_ATIVIDADE",
  ],
  isImprimirImei: false,
};

export let montagemListBackOneReimpressao = {
  // montagem
  mensagem: "Sucesso",
  tipoMensagem: 0,
  dados: {
    id: 413,
    idPassagem: null,
    idOperacao: null,
    op: "000010352274",
    centroTrabalho: 1910,
    numeroSerie: "4AD51LZ43",
    modelo: "VAIO FE15",
    qtdMaterial: 1,
    isFinalizaAutomatico: false,
  },
  listaMaterial: [
    {
      id: 1,
      idMaterial: 1,
      ordemAssociacao: 1,
      descricaoMaterial: "MEM 16GB DDR4 PC25600 SODIMM ADATA MONT",
      materialLido: true,
      qtdItemMaterial: 1,
      qtdItemMaterialLido: 1,
      numSerieLidos: ["teste1, teste2"],
      codMaterial: "000000000011176317",
    },
  ],
  eficiencia: {
    turno: "Turno 1",
    metaTotalTurno: 450,
    realizadoTotalTurno: 230,
    listaMeta: [],
    listaRealizado: [],
  },
  listaRegras: [],
};

export let montagemListBackNaoReimpressao = {
  // teste prod
  mensagem: "Número de série iniciado.",
  tipoMensagem: 0,
  dados: {
    id: 16551,
    idPassagem: 4705,
    idOperacao: null,
    op: "000010430169",
    centroTrabalho: "1910",
    numeroSerie: "4AJ36BS3Y",
    modelo: "NTB POSITIVO VISION C4128A-15",
    qtdMaterial: 2,
    isFinalizaAutomatico: true,
  },
  listaMaterial: [
    {
      id: 288,
      idMaterial: 288,
      ordemAssociacao: 2,
      descricaoMaterial: "BATER 2C LI-PO 5000MAH 37WH BOREO",
      materialLido: true,
      qtdItemMaterial: 1,
      qtdItemMaterialLido: 1,
      codMaterial: "000000000011196661",
      numSerieLidos: ["11"],
    },
    {
      id: 371,
      idMaterial: 371,
      ordemAssociacao: 1,
      descricaoMaterial: "ADAPT AC/DC F24L9-120200SPAE 24W 2P FLEX",
      materialLido: true,
      qtdItemMaterial: 1,
      qtdItemMaterialLido: 1,
      codMaterial: "000000000011198822",
      numSerieLidos: ["F2512311302744"],
    },
  ],
  eficiencia: {
    turno: "0",
    metaTotalTurno: 0,
    realizadoTotalTurno: 0,
    metaTotalTurnoInstant: 0,
    valorEficiencia: 0,
    listaMeta: [],
    listaRealizado: [],
  },
  listaRegras: [
    "FINALIZA_ATIVIDADE",
    "INICIA_ATIVIDADE",
    "PERMITE_APONTAR_NS_REINCIDENTE",
    "INICIA_OPERACAO",
    "MONTAGEM_TECLADO",
    "MONTAGEM_BATERIA",
    "MONTAGEM_ADAPTADOR",
  ],
  isImprimirImei: false,
};

export let montagemListBackOneCaixaConso = {
  // montagem - caixa
  mensagem: "Número de série iniciado.",
  tipoMensagem: 0,
  dados: {
    id: 413,
    idPassagem: null,
    idOperacao: null,
    op: "000010352274",
    centroTrabalho: 1910,
    numeroSerie: "4AD51LZ43",
    modelo: "VAIO FE15",
    qtdMaterial: 2,
    isFinalizaAutomatico: true,
  },
  listaMaterial: [
    {
      id: 1,
      idMaterial: 1,
      ordemAssociacao: 1,
      descricaoMaterial: "MEM 16GB DDR4 PC25600 SODIMM ADATA MONT",
      materialLido: false,
      qtdItemMaterial: 2,
      qtdItemMaterialLido: 0,
      codMaterial: "000000000011176317",
      numSerieLidos: null,
    },
  ],
  eficiencia: {
    turno: "Turno 1",
    metaTotalTurno: 450,
    realizadoTotalTurno: 230,
    listaMeta: [],
    listaRealizado: [],
  },
  listaRegras: ["INCLUI_LOTECONSOLIDADORA_OP", "FECHAR_CAIXA_CONSOLIDADORA"],
};

export let montagemListBackOne = {
  // montagem
  mensagem: "Sucesso",
  tipoMensagem: 0,
  dados: {
    id: 413,
    idPassagem: null,
    idOperacao: null,
    op: "000010352274",
    centroTrabalho: 1910,
    numeroSerie: "4AD51LZ43",
    modelo: "VAIO FE15",
    qtdMaterial: 2,
    isFinalizaAutomatico: true,
  },
  listaMaterial: [
    {
      id: 1,
      idMaterial: 1,
      ordemAssociacao: 1,
      descricaoMaterial: "MEM 16GB DDR4 PC25600 SODIMM ADATA MONT",
      materialLido: false,
      qtdItemMaterial: 2,
      qtdItemMaterialLido: 0,
      codMaterial: "000000000011176317",
      numSerieLidos: null,
    },
  ],
  eficiencia: {
    turno: "Turno 1",
    metaTotalTurno: 450,
    realizadoTotalTurno: 230,
    listaMeta: [],
    listaRealizado: [],
  },
  listaRegras: [],
};

export let montagemListPostBackIniSemMaterial = {
  // montagem
  mensagem: "",
  tipoMensagem: 0,
  dados: {
    id: 0,
    idPassagem: 0,
    idOperacao: 0,
    op: "18181",
    centroTrabalho: 1910,
    numeroSerie: "ABC",
    modelo: "mod1",
    qtdMaterial: 0,
    isFinalizaAutomatico: false,
  },
  listaMaterial: [],
  eficiencia: {
    turno: "Turno 1",
    metaTotalTurno: 450,
    realizadoTotalTurno: 230,
    listaMeta: [
      {
        hora: 1,
        valorHora: 50,
      },
      {
        hora: 2,
        valorHora: 50,
      },
      {
        hora: 3,
        valorHora: 50,
      },
      {
        hora: 4,
        valorHora: 50,
      },
      {
        hora: 5,
        valorHora: 50,
      },
      {
        hora: 6,
        valorHora: 50,
      },
      {
        hora: 7,
        valorHora: 50,
      },
      {
        hora: 8,
        valorHora: 50,
      },
      {
        hora: 9,
        valorHora: 50,
      },
    ],
    listaRealizado: [
      {
        hora: 1,
        valorHora: 50,
      },
      {
        hora: 2,
        valorHora: 50,
      },
      {
        hora: 3,
        valorHora: 50,
      },
      {
        hora: 4,
        valorHora: 50,
      },
      {
        hora: 5,
        valorHora: 30,
      },
      {
        hora: 6,
        valorHora: 0,
      },
      {
        hora: 7,
        valorHora: 0,
      },
      {
        hora: 8,
        valorHora: 0,
      },
      {
        hora: 9,
        valorHora: 0,
      },
    ],
  },
  listaRegras: [],
};

export let montagemListBacktree = {
  //Montagem
  mensagem: "Sucesso",
  tipoMensagem: 0,
  dados: {
    id: 413,
    idPassagem: null,
    idOperacao: null,
    op: "000010352274",
    centroTrabalho: 1910,
    numeroSerie: "4AD51LZ43",
    modelo: "VAIO FE15",
    qtdMaterial: 4,
    isFinalizaAutomatico: false,
  },
  listaMaterial: [
    {
      id: 1,
      idMaterial: 1,
      ordemAssociacao: 1,
      descricaoMaterial: "PLACA MÃE - ZNTERS",
      materialLido: false,
      qtdItemMaterial: 1,
      qtdItemMaterialLido: 0,
      codMaterial: "000000000011176317",
      numSerieLidos: null,
    },
    {
      id: 2,
      idMaterial: 2,
      ordemAssociacao: 2,
      descricaoMaterial: "MEM 16GB DDR4 PC25600 SODIMM ADATA MONT",
      materialLido: false,
      qtdItemMaterial: 2,
      qtdItemMaterialLido: 0,
      codMaterial: "000000000011176318",
      numSerieLidos: null,
    },
    {
      id: 3,
      idMaterial: 3,
      ordemAssociacao: 3,
      descricaoMaterial: "HD - POSITIVO CORE",
      materialLido: false,
      qtdItemMaterial: 1,
      qtdItemMaterialLido: 0,
      codMaterial: "000000000011176319",
      numSerieLidos: null,
    },
  ],
  eficiencia: {
    turno: "Turno 1",
    metaTotalTurno: 450,
    realizadoTotalTurno: 230,
    listaMeta: [],
    listaRealizado: [],
  },
  listaRegras: [],
};
