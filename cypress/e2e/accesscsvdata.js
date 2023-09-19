///<reference types="cypress"/>

describe('data driven practice suite',()=>{

    it('first test',()=>{

        cy.fixture('data.csv').then((mydata)=>{

            //let data=mydata.split('\n')
            //const [username, password] = mydata.split(',');
            //cy.log(username+" "+" "+password)
            const rows = mydata.split('\n').map((row) => {
                const [username, password] = row.split(',');
                cy.log(username+" "+" "+password)
              });

        })
    })


    it('Second  test',()=>{

        cy.fixture('data1.json').then((mydata1)=>{

            let data=mydata1
            cy.log("My first name:- "+data.name)
            cy.log("My surname:- "+data.surname)

        })
    })
})