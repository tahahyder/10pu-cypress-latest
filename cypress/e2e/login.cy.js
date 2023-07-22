/// <reference types="cypress" />

describe('Test Login Functionality', () => {

    beforeEach(()=>{
  
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    
    })
    
    //positive
    
    it('user should be able to log in', () => {

        cy.wait(3000)
        cy.login('admin','admin123')
    
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard') //assertion
    
        cy.contains('Invalid credentials').should('not.exist')
    
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    
        cy.wait(3000)
    
        cy.logout()
      })
    
     //negative
    
      it('user should not be able to log in', () => {
    
        cy.wait(3000)
        cy.login('admin','admin')
        cy.contains('Invalid credentials').should('exist')
    
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      })
  
  })
  