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
import img1 from './Photos/1ArvoreCerrado.jpg'
import img1desc from './Photos/1ArvoreCerradoDesc.jpg'
import img2desc from './Photos/2ArvoreCerradoDesc.jpg'
import img3desc from './Photos/3EstradaDesc.jpg'
import img4desc from './Photos/4EstradaDesc.jpg'
import img5desc from './Photos/5ArvoreDesc.jpg'
import img6 from './Photos/6ArvoreEscura.jpg'
import img6desc from './Photos/6ArvoreEscuraDesc.jpg'
import img7desc from './Photos/7ArvoreDesc.jpg'
import img8desc from './Photos/8BicicletaDesc.jpg'
import img9 from './Photos/9Arvore.jpg'
import img9desc from './Photos/9ArvoreDesc.jpg'
import img10desc from './Photos/10EstradaDesc.jpg'
import img11desc from './Photos/11MataDesc.jpg'
import img12desc from './Photos/12ArvoreDesc.jpg'
import img13desc from './Photos/13EstradaDesc.jpg'
import img14desc from './Photos/14LixoDesc.jpg'
import img15desc from './Photos/15EstradaDesc.jpg'
import img16desc from './Photos/16BicicletaLongeDesc.jpg'
import img17 from './Photos/17BicicletaCampo.jpg'
import img17desc from './Photos/17BicicletaCampoDesc.jpg'
import img172 from './Photos/17BicicletaCampo2.jpg'
import img18 from './Photos/18BicicletaSaida.jpg'
import img19 from './Photos/19CaminhoReunidos.png'
import img20 from './Photos/20Explicando.png'
import img20desc from './Photos/20ExplicandoDesc.png'
import img21desc from './Photos/21ExplicandoDesc.png'
import img22desc from './Photos/22ExplicandoDesc.png'
import img23 from './Photos/23CaminhoRua.png'
import img23desc from './Photos/23CaminhoRuaDesc.png'
import img25desc from './Photos/25EstradaDesc.png'
import img26desc from './Photos/26ArvoreDesc.png'
import img28desc from './Photos/28ReunidosDesc.png'
import img29desc from './Photos/29PedrasDesc.png'
import img30 from './Photos/30Arvore.png'
import img31 from './Photos/31Paisagem.png'
import img31desc from './Photos/31PaisagemDesc.png'
import img32desc from './Photos/32PaisagemDesc.png'
import img33desc from './Photos/33ExplicandoDesc.png'

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div>
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
                <a href={img18} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="18BicicletaSaida" src={img18} height={330} width="auto" class="fgallery-item" />
                </a>
                <a href={img23} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="23CaminhoRua" src={img23} height={330} width="auto" class="fgallery-item" />
                </a>
                <a href={img23desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="23CaminhoRuaDesc" src={img23desc} height={330} width="auto" class="fgallery-item" />
                </a>
                <a href={img10desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="10EstradaDesc" src={img10desc} height={330} width="auto" class="fgallery-item" />
                </a>


                <a href={img19} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="19CaminhoReunidos" src={img19} height={330} width="auto" class="fgallery-item" />
                </a>
                <a href={img17} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="17BicicletaCampo" src={img17} height={330} width="auto" class="fgallery-item" />
                </a>
                <a href={img172} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="17BicicletaCampo2" src={img172} height={330} width="auto" class="fgallery-item" />
                </a>
                <a href={img17desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="17BicicletaCampoDesc" src={img17desc} height={330} width="auto" class="fgallery-item" />
                </a>


                <a href={img31} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="31Paisagem" src={img31} height={285} width="auto" class="fgallery-item" />
                </a>
                <a href={img31desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="31PaisagemDesc" src={img31desc} height={285} width="auto" class="fgallery-item" />
                </a>
                <a href={img4desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="4EstradaDesc" src={img4desc} height={285} width="auto" class="fgallery-item" />
                </a>
                <a href={img1} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="1ArvoreCerrado" src={img1} height={285} width="auto" class="fgallery-item" />
                </a>


                <a href={img1desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="1ArvoreCerradoDesc" src={img1desc} height={294} width="auto" class="fgallery-item" />
                </a>
                <a href={img5desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="5ArvoreDesc" src={img5desc} height={294} width="auto" class="fgallery-item" />
                </a>
                <a href={img3desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="3EstradaDesc" src={img3desc} height={294} width="auto" class="fgallery-item" />
                </a>
                <a href={img32desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="32PaisagemDesc" src={img32desc} height={294} width="auto" class="fgallery-item" />
                </a>


                <a href={img13desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="13EstradaDesc" src={img13desc} height={310} width="auto" class="fgallery-item" />
                </a>
                <a href={img2desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="2ArvoreCerradoDesc" src={img2desc} height={310} width="auto" class="fgallery-item" />
                </a>
                <a href={img7desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="7ArvoreDesc" src={img7desc} height={310} width="auto" class="fgallery-item" />
                </a>
                <a href={img6} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="6ArvoreEscura" src={img6} height={310} width="auto" class="fgallery-item" />
                </a>
                <a href={img6desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="6ArvoreEscuraDesc" src={img6desc} height={310} width="auto" class="fgallery-item" />
                </a>


                <a href={img20} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="20Explicando" src={img20} height={310} width="auto" class="fgallery-item" />
                </a>
                <a href={img20desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="20ExplicandoDesc" src={img20desc} height={310} width="auto" class="fgallery-item" />
                </a>
                <a href={img11desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="11MataDesc" src={img11desc} height={310} width="auto" class="fgallery-item" />
                </a>
                <a href={img30} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="30Arvore" src={img30} height={310} width="auto" class="fgallery-item" />
                </a>
                <a href={img12desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="12ArvoreDesc" src={img12desc} height={310} width="auto" class="fgallery-item" />
                </a>


                <a href={img33desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="33ExplicandoDesc" src={img33desc} height={337} width="auto" class="fgallery-item" />
                </a>
                <a href={img22desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="22ExplicandoDesc" src={img22desc} height={337} width="auto" class="fgallery-item" />
                </a>


                <a href={img21desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="21ExplicandoDesc" src={img21desc} height={289} width="auto" class="fgallery-item" />
                </a>
                <a href={img28desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="28ReunidosDesc" src={img28desc} height={289} width="auto" class="fgallery-item" />
                </a>
                <a href={img29desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="29PedrasDesc" src={img29desc} height={289} width="auto" class="fgallery-item" />
                </a>


                <a href={img9} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="9Arvore" src={img9} height={386} width="auto" class="fgallery-item" />
                </a>
                <a href={img9desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="9ArvoreDesc" src={img9desc} height={386} width="auto" class="fgallery-item" />
                </a>
                <a href={img14desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="14LixoDesc" src={img14desc} height={386} width="auto" class="fgallery-item" />
                </a>
                <a href={img15desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="15EstradaDesc" src={img15desc} height={386} width="auto" class="fgallery-item" />
                </a>


                <a href={img26desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="26ArvoreDesc" src={img26desc} height={386} width="auto" class="fgallery-item" />
                </a>
                <a href={img16desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="16BicicletaLongeDesc" src={img16desc} height={386} width="auto" class="fgallery-item" />
                </a>
                <a href={img8desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="8BicicletaDesc" src={img8desc} height={386} width="auto" class="fgallery-item" />
                </a>
                <a href={img25desc} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="25EstradaDesc" src={img25desc} height={386} width="auto" class="fgallery-item" />
                </a>
            </LightGallery>
        </div>
    );
}

export default Gallery;
