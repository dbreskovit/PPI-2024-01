var graph = {
  nodes: [
    { id: "Roteador", group: 1, repeater: false, coordinates: "0,0", speed: "100mbps", dbm: "-50", isRouter: true },

    { id: "Repetidor 1", group: 2, repeater: true, coordinates: "100,100", speed: "50mbps", dbm: "-60" },
    { id: "Repetidor 2", group: 3, repeater: true, coordinates: "100,-100", speed: "50mbps", dbm: "-60" },
    { id: "Repetidor 3", group: 4, repeater: true, coordinates: "-100,100", speed: "50mbps", dbm: "-60" },
    { id: "Repetidor 4", group: 5, repeater: true, coordinates: "-100,-100", speed: "50mbps", dbm: "-60" },
    
    // Roteador 1
    { id: "Secretaria", group: 1, repeater: false, coordinates: "27°29'3,57374\":53°23'58,55863", speed: "10.0mbps", dbm: "-61" },
    { id: "Sala Diretora", group: 1, repeater: false, coordinates: "27°29'3,4634\":53°23'58,60878", speed: "10.0mbps", dbm: "-73" },
    { id: "Sala Vice Diretora", group: 1, repeater: false, coordinates: "27°29'3,43651\":53°23'58,55269", speed: "10.0mbps", dbm: "-73" },
    
    // Repetidor 1
    { id: "Convivência 3", group: 2, repeater: false, coordinates: "27°29'3,83752\":53°23'59,08747", speed: "9.6mbps", dbm: "-61" },
    { id: "Sala 7", group: 2, repeater: false, coordinates: "27°29'3,79925\":53°23'58,92097", speed: "9.6mbps", dbm: "-57" },
    { id: "Sala dos Professores", group: 2, repeater: false, coordinates: "27°29'4,01093\":53°23'58,78223", speed: "9.2mbps", dbm: "-51" },
    { id: "Sala SOE", group: 2, repeater: false, coordinates: "27°29'4,01215\":53°23'58,62221", speed: "9.5mbps", dbm: "-70" },
    { id: "Sala da Coordenação", group: 2, repeater: false, coordinates: "27°29'4,14982\":53°23'58,3696", speed: "9.7mbps", dbm: "-51" },
    { id: "Sala AEE", group: 2, repeater: false, coordinates: "27°29'4,29817\":53°23'58,4682", speed: "9.3mbps", dbm: "-61" },
    { id: "Convivência 1", group: 2, repeater: false, coordinates: "27°29'2,95253\":53°23'57,34561", speed: "9.5mbps", dbm: "-42" },
    { id: "Cozinha", group: 2, repeater: false, coordinates: "27°29'3,83489\":53°23'58,06849", speed: "7.9mbps", dbm: "-62" },
    { id: "Ginásio", group: 2, repeater: false, coordinates: "27°48'4,431\":53°39'94,27", speed: "9.0mbps", dbm: "-55" },

    // Repetidor 2
    { id: "Laboratório de Informática", group: 3, repeater: false, coordinates: "27°29'4,47947\":53°23'59,13816", speed: "9.0mbps", dbm: "-32" },
    { id: "Sala 9", group: 3, repeater: false, coordinates: "27°29'4,55737\":53°23'58,8845", speed: "9.3mbps", dbm: "-32" },
    { id: "Sala 8", group: 3, repeater: false, coordinates: "27°29'4,41438\":53°23'58,76232", speed: "9.4mbps", dbm: "-68" },
    { id: "Convivência 4", group: 3, repeater: false, coordinates: "27°29'4,16429\":53°23'58,80991", speed: "9.6mbps", dbm: "-61" },
    { id: "Sala 10", group: 3, repeater: false, coordinates: "27°29'4,30782\":53°23'59,21923", speed: "9.3mbps", dbm: "-38" },
    { id: "Laboratório", group: 3, repeater: false, coordinates: "27°29'4,12508\":53°23'59,25638", speed: "9.4mbps", dbm: "-55" },
    { id: "Biblioteca", group: 3, repeater: false, coordinates: "27°29'4,16137\":53°23'59,07145", speed: "9.5mbps", dbm: "-51" },
    
    // Repetidor 3
    { id: "Sala 1", group: 4, repeater: false, coordinates: "27°29'3,34244\":53°23'58,22923", speed: "9.4mbps", dbm: "-42" },
    { id: "Sala 2", group: 4, repeater: false, coordinates: "27°29'3,17756\":53°23'58,02547", speed: "9.5mbps", dbm: "-45" },
    { id: "Sala 3", group: 4, repeater: false, coordinates: "27°29'3,05956\":53°23'57,80123", speed: "9.4mbps", dbm: "-29" },
    { id: "Sala 4", group: 4, repeater: false, coordinates: "27°29'2,9854\":53°23'57,67634", speed: "8.9mbps", dbm: "-46" },
    { id: "Entrada", group: 4, repeater: false, coordinates: "27°48'4,232212164496\":53°39'96,8124167569", speed: "9.3mbps", dbm: "-60" },
  
    // Repetidor 4
    { id: "Convivência 2", group: 5, repeater: false, coordinates: "27°29'3,29687\":53°23'57,83622", speed: "9.5mbps", dbm: "-42" },
    { id: "Sala 5", group: 5, repeater: false, coordinates: "27°29'3,16363\":53°23'57,13177", speed: "9.3mbps", dbm: "-47" },
    { id: "Sala 6", group: 5, repeater: false, coordinates: "27°29'3,33733\":53°23'57,32812", speed: "9.5mbps", dbm: "-47" },
    { id: "Salão de Eventos", group: 5, repeater: false, coordinates: "27°29'3,55693\":53°23'57,6811", speed: "9.2mbps", dbm: "-75" },
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

    // { source: "Repetidor 1", target: "Repetidor 2", value: 1 },
    // { source: "Repetidor 1", target: "Repetidor 3", value: 1 },
    // { source: "Repetidor 1", target: "Repetidor 4", value: 1 },

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

var svg = d3.select("svg"),
  width = window.innerWidth,
  height = window.innerHeight,
  color = d3.scaleOrdinal(d3.schemeCategory20),
  valueline = d3
    .line()
    .x(function (d) {
      return d[0];
    })
    .y(function (d) {
      return d[1];
    })
    .curve(d3.curveCatmullRomClosed),
  paths,
  groups,
  groupIds,
  scaleFactor = 1.5,
  polygon,
  centroid,
  node,
  link,
  curveTypes = [
    "curveBasisClosed",
    "curveCardinalClosed",
    "curveCatmullRomClosed",
    "curveLinearClosed",
  ],
  simulation = d3
    .forceSimulation()
    .force(
      "link",
      d3.forceLink().id(function (d) {
        return d.id;
      })
    )
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(30));

var select = d3
  .select("#curveSettings")
  .append("select")
  .attr("class", "select")
  .on("change", function () {
    var val = d3.select("select").property("value");
    d3.select("#curveLabel").text(val);
    valueline.curve(d3[val]);
    updateGroups();
  });

var options = select
  .selectAll("option")
  .data(curveTypes)
  .enter()
  .append("option")
  .text(function (d) {
    return d;
  });

groups = svg.append("g").attr("class", "groups");

link = svg
  .append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(graph.links)
  .enter()
  .append("line")
  .attr("stroke-width", function (d) {
    return Math.sqrt(d.value);
  });

var tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

node = svg
  .append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(graph.nodes)
  .enter()
  .append("circle")
  .attr("r", function (d) {
    return d.isRouter ? 10 : d.repeater ? 10 : 5;
  })
  .attr("fill", function (d) {
    return color(d.group);
  })
  .attr("fill", function (d) {
    return d.isRouter ? "red" : color(d.group);
  })
  .on("mouseover", function (event, d) {
    tooltip.transition().duration(200).style("opacity", 0.9);
    let optionsHtml = d.options ? `<br>Opções: ${d.options.join(", ")}` : "";
    tooltip
      .html(
        `Coordenadas: ${d.coordinates}<br>Velocidade: ${d.speed}<br>dBm: ${d.dbm}${optionsHtml}`
      )
      .style("left", event.pageX + 5 + "px")
      .style("top", event.pageY - 28 + "px");
  })
  .on("mouseout", function (d) {
    tooltip.transition().duration(500).style("opacity", 0);
  })
  .call(
    d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)
  );

