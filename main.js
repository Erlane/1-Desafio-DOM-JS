let imagesList= [
	{
	img: 'https://http2.mlstatic.com/poster-peq-imp-couche-a3-de-como-eu-era-antes-de-voc-D_NQ_NP_988391-MLB26537375275_122017-F.jpg"',
	title: 'Como eu Era Antes de Você',
	text: 'Louisa cuida de Will, que ficou tetraplégico após um acidente de moto, e desconta sua amargura nas pessoas em volta.',
	video: 'link',
},

	{
	img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnecAdHRZx_z2poCozWbwpK9efChBzKNAD0IIAN5w2XJlQaPwisw&s',
	title: 'A Culpa é das Estrelas',
	text: 'Hazel Grace Lancaster é uma adolescente que vive em Indianápolis, que tem um câncer terminal de tireóide que se espalhou para os pulmões. Acreditando que ela está deprimida, sua mãe, Frannie, pede que ela freqüente um grupo semanal de apoio a pacientes com câncer para ajudá-la a fazer amizade com pessoas que estão passando pela mesma coisa.',
	video: 'link',
},

	{
	img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/svEfirPJf0mBypK9UyrpLpu5xkf.jpg',
	title: 'A Cinco Passos de Você',
	text: 'Pacientes com FC são restritamente mantidos à 6 passos de distância para reduzir o risco de infecção cruzada, já que contrair infecções bacterianas de outros pacientes com FC pode ser perigoso, até mesmo fatal. Stella está determinada a seguir as regras, e inicialmente desgosta de Will, que gosta de quebrar as regras e se submeter à riscos às vezes. Stella percebe que Will não está seguindo seu regime de tratamento rigorosamente e eventualmente o convence a concordar em segui-lo.',
	video: 'link',
}
]

let counter = 0;

let before = document.getElementById('before');

let img = document.querySelector('#imagem');

let next = document.getElementById('next');

before.addEventListener('click', function(){
    if ( counter > 0) {
      counter = counter - 1;
      img.setAttribute('src', imagesList[counter].img);
    }
    else {
    	counter = 2
    	img.setAttribute('src', imagesList[counter].img);
    }
})

next.addEventListener('click', function(){
    if ( counter < 2 ) {
      counter = counter + 1;
      img.setAttribute('src', imagesList[counter].img);
    } 
    else {
    	counter = 0
    	img.setAttribute('src', imagesList[counter].img);
    }
})