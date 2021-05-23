import "reflect-metadata";
import {ApolloServer} from "apollo-server";
import mongoose from "mongoose"; 
import {buildSchema} from "type-graphql";
import { GraphQLSchema } from "graphql";
import { WilderResolver } from "./controller/WilderResolver";


export async function startServer(config:any):Promise<ApolloServer>{

    // on décrit un schéma graphQl à l'aide de la foncton buildSchema
    const schema:GraphQLSchema = await buildSchema({resolvers:[WilderResolver]});
    // on démarre notre apollo server
    const server:ApolloServer = new ApolloServer({schema});
    
    if( config.autoListen ){
        // sur le port défini
        await server.listen(config.apolloPort);

        if(config.verbose)
            console.log("Apollo server started at: http://localhost:"+config.apolloPort+"/");
    }
    // et on démarre mongoose
    await mongoose.connect(config.uri, config.options);;

    if(config.verbose)
        console.log("mongodb started at uri: ", config.uri); 

    return server;
}








