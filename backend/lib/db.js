import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';

const adapter = new FileAsync('db.json');
const db = low(adapter);

export default db;
