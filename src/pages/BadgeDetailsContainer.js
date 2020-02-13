import React from 'react';
import './styles/BadgeDetails.css';
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from '../api';
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: false,
        data: undefined,
        modalIsOpen: false
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null,
        });

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({
                loading: false,
                error: null,
                data: data
            });
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    };

    handleOpenModal = e => {
        this.setState({
            modalIsOpen: true
        });
    };

    handleCloseModal = e => {
        this.setState({
            modalIsOpen: false
        });
    };

    handleDeleteBadge = async e => {
        this.setState({loading: true, error: null});
        try{
            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({loading: false, error: null});
            this.props.history.push('/badges');
        } catch(error){
            this.setState({loading: false, error: null});
        }
    };

    render() {
        if (this.state.loading) {
            return <PageLoading/>;
        }

        if (this.state.error) {
            return <PageError error={this.state.error}/>;
        }

        const badge = this.state.data

        return (
            <BadgeDetails badge={badge}
                          onCloseModal={this.handleCloseModal}
                          onOpenModal={this.handleOpenModal}
                          modalIsOpen={this.state.modalIsOpen}
                          onDeleteBadge={this.handleDeleteBadge}/>
        );
    }
}

export default BadgeDetailsContainer;
