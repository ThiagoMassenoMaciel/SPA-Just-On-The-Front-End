export class Router{
  routes = { }

  add(NameRoute, GoPath){
    this.routes[NameRoute] = GoPath
  }

  route( event ){
    event = event || window.event

    console.log(`event : ${event}`)

    event.preventDefault()

    window.history.pushState({}, "" , event.target.href)

    console.log("Entrou no prevent default com o event :" , event)

    this.handle()
  }

  handle(){
    const ancora = document.querySelector('section')

    const {pathname} = window.location

    console.log(pathname)

    const GoToPath = this.routes[pathname] || this.routes["/error"]

    console.log(GoToPath)

    fetch(GoToPath)
    .then( data => data.text()                 )
    .then( html => ancora.innerHTML = html     )

  }

}