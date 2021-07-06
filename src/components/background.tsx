import * as React from 'React';
import '../components/global_style.css'
import useWindowDimensions from '../utils/useWindowDimensions';

const Background = () => {
    const { height, width } = useWindowDimensions();
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
}

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

export default Background;