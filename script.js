var graph = {
  nodes: [

    { id: "Roteador", group: 1, repeater: false, coordinates: "0,0", speed: "100mbps", dbm: "-50", isRouter: true },

    { id: "Repetidor 1", group: 2, repeater: true, coordinates: "100,100", speed: "50mbps", dbm: "-60" },
    { id: "Repetidor 2", group: 3, repeater: true, coordinates: "100,-100", speed: "50mbps", dbm: "-60" },
    { id: "Repetidor 3", group: 4, repeater: true, coordinates: "-100,100", speed: "50mbps", dbm: "-60" },
    { id: "Repetidor 4", group: 5, repeater: true, coordinates: "-100,-100", speed: "50mbps", dbm: "-60" },
    
    // Roteador 1
    { id: "Secretaria", group: 1, repeater: false, coordinates: "2729357374,53235855863", speed: "50mbps", dbm: "-60" },
    { id: "Sala Diretora", group: 1, repeater: false, coordinates: "272934634,53235860878", speed: "50mbps", dbm: "-60" },
    { id: "Sala Vice Diretora", group: 1, repeater: false, coordinates: "2729343651,53235855269", speed: "50mbps", dbm: "-60" },
    
    

  // Repetidor 1
    { id: "Convivência 3", group: 2, repeater: false, coordinates: "2729383752,53235908747", speed: "50mbps", dbm: "-60" },
    { id: "Sala 7", group: 2, repeater: false, coordinates: "2729379925,53235892097", speed: "50mbps", dbm: "-60" },
    { id: "Sala dos Professores", group: 2, repeater: false, coordinates: "2729401093,53235878223", speed: "50mbps", dbm: "-60" },
    { id: "Sala SOE", group: 2, repeater: false, coordinates: "2729401215,53235862221", speed: "50mbps", dbm: "-60" },
    { id: "Sala da Cordenação", group: 2, repeater: false, coordinates: "2729414982,5323583696", speed: "50mbps", dbm: "-60" },
    { id: "Sala AEE", group: 2, repeater: false, coordinates: "2729429817,5323584682", speed: "50mbps", dbm: "-60" },
    { id: "Convivência 1", group: 2, repeater: false, coordinates: "2729295253,53235734561", speed: "50mbps", dbm: "-60" },
    { id: "Cozinha", group: 2, repeater: false, coordinates: "2729383489,53235806849", speed: "50mbps", dbm: "-60" },
    { id: "Ginásio", group: 2, repeater: false, coordinates: "27484431,53399427", speed: "50mbps", dbm: "-60" },

  // Repetidor 2
    { id: "Laboratório de Informática", group: 3, repeater: false, coordinates: "2729447947,53235913816", speed: "50mbps", dbm: "-60" },
    { id: "Sala 9", group: 3, repeater: false, coordinates: "2729455737,5323588845", speed: "50mbps", dbm: "-60" },
    { id: "Sala 8", group: 3, repeater: false, coordinates: "2729441438,53235876232", speed: "50mbps", dbm: "-60" },
    { id: "Convivência 4", group: 3, repeater: false, coordinates: "2729416429,53235880991", speed: "50mbps", dbm: "-60" },
    { id: "Sala 10", group: 3, repeater: false, coordinates: "2729430782,53235921923", speed: "50mbps", dbm: "-60" },
    { id: "Laboratório", group: 3, repeater: false, coordinates: "2729412508,53235925638", speed: "50mbps", dbm: "-60" },
    { id: "Biblioteca", group: 3, repeater: false, coordinates: "2729416137,53235907145", speed: "50mbps", dbm: "-60" },
    
  // Repetidor 3
    { id: "Sala 1", group: 4, repeater: false, coordinates: "2729334244,53235822923", speed: "50mbps", dbm: "-60" },
    { id: "Sala 2", group: 4, repeater: false, coordinates: "2729317756,53235802547", speed: "50mbps", dbm: "-60" },
    { id: "Sala 3", group: 4, repeater: false, coordinates: "2729305956,53235780123", speed: "50mbps", dbm: "-60" },
    { id: "Sala 4", group: 4, repeater: false, coordinates: "272929854,53235767634", speed: "50mbps", dbm: "-60" },
    { id: "Entrada", group: 4, repeater: false, coordinates: "27484232212164496,5339968124167569", speed: "50mbps", dbm: "-60" },
  
  // Repetidor 4
    { id: "Convivência 2", group: 5, repeater: false, coordinates: "2729329687,53235783622", speed: "50mbps", dbm: "-60" },
    { id: "Sala 5", group: 5, repeater: false, coordinates: "2729316363,53235713177", speed: "50mbps", dbm: "-60" },
    { id: "Sala 6", group: 5, repeater: false, coordinates: "2729333733,53235732812", speed: "50mbps", dbm: "-60" },
    { id: "Salão de Eventos", group: 5, repeater: false, coordinates: "2729355693,5323576811", speed: "50mbps", dbm: "-60" },

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
    { source: "Repetidor 1", target: "Sala da Cordenação", value: 1 },
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

    { source: "Repetidor 1", target: "Repetidor 2", value: 1 },
    { source: "Repetidor 1", target: "Repetidor 3", value: 1 },
    { source: "Repetidor 1", target: "Repetidor 4", value: 1 },

    { source: "Repetidor 2", target: "Repetidor 1", value: 1 },
    { source: "Repetidor 2", target: "Repetidor 3", value: 1 },
    { source: "Repetidor 2", target: "Repetidor 4", value: 1 },

    // { source: "Repetidor 3", target: "Repetidor 1", value: 1 },
    { source: "Repetidor 3", target: "Repetidor 2", value: 1 },
    { source: "Repetidor 3", target: "Repetidor 4", value: 1 },

    { source: "Repetidor 4", target: "Repetidor 1", value: 1 },
    // { source: "Repetidor 4", target: "Repetidor 2", value: 1 },
    { source: "Repetidor 4", target: "Repetidor 3", value: 1 },

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
    .on("mouseover", function (event, d) {
      tooltip.transition().duration(200).style("opacity", 0.9);

      // Seleciona os elementos <coordinates>, <dbm> e <speed> dentro do nó e obtém seus textos
      var coordinates = d3.select(this).select("coordinates").text();
      var dbm = d3.select(this).select("dbm").text();
      var speed = d3.select(this).select("speed").text();

      tooltip
        .html(
          "Coordenada: " +
            coordinates +
            "<br/>dBm: " +
            dbm +
            "<br/>Velocidade: " +
            speed
        )
        .style("left", event.pageX + 5 + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mouseout", function (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    });

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

node.on("mouseover", function (event, d) {
  tooltip.transition().duration(200).style("opacity", 0.9);
  let coordinates = d.coordinates || "N/A";
  let speed = d.speed || "N/A";
  let dbm = d.dbm || "N/A";
  let optionsHtml = d.options ? `<br>Opções: ${d.options.join(", ")}` : "";
  tooltip
    .html(
      `Coordenadas: ${coordinates}<br>Velocidade: ${speed}<br>dBm: ${dbm}${optionsHtml}`
    )
    .style("left", event.pageX + 5 + "px")
    .style("top", event.pageY - 28 + "px");
});

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
      var dbm = d3.select(this).select("dbm").text();
      var speed = d3.select(this).select("speed").text();

      tooltip.html("Coordenada: " + coordinates + "<br/>dBm: " + dbm + "<br/>Velocidade: " + speed)
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
