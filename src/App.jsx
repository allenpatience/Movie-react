import "./App.css"
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

function App(){
  return(
    <div style={{backgroundColor: "black"}}>
      <section>
        <header>
          <title>allenranks</title>
          
          <nav className="head" style={{alignItems: "center", display: "flex"}}>
            <div style={{paddingLeft: "4%"}}>
              allen<span>Ranks</span>
            </div>

            <div className="buttons" style={{alignItems: "end"}}>
              <button style={{}}>Home</button>
              <button style={{}}>Movies</button>
              <button style={{}}>AboutUs</button>
            </div>  
          </nav>
        </header>
      </section>

      <br/>
      <div className="container1">
      <section>
        <h1 style={{textAlign: "center", color:"brown"}}>My Movie Ranking Site.</h1>
        <div className="image">
          <img src="src/Images/newreact.jpg" alt="image" width={1240} height={500}/>
        </div>
      </section>
      
      <br/>
      <h3 style={{textAlign: "center", color:"brown"}}>My Top 5 Movie Categories</h3>

      <Body 
        image="src/Images/newaction.jpg" alt="image" width="{300}" 
        heading="ACTION" 
        button="Watch trailler"
      />
      <br/>

      <Body
        image="src/Images/newdrama.jpg" alt="image" width="{300}" 
        heading="DRAMA"
        button="Watch tailler"
      />
      <br/>

      <Body
        image="src/Images/newthriller.jpg" alt="image" width="{300}" 
        heading="THRILLER"
        button="Watch trailler"
      />
      <br/>

      <Body
        image="src/Images/newcomedy.jpg" alt="image" width="{300}" 
        heading="COMEDY"
        button="Watch trailler"
      />
      <br/>

      <Body
        image="src/Images/newfiction.jpg" alt="image" width="{300}" 
        heading="FICTION"
        button="Watch trailler"
br/>

      </div>

      <Footer/> 
      
    </div>
  )
}



export default App;


