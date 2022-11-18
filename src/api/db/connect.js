const db = require("./pool");

db.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    
    console.log("connected");
})

// db.query("SELECT client_id, jobsite_id, client_name, jobsite_name FROM tb_client_jobsite INNER JOIN tb_client ON tb_client_jobsite.client_id = tb_client.id INNER JOIN tb_jobsite ON tb_client_jobsite.jobsite_id = tb_jobsite.id", (err, res) => {
//     console.table(res.rows);
// })