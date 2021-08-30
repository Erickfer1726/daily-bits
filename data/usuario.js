function comprobarUsuario() {
    const usuario = window.localStorage.getItem('usuario')
    if (!usuario) {
      window.location.href = '../iniciar sesion/iniciar.html'
    }
  }
  comprobarUsuario()
  
  function contarTiempo() {
    let usuario = window.localStorage.getItem('usuario')
    usuario = JSON.parse(usuario)
    usuario.estadisticas.tiempo++
    window.localStorage.setItem('usuario', JSON.stringify(usuario))
    setTimeout(contarTiempo, 1000)
  }