export let painelDadosResumoProd = {
  metahoraAcumulado: 800,
  metaHoraTurno1: 900,
  metahoraTurno2: 900,
  produzidoHoraAcumulado: 777,
  produzidoHoraTurno1: 850,
  produzidoHoraTurno2: 790,
  eficienciaHoraAcumulado: 97.0,
  eficienciaHoraTurno1: 94.44,
  eficienciaHoraTurno2: 87.78,
  fpyAcumulado: 89,
  fpyTurno1: 89,
  fpyTurno2: 89,
  sintoma: [
    {
      id: 1,
      descricao: "Sem Boot",
      qtde: 28,
    },
    {
      id: 2,
      descricao: "Reinicia Sozinho",
      qtde: 20,
    },
    {
      id: 3,
      descricao: "Não Liga",
      qtde: 8,
    },
    {
      id: 4,
      descricao: "Ruído anormal",
      qtde: 5,
    },
    {
      id: 4,
      descricao: "Erro de disco",
      qtde: 4,
    },
  ],
  ofensores: [
    {
      id: 1,
      descricao: "Memória Ram",
      qtde: 29,
    },
    {
      id: 2,
      descricao: "BIOS",
      qtde: 25,
    },
    {
      id: 3,
      descricao: "Cooler",
      qtde: 17,
    },
    {
      id: 4,
      descricao: "Placa Mãe",
      qtde: 10,
    },
    {
      id: 4,
      descricao: "Cabo de Energia",
      qtde: 7,
    },
  ],
};

export let painelReal = {
  turnodisponivel: ["2"], // os turnos que irão aparecer no painel
  item: "ACUMULADO", // acumulado
  metaHora: "0", // acumulado 
  produzidoHora: "11", // acumulado
  eficiencia: "0,00", // acumulado
  fpy: "83", // acumulado
  metasturnos: [
    {
      item_2: "2º TURNO", // segundo turno
      metaHora_2: "0", // segundo turno
      produzidoHora_2: "3", // segundo turno
      eficiencia_2: "0,00", // segundo turno
      fpy_2: "0", // segundo turno
    },
    {
      item_1: "1º TURNO", // primeiro turno
      metaHora_1: "0", // primeiro turno
      produzidoHora_1: "8", // primeiro turno
      eficiencia_1: "0,00", // primeiro turno
      fpy_1: "0,00", // primeiro turno
    },
  ],
  sintomas: [
    {
      id: "1",
      linha: "1",
      defeito: "DESLIGANDO",
      quantidade_total: "1",
    },
    {
      id: "2",
      linha: "1",
      defeito: "ZZZ-REINICIANDO SOZINHO",
      quantidade_total: "10",
    },
  ],
  ofensores: [
    {
      id: "1",
      linha: "1",
      defeito: "DESLIGANDO",
      quantidade_total: "1",
    },
    {
      id: "2",
      linha: "1",
      defeito: "ZZZ-REINICIANDO SOZINHO",
      quantidade_total: "10",
    },
  ],
};
