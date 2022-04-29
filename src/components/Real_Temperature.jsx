import React, {FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import { Tooltip, ResponsiveContainer ,LineChart,XAxis,CartesianGrid,  Legend,
  YAxis,Line} from "recharts";
  import ToggleSwitch_temp from "./toggle_button_temp";
import { cardStyles } from "./ReusableStyles";
import firebase from '../util/firebase';
export default function Real_Temperature() {
  const [covidData, setcovidData] = useState();
  
  useEffect(() => {
    
    const todoRef = firebase.database().ref('Example');
    
  
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      
      const covidData = [];
      
      for (let id in todos) {

        covidData.push({ id, ...todos[id] });
        
        console.log(todos[id])
      }
      setcovidData(covidData);
      
      
    });
    
  }, []);

  const CustomizedLabel: FunctionComponent<any> = (props: any) => {
    const { x, y, stroke, value } = props;
  
    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  };
  
  const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
    const { x, y, payload } = props;
  
    
    return (
        
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <Section>
      <div className="top">
        <div className="info">
          <h5>Temperature</h5>
          
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={630}
            height={400}
            data={covidData}
            margin={{ top: 0, left: 0, right: 10, bottom: 0 }}
          >
            <Tooltip cursor={true} />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis  height={60} tick={<CustomizedAxisTick />} />
            <YAxis  />
            <Tooltip  />
            <Legend />
            
            <Line
            animationBegin={800}
            animationDuration={2000}
            type="monotone"
            stroke="#ffc107"
            fill="#8068233e"
            strokeWidth={4}
            dataKey="title"/>
          </LineChart>
        </ResponsiveContainer>
        <ToggleSwitch_temp/>

           </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 25rem;
  ${cardStyles}
  padding: 1rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          button {
            color: black;
          }
        }
        button {
          color: #ffc107;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;
