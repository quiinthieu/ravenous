import React from 'react';
import './Business.css';

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <a href={this.props.business.url} target="_blank" rel="noopener noreferrer"><img src={this.props.business.imageSrc} alt='' /></a>
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <a href={`https://www.google.com/maps/search/?api=1&query=${this.props.business.name.replace('&', '%26').split(' ').join('+')}`} target="_blank" rel="noopener noreferrer">
                            <p>{this.props.business.address}</p>
                            <p>{this.props.business.city}</p>
                            <p>{this.props.business.state} {this.props.business.zipCode}</p>
                        </a>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.category}</h3>
                        <h3 className="rating">{this.props.business.rating}</h3>
                        <p>{this.props.business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;