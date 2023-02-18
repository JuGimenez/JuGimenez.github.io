import '../CContainer.css'

function Footer() {
  return (
    <div>
      <footer class="footer-foda">
        <div style={{marginLeft:"1%"}}>
          <span>&copy; 2023 Rondejuí Labs: </span>
          <a href="http://lattes.cnpq.br/7378793147080871" target={"_blank"} rel={"noreferrer noopener"}>
            GTK
          </a>
          <span> & </span>
          <a href="https://www.linkedin.com/in/lucca-saraiva-fernandes/" target={"_blank"} rel={"noreferrer noopener"}>
            LSF
          </a>
        </div>
        <div style={{marginRight:"1%"}}>
          <span>Powered by </span>
          <a href="https://pt-br.reactjs.org/docs/getting-started.html" target={"_blank"} rel={"noreferrer noopener"}>React</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
