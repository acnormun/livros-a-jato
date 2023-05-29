export function List(){
    type TList = {
        books: any
    }

    const list =  fetch("https://raw.githubusercontent.com/acnormun/livros-a-jato/main/api/bookList.json").then((r)=> r.json.toString)

    return(
        <div>
            LISTA AQUI
        </div>
    )
}