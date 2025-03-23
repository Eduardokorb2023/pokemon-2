const barra = document.getElementById('barra');
const texto = document.getElementById('texto');
const botaoIniciar = document.getElementById('botaoIniciar');


function falarTexto() {
  const synth = window.speechSynthesis;
  const mensagem = new SpeechSynthesisUtterance(texto.textContent);
  
 
  mensagem.volume = 1; 
  mensagem.rate = 1;   
  mensagem.pitch = 1;  

  synth.speak(mensagem);
}


function iniciarAnimacao() {
  barra.style.animation = 'mover 20s linear infinite';
}

function seguirTexto() {
  const textoRect = texto.getBoundingClientRect();
  const barraHeight = barra.offsetHeight;


  barra.style.top = `${textoRect.top + (textoRect.height / 2) - (barraHeight / 2)}px`;
}


function iniciarFalaEAnimacao() {
  falarTexto();  
  iniciarAnimacao();  
  

  const intervaloReposicionar = setInterval(() => {
    seguirTexto(); 
  }, 20);


  const synth = window.speechSynthesis;
  const mensagem = new SpeechSynthesisUtterance(texto.textContent);
  mensagem.onend = () => {
    clearInterval(intervaloReposicionar);  
  };
}


botaoIniciar.addEventListener('click', iniciarFalaEAnimacao);





document.addEventListener('DOMContentLoaded', function() {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const mudaCorFundoBotao = document.getElementById('mudar-fundo');
  
  let tamanhoAtualFonte = 1;

 
  botaoDeAcessibilidade.addEventListener('click', function() {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

    

const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)


  });

  
  aumentaFonteBotao.addEventListener('click', function() {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = tamanhoAtualFonte + 'rem';
  });


  diminuiFonteBotao.addEventListener('click', function() {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = tamanhoAtualFonte + 'rem';
  });

  mudaCorFundoBotao.addEventListener('click', function() {

    if (document.body.style.backgroundColor === 'black') {
      document.body.style.backgroundColor = 'white'; 
    } else {
      document.body.style.backgroundColor = 'black'; 
    }
  
    if (document.body.style.color === 'white') {
      document.body.style.color = 'black';  
    } else {
      document.body.style.color = 'white';  
    }
  
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      if (link.style.color === 'white') {
        link.style.color = 'black'; 
      } else {
        link.style.color = 'white';  
      }
    });
  });
  
    
    
  });


const botaoImagem = document.getElementById('botaoImagem');
const textoAparecer = document.getElementById('textoAparecer');


botaoImagem.addEventListener('click', function() {
  if (textoAparecer.style.display === 'none' || textoAparecer.style.display === '') {
    textoAparecer.style.display = 'block'; 
  } else {
    textoAparecer.style.display = 'none'; 
  }
});


const botaoImagemGo = document.getElementById('botaoImagemGo');
const textoGo = document.getElementById('textoGo');

const botaoImagemFire = document.getElementById('botaoImagemFire');
const textoFire = document.getElementById('textoFire');

botaoImagemGo.addEventListener('click', function() {
  if (textoGo.style.display === 'none' || textoGo.style.display === '') {
    textoGo.style.display = 'block'; 
  } else {
    textoGo.style.display = 'none'; 
  }
});

botaoImagemFire.addEventListener('click', function() {
  if (textoFire.style.display === 'none' || textoFire.style.display === '') {
    textoFire.style.display = 'block';
  } else {
    textoFire.style.display = 'none'; 
  }
});


const botaoImagemLeaf = document.getElementById('botaoImagemLeaf');
const textoLeaf = document.getElementById('textoLeaf');

botaoImagemLeaf.addEventListener('click', function() {
  if (textoLeaf.style.display === 'none' || textoLeaf.style.display === '') {
    textoLeaf.style.display = 'block';  
  } else {
    textoLeaf.style.display = 'none'; 
  }
});

ScrollReveal().reveal('#inicio', { delay: 350 });
ScrollReveal().reveal('#poké', { delay: 400 });
ScrollReveal().reveal('#contato', { delay: 500 });
ScrollReveal().reveal('#exemplos', { delay: 350 });

document.getElementById("enviarMensagem").addEventListener("click", function () {
  document.getElementById("mensagemConfirmacao").innerText = "Mensagem enviada!";
});