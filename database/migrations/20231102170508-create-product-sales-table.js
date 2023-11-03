'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'product_sales',
            {
                id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
                sale_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'sales', key: 'id' } },
                product_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'products', key: 'id' } },
                quantity: { type: Sequelize.INTEGER, allowNull: false },
                price: { type: Sequelize.BIGINT, allowNull: false },
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
            { timestamps: false, underscored: true }
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('product_sales')
    },
}
