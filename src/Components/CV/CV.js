import "./CV.css";
import CValex from "../../asset/img/cv-alex.jpg"
// On a besoin de ces 2 lignes pour render le .PDF
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



function CV() {

    return (
        <div>
            {/* <div>
                <Document file={CVpdf} >

                    <Page pageNumber={1} />
                </Document>

            </div> */}
            <div className='cv-container'>
                <img src={CValex} alt="CV alex" className='cv' />
                <a href="https://drive.google.com/file/d/1ewYRavyeQoaVFf62dfIw5sRSWk4XhbIR/view?usp=share_link" target="_blank" rel="noreferrer">
                    <button type="submit" className='contact-button'> Télécharger le CV</button>
                </a>
            </div>
        </div>
    );
}

export default CV;