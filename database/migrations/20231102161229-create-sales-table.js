'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'sales',
            {
                id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
                user_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'users', key: 'id' } },
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
            {
                timestamps: false,
            }
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('sales')
    },
}
