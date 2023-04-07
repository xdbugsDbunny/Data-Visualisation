import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
      const width = 1240;
      const height = 960;

      const radius = Math.min(width, height) / 2;
      const colors = d3.scaleOrdinal(d3.schemeCategory10);

      const svg = d3.select(svgRef.current)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

      const arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

      const pieGenerator = d3.pie()
        .value(d => d.intensity)
        .sort(null);

      const arcs = pieGenerator(data);

      svg.selectAll('.arc')
        .data(arcs)
        .join('path')
        .attr('class', 'arc')
        .attr('d', arcGenerator)
        .attr('fill', d => colors(d.data.region))
        .append('title')
        .text(d => `${d.data.region}: ${d.data.intensity}`);
  }, [data]);

  return (
    <svg ref={svgRef} style={{width: 1240, height: 960}}>
    </svg>
  );
};

export default PieChart;
