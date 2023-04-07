import React, { useEffect,useRef } from 'react'
import * as d3 from 'd3';

const BarChart = ({data}) => {
    
    const margin = { top:30, right: 20 , bottom: 50, left: 40}
    const width = 1300 - margin.left - margin.right;
    const height = 1000 - margin.top - margin.bottom;
    const svgRef = useRef(null);

    useEffect(()=>{
        if(data && svgRef.current){
            const svg = d3.select(svgRef.current);
            try{
                const xScale = d3.scaleBand()
                    .domain(data.map((d) => d.sector))
                    .range([0,width-margin.left-margin.right])
                    .padding(0.2)

                const yScale = d3.scaleLinear()
                    .domain([0,d3.max(data,(d)=>d.intensity)])
                    .range([height - margin.top - margin.bottom,0])

                const xAxis = d3.axisBottom(xScale)

                const yAxis = d3.axisLeft(yScale)

                svg.selectAll('.bar')
                    .data(data)
                    .join('rect')
                    .attr('class','bar')
                    .attr('x',(data,(d) => xScale(d.sector)) )
                    .attr('y',(data,d => yScale(d.intensity)) )
                    .attr('width', xScale.bandwidth())
                    .attr('height',(data,(d)=> height - margin.top - margin.bottom - yScale(d.intensity)))
                    .on('mouseenter',function(){
                        d3.select(this).attr('fill','orange')
                    })
                    .on('mouseleave',function(){
                        d3.select(this).attr('fill','steelblue')
                    })

                svg.select('.x-axis')
                    .attr('transform',`translate(0,${height - margin.top - margin.bottom})`)
                    .call(xAxis)

                svg.select('.y-axis')
                    .call(yAxis)

                }catch(error){
                    console.log(error)
                }

            }
        },[data])

    return(
        <svg ref={svgRef} width={width} height={height} style={{marginLeft:50}}>
            <g className='x-axis' />
            <g className='y-axis' />
        </svg>
    )
}

export default BarChart
