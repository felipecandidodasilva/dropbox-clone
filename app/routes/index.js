var express = require('express');
var router = express.Router();
/**
 * formidable trata os arquivos enviados via upload
 * ele trata todas os dados, mas é mais completo para arquivos
 * 
 */
var formdable = require('formidable'); // npm install formidable --save


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', (req,res)=> {

  let form = new formdable.IncomingForm({

    uploadDir: './upload', // define o diretório onde será salvo os arquivos
    keepExtensions: true // mantém a extensão do(s) arquivo(s) sem isso salva sem extensão

  }) //IncomingForm chama o formulário 

  form.parse(req, (err,fields,files)=>{
    // interpreta os dados 
    
    res.json({
      files
    });

  }) 
});

module.exports = router;