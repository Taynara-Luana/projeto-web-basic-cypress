describe("#Desenvolvimento dos testes automatizados de front na tela de login.", () => {

    beforeEach(() => {
        cy.visit('./src/pages/index.html');
    })

    context("Validações de acesso do usuário na plataforma.", () => {
        it("CE01: Quando realizar o processo de login e senha, passando o usuário e senha válidos, então uma mensagem de alerta será apresentada.", () => {
            cy.get('#login').first().type('admin');
            cy.get("#senha").first().type('admin');
            cy.get('#btnLogin').first().click();
            cy.on('window:alert', (str) => {
                expect(str).to.equal(`Login realizado com sucesso!`)
            })
        })

        it("CE02: Quando realizar o processo de login e senha, passando o usuário e senha inválidos, então uma mensagem de alerta será apresentada.", () => {
            cy.get('#login').first().type('123');
            cy.get("#senha").first().type('123');
            cy.get('#btnLogin').first().click();
            cy.on('window:alert', (str) => {
                expect(str).to.equal(`Usuário/senha inválidos.`)
            })
        })

        it("CE03: Quando realizar o processo de login e senha, passando o usuário e senha vazios, então uma mensagem de alerta será apresentada.", () => {
            cy.get('#btnLogin').first().click();
            cy.on('window:alert', (str) => {
                expect(str).to.equal(`Usuário/senha inválidos.`)
            })
        })

        it("CE04: Quando realizar o processo de login e senha, passando o usuário valido e senha inválida, então uma mensagem de alerta será apresentada.", () => {
            cy.get('#login').first().type('admin');
            cy.get("#senha").first().type('123');
            cy.get('#btnLogin').first().click();
            cy.on('window:alert', (str) => {
                expect(str).to.equal(`Usuário/senha inválidos.`)
            })
        })

        it("CE05: Quando realizar o processo de login e senha, passando o usuário inválido e senha válida, então uma mensagem de alerta será apresentada.", () => {
            cy.get('#login').first().type('123');
            cy.get("#senha").first().type('admin');
            cy.get('#btnLogin').first().click();
            cy.on('window:alert', (str) => {
                expect(str).to.equal(`Usuário/senha inválidos.`)
            })
        })
    })
})