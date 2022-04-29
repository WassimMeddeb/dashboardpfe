import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "../util/firebase";
import { Tooltip, ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar, } from "recharts";
import { cardStyles } from "./ReusableStyles";

export default function State_Temperature() {


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

  return (
    <Section>
      <div className="top">
        <div className="info">
          <h5>Temperature Stat</h5>
          
          
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={400}
            data={covidData}
            margin={{ top: 0, left: -55, right:5, bottom: 0 }}
            barSize={20}>
          
            <XAxis
              dataKey="t" 
               scale="point"
               padding={{ left: 0, right: 0 }}
             />
             <YAxis />
             <Tooltip />
             <Legend />
             <CartesianGrid strokeDasharray="3 3" />
             <Bar dataKey="title" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
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
          span {
            color: black;
          }
        }
        span {
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
