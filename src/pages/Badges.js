import React from 'react';
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading'
import {Link} from 'react-router-dom';
import api from '../api';
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";

class Badges extends React.Component {
    RICKMORTYURL = 'https://rickandmortyapi.com/api/character/?page=';

    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount() {
        console.log('3. componentDidMount()');
        this.fetchData();
        //this.fetchRickAndMortyData();

        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate()');
        console.log({prevProps, prevState});
        console.log({props: this.props, state: this.state});
    }

    componentWillUnmount() {
        console.log('6. componentWillUnmount()');
        //clearTimeout(this.timeoutId);
        clearInterval(this.intervalId);
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data
            });
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    };

    fetchRickAndMortyData = async () => {
        try {
            console.log('fetching Rick and morty data');
            const response = await fetch(`${this.RICKMORTYURL} + ${this.state.page}`);
            const data = await response.json();
            this.setState({loading: false, data: [].concat(this.state.data, data.results), page: this.state.page + 1});
        } catch (error){
            this.setState({loading: false, error: error})
        }
    };

    render() {

        if (this.state.loading === true && !this.state.data) {
            return (<PageLoading/>);
        }

        if (this.state.error) {
            return (<PageError error={this.state.error}/>);
        }

        console.log('2/4. render()');
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="ConfLogo"/>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                    {this.state.loading && <MiniLoader />}
                </div>
            </React.Fragment>

        );
    }
}

export default Badges;
