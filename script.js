//CHAMAR FUNÇÃO E DECLARAR VARIAVEIS PARA O PROJETO.
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
//APLICAR CONDIÇÕES PARA DIFERENTES SITUAÇÕES.    
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(' [ERRO] Por favor, verifique os dados e tente novamente!') 
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')   
        if (fsex[0].checked) {
            genero = 'Homem,'
            if (idade >= 0 & idade <= 4) {
                //bebê garoto
                img.setAttribute('src', 'baby.b.png')
            } else if (idade < 13) {
                //criança menino
                img.setAttribute('src','menino.png')
            }
             else if (idade <= 21) {
                //jovem rapaz
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else if (idade > 51) {
                //idoso 
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher,'
            if (idade >= 0 & idade <= 4) {
                //bebê moça
                img.setAttribute('src', 'baby.g.png') 
            } else if (idade < 13) {
                //menina
                img.setAttribute('src', 'menina.png')
            } else if (idade <= 21) {
                //jovem mulher
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'mulher.png') 
            }  else if (idade > 51) {
                //idosa
                img.setAttribute('src', 'velha.png')
            }  
            
        }
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }    
    
}
