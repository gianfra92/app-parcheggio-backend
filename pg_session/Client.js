const Client = require('pg').Client;

const connectionString = "postgres://ahnsnpjrrrtdtu:bdc54b3fa663d36a11ab13444b8e3e2fbfcc814fedf39866316d23777f9de036@ec2-54-195-252-243.eu-west-1.compute.amazonaws.com:5432/d2edl0tmht165d";

const client = new Client({connectionString});

client.connect();

module.exports = client;

