require( './styles/main.scss' )

const Elm = require( '../elm/Main.elm' )
const mountNode = document.getElementById('main')

Elm.Main.embed(mountNode)
