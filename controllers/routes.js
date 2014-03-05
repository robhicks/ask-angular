module.exports = function(app) {

   app.get('/:page', function(req, res){
      res.render(req.params.page, {});
   });
   app.get('/partials/:name', function(req, res){
      res.sendfile(process.cwd() + '/views/partials/' + req.params.name + '.html');
   });
   app.get('/', function(req, res){
      res.render("index", {});
   });
};
