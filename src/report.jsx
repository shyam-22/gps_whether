import react,{Component} from 'react';

class Report extends Component
{
    constructor(props)
    {
        super();

    };


    wReport(Latitude,month,time)
    {
        if(month > 2 && month < 9)
        {
            return latitude > 1 ? "summer": "monsoon"
        }
        elseif()
        {
            return lat > 1 ? "winter" : "summer"
        }
    };
   
    render()
    {
        const season= wReport(this.props.Latitude,new Date().getMonth(), Date());
        return(<div className="container"> 
        <div className="row">
            <div className="col-md-6"></div>
            {this.props.Latitude}
        </div>
        </div>)
    }
};

export default Report;
