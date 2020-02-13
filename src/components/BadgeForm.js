import React from 'react'

class BadgeForm extends React.Component {

    handleClick = e => {
        console.log("Button was clicked");
    };

    /*handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };*/

    render() {
        return <div>
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={this.props.onChange}
                           className="form-control"
                           type="text"
                           name="firstName"
                           value={this.props.formValues.firstName}/>
                    <label>Last Name</label>
                    <input onChange={this.props.onChange}
                           className="form-control"
                           type="text"
                           name="lastName"
                           value={this.props.formValues.lastName}/>
                    <label>Email</label>
                    <input onChange={this.props.onChange}
                           className="form-control"
                           type="email"
                           name="email"
                           value={this.props.formValues.email}/>
                    <label>JobTitle</label>
                    <input onChange={this.props.onChange}
                           className="form-control"
                           type="text"
                           name="jobTitle"
                           value={this.props.formValues.jobTitle}/>
                    <label>Twitter</label>
                    <input onChange={this.props.onChange}
                           className="form-control"
                           type="text"
                           name="twitter"
                           value={this.props.formValues.twitter}/>
                </div>
                <button
                    type="submit"
                    onClick={this.handleClick}
                    className="btn btn-primary">Save
                </button>
                {this.props.error && (
                    <p className="text-danger">{this.props.error.message}</p>
                )}
            </form>
        </div>
    }
}

export default BadgeForm;
