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
import img2 from './Photos/1ArvoreCerradoDesc.jpg'
import img3 from './Photos/2ArvoreCerradoDesc.jpg'
import img4 from './Photos/3EstradaDesc.jpg'
import img5 from './Photos/4EstradaDesc.jpg'
import img6 from './Photos/5ArvoreDesc.jpg'
import img7 from './Photos/6ArvoreEscura.jpg'
import img8 from './Photos/6ArvoreEscuraDesc.jpg'
import img9 from './Photos/7ArvoreDesc.jpg'
import img10 from './Photos/8BicicletaDesc.jpg'
import img11 from './Photos/9Arvore.jpg'
import img12 from './Photos/9ArvoreDesc.jpg'
import img13 from './Photos/10EstradaDesc.jpg'
import img14 from './Photos/11MataDesc.jpg'
import img15 from './Photos/12ArvoreDesc.jpg'
import img16 from './Photos/13EstradaDesc.jpg'
import img17 from './Photos/14LixoDesc.jpg'
import img18 from './Photos/15EstradaDesc.jpg'
import img19 from './Photos/16BicicletaLongeDesc.jpg'
import img20 from './Photos/17BicicletaCampo.jpg'
import img21 from './Photos/17BicicletaCampoDesc.jpg'
import img22 from './Photos/17BicicletaCampo2.jpg'
import img23 from './Photos/18BicicletaSaida.jpg'

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}
            >
                <a href={img1} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Arvore lixeira" src={img1} height={500} class="fgallery-item" />
                </a>
                <a href={img2} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img2} height={500} class="gallery-item" />
                </a>
                <a href={img3} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img3} height={500} class="gallery-item" />
                </a>
                <a href={img4} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img4} height={500} class="gallery-item" />
                </a>
                <a href={img5} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img5} height={500} class="gallery-item" />
                </a>
                <a href={img6} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img6} height={500} class="gallery-item" />
                </a>
                <a href={img7} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img7} height={500} class="gallery-item" />
                </a>
                <a href={img8} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img8} height={500} class="gallery-item" />
                </a>
                <a href={img9} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img9} height={500} class="gallery-item" />
                </a>
                <a href={img10} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img10} height={500} class="gallery-item" />
                </a>
                <a href={img11} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img11} height={500} class="gallery-item" />
                </a>
                <a href={img12} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img12} height={500} class="gallery-item" />
                </a>
                <a href={img13} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img13} height={500} class="gallery-item" />
                </a>
                <a href={img14} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img14} height={500} class="gallery-item" />
                </a>
                <a href={img15} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img15} height={500} class="gallery-item" />
                </a>
                <a href={img16} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img16} height={500} class="gallery-item" />
                </a>
                <a href={img17} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img17} height={500} class="gallery-item" />
                </a>
                <a href={img18} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img18} height={500} class="gallery-item" />
                </a>
                <a href={img19} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img19} height={500} class="gallery-item" />
                </a>
                <a href={img20} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img20} height={500} class="gallery-item" />
                </a>
                <a href={img21} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img21} height={500} class="gallery-item" />
                </a>
                <a href={img22} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img22} height={500} class="gallery-item" />
                </a>
                <a href={img23} data-sub-html="<h4>Photo by Fotógrafo</h4>">
                    <img alt="Aiai" src={img23} height={500} class="gallery-item" />
                </a>
            </LightGallery>
        </div>
    );
}

export default Gallery;
