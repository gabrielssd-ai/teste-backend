const express = require('express');
const router = express.Router();
router.post('/ex1', function (req, res) {
    const quantmin = Number(req.body.quantmin)
    const quantmax = Number(req.body.quantmax)

    const media = (quantmin + quantmax) / 2;
    res.json({ media })
})

router.post('/ex2', function (req, res) {

    const nome = req.body.nome
    const horasTrabalhadas = Number(req.body.horasTrabalhadas);
    const valorhora = Number(req.body.valorhora);
    const filhos = Number(req.body.filhos);
    const salariobruto = horasTrabalhadas * valorhora
    const valorfilho = salariobruto * (filhos * 0.03)
    const salario = salariobruto + valorfilho
    res.json({ nome, salario })
})
router.post('/ex3', function (req, res) {
    let idade = Number(req.body.idade)
    let idademes = idade * 12
    let idadedia = idademes * 30
    res.json({ idadedia })
})
router.post('/ex4', function (req, res) {
    let idadedias = Number(req.body.idadedias)
    let idademes = idadedias / 30
    let idadeano = idademes / 12
    res.json({ mensagem: `sua idade em dia é ${idadedias}, em mês ${idademes}, idade em anos ${idadeano} ` })
})
router.post('/ex5', function (req, res) {
    let n1 = Number(req.body.n1);
    let n2 = Number(req.body.n2);
    let n3 = Number(req.body.n3);
    let peso1 = 2
    let peso2 = 3
    let peso3 = 5
    let media = (n1 * peso1 + n2 * peso2 + n3 * peso3) / (peso1 + peso2 + peso3)
    res.json({ media })
})
router.post('/ex6', function (req, res) {
    let temposegundo = Number(req.body.temposegundo)
    let tempohoras = temposegundo / 3600
    let tempominutos = temposegundo / 60
    res.json({ mensagem: `o tempo em segundo é: ${temposegundo} segundos em minutos é: ${tempominutos} minutos e em horas é: ${tempohoras} horas` })
})
router.post('/ex7', function (req, res) {
    let nome = req.body.nome
    let salario = Number(req.body.salario)
    let vendas = Number(req.body.vendas)
    let percentual = Number(req.body.percentual)
    let calculopercentual = vendas * percentual / 100
    let salariofinal = salario + calculopercentual
    res.json({ salariofinal })
})
router.post('/ex8', function (req, res) {
    let nome = req.body.nome
    let distancia = Number(req.body.distancia)
    let tempo = Number(req.body.tempo)
    let velocidademedia = distancia / tempo
    res.json({ mensagem: `a velocidade media do ${nome} foi de ${velocidademedia}km/h ` })
})
router.post('/ex9', function (req, res) {
let salario = Number(req.body.salario)
let reajuste = salario * 0.3
let salariofinal = salario + reajuste
if(salario > 1000){
    res.json({mensagem: `o salario reajustado é de ${salariofinal}`})
}else{
    res.json({mensagem: `o funcionario não tem direito ao reajuste`})
}
    
})
module.exports = router

