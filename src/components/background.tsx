import React, { useRef, useEffect } from 'react'
import '../components/global_style.css'
import useWindowDimensions from '../utils/useWindowDimensions';

const Background = () => {
    const canvasRef = useRef(null);
    const { height, width } = useWindowDimensions();
    const density = 40;
    const draw = ctx => {
        //ctx.shadowColor = "rgba(255,255,255,0.5)";
        //ctx.shadowBlur = 3;
        
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
       /* ctx.fillStyle = 'red';
        ctx.beginPath()
    ctx.rect(0, 0, 50, 50);
    ctx.fill();*/
        for (let i =0; i<(height * width)*density/(100*100) ;i++){
            drawStar(ctx);
        }
    }
/*
  const drawStar = ctx =>{

    const opacity = Math.pow(Math.random(),3)*0.6;
    const x0 = Math.random() * width
    const y0 = Math.random() * height;
    const [x,y] = mapping(x0,y0);
    const radius = Math.pow(Math.random(),1.4)*1.5;
      
    ctx.fillStyle = `rgba(${255-100*Math.random()}, ${255-100*Math.random()}, ${255}, ${opacity})`
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2*Math.PI)
    ctx.fill()

    ctx.arc(30, 30, radius, 0, 2*Math.PI);
  }*/

  const drawStar = ctx =>{

    const opacity = Math.pow(Math.random(),3)*0.7+0.3;
    const x0 = Math.random() * width
    const y0 = Math.random() * height;
    const [x,y] = [x0,y0];
    const radius = Math.pow(Math.random(),3)*2+0.5;
    const intensity = Math.pow(Math.random(),1)*0.3;    
    const radgrad = ctx.createRadialGradient(x,y,0,x,y,radius);
    const [r,g] = [255-100*Math.random(), 255-100*Math.random()];
    const color = `rgba(${r}, ${g}, 255, ${opacity})`;
    const [r_bright,g_bright] = [Math.min(255, r*2), Math.min(255, g*2)]
    radgrad.addColorStop(0, color);
    radgrad.addColorStop(intensity, color);
    radgrad.addColorStop(0.5, `rgba(${r_bright},${g_bright},255,${opacity*0.2})`);
    radgrad.addColorStop(1, `rgba(${r_bright},${g_bright},255,0)`);
    ctx.fillStyle = radgrad;
      
    ctx.beginPath()
    ctx.rect(x-radius, y-radius, radius*2, radius*2);
    ctx.fill();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d')
    //Our draw come here

    draw(context)
  }, [draw])
  
  return (
        <canvas style={{
            position:'absolute', 
            top:0,
            left:0,
            zIndex:-1,
            width: '100%'
            }} ref={canvasRef}/>
    )
/*  const { height, width } = useWindowDimensions();
    const stars = [];
    const density = 5;
    for (let i =0; i< (height * width)*density/(100*100) ;i++){
        stars.push(1);
    }
    return (
        <div style={{
            position:'absolute', 
            top:0,
            left:0,
        }}>
            {stars.map((item,index) => (<Star  opacity={Math.random()*0.5} key={index} size={Math.random()*3} x={Math.random()*width} y={Math.random()*height}/>))
            }
        </div>
    );
*/
}
/*
const Star = ({x,y,size,opacity}) => {
    return (
        <div className= "glow" style={{
            position:"absolute",
            backgroundColor:'white',
            width:size,
            top:y,
            left:x,
            opacity,
            height:size,
            borderRadius:size,
        }}></div>
    )
}
*/
export default Background;