import React from 'react';



const YouTubeVideo = () => {
  return (
    <div>
      
      <div style={newStyle}>
      <div style={{display:'flex', flexDirection:'row' , justifyContent:'space-evenly', marginTop:'40px'}}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/GuDJScFuJCk?si=PR6FBJkWhzxbnR4Y&amp;start=84" 
      title="YouTube video player" frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{marginTop:'90px'}}>
        </iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GuDJScFuJCk?si=PR6FBJkWhzxbnR4Y&amp;start=84" 
      title="YouTube video player" frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{marginTop:'90px'}}>
            
        </iframe>
      </div>
      </div>
      
    </div>
  );
};

export default YouTubeVideo;
const newStyle = {
  height:'500px',
  width:'90%',
  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
  marginLeft:'100px'


}