import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {hobbies: ["Counting stars", "Dreaming", 
								"Rock-climbing", "Programming"], value: '', count: 4 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState( {value: event.target.value } );		
    }

    handleSubmit(event) {
 		// add new hobbie to the list                                                                  
        var newHobbies = this.state.hobbies.slice();
        newHobbies.push( this.state.value );
        this.setState({hobbies: newHobbies});
		// update count
		this.setState({count: this.state.count +1}) 

		event.preventDefault(); // without this function, the program returns to its default state right after a new input value is being added
                                                                                                                  
        this.setState( {value: '' } ); // reset		
    }

    render( ) {
		// generate list of hobbies                                                                   
        const hobbies = this.state.hobbies;
        const hobbiesList = hobbies.map((hobbie) =>
                                        <li key={hobbie.id}>
                                           {hobbie}
                                        </li> );
		return (
			<div className="app">
				<div className= "header"> My Interactive App </div>
				<div className= "container"> 
					<div className="green-box">
						<form className= "form" onSubmit={this.handleSubmit}>
							<input className= "add-item" type= "text" value={this.state.value} onChange={this.handleChange} ></input>
							<input type= "submit" value= "Add"></input> 
						</form>
					</div>
					<div className= "yellow-box">
						<h1> My Hobbies ({this.state.count}): </h1>
						<ul className= "hobbies"> 
							{hobbiesList}
						</ul>
					</div>
				</div>
			</div>
			);
	}
}

export default App;

