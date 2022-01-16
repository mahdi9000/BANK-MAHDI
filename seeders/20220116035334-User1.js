'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
    
   await queryInterface.BulkInsert('Nasabahs', [{
     name: "Mahdi",
     address: "Jakarta",
     birthPlace: "Ende",
     birthDate: 2021-8-8,
     ktp: "341243532525",
     phone: "08712324",
     createdAt: new Date(),
     updatedAt: new Date()
   }]);
  },

   down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete("Nasabahs", null,{});
  }
};
