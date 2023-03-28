# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto


## Personas

|    Sara Maria Ferreira Alves | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|![SaraMaria1](https://user-images.githubusercontent.com/128602472/227969457-a1ef776a-2f37-4caa-abc8-d5d718c0e14f.jpg)| **Idade:** 54 anos <br> **Ocupação:** Psicóloga|**Aplicativos:**<br><ul>● Instagram <br>● Linkedin <br>● WhatsApp <br></ul>|
|**Motivações:**<br><ul>● Auxiliar psicologicamente vítimas de violência. <br> </ul>|**Frustrações:**<br><ul>● Dificuldade em encontrar quem precise de auxílio <br>.   |**Hobbies/Histórias:**<br><ul>● Dançar <br>● Ler livros <br>● Viajar com a família
 
![Adm](https://mundonegro.inf.br/wp-content/uploads/2019/03/Jorge-Bispo_1588_Corte.jpg)
 
**Nome:** Larissa Maria Machado 
 
**Sexo:** Feminino, Mulher Cis 
 
**Idade:** 47 anos 
 
**Localização:** Belo Horizonte, Minas Gerais 
 
**Ocupação:** Administradora de uma pequena empresa de cosméticos e voluntária na administração de uma ONG de acolhimento a mulheres vítimas de violência doméstica.
 
**Uma frase:** “Toda vez que uma mulher se defende, sem nem perceber que isso é possível, sem qualquer pretensão, ela defende todas as mulheres.”

**História:** Vinda da periferia de Belo Horizonte, filha de uma dona de casa e de um mecânico alcoólatra, Larissa cresceu observando sua mãe passar por todo o tipo de violência possível dentro de seu relacionamento, física, emocional e de gênero. Somente quando adulta seus pais se divorciaram, quando ela pode dar mais suporte para sua mãe, tanto financeiro quanto psicológico. Quando mais velha, ingressou na faculdade de Administração e hoje presta serviço de forma voluntária a uma ONG de acolhimento a mulheres vítimas de violência doméstica. 

**Motivações:** Ajudar mulheres que não tem suporte a saírem de ambientes de violência doméstica, o mais cedo possível, para que não passem anos em sofrimento como sua mãe. 

**Frustrações**: Insuficiência de políticas públicas vindas do estado, para acolher e reintegrar essas mulheres, assim como uma plataforma web que atenda todas as suas necessidades para fazer seu papel na sociedade e que facilite o trabalho dela e de outros profissionais voluntários.





## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir que todos os usuários tenham perfis | ALTA | 
|RF-002| O sistema deve permitir que todos os usuários cadastrados tenham acesso ao aplicativo pelo login e senha | ALTA |
|RF-003| O sistema deve permitir registrar, alterar, visualizar e deletar os compromissos com horários, datas e descrição nas agendas dentro dos perfis dos usuários| Alta |
|RF-004| O sistema deve permitir aos usuários emitir relatórios sobre a agenda de compromissos   | ALTA |
|RF-005| O sistema deve permitir que os beneficiários dos projetos (vítimas e seus dependentes) sejam cadastrados sem autorizar à eles o acesso ao sistema | ALTA |
|RF-006| O sistema deve permitir emitir reletórios sobre os recursos (doações) | ALTA |
|RF-007| O sistema deve permitir que apenas o captalizador de recursos e o administrador possam registrar e visualizar os recursos (doações) | ALTA |
|RF-008| O sistema deve permitir que apenas o usuário administrador possa cadastrar os usuários e ter acesso irrestrito à todos os relatórios| ALTA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
