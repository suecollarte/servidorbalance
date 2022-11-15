 export const config ={
    db:{
        host:'localhost',
        port: 27017,
        dbName: 'ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        }

    }

}
