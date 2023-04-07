import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'

const ScatterChart = ({data}) => {

  useEffect(()=>{
      const margin = { top:20, right: 20 , bottom: 30, left: 40}
      const width = 1000 - margin.left - margin.right;
      const height = 800 - margin.top - margin.bottom;

      const x = d3.scaleLinear().range([0,width])
      const y = d3.scaleLinear().range([height,0])

      const svg = d3
            .select("#scatterPlot")
            .attr("width",width + margin.left + margin.right)
            .attr("height",height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",`translate(${margin.left},${margin.top})`)

      x.domain(d3.extent(data,(d)=>d.intensity))
      y.domain(d3.extent(data,(d)=>d.relevance))


      svg.append("g").attr("transform",`translate(0,${height})`).call(d3.axisBottom(x))

      svg.append("g").call(d3.axisLeft(y))

      const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)

      const color = d3.scaleOrdinal(d3.schemeCategory10)

      svg
          .selectAll("circle")
          .data(data)
          .enter()
          .append("circle")
          .attr("cx",(d)=> x(d.intensity))
          .attr("cy",(d)=> y(d.relevance))
          .attr("r",5)
          .style("fill", (d) => color(d.sector))
          .on("mouseover", function (d) {
            tooltip.transition()
              .duration(200)
              .style("opacity", .9);
            tooltip.html(`Sector: ${d.sector}<br/>Intensity: ${d.intensity}<br/>Relevance: ${d.relevance}`)
              
          })
          .on("mouseout", function (d) {
            tooltip.transition()
              .duration(500)
              .style("opacity", 0);
          })

  },[data])

  return (
    <svg id='scatterPlot'>

    </svg>
  )
}

export default ScatterChart