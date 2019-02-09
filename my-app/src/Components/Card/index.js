import React, { Component } from 'react';
// import anthony from '/anthony.png'
import UserProfile from '../UserProfile';
const data = [
    {"STL%": "2.2", "blank2": "", "TS%": "0.368", "FT": "23", "3P": "0", "BPM": "-7.7", "PER": "5.5", "blanl": "", "Tm": "LAC", "WS": "-0.5", "FG": "29", "3PA": "0", "DRB": "51", "ORB%": "6.6", "OBPM": "-7.5", "DBPM": "-0.2", "FT%": "0.719", "BLK%": "2.7", "3PAr": "0", "PF": "62", "PTS": "81", "FGA": "96", "OWS": "-0.7", "DWS": "0.2", "VORP": "-0.5", "2P": "29", "G": "49", "STL": "16", "TOV": "24", "Age": "30", "TRB": "74", "TOV%": "17.9", "AST%": "4.5", "FTA": "32", "eFG%": "0.302", "BLK": "15", "TRB%": "10.9", "FG%": "0.302", "2PA": "96", "FTr": "0.333", "WS/48": "-0.065", "USG%": "15.8", "DRB%": "15.6", "AST": "11", "Pos": "PF", "Player": "Rajon Rando", "2P%": "0.302", "MP": "377", "Year": "2000", "GS": "3", "_id": {"$oid": "5c5f299dc8c9e50b2d2423af"}, "ORB": "23", "3P%": ""},
    
    {"STL%": "2.2", "blank2": "", "TS%": "0.368", "FT": "23", "3P": "0", "BPM": "-7.7", "PER": "5.5", "blanl": "", "Tm": "LAC", "WS": "-0.5", "FG": "29", "3PA": "0", "DRB": "51", "ORB%": "6.6", "OBPM": "-7.5", "DBPM": "-0.2", "FT%": "0.719", "BLK%": "2.7", "3PAr": "0", "PF": "62", "PTS": "81", "FGA": "96", "OWS": "-0.7", "DWS": "0.2", "VORP": "-0.5", "2P": "29", "G": "49", "STL": "16", "TOV": "24", "Age": "30", "TRB": "74", "TOV%": "17.9", "AST%": "4.5", "FTA": "32", "eFG%": "0.302", "BLK": "15", "TRB%": "10.9", "FG%": "0.302", "2PA": "96", "FTr": "0.333", "WS/48": "-0.065", "USG%": "15.8", "DRB%": "15.6", "AST": "11", "Pos": "PF", "Player": "Kevin Garnette", "2P%": "0.302", "MP": "377", "Year": "2000", "GS": "3", "_id": {"$oid": "5c5f299dc8c9e50b2d2423af"}, "ORB": "23", "3P%": ""},

    {"STL%": "2.2", "blank2": "", "TS%": "0.368", "FT": "23", "3P": "0", "BPM": "-7.7", "PER": "5.5", "blanl": "", "Tm": "LAC", "WS": "-0.5", "FG": "29", "3PA": "0", "DRB": "51", "ORB%": "6.6", "OBPM": "-7.5", "DBPM": "-0.2", "FT%": "0.719", "BLK%": "2.7", "3PAr": "0", "PF": "62", "PTS": "81", "FGA": "96", "OWS": "-0.7", "DWS": "0.2", "VORP": "-0.5", "2P": "29", "G": "49", "STL": "16", "TOV": "24", "Age": "30", "TRB": "74", "TOV%": "17.9", "AST%": "4.5", "FTA": "32", "eFG%": "0.302", "BLK": "15", "TRB%": "10.9", "FG%": "0.302", "2PA": "96", "FTr": "0.333", "WS/48": "-0.065", "USG%": "15.8", "DRB%": "15.6", "AST": "11", "Pos": "PF", "Player": "Anthony Avent", "2P%": "0.302", "MP": "377", "Year": "2000", "GS": "3", "_id": {"$oid": "5c5f299dc8c9e50b2d2423af"}, "ORB": "23", "3P%": ""},

    {"STL%": "1.2", "blank2": "", "TS%": "0.534", "FT": "71", "3P": "6", "BPM": "2.4", "PER": "19.8", "blanl": "", "Tm": "HOU", "WS": "1.9", "FG": "106", "3PA": "26", "DRB": "138", "ORB%": "13.1", "OBPM": "2.1", "DBPM": "0.3", "FT%": "0.645", "BLK%": "0.4", "3PAr": "0.117", "PF": "48", "PTS": "289", "FGA": "222", "OWS": "1.3", "DWS": "0.6", "VORP": "0.7", "2P": "100", "G": "20", "STL": "14", "TOV": "44", "Age": "36", "TRB": "209", "TOV%": "14", "AST%": "17.3", "FTA": "110", "eFG%": "0.491", "BLK": "4", "TRB%": "18.9", "FG%": "0.477", "2PA": "196", "FTr": "0.495", "WS/48": "0.148", "USG%": "22.3", "DRB%": "24.4", "AST": "63", "Pos": "PF", "Player": "Charles Barkley*", "2P%": "0.51", "MP": "620", "Year": "2000", "GS": "18", "_id": {"$oid": "5c5f299dc8c9e50b2d2423b3"}, "ORB": "71", "3P%": "0.231"}
];

