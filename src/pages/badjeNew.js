import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from "../components/badge";

class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt={"Logo"}/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Juan Camilo"
                                lastName="Acosta"
                                twitter="jcamilo016"
                                jobTitle="Front End Engineer"
                                avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                            />
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default BadgeNew;
