const { getClientSitesQuery, getClientSiteQuery, deleteClientSiteQuery, createClientSiteQuery, updateClientSiteDisplayNameQuery  } = require('../../db/config.js');

//get all client sites
async function allClientSites (request, response) {
    res = await getClientSitesQuery();
    console.log('in controller-get Client Sites',res);
    response.send(res);

}
//get client site by id
async function getClientSiteById (request, response) {
    res = await getClientSiteQuery(request.params.id);
    console.log('in controller-get Client Site',res);
    response.send(res);
}
//delete client site by id
async function deleteClientSiteById (request, response) {
    res = await deleteClientSiteQuery(request.params.id);
    console.log('in controller-delete Client Site',res);
    response.send(res);
}
//create client site
async function createClientSite (request, response) {
    const {site, display_name} = request.body;
    try {
        res = await createClientSiteQuery(site, display_name);
    console.log('in controller-create Client Site',res);
    response.send(res);
    }
    catch (err) {
        console.log('error in create client site', err)
        response.send(err)
    }
    
}
//update client site display name
async function updateClientSiteDisplayName (request, response) {
    const {site, display_name} = request.body;
    res = await updateClientSiteDisplayNameQuery(site, display_name);
    console.log('in controller-update Client Site',res);
    response.send(res);
}
module.exports = { allClientSites, getClientSiteById, deleteClientSiteById, createClientSite, updateClientSiteDisplayName };