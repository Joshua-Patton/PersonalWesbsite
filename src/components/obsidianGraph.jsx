import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Graph = () => {
  const svgRef = useRef();

  useEffect(() => {
    const nodes = [
      { id: "Node 1" },
      { id: "Node 2" },
      { id: "Node 3" },
      { id: "Node 4" },
    ];

    const links = [
      { source: "Node 1", target: "Node 2" },
      { source: "Node 2", target: "Node 3" },
      { source: "Node 3", target: "Node 4" },
      { source: "Node 4", target: "Node 1" },
    ];

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 600;

    const simulation = d3
      .forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d) => d.id))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2));

    svg
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6);

    const node = svg
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 10)
      .attr("fill", "#69b3a2")
      .call(
        d3
          .drag()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    simulation.on("tick", () => {
      svg
        .selectAll("line")
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      svg
        .selectAll("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);
    });

    // Clean up on component unmount
    return () => {
      simulation.stop();
    };
  }, []);

  return <svg ref={svgRef} width={800} height={600}></svg>;
};

export default Graph;