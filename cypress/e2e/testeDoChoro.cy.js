describe('Funcionalidade Página de Produtos', () => {

  // Pré-requisito
  beforeEach( () => {
    // Ir até á página
    cy.visit('https://www.saucedemo.com/v1/index.html')

    cy.wait(2000)

    // Encontrar o Username e digitar uma credencial válida
    cy.get("[placeholder='Username']").type("standard_user")

    cy.wait(2000)

    // Encontrar a Password e digitar uma credencial válida
    cy.get("[placeholder='Password'").type("secret_sauce")

    cy.wait(2000)

    // Encontrar o botão Login e clicar
    cy.get('.btn_action').click()

    cy.wait(2000)

    // Assertion: Validar que chegámos à página de produtos
    //cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html")
  })
/*
  it('Botão ADD TO CART', () => {

    // Clicar no botão ADD TO CART
    cy.xpath("//div[@class='inventory_list']//div[1]//div[3]//button[1]").click()
    cy.wait(2000)
    cy.xpath('//*[@id="inventory_container"]/div/div[2]/div[3]/button').click()
    cy.wait(2000)
    cy.xpath("//body//div[@id='page_wrapper']//div[@id='inventory_container']//div[@id='inventory_container']//div[2]//div[3]//button[1]").click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
    cy.wait(2000)
    cy.xpath("//div[6]//div[3]//button[1]").click()

    // Assertion: Validar se os itens foram realmente para o carrinho
    cy.get('.fa-layers-counter').first()
    .should('exist')
    .and('be.visible')
    .and('contain','4');
    
  })
*/
  it('Filtro Price Low to High', () => {
    // Assertion: Validar que chegámos à página de produtos (Equal)
    cy.url().should("include", "inventory")
  })
    
})

/*
describe('Funcionalidade de login', () => {

    // Pré-requisito
    	beforeEach( () => {
        // Ir até á pagina
        cy.visit('https://www.saucedemo.com/v1/index.html')
      })

      it('Login com sucesso', () => {
        // Encontrar o Username e digitar uma credencial válida
        cy.get("[placeholder='Username']").type("standard_user")

        // Encontrar a Password e digitar uma credencial válida
        cy.get("[placeholder='Password'").type("secret_sauce")

        // Encontrar o botão Login e clicar
        cy.get('.btn_action').click()
      })
})
*/
