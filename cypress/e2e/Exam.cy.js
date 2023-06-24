describe('Exam', () => {
  let math = {
    pass : '+',
    minus : '-',
    multiply : '*',
    divide : '/',
    number : {
      first_number : '10',
      last_number : '2'
    }
  }
  it('Pass', () => {
    //เปิดหน้าเว็บ Google
    cy.visit('https://www.google.com/')
    //ให้รอหลังจากเปิด Google 2 วินาที
    cy.wait(2000)
    //get id จาก textfield มา เพื่อจะคลิก และพิมพ์คำว่า Calculator จากนั้นให้กด enter เพื่อไปหน้า calculator
    cy.get('#APjFqb').click().type('calculator').type('{enter}')	
    //get class จาก input นำค่าที่อยู่ในตัวแปรมาใช้ คำนวน
    cy.get('div.TIGsTb').click().type(math.number.first_number).type(math.pass)
    //ค่าตัวแปรที่ 2 นำมาบวก และกด enter
    cy.get('div.TIGsTb ').click().type(math.number.last_number).type('{enter}')
    //ให้รอหลังจากคำนวน 5 วินาที
    cy.wait(5000)
  })

  it('Minus', () => {
    cy.visit('https://www.google.com/')
    cy.wait(2000)
    cy.get('#APjFqb').click().type('calculator').type('{enter}')
    cy.get('div.TIGsTb').click().type(math.number.first_number).type(math.minus)
    cy.get('div.TIGsTb').click().type(math.number.last_number).type('{enter}')
    cy.wait(5000)
  })

  it('Multiply', () => {
    cy.visit('https://www.google.com/')
    cy.wait(2000)
    cy.get('#APjFqb').click().type('calculator').type('{enter}')
    cy.get('div.TIGsTb').click().type(math.number.first_number).type(math.multiply)
    cy.get('div.TIGsTb').click().type(math.number.last_number).type('{enter}')
    cy.wait(5000)
  })

  it('Divide', () => {
    cy.visit('https://www.google.com/')
    cy.wait(2000)
    cy.get('#APjFqb').click().type('calculator').type('{enter}')
    cy.get('div.TIGsTb').click().type(math.number.first_number).type(math.divide)
    cy.get('div.TIGsTb').click().type(math.number.last_number).type('{enter}')
    cy.wait(5000)
  })
})