groupIds = d3
  .set(
    graph.nodes.map(function (n) {
      return +n.group;
    })
  )
  .values()
  .map(function (groupId) {
    return {
      groupId: groupId,
      count: graph.nodes.filter(function (n) {
        return +n.group == groupId;
      }).length,
    };
  })
  .filter(function (group) {
    return group.count > 2;
  })
  .map(function (group) {
    return group.groupId;
  });

paths = groups
  .selectAll(".path_placeholder")
  .data(groupIds, function (d) {
    return +d;
  })
  .enter()
  .append("g")
  .attr("class", "path_placeholder")
  .append("path")
  .attr("stroke", function (d) {
    return color(d);
  })
  .attr("fill", function (d) {
    return color(d);
  })
  .attr("opacity", 0);

paths.transition().duration(2000).attr("opacity", 1);

groups
  .selectAll(".path_placeholder")
  .call(
    d3
      .drag()
      .on("start", group_dragstarted)
      .on("drag", group_dragged)
      .on("end", group_dragended)
  );

node.append("title").text(function (d) {
  return d.id;
});

node.append("speed").text(function (d) {
  return d.speed;
});

node.append("dbm").text(function (d) {
  return d.dbm;
});

node.append("coordinates").text(function (d) {
  return d.coordinates;
});

