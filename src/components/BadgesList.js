import React from 'react'
import BadgesListItem from "./BadgeListItem";
import './styles/BadgesList.css';
import {Link} from "react-router-dom";

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState("");
    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    React.useMemo(()=>{
        const result = badges.filter((badge)=>{
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredBadges(result);
    }, [badges, query]);

    return {query, setQuery,filteredBadges};
}

function BadgesList(props) {
    const badges = props.badges;
    const {query, setQuery, filteredBadges} = useSearchBadges(badges);


    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                           value={query}
                           onChange={(e)=> setQuery(e.target.value)}/>
                </div>
                <h3>No se encontró ningún Badge</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create New badge
                </Link>
            </div>
        );
    }

    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                       value={query}
                       onChange={(e)=> setQuery(e.target.value)}/>
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
                    return (<li key={badge.id}>
                        <Link className="text-reset text-decoration-none" to={`/badges/details/${badge.id}`}>
                            <BadgesListItem badge={badge}/>
                        </Link>
                    </li>);
                })}
            </ul>
        </div>
    );

}

export default BadgesList;
