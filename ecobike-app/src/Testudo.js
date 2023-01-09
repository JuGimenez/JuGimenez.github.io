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
import img1 from './Pdf/LocA4.pdf'

function Testudo() {
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
            </LightGallery>
        </div>
    );
}

export default Testudo;