const fakeData = [{name: "Lebron James", FT: '33', POS: "PF", age: '47' },{name: "Steve Nash", FT: '33', POS: "PF", age: '47' },{name: "Michael Jordan", FT: '33', POS: "PF", age: '47' }, {name: "Paul Gasul", FT: '10', POS: "PF", age: '49' } ];

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }
        componentWillMount(){
            var url = window.location.href;
            var parts = url ? url.split('?')[1] : window.location.search.slice(1);
            const firstPartOfUrl = "https://nba-swipe.herokuapp.com/api/v1/";
            var querystring = `${firstPartOfUrl}/matchups?${parts}`;
            fetch(querystring)
                .then(data => data.json())
                .then(data => console.log(data) );
        }
       getRandomInt = (max) => {
           console.log(Math.floor(Math.random() * Math.floor(max)));
            return Math.floor(Math.random() * Math.floor(max));
          }
        
        render() {
            return (
                <>
                <div class="PlayerInfo" >
                <img src= {require("./icon.png")} alt=""/>
                    <h4 id='name'> Player Name: {data[this.getRandomInt(4)].Player}</h4>
                    <h4 id='shot-percent'>Goal Average: {data[this.getRandomInt(4)].FT}</h4>
                    <h4 id='position'>Position: {data[this.getRandomInt(4)].Pos}</h4>
                    <h4 id='rebound'>Age:{data[this.getRandomInt(4)].Age}</h4>
                    <a href = "/ChosenCard/getMatchup" ><h3>Select Player ></h3></a> 
                  
                </div>

                <br />
                <br />
                <br />
                <br />
                <div class="PlayerInfo" >
                <img src= {require("./icon.png")} alt=""/>
                 
                    <h4 id='name'> Player Name: {fakeData[this.getRandomInt(4)].name}</h4>
                    <h4 id='shot-percent'>Goal Average {fakeData[this.getRandomInt(4)].FT}</h4>
                    <h4 id='position'>Position: {fakeData[this.getRandomInt(4)].POS} </h4>
                    <h4 id='rebound'>Age:{fakeData[this.getRandomInt(4)].age} </h4>
                    <a href = "/ChosenCard/getMatchup" ><h3>Select Player ></h3></a>  

                </div> 
            <br />
            <a href = "/UserProfile" ><h3>View Player Stats</h3></a>            
            </>

            

            );
        }
    
}

const background = {background: '#282c34', height: '100%', width: '100%'}

