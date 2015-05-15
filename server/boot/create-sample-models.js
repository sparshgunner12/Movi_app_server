module.exports = function(app) {
  app.dataSources.msqlDs.automigrate('User', function(err) {
    if (err) throw err;
 
    app.models.User.create([
      {email: 'sp@a.com', password: 'sp'},
      {email: 'sparsh@iitg.ernet.in', password: 'sparsh'},
      {email: 'arpit@iitg.ernet.in', password: 'arpit'},
      {email: 'amit@iitg.ernet.in', password: 'amit'},
      {email: 'shashank@iitg.ernet.in', password: 'shashank'},
    ], function(err, coffeeShops) {
      if (err) throw err;
 
      console.log('Models created: \n', coffeeShops);
    });
  });
  app.dataSources.msqlDs.automigrate('movies', function(err) {
    if (err) throw err;
 
    app.models.movies.create([
      {name: 'HappyNewYear'},
      {name: 'Gabbar'},
      {name: 'FastAndFurious7'},
    ], function(err, coffeeShops) {
      if (err) throw err;
 
      console.log('Models created: \n', coffeeShops);
    });
  });
};