'use strict';
import { v4 as uuid } from 'uuid';

/** @type {import('sequelize-cli').Migration} */

async function up (queryInterface, Sequelize) {
  try {
  return await queryInterface.bulkInsert('Users', [{
    id: uuid(),
    Email: "barak062@gmail.com",
    Password: "ab07ee36ba2b5e021c09fca2c8a57c821a4f9165f6e5e7260c120e4216465ad97aa0cced88f3be42f0388bd249199beb588542442e95996658b43c4ec1dc850f",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    id: uuid(),
    Email: "ohadberant@gmail.com",
    Password: "27597249a6ef73fd214f8b7ffead3dd59521461ac2c346fa48ae01802623b0b15773efd5a120b9d075179ffc7df9c69b2feefd747dc1d2b0e4c731722ca3450d",
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
} catch (err) {
  throw err;
}
}

export async function down (queryInterface, Sequelize) {
  return await queryInterface.bulkDelete('Users', null, {});
}


export default async function RunSeed (queryInterface, sequelize) {
  try {
  await up(queryInterface, sequelize);
  } catch (err) {
    console.log(err.message);
  }
}
