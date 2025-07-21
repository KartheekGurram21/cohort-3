let bookmarks = []; // in memory space
let id = 0;
export async function addBookmark(req,res,next){
// write here
    try {
        id++;
        const { url, category } = req.body;
        bookmarks.push({
            id: id,
            url: url,
            category: category
        });
        res.status(200).json({
            id: id,
            url: url,
            category: category
        });
    } catch(err) {
        console.log(err);
    }
}

export async function deleteBookmark(req, res, next) {
    try {
        const id = req.params.id;

        const index = bookmarks.findIndex(bookmark => String(bookmark.id) === String(id));

        if (index === -1) {
            return res.status(404).json({ message: "Todo not found" });
        }

        // Remove the item without using filter
        bookmarks = [...bookmarks.slice(0, index), ...bookmarks.slice(index + 1)];

        res.json({ message: "bookmark deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}


export async function getAllBookmarks(req,res,next){
// write here
    try {
        res.status(200).json({
            bookmarks: bookmarks
        });
    } catch(err) {
        console.log(err);
    }
}