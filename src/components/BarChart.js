import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const getPath = (x, y, width, height) => (
  
  `M${x},${y + height}
    L${x} ${y + 7}
    C${x} ${y}, ${x + width} ${y}, ${x + width} ${y + 7}
    L${x + width} ${y + height}
    Z`
);

const RoundedBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


function tooltipContent(e){
  if(e.payload[0] && e.payload[1]){
    return <div>
             <div style={{padding:"10px 0 20px 0"}}>{e.payload[0].value} Kg</div>
             <div style={{padding:"20px 0 10px 0"}}>{e.payload[1].value} KCal</div>
           </div>
  }
}

const CustomizedCursor = (e)=>{
  let w = 12;
  let l = 20;
  if(e.payloadIndex == 6){
    w = 6;
    l = 37;
  }
  return <rect fill="#00000020" height={e.height} width={w+"%"} x={e.x + l} y={e.y} right={0}></rect>
}

function MyBarChart(props){

    let datas = props.data.map((e,i)=>{e.index = i+1;return e;});
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={datas} barGap={10}>
                <CartesianGrid strokeDasharray="3 3" vertical={ false } stroke="#DEDEDE"/>
                <XAxis domain={[1, 'maxData']} tick={{fill:"#9B9EAC", strokeWidth:0.05, strokeOpacity:1}} type="number" tickSize="0" dataKey="index" tickMargin={ 10 } padding={{ left:14, right:13}} stroke="#DEDEDE" strokeWidth={1} tickCount={7}/>
                <YAxis domain={[0, 'dataMax']} tick={{fill:"#9B9EAC", strokeWidth:0.05}} type="number" tickSize="0" orientation="right" axisLine={false } tickMargin={ 25 } margin={{top:20}}/>
                <Legend chartWidth={ 100 } align="right" verticalAlign="top" iconSize={10} wrapperStyle={{ fontSize:"15px",paddingTop:"20px",paddingBottom:"5vh"}}/>
                <Tooltip content={tooltipContent} offset={25} wrapperStyle={{backgroundColor:"red",color:"white",padding:"10px 5px",display:"inline-block",fontSize:"13px",textAlign:"center"}} cursor={<CustomizedCursor /> }/>
                <Bar dataKey="kilogram" fill="#282D30" barSize={ 8 } legendType="circle" name="Poids (kg)" shape={<RoundedBar/>}/>
                <Bar dataKey="calories" fill="#E60000"  barSize={ 8 } legendType="circle" name="Calories brûlées (kCal)" shape={<RoundedBar/>}/>
            </BarChart>
        </ResponsiveContainer>
    )

}

export default MyBarChart;