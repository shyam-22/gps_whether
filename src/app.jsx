import react from 'react';
import Report from "./Report";
class App extends Component{

    //1st call constructor of parent and then child
    constructor(props)
    {
        super();
        this.state =
        {
            latitude ="null";
            error ="";
        };
    };

    //3rd component inbuilt method will  call ---> componenntDidMount()

    componentDidMount(){
        window.navigator.geolocation.
        getCurrentPosition(position => 
            {
            console.log(position);
            this.setState({latitude : position.cords.latitude})
            }, 
         err => 
            {
            comsole.log(err);
            this.setState({error : err.message});
             }
        );

    }

    componentDidUpdate()
    {
        
    }



    //2nd method will call Render()
    render()
    {
        console.log("Loading....");
        if(this.state.latitude && !this.state.error)
        {
            return(<div className="container"> 
            <div className="row">
        <div className="col-md-12"> <Report Latitude={this.state.latitude} />
            </div>
            </div>
            </div>);
        }
        elseif(!this.state.latitude && this.state.error)
        {
            return( return(<div className="container"> 
            <div className="row">
        <div className="col-md-12"> < Report Error ={this.state.error} />
            </div>
            </div>
            </div>);)
        }
        else
        {
            return(loading...);
        }
    }
    

   
}

export default App;