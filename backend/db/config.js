const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "alertwatch",
  password: "",
  port: 5432,
};

const pool = new Pool(credentials);
const client = new Client(credentials);

//User Queries -------------------------------------------------------
const getUsersQuery = async () => {
    // get all user
    let res = await pool.query("SELECT * FROM users ORDER BY username");
    return res.rows;
  }
const getUserQuery = async (username) => {
    // get a user
    let res = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    return res.rows;
    }
const deleteUserQuery = async (username) => {
    // delete a user
    let res = await pool.query("DELETE FROM users WHERE username = $1", [username]);
    return res.rows;
    }
const createUserQuery = async (username, password, display_name, privilege) => {
    // create a user
    let res = await pool.query("INSERT INTO users (username, password, display_name, privilege) VALUES ($1, $2, $3, $4) RETURNING *", [username, password, display_name, privilege]);
    return res.rows;
    }
const updatePasswordQuery = async (username, password) => {
    // update a user's password
    let res = await pool.query("UPDATE users SET password = $1 WHERE username = $2 RETURNING *", [password, username]);
    return res.rows;
    }
const updateUserQuery = async (username, display_name, privilege) => {
    // update a user's display_name and privilege
    let res = await pool.query("UPDATE users SET display_name = $1, privilege = $2 WHERE username = $3 RETURNING *", [display_name, privilege, username]);
    return res.rows;
    }


// client_sites queries -------------------------------------------------------
const getClientSitesQuery = async () => {
    // get all client_sites
    let res = await pool.query("SELECT * FROM client_sites ORDER BY site");
    return res.rows;
    }
const getClientSiteQuery = async (site) => {
    // get a client_site
    let res = await pool.query("SELECT * FROM client_sites WHERE site = $1", [site]);
    return res.rows;
    }
const deleteClientSiteQuery = async (site) => {
    // delete a client_site
    let res = await pool.query("DELETE FROM client_sites WHERE site = $1", [site]);
    return res.rows;
    }
const createClientSiteQuery = async (site, display_name) => {
    // create a client_site
    let res = await pool.query("INSERT INTO client_sites (site, display_name) VALUES ($1, $2) RETURNING *", [site, display_name]);
    return res.rows;
    }
const updateClientSiteDisplayNameQuery = async (site, display_name) => {
    // update a client_site's display_name
    let res = await pool.query("UPDATE client_sites SET display_name = $1 WHERE site = $2 RETURNING *", [display_name, site]);
    return res.rows;
    }


    // user_sites queries/ join queries -------------------------------------------------------


const getClientSitesByUsernameQuery = async (username) => {
        // get all sites by username
    let res = await pool.query("SELECT U.site, U.display_name as site_display_name, UT.user_username \
                            FROM user_sites as UT JOIN client_sites as U ON UT.client_site = U.site \
                            WHERE UT.user_username = $1 ORDER BY UT.user_username", [username]);

                                                                              
                                    
    return res.rows;
    }

const getUsersByClientSiteQuery = async (site) => {
    //get all users by site 
    let res = await pool.query("SELECT U.username, U.display_name as user_display_name, UT.client_site \
                            FROM user_sites as UT JOIN users as U ON UT.user_username = U.username \
                            WHERE UT.client_site = $1 ORDER BY U.username", [site]);
    return res.rows;

    }

    
const createUserSiteQuery = async (username, site) => {
    //add a user/site to user_sites table
    let res = await pool.query("INSERT INTO user_sites (user_username, client_site) VALUES ($1, $2) RETURNING *", [username, site]);
    return res.rows;
    }
   
const deleteUserSiteQuery = async (username, site) => {
     //remove a user/site from user_sites table
    let res = await pool.query("DELETE FROM user_sites WHERE user_username = $1 AND client_site = $2", [username, site]);
    return res.rows;
    }








module.exports = {getClientSitesByUsernameQuery ,getUsersQuery, getUserQuery, deleteUserQuery, createUserQuery, updatePasswordQuery, updateUserQuery, getClientSitesQuery, getClientSiteQuery, deleteClientSiteQuery, createClientSiteQuery, updateClientSiteDisplayNameQuery, getUsersByClientSiteQuery,createUserSiteQuery,deleteUserSiteQuery };