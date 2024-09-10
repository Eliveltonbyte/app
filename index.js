const { select, input, checkbox } = require('@inquirer/prompts')

let metas = []

async function cadastrarMetas(){

    const meta = await input({message: "Digite a meta"})

    if (meta.length == 0){
     console.log("A meta não pode ser vazia")
     return 
    }

    metas.push({value: meta, checked : false})
}

const listarMetas = async () => {

    const respostas = await checkbox(
        {
           message: "Use as setas para mudar de meta, espaço para selecionar e o enter confirmar",
           choices: [...metas] 
        }
    ) 

    if (respostas.length == 0){
        console.log("Nenhuma opção selecionada")
        return
    }

    respostas.forEach((resposta) =>{
        const meta = metas.find((m) =>{
            return m.value == resposta
        })

        meta.checked = true
    })

}

const start = async () => {

    while (true) {

        const opcao = await select({
            message: "Menus >",
            choices: [
                {
                    name: "Cadastrar Metaa",
                    value: "cadastrar"
                },
                {
                    name: "Listar Metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })


        switch (opcao) {
            case "cadastrar":
             await cadastrarMetas()
             console.log(metas)
                break
            case "listar":
                await listarMetas()
                console.log("Vamos listar")
                break
            case "sair":
                return
        }
    }
}

start()