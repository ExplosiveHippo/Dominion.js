//export image map so all images are in one place. then we can reference them by their JSON name.

const imageMap = {
    large: {
        copper: require('./assets/CardImages/copper.jpg'),
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
    },
    small: {
        copper: require('./assets/CardImages/small/copper.png'),
        silver: require('./assets/CardImages/small/silver.png'),
        gold: require('./assets/CardImages/small/gold.png'),
        duchy: require('./assets/CardImages/small/duchy.png'),
        estate: require('./assets/CardImages/small/estate.png'),
        gardens: require('./assets/CardImages/small/gardens.png'),
        province: require('./assets/CardImages/small/province.png'),
        bazaar: require('./assets/CardImages/small/bazaar.png'),
        cache: require('./assets/CardImages/small/cache.png'),
        chancellor: require('./assets/CardImages/small/chancellor.png'),
        councilroom: require('./assets/CardImages/small/councilroom.png'),
        festival: require('./assets/CardImages/small/festival.png'),
        grandmarket: require('./assets/CardImages/small/grandmarket.png'),
        laboratory: require('./assets/CardImages/small/laboratory.png'),
        margrave: require('./assets/CardImages/small/margrave.png'),
        market: require('./assets/CardImages/small/market.png'),
        oasis: require('./assets/CardImages/small/oasis.png'),
        smithy: require('./assets/CardImages/small/smithy.png'),
        village: require('./assets/CardImages/small/village.png'),
        woodcutter: require('./assets/CardImages/small/woodcutter.png'),
        workersvillage: require('./assets/CardImages/small/workersvillage.png')
    }
	
}

module.exports = imageMap;