import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends React.Component {
    constructor(){
        super();
        this.state ={
            searchfield: '',
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    searchHandler = (e) => {
        this.setState({searchfield: e.target.value})
    }
    
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return !this.state.robots.length ? <p>loading</p> : (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.searchHandler} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App;