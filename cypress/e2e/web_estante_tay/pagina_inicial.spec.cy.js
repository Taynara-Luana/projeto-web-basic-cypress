
describe('#TESTES AUTOMATIZADOS NA PÁGINA PRINCIPAL DA MINHA ESTANTE PESSOAL TL.', () => {
    it('CE01: Visitando a página principal da página.', () => {
      cy.visit('./src/pages/index.html')
    })

    it("CE02: Verificando o título da aplicação.", ()=>{
        cy.title().should('be.equal', '')
    })
  })