const User = require('./User')

describe('User', () =>{
   const testUser = new User('Tony','awards',2018,'coder77@gmail.com')
   test('user has a first name ', () =>{
       expect(testUser.firstName).toBe('Tony')
   })

   test('user has a last name ', () =>{
    expect(testUser.lastName).toBe('awards')
   })

   test('user has a email ', () =>{
    expect(testUser.email).toBe('coder77@gmail.com')
   })

   test('make sure that the email is in the correct format', () => {
    const email1 = testUser.email // 'coder77@gmail.com'
    

    const indexOfAt = email1.split('').indexOf('@') 
    
    expect(email1.slice(indexOfAt)).toBe('@gmail.com')
  })

   test('user has a dob ', () =>{
    expect(testUser.dob).toStrictEqual(2018)
   })
   
})
