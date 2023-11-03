'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'products',
            {
                id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
                lot_number: { type: Sequelize.STRING, unique: true },
                name: { type: Sequelize.STRING, allowNull: false },
                price: { type: Sequelize.BIGINT, allowNull: false },
                stock: { type: Sequelize.INTEGER, allowNull: false },
                entry_date: {
                    type: 'TIMESTAMP',
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                    allowNull: false,
                },
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
        await queryInterface.dropTable('products')
    },
}
