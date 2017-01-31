//export image map so all images are in one place. then we can reference them by their JSON name.

const imageMap = {
	copper: require('./assets/CardImages/bazaar.jpg'),
	silver: require('./assets/CardImages/silver.jpg'),
	gold: require('./assets/CardImages/gold.jpg'),
	duchy: require('./assets/CardImages/duchy.jpg'),
	estate: require('./assets/CardImages/estate.jpg'),
	gardens: require('./assets/CardImages/gardens.jpg'),
	province: require('./assets/CardImages/province.jpg'),
    bazaar: require('./assets/CardImages/bazaar.jpg'),
    cache: require('./assets/CardImages/cache.jpg'),
    chancellor: require('./assets/CardImages/chancellor.jpg'),
    councilroom: require('./assets/CardImages/councilroom.jpg'),
    festival: require('./assets/CardImages/festival.jpg'),
    grandmarket: require('./assets/CardImages/grandmarket.jpg'),
    laboratory: require('./assets/CardImages/laboratory.jpg'),
    margrave: require('./assets/CardImages/margrave.jpg'),
    market: require('./assets/CardImages/market.jpg'),
    oasis: require('./assets/CardImages/oasis.jpg'),
    smithy: require('./assets/CardImages/smithy.jpg'),
    village: require('./assets/CardImages/village.jpg'),
    woodcutter: require('./assets/CardImages/woodcutter.jpg'),
    workersvillage: require('./assets/CardImages/workersvillage.jpg')
}

module.exports = imageMap;