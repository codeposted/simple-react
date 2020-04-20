import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobot } from '../action';

class App extends React.Component {
    componentDidMount() {
        this.props.onRequestRobot();
    }
    
    render(){
        const { searchField, searchHandler, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ? <p>loading</p> : (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={searchHandler} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchField: state.search.searchField,
        robots: state.robot.robots,
        isPending: state.robot.isPending,
        error: state.robot.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchHandler: (e) => dispatch(setSearchField(e.target.value)),
        onRequestRobot: () => dispatch(requestRobot())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);