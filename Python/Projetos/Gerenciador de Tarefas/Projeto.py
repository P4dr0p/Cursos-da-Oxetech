# Gerenciador de Tarefas em Python

tarefas = []

# Menu Principal
def main():
    while True:
        print("\nOpções:")
        print("1. Adicionar Tarefas")
        print("2. Exibir Tarefas")
        print("3. Remover Tarefas")
        print("4. Sair")

        opcao = input("Escolha uma das opção seguintes (1/2/3/4): ")

        if opcao == "1":
            adicionar_tarefa()
        elif opcao == "2":
            exibir_tarefas()
        elif opcao == "3":
            remover_tarefa()
        elif opcao == "4":
            print("Programa Finalizado!")
        else:
            print("Error.")

# Adicionar Tarefas
def adicionar_tarefa():
    descricao = input("Digite a descrição da tarefa: ")
    tarefas.append(descricao)
    print("Tarefa",descricao,"adicionada com sucesso!")

# Exibir lista de tarefas
def exibir_tarefas():
    print("\nLista de Tarefas:")
    for i, tarefa in enumerate(tarefas, start=1):
        print(f"{i}.{tarefa}")

# Remover tarefa da lista
def remover_tarefa():
    exibir_tarefas()
    try:
        indice = int(input("Digite o número da tarefa que deseja remover: ")) - 1
        tarefa_removida = tarefas.pop(indice)
        print(f"Tarefa",tarefa_removida,"removida com sucesso!")
    except (ValueError, IndexError):
        print("Número inválido.")

if __name__ == "__main__":
    main()