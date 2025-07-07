import React, { Component } from 'react';
import "./LeftSide.css";
import ImageLayout from '../ImageLayout';
import groups from "../../../../images/groups.png";
import memories from "../../../../images/memories.png";
import ads from "../../../../images/ads.png";
import adsmanager from "../../../../images/admanager.png";
import business from "../../../../images/business.png";

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data :[]
         }
    }

    getData=()=>{ //JSON RESPONSE
        let jsondata = [
            {
                "image": JSON.parse(localStorage.getItem("user")).userImage,
                "text": JSON.parse(localStorage.getItem("user")).userName
            },
            
            {
                "image": groups,
                "text":"Friends"
            },
            {
                "image": memories,
                "text":"Memories"
            },
           
            {
                "image": ads,
                "text":"Ad Center"
            },
            {
                "image": adsmanager,
                "text":"Ads Manager"
            },
            
            {
                "image": business,
                "text":"Business Manager"
            }    
        ];
        this.setState({data : jsondata});
    }

    componentDidMount() {
        this.getData();
    }
    
    render() { 
        return ( 
         <div>
             {
                 this.state.data.map( (item) =>(
                        <ImageLayout image={item.image} text={item.text} />
                 ))
             }

         </div> 
        );
    }
}
 
export default LeftSide;