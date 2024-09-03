import graph from "./graphData.js";

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
  scaleFactor = 1.3,
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
    .force("center", d3.forceCenter(width / 2, height / 2.5))
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
  .attr("cursor", "pointer")
  .attr("r", function (d) {
    return d.isRouter ? 10 : d.repeater ? 10 : 5;
  })
  .attr("fill", function (d) {
    return color(d.group);
  })
  .attr("fill", function (d) {
    return d.isRouter ? "red" : color(d.group);
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

      var coordinates = d3.select(this).select("coordinates").text();
      var title = d3.select(this).select("title").text();
      var dbm = d3.select(this).select("dbm").text();
      var speed = d3.select(this).select("speed").text();

      var html = createTooltipHtml(title, coordinates, dbm, speed);
      tooltip
        .html(html)
        .style("left", event.pageX + 5 + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mouseout", function (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    });

  node.each(function (d) {
    if (d.isRouter) {
      d.fx = window.innerWidth / 2;
      d.fy = window.innerHeight / 2.5;
    }
  });

  updateGroups();
}

function createTooltipHtml(title, coordinates, dbm, speed) {
  return `
    <div class="pedro">
      <h4>Local: ${title}</h4>
      <p>Frequência: ${dbm}dBm</p>
      <p>Velocidade: ${speed}</p>
      <p>Coordenada: ${coordinates}</p>
      </div>
  `;
}
