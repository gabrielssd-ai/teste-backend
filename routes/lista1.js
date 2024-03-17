const express = require('express');
const router = express.Router();
router.post('/ex1', function (req, res) {
    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)
    const n4 = Number(req.body.n4)


    const media = (n1 + n2 + n3 + n4) / 4

    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado'

    res.json({ media, mensagem })

})

router.post('/ex2', function (req, res) {

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos

    let retorno = {}
    if (soma > total) {

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores"
        }

        res.status(400).json(retorno)

    } else {
        const percBranco = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = { percBranco, percNulos, percValidos }

        res.status(200).json(retorno)
    }
})

router.post('/ex3', function (req, res) {

    const salario = Number(req.body.salario)
    const reajuste = Number(req.body.reajuste)
    let novosalario = salario + (salario * reajuste) / 100


    res.json({ novosalario })
})

router.post('/ex4', function (req, res) {

    let percdistribuidor = 0.28;
    let percimposto = 0.45;
    const custodefabrica = Number(req.body.custodefabrica);
    const custodistribuidor = custodefabrica * percdistribuidor;
    const custoimposto = custodefabrica * percimposto

    const valorfinal = custodefabrica + custodistribuidor + custoimposto

    res.json({ valorfinal })
})

router.post('/ex5', function (req, res) {

    const percdistribuidor = Number(req.body.percdistribuidor) / 100
    const percimposto = Number(req.body.percimposto) / 100
    const fabrica = Number(req.body.fabrica)

    let custodistribuidor = fabrica * percdistribuidor;
    let custoimposto = fabrica * percimposto;
    const valorfinal = fabrica + custodistribuidor + custoimposto;



    res.json({ valorfinal })
})

router.post('/ex6', function (req, res) {
 
    function calcularsalariofinal(carrosvendidos, valorvendas, salario, comissaoporcarros){
    const comissao = carrosvendidos * comissaoporcarros;

    const valorporvendas = 0.05 * valorvendas;

    const salariofinal = salario + valorporvendas + comissao;
    
    return salariofinal;
}
const salario = Number(req.body.salario);
const carrosvendidos = Number(req.body.carrosvendidos);
const comissaoporcarros = Number(req.body.comissaoporcarros);
const valorvendas = Number(req.body.valorvendas);

const salariofinal = calcularsalariofinal(carrosvendidos, valorvendas, salario, comissaoporcarros)
res.json({salariofinal});

})

router.post('/ex7', function(req, res){
   
function mediafinal(n1, n2){
    const peso1 = 4;
    const peso2 = 6;
    const media = (n1 * peso1 + n2 * peso2)/ (peso1 + peso2);

    return media;
}
const n1 = Number(req.body.n1)
const n2 = Number(req.body.n2)


const media = mediafinal(n1, n2);

    
    res.json({media})
  })

  router.post('/ex8', function(req, res){
 
function calcularvolume(raio, altura){
    return Math.PI * Math.pow(raio, 2) * altura;

}
const raio = Number(req.body.raio)
const altura = Number(req.body.altura)


const volume = calcularvolume(raio, altura)
    
    res.json({volume})
})

router.post('/ex9', function(req, res){
   
const n1 = Number(req.body.n1);
const n2 = Number(req.body.n2);

const soma = n1 + n2;
const mult = soma * n1;
    res.json({mult})
  })

module.exports = router

