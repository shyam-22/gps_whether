import react from 'react';
class App extends Component{

    //1st call constructor of parent and then child
    constructor()
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

    };

    //2nd method will call Render()


   
}

export default App;