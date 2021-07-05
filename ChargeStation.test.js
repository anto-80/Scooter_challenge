const ChargeStation = require('./ChargeStation')
const Scooter = require('./Scooter')
const User = require('./User')
//****** describe - ChargeStation Objects
describe(' Charge Station', () =>{
   const testChargeStation = new ChargeStation ('Downtown');
   const testUser = new User('Jerome', 'Kingbone', 1923, 'rider@yahoo.com')
   
//****** data types are correct 
    test('ChargeStation is of type string', () =>{
        expect(typeof testChargeStation.location).toBe('string')
    });

    test('does chargStation have any scooters', () =>{
      const testScooter = new Scooter(true, true, 32)
      testChargeStation.addScooter(testScooter)
        expect(testChargeStation.scooterList.length).toBe(1)
    })

    

//****** methods if any******
   test("the chargeStation has method changes the this.locaton property", () => {
    testChargeStation.addChargeStation('West Side')

    expect(testChargeStation.location).toBe('West Side')
  });

   
})
