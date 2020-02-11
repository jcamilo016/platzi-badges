import React from 'react'
import BadgesListItem from "./BadgeListItem";
import './styles/BadgesList.css';

class BadgesList extends React.Component {
    render() {
        return (<ul className="list-unstyled">
            {this.props.badges.map((badge) => {
                return (<li key={badge.id}>
                    <BadgesListItem badge={badge} />
                </li>);
            })}
        </ul>);
    }
}

export default BadgesList;
