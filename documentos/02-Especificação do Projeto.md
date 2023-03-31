
# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A partir da descrição do público-alvo do Documento de Contexto foi feito um aperfeiçoamento do ponto de vista dos usuários da aplicação através dos Perfis das Personas, Histórias de Usuários, Levantamento de Requisitos e Restrições. O resultado esclarece quais são as necessidades dos usuários e os motivos nos quais elas são tão importantes.

## Personas

![SaraMaria2](https://user-images.githubusercontent.com/128602472/228576983-a43d0673-e65d-4e8c-b73f-c9982aba701f.jpg)

**Nome:** Sara Maria Ferreira Alves 

**Sexo:** Feminino, Mulher Cis

**Idade:** 54 anos

**Localização:** São Paulo / SP

**Ocupação:**  Psicóloga social, atuando no aspecto profissional das interações humanas.

**Uma frase:** “Novas folhas, novas flores, na infinita bênção do recomeço.”

**História:** Paulista de família humilde, casada e mãe de dois filhos. Até então dedicada a auxiliar no desenvolvimento de pessoas, dentro do contexto profissional. Compilada a trazer seu conhecimento e experiências para ajudar mulheres, após sofrer o trauma de perder uma amiga vítima de violência.

**Motivações:** Auxiliar mulheres com orientações profissionais, para que não se sujeitem a quaisquer tipo de violência, ou orientando vítimas para que tenham um recomeço.

**Frustrações:** A falta de uma aplicação para direcionamento e organização no atendimento as vítimas.


 ![Persona 22](https://user-images.githubusercontent.com/128602472/229167298-d983987c-bd1d-430a-8f54-b09d832ee35f.jpg)

 
**Nome:** Larissa Maria Machado 
 
**Sexo:** Feminino, Mulher Cis 
 
**Idade:** 47 anos 
 
**Localização:** Belo Horizonte, Minas Gerais 
 
**Ocupação:** Administradora de uma pequena empresa de cosméticos e voluntária na administração de uma ONG de acolhimento a mulheres vítimas de violência doméstica.
 
**Uma frase:** “Toda vez que uma mulher se defende, sem nem perceber que isso é possível, sem qualquer pretensão, ela defende todas as mulheres.”

**História:** Vinda da periferia de Belo Horizonte, filha de uma dona de casa e de um mecânico alcoólatra, Larissa cresceu observando sua mãe passar por todo o tipo de violência possível dentro de seu relacionamento, física, emocional e de gênero. Somente quando adulta seus pais se divorciaram, quando ela pode dar mais suporte para sua mãe, tanto financeiro quanto psicológico. Quando mais velha, ingressou na faculdade de Administração e hoje presta serviço de forma voluntária a uma ONG de acolhimento a mulheres vítimas de violência doméstica. 

**Motivações:** Ajudar mulheres que não tem suporte a saírem de ambientes de violência doméstica, o mais cedo possível, para que não passem anos em sofrimento como sua mãe. 

**Frustrações**: Insuficiência de políticas públicas vindas do estado, para acolher e reintegrar essas mulheres, assim como  baixa punição para os agressores.

![Persona3](https://user-images.githubusercontent.com/128602472/229170975-21a3019a-cee1-42d2-a05d-19b247d99232.jpg)

**Nome:** Rafaela Borges Silveira

**Sexo:** Feminino, Mulher Cis

**Idade:** 31 anos

**Localização:** Belo Horizonte, Minas Gerais

**Ocupação:** Assistente social da prefeitura de Belo Horizonte e voluntária como captalizadora de recursos em uma ONG de suporte a mulheres que sofreram violência doméstica.

**Uma frase:** ”Eu não estou aceitando as coisas que eu não posso mudar, estou mudando as coisas que eu não posso aceitar”.

**História:** Vítima de violência doméstica aos de 17 anos, por um ex-namorado, Rafaela achou que sua situação não tinha solução, até ser resgatada por uma assistente social. A partir disso, deu continuidade a seus estudos e decidiu retribuir o suporte que lhe foi prestado. Atualmente casada, é mãe de uma menina.



## Histórias de Usuários

|    EU COMO            |QUERO/DESEJO                         |PARA                         |
|----------------|-------------------------------|-----------------------------|
|Administradora| Ter uma gestão segura dos voluntários e beneficiários do projeto| Garantir a privadidade dos colaboradores e das vítimas |
|Administradora| Ter acesso às informações de todos os setores do projeto e poder gerenciar as minhas tarefas diárias| Poder a administrar a minha rotina e ter uma tomada de decisão mais precisa e rápida |
|Volúntario| Poder gerenciar as minhas tarefas diárias e meus compromissos| Garantir um controle da minha rotina e das pessoas que eu atendo |
|Captalizadora de recursos| Ter um controle das informações sobres os recursos (doações) | Para disponibilizar os recursos o mais rápido possível às vítimas beneficiárias do projeto social |
|Psicológa| Ter uma gestão das minhas atividades diárias e organizar as consultas das minhas pacientes | Garantir um controle da minha rotina e privacidade das pessoas atendidas por mim|

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema deve permitir que todos os usuários tenham perfis | ALTA | 
|RF-02| O sistema deve permitir registrar, alterar, visualizar e deletar os compromissos com horários, datas e descrição nas agendas dentro dos perfis dos usuários| ALTA |
|RF-03| O sistema deve permitir aos usuários emitir relatórios sobre a agenda de compromissos   | ALTA |
|RF-04| O sistema deve permitir registrar e visualizar os recursos (doações) | ALTA |
|RF-05| O sistema deve permitir emitir reletórios sobre os recursos (doações) | ALTA |
|RF-06| O sistema deve permitir que os beneficiários dos projetos (vítimas e seus dependentes) sejam cadastrados| MÉDIO |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O sistema deve ser uma aplicação web responsiva| ALTA | 
|RNF-02| O sistema deve garantir que os dados sobre os beneficiários dos projetos, os colaboradores e o administrador sejam armazenados dentros nas normas da LGPD |    ALTA |
|RFN-03| O sistema deve permitir que todos os usuários cadastrados tenham acesso ao aplicativo pelo login e senha | ALTA |
|RNF-04| O sistema deve permitir que apenas o usuário administrador possa cadastrar os colaboradores e beneficiários dos projetos| ALTA |
|RNF-05| O sistema não deve permitir o acesso dos beneficiários dos projetos à aplicação| ALTA |
|RNF-06| O sistema deve permitir que apenas o captalizador de recursos e o usuário administrador possam registrar, alterar, visualizar e emitir relatórios sobre os recursos (doações)| MÉDIO |
|RNF-07| O sistema deve permitir que apenas o usuário administrador possa ter acesso irrestrito à todos os relatórios| MÉDIO | 
|RNF-08| O sistema deve permitir a opção de emitir os relatórios em PDF| BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O prjeto deve ser entregue pelo Github                |
