import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

function CustomizedCursor(e){
    return (<rect fill="#00000030" x={e.points[0].x} width="100%" height="100%"></rect>);
}

function LinearChart(props) {
    return (
        <ResponsiveContainer width="100%" height="100%" style={{position:"relative"}}>
            <LineChart data={props.data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <XAxis dataKey="dL" axisLine={false} tickSize="0" tickMargin={13} tick={{ fill: '#ffffff80', fontSize: 17 }} />
                <YAxis dataKey="sessionLength" hide={true}/>
                <Tooltip offset={0}
                    content={(e) => {
                        let payload = e.payload,time = 0,s = false,left = e.coordinate.x,r_w = e.coordinate.x;

                        if(e.label == "D"){left = "160";r_w = "0";}

                        if(payload[0]){
                            time = parseInt(payload[0].payload.sessionLength); time>1?(s=true):(s=false);
                            return <div>
                                        <div style={{position:"absolute",
                                                    zIndex:0,
                                                    left:left+"px",
                                                    width:"calc(100% - "+r_w+"px)",
                                                    height:"100%"}}>
                                            <div style={{padding:"11px 7px",
                                                        display:'inline-block',
                                                        backgroundColor:"white",
                                                        left:"10px",
                                                        position:"absolute",
                                                        top:e.coordinate.y+"px",
                                                        color:"black"}}>{time} min{s?"s":""}</div>
                                        </div>
                                    </div>;
                        }
                    }}
                    position={{y:0, x:0}} cursor={<CustomizedCursor/>}
                    wrapperStyle={{position:"absolute",
                                   zIndex:0,
                                   width:"100%",
                                   height:"100%",
                                   display:"inline-block",
                                   fontSize:"10px",
                                   fontWeight:"bold"}} />
                <Line strokeWidth={2} type="monotone" dataKey="sessionLength" stroke="#FFFFFF80"
                      name="Durée moyenne des sessions" dot={{r:"0"}}
                      activeDot={{r:5,fill:"white", strokeWidth:"10",stroke:"#ffffff30",cursor:"pointer"}}/>
                <Legend align="left" verticalAlign="top" horizontalAlign="left" width={190} 
                        content={() => { return <div style={{color: "white",
                                                             opacity: 0.7,
                                                             marginTop: 15,
                                                             marginLeft: 15,
                                                             fontSize: 16, zIndex:10,position:'relative' }}>Durée moyenne des<br/>sessions</div> }} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LinearChart;