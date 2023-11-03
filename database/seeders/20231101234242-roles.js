'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('roles', [
            {
                role_name: 'admin',
            },
            {
                role_name: 'client',
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('roles', null, {})
    },
}