simulation
  .nodes(graph.nodes)
  .on("tick", ticked)
  .force("link")
  .links(graph.links);

function ticked() {
  link
    .attr("x1", function (d) {
      return d.source.x;
    })
    .attr("y1", function (d) {
      return d.source.y;
    })
    .attr("x2", function (d) {
      return d.target.x;
    })
    .attr("y2", function (d) {
      return d.target.y;
    });

  node
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    })
    // .on("mouseover", function (event, d) {
    //   tooltip.transition().duration(200).style("opacity", 0.9);

    //   // Seleciona os elementos <coordinates>, <dbm> e <speed> dentro do nó e obtém seus textos
    //   var coordinates = d3.select(this).select("coordinates").text();
    //   var dbm = d3.select(this).select("dbm").text();
    //   var speed = d3.select(this).select("speed").text();

    //   tooltip
    //     .html(
    //       "Coordenada: " +
    //         coordinates +
    //         "<br/>Frequência: " +
    //         dbm +
    //         "<br/>Velocidade: " +
    //         speed
    //     )
    //     .style("left", event.pageX + 5 + "px")
    //     .style("top", event.pageY - 28 + "px");
    // })
    // .on("mouseout", function (d) {
    //   tooltip.transition().duration(500).style("opacity", 0);
    // });

  updateGroups();
}

var polygonGenerator = function (groupId) {
  var node_coords = node
    .filter(function (d) {
      return d.group == groupId;
    })
    .data()
    .map(function (d) {
      return [d.x, d.y];
    });

  return d3.polygonHull(node_coords);
};

function updateGroups() {
  groupIds.forEach(function (groupId) {
    var path = paths
      .filter(function (d) {
        return d == groupId;
      })
      .attr("transform", "scale(1) translate(0,0)")
      .attr("d", function (d) {
        polygon = polygonGenerator(d);
        centroid = d3.polygonCentroid(polygon);
        return valueline(
          polygon.map(function (point) {
            return [point[0] - centroid[0], point[1] - centroid[1]];
          })
        );
      });

    d3.select(path.node().parentNode).attr(
      "transform",
      "translate(" +
        centroid[0] +
        "," +
        centroid[1] +
        ") scale(" +
        scaleFactor +
        ")"
    );

    

  });
}

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

function group_dragstarted(groupId) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d3.select(this).select("path").style("stroke-width", 3);
}

function group_dragged(groupId) {
  node
    .filter(function (d) {
      return d.group == groupId;
    })
    .each(function (d) {
      d.x += d3.event.dx;
      d.y += d3.event.dy;
    });
}

function group_dragended(groupId) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d3.select(this).select("path").style("stroke-width", 1);
}

// node.on("mouseover", function (event, d) {
//   tooltip.transition().duration(200).style("opacity", 0.9);
//   let coordinates = d.coordinates || "N/A";
//   let speed = d.speed || "N/A";
//   let dbm = d.dbm || "N/A";
//   let optionsHtml = d.options ? `<br>Opções: ${d.options.join(", ")}` : "";
//   tooltip
//     .html(
//       `Coordenadas: ${coordinates}<br>Velocidade: ${speed}<br>Frequência: ${dbm}${optionsHtml}`
//     )
//     .style("left", event.pageX + 5 + "px")
//     .style("top", event.pageY - 28 + "px");
// });

function ticked() {
  link
    .attr("x1", function (d) {
      return d.source.x;
    })
    .attr("y1", function (d) {
      return d.source.y;
    })
    .attr("x2", function (d) {
      return d.target.x;
    })
    .attr("y2", function (d) {
      return d.target.y;
    });

  node
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    })
    .on("mouseover", function (event, d) {
      tooltip.transition()
        .duration(200)
        .style("opacity", .9);

     
      var coordinates = d3.select(this).select("coordinates").text();
      var title = d3.select(this).select("title").text();
      var dbm = d3.select(this).select("dbm").text();
      var speed = d3.select(this).select("speed").text();

      tooltip.html("Local: " + title + "<br/>" +
        "Coordenada: " + coordinates + "<br/>Frequência: " + dbm + "dBm" + "<br/>Velocidade: " + speed)
        .style("left", (event.pageX + 5) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function (d) {
      tooltip.transition()
        .duration(500)
        .style("opacity", 0);
    });

  
  node.each(function (d) {
    if (d.isRouter) {
      d.fx = window.innerWidth / 2; 
      d.fy = window.innerHeight / 2;
    }
  });

  updateGroups();
}
