function Body(props){
    return(
      <section>
      
  
        <div  id="container">
          
          <div className="image1">
            <img src={props.src} alt={props.alt} width={props.width} />
          </div>
  
          <h1>{props.heading}</h1>
          <button>{props.button}</button>
  
        </div>
  
      </section>
    )
  }

  export default Body;