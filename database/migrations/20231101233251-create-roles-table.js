'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'roles',
            {
                id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
                role_name: { type: Sequelize.STRING, unique: true },
                created_at: {
                    type: 'TIMESTAMP',
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                    allowNull: false,
                },
                updated_at: {
                    type: 'TIMESTAMP',
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                    allowNull: false,
                },
            },
            { timestamps: false }
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('roles')
    },
}
