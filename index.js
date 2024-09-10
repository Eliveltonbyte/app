const { select, input } = require('@inquirer/prompts')

let metas = []

async function cadastrarMetas(){

    const meta = await input({message: "Digite a meta"})

    if (meta.length == 0){
     console.log("A meta não pode ser vazia")
     return 
    }

    metas.push({value: meta, checked : false})
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
                console.log("Vamos listar")
                break
            case "sair":
                return
        }
    }
}

start()