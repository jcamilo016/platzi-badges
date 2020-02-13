import React from 'react';
import header from '../images/platziconf-logo.svg';
import './styles/BadgeNew.css';
import Badge from "../components/badge";
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import md5 from 'md5';
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
            form: {
                firstName: "",
                lastName: "",
                email: "",
                jobTitle: "",
                twitter: "",
                avatarUrl: ""
            }
        }
    }

    handleChange = e => {
        const hash = md5(this.state.form.email);

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
                avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
            }
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true, error: null});
        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false});
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    };

    render() {

        if (this.state.loading) {
            return <PageLoading/>;
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt={"Logo"}/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'First Name'}
                                lastName={this.state.form.lastName || 'Last Name'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'Job Title'}
                                email={this.state.form.email || 'email'}
                                avatarUrl={this.state.form.avatarUrl || 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}
                            />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;
