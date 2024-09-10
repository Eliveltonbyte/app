const { select } = require('@inquirer/prompts')


const start = async () => {

    while (true) {

        const opcao = await select({
            message: "Menus >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })


        switch (opcao) {
            case "cadastrar":
                console.log("Vamos cadastrar")
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