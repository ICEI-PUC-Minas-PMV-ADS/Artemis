
# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

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

**Frustrações:** A resistência de mulheres que passaram por uma experiência traumática, por vergonha, medo ou desinformação, pela falta de uma rede de apoio confiável.


 
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

|    EU COMO            |QUERO/DESEJO                         |PARA                         |
|----------------|-------------------------------|-----------------------------|
|Administradora| Ser a única a poder cadastrar os usuários| Garantir um controle sobre o acesso à plataforma e administrar melhor a minha equipe |
|Administradora| Ser a única a ter acesso a todos os relatórios | Ter acesso rápido as informações que influenciam a minha tomada de decisão |
|Volúntario| Ter login e senha| Garantir o acesso ao meu perfil no aplicativo da organização e poder realizar as minha tarefas diárias |
|Volúntario| Poder registrar, alterar, visualizar e deletar os meus compromissos na agenda do meu perfil| Garantir um controle sobre os meus compromissos|
|Volúntario| Emitir relatórios | Garantir que as informações da organização sejam armazenadas e fáceis de serem acessadas |
|Captalizador de recursos| Poder registrar e visualizar os recursos (doações) | Para disponibilizar os recursos o mais rápido possível às vítimas beneficiárias do projeto social |
|Beneficiária do projeto| Ser cadastrada no aplicativo | Para garantir que eu receba o atendimento pela organização |
|Psicológa| Registrar as minhas consultas na agenda e realizar relatórios sobre o estado psicológico das minhas pacientes |  Garantir um controle da minha rotina|

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema deve permitir que todos os usuários tenham perfis | ALTA | 
|RF-02| O sistema deve permitir que todos os usuários cadastrados tenham acesso ao aplicativo pelo login e senha | ALTA |
|RF-03| O sistema deve permitir registrar, alterar, visualizar e deletar os compromissos com horários, datas e descrição nas agendas dentro dos perfis dos usuários| ALTA |
|RF-04| O sistema deve permitir aos usuários emitir relatórios sobre a agenda de compromissos   | ALTA |
|RF-05| O sistema deve permitir registrar e visualizar os recursos (doações) | ALTA |
|RF-06| O sistema deve permitir emitir reletórios sobre os recursos (doações) | ALTA |
|RF-07| O sistema deve permitir que os beneficiários dos projetos (vítimas e seus dependentes) sejam cadastrados| MÉDIO |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O sistema deve ser uma aplicação web responsiva| ALTA | 
|RNF-02| O sistema deve garantir que os dados sobre os beneficiários dos projetos, os colaboradores e o administrador sejam armazenados dentros nas normas da LGPD |    ALTA |
|RNF-03| O sistema deve permitir que apenas o usuário administrador possa cadastrar os colaboradores e beneficiários dos projetos| ALTA | 
|RNF-04| O sistema não deve permitir o acesso dos beneficiários dos projetos à aplicação| ALTA |
|RNF-05| O sistema deve emitir uma mensagem de erro caso a senha e/ou login não estarem corretas| ALTA |
|RNF-06| O sistema deve emitir uma mensagem de "Este usuário já existe" caso o colaborador ou beneficiário do projeto já estarem cadastrados no aplicativo| ALTA | 
|RNF-07| O sistema deve permitir que apenas o captalizador de recursos e o usuário administrador possam registrar, alterar, visualizar e emitir relatórios sobre os recursos (doações)| MÉDIO |
|RNF-08| O sistema deve permitir que apenas o usuário administrador possa ter acesso irrestrito à todos os relatórios| MÉDIO | 
|RNF-09| O sistema deve emitir uma mensagem de confirmação toda vez que os usuários usarem as funcionalidades registrar, alterar e deletar antes de prosseguir com a ação| MÉDIO |
|RNF-10| O sistema deve permitir a opção de emitir os relatórios em PDF| BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

