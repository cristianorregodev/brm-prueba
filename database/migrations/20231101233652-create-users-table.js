'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'users',
            {
                id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
                username: { type: Sequelize.STRING, allowNull: false },
                email: { type: Sequelize.STRING, allowNull: false, unique: true },
                password: Sequelize.STRING,
                role_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'roles', key: 'id' } },

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
        await queryInterface.dropTable('users')
    },
}
