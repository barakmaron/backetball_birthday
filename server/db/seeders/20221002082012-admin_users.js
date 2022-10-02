'use strict';
import { v4 as uuid } from 'uuid';

/** @type {import('sequelize-cli').Migration} */

export async function up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Users', [{
    id: uuid(),
    Email: "barak062@gmail.com",
    Password: "ab07ee36ba2b5e021c09fca2c8a57c821a4f9165f6e5e7260c120e4216465ad97aa0cced88f3be42f0388bd249199beb588542442e95996658b43c4ec1dc850f",
    createdAt: new Date(),
    updatedAt: new Date()
  }])
}

export async function down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, {});
}
