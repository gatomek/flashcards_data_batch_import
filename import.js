const fs = require('fs')
const readline = require('readline');
const { v4: uuidv4 } = require('uuid');

const rd = readline.createInterface( {
        input: fs.createReadStream( "input.txt")
    }
);

rd.on('line', function( line) {
        const parts = line.split( '|')
        if( parts.length === 3) {
            const uuid = uuidv4()
            const polishFile = parts[0]
            const foreignFile = parts[1]
            const hashtagsFile = parts[2]

            const entry = {
                uuid: uuid,
                polish: polishFile.split( "'").map( e => e.trim()),
                foreign: foreignFile.split( "'").map( e => e.trim()),
                hashtags: hashtagsFile.split( "'").map( e => e.trim())
            }

            const filePath = "output/" + uuid + ".json"
            fs.writeFileSync( filePath, JSON.stringify( entry, null, 4))
            console.log( "saved: " + filePath)
        }
    }
);
