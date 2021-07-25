exports.up = function (knex) {
    return knex.schema.createTable('monsters', (tbl) =>{
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.integer('level').notNullable();
        tbl.integer('strength')
        tbl.integer('dexterity')
        tbl.integer('constitution')
        tbl.integer('intelligence')
        tbl.integer('wisdom')
        tbl.integer('charisma')
        tbl.specificType('traits', 'text ARRAY');
        tbl.string('perception')
        tbl.string('source')
        tbl.specificType('languages', 'text ARRAY');
        tbl.integer('ac')
        tbl.integer('fortitude')
        tbl.integer('reflex')
        tbl.integer('will')
        tbl.string('save_modifier')
        tbl.specificType('immunities', 'text ARRAY');
        tbl.specificType('resistances', 'text ARRAY');
        tbl.specificType('weakness', 'text ARRAY');
        tbl.string('speed')
        tbl.string('hp_modifier')
        tbl.specificType('actions', 'text ARRAY');
        tbl.specificType('spells', 'text ARRAY');
        tbl.string('spelltype')
        tbl.integer('spell_dc')
        tbl.string('recall')
    })
}

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('monsters')
}