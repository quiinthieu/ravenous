const apiKey = '4cO39OEl_tRh-M8fFomgSAZwbZHV7pt9w18hNncSDubN7cEhv57QzEMiVzrBT0LmnyzdBYCGvwIi_SES-J0D36kllCd1lj2WeTRxaxpHogf0UKvT7ezcQoGuYbS7XXYx';

/* fetch() is a browser API, older browsers may not support it. To increase the accessibility of ravenous to a wider audience of users, we'll need to add a fetch() polyfill to support older browsers */

const Yelp = {
    search: function(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=24`, {headers: {Authorization: `Bearer ${apiKey}`}})
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                    // console.log(jsonResponse.businesses.length);
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                            url: business.url
                        }
                    });
                }
            })
    }
};

export default Yelp;
