import React from "react";
import {ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend} from 'recharts';

function MyRadarChart(props){
    return (
        <ResponsiveContainer width="100%" height="100%" >
            <RadarChart data={props.data} cx="50%" cy="50%" margin={{ top: 5, right: 5, bottom: 5, left: 5 }} outerRadius={(window.innerWidth < 1400)?45:60}>
                <PolarGrid margin={{top:23, right:23, bottom:23, left:23}}/>
                <PolarAngleAxis dataKey="kind" tick={({y,x,cy,cx,payload,textAnchor,index}) => {if(index == 3){ y = y + 11;}if(index == 0){ y = y - 5}return (<text textAnchor={textAnchor} x={x} y={y} cx={cx} cy={cy} fill="#fff" fontSize={(window.innerWidth < 1400)?"10":"15"}>{payload.value}</text>);}}/>
                <PolarRadiusAxis angle={90} domain={[0, 'maxData']} axisLine={ false } tick={false}/>
                <Radar dataKey="value" stroke="#FF0101B270" fill="#FF0101B2" fillOpacity={0.7}/>
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default MyRadarChart;