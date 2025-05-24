describe('Битва покемонов', function () {

    it('Покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru');
         cy.get('#k_email').type(cred.login);
         cy.get('#k_password').type(cred.password);
         cy.get('.MuiButton-root').click();
         cy.wait(1000);
         cy.get('.header_card_trainer').click();
         cy.get('.k_mobile > :nth-child(5)').click();
         cy.get('.available > .shop__button').first().click();
         cy.wait(1000);
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111 1111 1111 1111');
         cy.get(':nth-child(1) > .style_1_base_input').type('12/34');
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Yrii Chudov');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.style_1_base_input').type('56456');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно').should('be.visible');
     })
 })