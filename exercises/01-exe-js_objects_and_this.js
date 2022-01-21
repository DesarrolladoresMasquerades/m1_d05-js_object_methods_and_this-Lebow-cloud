// TO DO: write the methods getAge, addFriend and getRandomFriend

const chuck = {
    firstName: 'Chuck',
    lastName: 'Norris',
    birthDate: new Date('1940-03-10'),
    friends: [
      'Pablo',
      'Julie',
      'Yanis'
    ],
    displayInfo: function() {
      console.log(
        `My name is ${this.firstName} ${this.lastName} and I have ${this.friends.length} friends.`
      );
    },
    getAge: function(age) {

     return (Math.floor(((new Date() - this.birthDate))/1000/60/60/24/365))
      
      },

    addFriend: function(name) {

      this.friends.push(name)
      
    },
    getRandomFriend: function() {
      // TO DO. return a random friend name from the friends array
    }
  };
  
  chuck.displayInfo();
  
  console.log('getAge', chuck.getAge()); // Should return 81 if you are in 2021
  
  chuck.addFriend('Jorge');
  console.log('getRandomFriend', chuck.getRandomFriend());
  chuck.addFriend('Helena');
  console.log('getRandomFriend', chuck.getRandomFriend());
  chuck.addFriend('Manish');
  console.log('getRandomFriend', chuck.getRandomFriend());
  
  chuck.displayInfo();

  