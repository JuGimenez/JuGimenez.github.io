import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './Gallery.css'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Fotos
// import img1 from './Photos/1ArvoreCerrado.jpg'
import img1desc from './Photos/1ArvoreCerradoDesc.jpg'
// import img2desc from './Photos/2ArvoreCerradoDesc.jpg'
// import img3desc from './Photos/3EstradaDesc.jpg'
// import img4desc from './Photos/4EstradaDesc.jpg'
// import img5desc from './Photos/5ArvoreDesc.jpg'
// import img6 from './Photos/6ArvoreEscura.jpg'
// import img6desc from './Photos/6ArvoreEscuraDesc.jpg'
// import img7desc from './Photos/7ArvoreDesc.jpg'
// import img8desc from './Photos/8BicicletaDesc.jpg'
// import img9 from './Photos/9Arvore.jpg'
// import img9desc from './Photos/9ArvoreDesc.jpg'
// import img10desc from './Photos/10EstradaDesc.jpg'
// import img11desc from './Photos/11MataDesc.jpg'
// import img12desc from './Photos/12ArvoreDesc.jpg'
// import img13desc from './Photos/13EstradaDesc.jpg'
// import img14desc from './Photos/14LixoDesc.jpg'
// import img15desc from './Photos/15EstradaDesc.jpg'
// import img16desc from './Photos/16BicicletaLongeDesc.jpg'
// import img17 from './Photos/17BicicletaCampo.jpg'
import img17desc from './Photos/17BicicletaCampoDesc.jpg'
// import img172 from './Photos/17BicicletaCampo2.jpg'
import img18 from './Photos/18BicicletaSaida.jpg'
// import img19 from './Photos/19CaminhoReunidos.png'
// import img20 from './Photos/20Explicando.png'
import img20desc from './Photos/20ExplicandoDesc.png'
// import img21desc from './Photos/21ExplicandoDesc.png'
import img22desc from './Photos/22ExplicandoDesc.png'
// import img23 from './Photos/23CaminhoRua.png'
// import img23desc from './Photos/23CaminhoRuaDesc.png'
// import img25desc from './Photos/25EstradaDesc.png'
import img26desc from './Photos/26ArvoreDesc.png'
// import img28desc from './Photos/28ReunidosDesc.png'
import img29desc from './Photos/29PedrasDesc.png'
// import img30 from './Photos/30Arvore.png'
// import img31 from './Photos/31Paisagem.png'
import img31desc from './Photos/31PaisagemDesc.png'
// import img32desc from './Photos/32PaisagemDesc.png'
import img33desc from './Photos/33ExplicandoDesc.png'

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div>
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
                <a href={img18} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="18BicicletaSaida" src={img18} height={350} width="auto" class="fgallery-item" />
                </a>
                <a href={img31desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="31PaisagemDesc" src={img31desc} height={350} width="auto" class="fgallery-item" />
                </a>
                <a href={img17desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="17BicicletaCampoDesc" src={img17desc} height={350} width="auto" class="fgallery-item" />
                </a>


                <a href={img20desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="20ExplicandoDesc" src={img20desc} height={364} width="auto" class="fgallery-item" />
                </a>
                <a href={img33desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="33ExplicandoDesc" src={img33desc} height={364} width="auto" class="fgallery-item" />
                </a>
                <a href={img26desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="26ArvoreDesc" src={img26desc} height={364} width="auto" class="fgallery-item" />
                </a>


                <a href={img22desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="22ExplicandoDesc" src={img22desc} height={280} width="auto" class="fgallery-item" />
                </a>
                <a href={img1desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="1ArvoreCerradoDesc Arvore Lixeira" src={img1desc} height={280} width="auto" class="fgallery-item" />
                </a>
                
                <a href={img29desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="29PedrasDesc" src={img29desc} height={280} width="auto" class="fgallery-item" />
                </a>
            </LightGallery>
        </div>
    );
}

export default Gallery;
