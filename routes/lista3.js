const express = require('express');
const router = express.Router();
router.post('/ex1', function(req, res){
    let salario = Number(req.body.salario)
    let reajuste = 0
    let salariofinal = salario + reajuste
    if(salario <= 2000){
      reajuste = salario * 0.50
      salariofinal = salario + reajuste
      res.json({mensagem:`o salario reajustado é de ${salariofinal} `})
    }else if (salario > 2000 ){
      reajuste = salario * 0.30
      salariofinal = salario + reajuste
      res.json({mensagem:`o salario reajustado é de ${salariofinal} `})
    }
    
  })
  router.post('/ex2', function(req, res){
    function encontrarMaior(num1, num2, num3) {
        let maior = num1;
    
        if (num2 > maior) {
            maior = num2;
        }
        if (num3 > maior) {
            maior = num3;
        }
        return maior;
    }
    let numero1 = parseInt(req.body.numero1);
    let numero2 = parseInt(req.body.numero2);
    let numero3 = parseInt(req.body.numero3);
    
    let maiorNumero = encontrarMaior(numero1, numero2, numero3);
    
     
    res.json({maiorNumero})
    })
  
      router.post('/ex3', function(req, res){
        function calcularConta(qtdChopps, qtdCoberturas) {
            const precoChopp = 4.80;
            const precoPizza = 17.00;
            const precoCobertura = 1.50;
            const taxaGarcom = 0.10;
        
            const totalChopps = qtdChopps * precoChopp;
            const totalPizza = precoPizza + (qtdCoberturas * precoCobertura);
        
            const subtotal = totalChopps + totalPizza;
        
            const taxaGarcomValor = subtotal * taxaGarcom;
        
            const totalConta = subtotal + taxaGarcomValor;
        
            return totalConta;
        }
        
        function calcularValorPorPessoa(totalConta, qtdPessoas) {
            const valorPorPessoa = totalConta / qtdPessoas;
            return valorPorPessoa;
        }
        
        let qtdChopps = parseInt(req.body.qtdChopps);
        let qtdCoberturas = parseInt(req.body.qtdCoberturas);
        let qtdPessoas = parseInt(req.body.qtdPessoas);
        
        
        let totalConta = calcularConta(qtdChopps, qtdCoberturas);
        
        let valorPorPessoa = calcularValorPorPessoa(totalConta, qtdPessoas);
        
        res.json({ mensagem: `Total da conta: R$ ${totalConta.toFixed(2)}. Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}.` });

       
        })
        router.post('/ex4', function(req, res){
            const {salarioMinimo, horasTrabalhadas, dependentes, horasExtras} = req.body

            const valorHoraTrabalhada = salarioMinimo * 0.2
            const salarioMes = valorHoraTrabalhada * horasTrabalhadas
            const valorDependente = dependentes * 32
            const valorHoraExtra = valorHoraTrabalhada * 1.5 * horasExtras
            const salarioBruto = salarioMes + valorDependente + valorHoraExtra
        
            let imposto = 0
            
            if(salarioBruto > 2000){
                imposto = salarioBruto >= 5000 ? 
                                       salarioBruto * 0.2 : 
                                       salarioBruto * 0.1
            }
        
            const salarioLiquido = salarioBruto - imposto
            const gratificacao = salarioLiquido < 3500 ? 1000 : 500
            const salarioReceber = salarioLiquido + gratificacao
        
            res.json({salarioBruto, imposto, gratificacao, salarioReceber})
          })
          router.post('/ex5', function(req, res){
            function calcularaprovacao(mediaaproveitamento){
                if(mediaaproveitamento >= 9.0){
                  return 'A'
                  
                }else if(mediaaproveitamento >= 7.5 && mediaaproveitamento < 9.0){
                  return 'B'
                 
                }else if(mediaaproveitamento >= 6.0 && mediaaproveitamento < 7.5){
                  return 'C'
                  
                }else if(mediaaproveitamento >= 4.0 && mediaaproveitamento < 6.0){
                  return 'D'
                  
                }else if(mediaaproveitamento < 4.0){
                  return 'E'
                  
                }
              
              }
              
              function aprovacao(conceito){
                if(conceito == 'A' || conceito == 'B' || conceito == 'C'){
                  return 'APROVADO'
                }else{
                  return  'REPROVADO'
                }
              }
              
              
              let numeroid = parseInt(req.body.numeroid)
              let nota1 = parseFloat(req.body.nota1)
              let nota2 = parseFloat(req.body.nota2)
              let nota3 = parseFloat(req.body.nota3)
              let me = parseFloat(req.body.me)
              let mediaaproveitamento = (nota1 + nota2 * 2 + nota3 * 3+me)/7
              let conceito = calcularaprovacao(mediaaproveitamento)
              let situacao = aprovacao(conceito)
              res.json({
                mensagem: "Informações do aluno",
                numeroid,
                nota1,
                nota2,
                nota3,
                me,
                mediaaproveitamento: mediaaproveitamento.toFixed(2),
                conceito,
                situacao
            });
})
router.post('/ex6', function(req, res){
    function calcularPesoHomem(altura) {
        const pesoIdealHomem = (72.7 * altura) - 58;
        return pesoIdealHomem;
    }
    
    function calcularPesoMulher(altura) {
        const pesoIdealMulher = (62.1 * altura) - 44.7;
        return pesoIdealMulher;
    }
    
    let altura = parseFloat(req.body.altura);
    let sexo = req.body.sexo;
    
    let pesoIdeal;
    
    if (sexo === 'M') {
        pesoIdeal = calcularPesoHomem(altura);
        res.json({ mensagem: `O peso ideal para um homem com ${altura} de altura é de: ${pesoIdeal.toFixed(2)}kg` });
    } else if (sexo === 'F') {
        pesoIdeal = calcularPesoMulher(altura);
        res.json({ mensagem: `O peso ideal para uma mulher com ${altura}m de altura é: ${pesoIdeal.toFixed(2)}kg` });
    } else {
        res.json({ mensagem: `Sexo não reconhecido. Por favor, digite M para masculino ou F para feminino.` });
    }
   
  })
  router.post('/ex7', function(req, res){
    function calcularSomaDosDoisMaiores(num1, num2, num3) {
  
        let menor = Math.min(num1, num2, num3);
    
        let somaDosDoisMaiores = num1 + num2 + num3 - menor;
    
        return somaDosDoisMaiores;
    }
    let valor1 = parseFloat(req.body.valor1);
    let valor2 = parseFloat(req.body.valor2);
    let valor3 = parseFloat(req.body.valor3);
    
    let somaDosDoisMaiores = calcularSomaDosDoisMaiores(valor1, valor2, valor3);
    res.json({mensagem: `A soma dos 2 maiores valores é: ${somaDosDoisMaiores}`})
    })
    router.post('/ex8', function(req, res){
        function calcularNovoSalario(salarioAtual, codigoCargo) {
            const aumentos = {
                101: 0.05,
                102: 0.075,
                103: 0.10 
            };
        
            const percentualAumento = aumentos[codigoCargo] || 0.15;
        
            const novoSalario = salarioAtual * (1 + percentualAumento);
            const diferencaSalario = novoSalario - salarioAtual;
        
            return [novoSalario, diferencaSalario];
        }
        let salario = parseFloat(req.body.salario);
        let codigoCargo = parseInt(req.body.codigoCargo);
        
        let [novoSalario, diferencaSalario] = calcularNovoSalario(salario, codigoCargo);
        
       
        res.json({mensagem:`Salário antigo: R$ ${salario.toFixed(2)}.Novo salário: R$ ${novoSalario.toFixed(2)}.Diferença salarial: R$ ${diferencaSalario.toFixed(2)} `})
      })
module.exports = router

