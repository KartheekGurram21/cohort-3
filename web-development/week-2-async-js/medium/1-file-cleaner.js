// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require("fs").promises;

const fileOperations = async () => {
    try {
        const data = await fs.readFile("hello.txt","utf-8");
        console.log("file read successfully");
        const noSpaces = data.trim().replace(/\s+/g, ' ');
        console.log("white spaces removed");
        await fs.writeFile("hello.txt", noSpaces, "utf-8");
        console.log("file written successfully");
    } catch (err) {
        console.log("error updating file: ",err);
    }
}

fileOperations();