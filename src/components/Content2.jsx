export default function Content2(){
    return(
        <div>
            <div className="container">
                <h1 className="subtitle">Tecnologias</h1>
                <div className="cards">
                    <div className="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" />
                        <div>
                            <p className="title">JavaScript</p>
                            <p className="text">Linguagem de programação <br />amplamente usada para desenvolvimento web</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML" />
                        <p className="title">HTML</p>
                        <p className="text">Linguagem de marcação usada para estruturar e exibir conteúdo na web. Ele utiliza tags para definir elementos como textos, imagens, links e formulários em páginas da web</p>
                    </div>
                    <div className="card">
                        <img src="https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png" alt="CSS" />
                        <p className="title">CSS</p>
                        <p className="text">Linguagem usada para estilizar elementos HTML, controlando o design, layout e aparência visual de páginas da web, permitindo personalização de cores, fontes, posicionamento e animações</p>
                    </div>
                    <div className="card">
                        <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="Node.js" />
                        <p className="title">Node.js</p>
                        <p className="text">Um ambiente de tempo de execução JavaScript de código aberto, usado para criar aplicativos de servidor escaláveis e em tempo real, permitindo a execução de JavaScript fora dos navegadores</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


