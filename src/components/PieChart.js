
import {ResponsiveContainer, PieChart, Pie, Legend, Cell, Sector} from 'recharts';


const renderActiveShape = (props) => {
    const { cx, cy, startAngle, endAngle, fill} = props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={(window.innerWidth < 1173)?68:98}
          outerRadius={(window.innerWidth < 1173)?68:98}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          strokeLinejoin='round'
          strokeWidth="16px"
          stroke="#FF0101"
        />
        {/* <circle cx={cx} cy={cy} r={80} fill="white" stroke="none" /> */}
      </g>
    );
  };

let colors = ['#FF0101', "#FBFBFB00"]
function MyPieChart(props){
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie activeIndex={0} startAngle={90} endAngle={450} 
                     data={props.data} dataKey="value"
                     nameKey="name" outerRadius={105}
                     innerRadius={90} cx="50%" cy="50%"
                     strokeWidth='0'
                     label={(e)=>{if(e.name == "score"){
                        return (<text fontSize='16' fill="black" fontWeight="600" style={{textTransform:"capitalize", borderRadius:"20px"}} x={45} y={45}>{e.name}</text>)}}}
                     activeShape={renderActiveShape}>
                   {
                        props.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                    }
                </Pie>
                <Legend align="middle" verticalAlign="middle" content={(e) => {return <div style={{ color: "black", fontSize: 19, width:"50%",margin:"auto", textAlign:"center",color:"#74798C", fontWeight:"600",lineHeight:"1.5em" }}><b style={{color:"black",fontSize:"25px"}}>{e.payload[0].payload.percent * 100}%</b><br/>de votre<br/> objectif</div> }}/>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default MyPieChart;
