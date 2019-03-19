import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = low(adapter);

// Write Todos as default
db.defaults({ todos: [] }).write();

export default db;
