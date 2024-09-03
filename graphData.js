const graph = {
    nodes: [
      { id: "Roteador", group: 1, repeater: false, coordinates: "27° 29.06' S, 53° 23.97' O", speed: "10mbps", dbm: "-10", isRouter: true }, 
  
      { id: "Repetidor 1", group: 2, repeater: true, coordinates: "27° 29.05' S, 53° 23.97' O", speed: "10mbps", dbm: "-10" },
      { id: "Repetidor 2", group: 3, repeater: true, coordinates: "27° 29.05' S, 53° 23.96' O", speed: "10mbps", dbm: "-10" },
      { id: "Repetidor 3", group: 4, repeater: true, coordinates: "27° 29.06' S, 53° 23.98' O", speed: "10mbps", dbm: "-10" },
      { id: "Repetidor 4", group: 5, repeater: true, coordinates: "27° 29.07' S, 53° 23.98' O", speed: "10mbps", dbm: "-10" },
  
      { id: "Secretaria", group: 1, repeater: false, coordinates: "27°29'3,57374\" 53°23'58,55863", speed: "10.0mbps", dbm: "-61" },
      { id: "Sala Diretora", group: 1, repeater: false, coordinates: "27°29'3,4634\" 53°23'58,60878", speed: "10.0mbps", dbm: "-73" },
      { id: "Sala Vice Diretora", group: 1, repeater: false, coordinates: "27°29'3,43651\" 53°23'58,55269", speed: "10.0mbps", dbm: "-73" },
  
      { id: "Convivência 3", group: 2, repeater: false, coordinates: "27°29'3,83752\" 53°23'59,08747", speed: "9.6mbps", dbm: "-61" },
      { id: "Sala 7", group: 2, repeater: false, coordinates: "27°29'3,79925\" 53°23'58,92097", speed: "9.6mbps", dbm: "-57" },
      { id: "Sala dos Professores", group: 2, repeater: false, coordinates: "27°29'4,01093\" 53°23'58,78223", speed: "9.2mbps", dbm: "-51" },
      { id: "Sala SOE", group: 2, repeater: false, coordinates: "27°29'4,01215\" 53°23'58,62221", speed: "9.5mbps", dbm: "-70" },
      { id: "Sala da Coordenação", group: 2, repeater: false, coordinates: "27°29'4,14982\" 53°23'58,3696", speed: "9.7mbps", dbm: "-51" },
      { id: "Sala AEE", group: 2, repeater: false, coordinates: "27°29'4,29817\" 53°23'58,4682", speed: "9.3mbps", dbm: "-61" },
      { id: "Convivência 1", group: 2, repeater: false, coordinates: "27°29'2,95253\" 53°23'57,34561", speed: "9.5mbps", dbm: "-42" },
      { id: "Cozinha", group: 2, repeater: false, coordinates: "27°29'3,83489\" 53°23'58,06849", speed: "7.9mbps", dbm: "-62" },
      { id: "Ginásio", group: 2, repeater: false, coordinates: "27°48'4,431\" 53°39'94,27", speed: "9.0mbps", dbm: "-55" },
  
      { id: "Laboratório de Informática", group: 3, repeater: false, coordinates: "27°29'4,47947\" 53°23'59,13816", speed: "9.0mbps", dbm: "-32" },
      { id: "Sala 9", group: 3, repeater: false, coordinates: "27°29'4,55737\" 53°23'58,8845", speed: "9.3mbps", dbm: "-32" },
      { id: "Sala 8", group: 3, repeater: false, coordinates: "27°29'4,41438\" 53°23'58,76232", speed: "9.4mbps", dbm: "-68" },
      { id: "Convivência 4", group: 3, repeater: false, coordinates: "27°29'4,16429\" 53°23'58,80991", speed: "9.6mbps", dbm: "-61" },
      { id: "Sala 10", group: 3, repeater: false, coordinates: "27°29'4,30782\" 53°23'59,21923", speed: "9.3mbps", dbm: "-38" },
      { id: "Laboratório", group: 3, repeater: false, coordinates: "27°29'4,12508\" 53°23'59,25638", speed: "9.4mbps", dbm: "-55" },
      { id: "Biblioteca", group: 3, repeater: false, coordinates: "27°29'4,16137\" 53°23'59,07145", speed: "9.5mbps", dbm: "-51" },
  
      { id: "Sala 1", group: 4, repeater: false, coordinates: "27°29'3,34244\" 53°23'58,22923", speed: "9.4mbps", dbm: "-42" },
      { id: "Sala 2", group: 4, repeater: false, coordinates: "27°29'3,17756\" 53°23'58,02547", speed: "9.5mbps", dbm: "-45" },
      { id: "Sala 3", group: 4, repeater: false, coordinates: "27°29'3,05956\" 53°23'57,80123", speed: "9.4mbps", dbm: "-29" },
      { id: "Sala 4", group: 4, repeater: false, coordinates: "27°29'2,9854\" 53°23'57,67634", speed: "8.9mbps", dbm: "-46" },
      { id: "Entrada", group: 4, repeater: false, coordinates: "27°48'4,232212164496\" 53°39'96,8124167569", speed: "9.3mbps", dbm: "-60" },
  
      { id: "Convivência 2", group: 5, repeater: false, coordinates: "27°29'3,29687\" 53°23'57,83622", speed: "9.5mbps", dbm: "-42" },
      { id: "Sala 5", group: 5, repeater: false, coordinates: "27°29'3,16363\" 53°23'57,13177", speed: "9.3mbps", dbm: "-47" },
      { id: "Sala 6", group: 5, repeater: false, coordinates: "27°29'3,33733\" 53°23'57,32812", speed: "9.5mbps", dbm: "-47" },
      { id: "Salão de Eventos", group: 5, repeater: false, coordinates: "27°29'3,55693\" 53°23'57,6811", speed: "9.2mbps", dbm: "-75" },
    ],
    links: [
      { source: "Roteador", target: "Repetidor 1", value: 1 },
      { source: "Roteador", target: "Repetidor 2", value: 1 },
      { source: "Roteador", target: "Repetidor 3", value: 1 },
      { source: "Roteador", target: "Repetidor 4", value: 1 },
  
      { source: "Repetidor 1", target: "Convivência 3", value: 1 },
      { source: "Repetidor 1", target: "Sala 7", value: 1 },
      { source: "Repetidor 1", target: "Sala dos Professores", value: 1 },
      { source: "Repetidor 1", target: "Sala SOE", value: 1 },
      { source: "Repetidor 1", target: "Sala da Coordenação", value: 1 },
      { source: "Repetidor 1", target: "Sala AEE", value: 1 },
      { source: "Repetidor 1", target: "Convivência 1", value: 1 },
      { source: "Repetidor 1", target: "Ginásio", value: 1 },
      { source: "Repetidor 1", target: "Cozinha", value: 1 },
  
      { source: "Repetidor 2", target: "Sala 8", value: 1 },
      { source: "Repetidor 2", target: "Sala 9", value: 1 },
      { source: "Repetidor 2", target: "Sala 10", value: 1 },
      { source: "Repetidor 2", target: "Convivência 4", value: 1 },
      { source: "Repetidor 2", target: "Laboratório de Informática", value: 1 },
      { source: "Repetidor 2", target: "Laboratório", value: 1 },
      { source: "Repetidor 2", target: "Biblioteca", value: 1 },
  
      { source: "Repetidor 3", target: "Sala 1", value: 1 },
      { source: "Repetidor 3", target: "Sala 2", value: 1 },
      { source: "Repetidor 3", target: "Sala 3", value: 1 },
      { source: "Repetidor 3", target: "Sala 4", value: 1 },
      { source: "Repetidor 3", target: "Entrada", value: 1 },
  
      { source: "Repetidor 4", target: "Convivência 2", value: 1 },
      { source: "Repetidor 4", target: "Sala 5", value: 1 },
      { source: "Repetidor 4", target: "Sala 6", value: 1 },
      { source: "Repetidor 4", target: "Salão de Eventos", value: 1 },
  
      { source: "Secretaria", target: "Roteador", value: 1 },
      { source: "Sala Diretora", target: "Roteador", value: 1 },
      { source: "Sala Vice Diretora", target: "Roteador", value: 1 },
  
      { source: "Repetidor 2", target: "Repetidor 1", value: 1 },
      { source: "Repetidor 2", target: "Repetidor 3", value: 1 },
      { source: "Repetidor 2", target: "Repetidor 4", value: 1 },
  
      { source: "Repetidor 3", target: "Repetidor 2", value: 1 },
      { source: "Repetidor 3", target: "Repetidor 4", value: 1 },
      { source: "Repetidor 3", target: "Repetidor 1", value: 1 },
  
      { source: "Repetidor 4", target: "Repetidor 2", value: 1 },
      { source: "Repetidor 4", target: "Repetidor 3", value: 1 },
      { source: "Repetidor 4", target: "Repetidor 1", value: 1 },
  
    ],
  };
  
  export default graph;