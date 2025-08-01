function toggleMode() {
  const html = document.documentElement // document é a representação do nosso doc em formato de objeto, assim conseguimos acessar a nossa tag HTML através do documentELement

  html.classList.toggle("light") //isso faz o if else abaixo, toggle = troca

  /* if (html.classList.contains("light")) {
      //dentro do html, dentro das listas de classe, contém o Light?

      html.classList.remove("light")
    } else {
      html.classList.add("light")
    } */

    //pegar a tag img
    const img = document.querySelector('#profile img')

    //substituir a imagem
    if (html.classList.contains("light")) { //dentro do html, dentro das listas de classe, contém o Light?
      img.setAttribute('src', 'https://github.com/lelerudeli.png')
      img.setAttribute(
        "alt",
        "Foto de letícia rudeli sorrindo sem mostrar os dentes, de óculos e um brinco de pena, na frente de uma roda gigante"
      )

    } else {
      img.setAttribute("src", "./assets/assets/fotoInsta.png")
      img.setAttribute(
        "alt",
        "Foto de letícia rudeli sorrindo, com um batom vermelho e um vestido verde e branco"
      )
    } 

}
