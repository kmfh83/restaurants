const image = require('./img/sandwitch.jpg');

const items = [ {
            id: 1,
            title: 'Egg Sandwitch',
            price: 180,
            description: 'Sweet, tender crabmeat in our creamy garlic Parmesan sauce.',
            image: image,
            options: [ 'shata', 'oil', 'filfil aswad', 'lemon asfar sada', 'fromage' ]
          },
          {
            id: 2,
            title: 'Tona Sandwitch',
            price: 95,
            description: 'Our menu changes frequently so that our chefs may bring you the BEST.',
            image: image,
            options: [ 'shata', 'fromage' ]

          },
          {
            id: 3,
            title: 'Kebdah Sandwitch',
            price: 33.50,
            description: 'Occasionally, this may mean some items listed here are temporarily.',
            image: image,
            options: [ 'ketchup', 'oil', 'lemon' ]

          },
          {
            id: 4,
            title: 'Mslooq Sandwitch',
            price: 5.50,
            description: 'Two southern fried chicken strips on honey mustard-dressed lettuce leaves with celery sticks and a pot of Red French dressing',
            image: image,
            options: [ 'cheese', 'pepper', 'filfil' ]

          },
          {
            id: 5,
            title: 'Mqlql Sandwitch',
            price: 7.20,
            description: 'Crispy coated chicken strips, baby gem lettuce, Grana Padano and Caesar dressing in a flour tortilla.',
            image: image,
            options: [ 'shata', 'oil', 'filfil', 'lemon', 'fromage' ]
          }]

export default items;
