
var Sentiment = require('sentiment');
var translate = require('node-google-translate-skidz');

module.exports.translateUrl = function (req,res) {
 
    translate({
      text: req.query.texto,
      source: 'es',
      target: 'en'
    }, function(result) {
      res.send(result.translation);
    });
}

module.exports.translateBody = function (req,res) {
 
    translate({
      text: req.body.texto,
      source: req.body.linguaEntrada,
      target: req.body.linguaSaida
    }, function(result) {
        var sentiment = new Sentiment();
        var resultFinal = sentiment.analyze(result.translation, 'en');
        var o = []
        o.push(result.translation)
        o.push((resultFinal))
      res.send(JSON.stringify(o));
    });
}

module.exports.sentimentText = function (req,res) {
    var sentiment = new Sentiment();
    var result = sentiment.analyze('dogs are amazing and cute and nice', 'en');
    res.send(result)
}

module.exports.log = function (msg) { 
    console.log(msg);
};

