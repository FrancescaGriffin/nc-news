const SortBy = ({setSortBy}) => {

return (
<section>
    <label>Sort By: </label>
    <select name="sortby" id="sortby" defaultValue="choose" onChange={(event) => setSortBy(event.target.value)}>
        <option value="choose" disabled >Choose</option>
        <option value="created_at" >Date Created</option>
        <option value="comment_count" >Comment Count</option>
        <option value="votes">Votes</option>
        <option value="article_id">Article ID</option>
        <option value="title">Title</option>
    </select>
    {/* <label> Order By: </label>
    <select name="orderby" id="orderby" defaultValue="choose" onChange={(event) => setSortBy(event.target.value)}>
        <option value="choose" disabled >Choose</option>
        <option value="desc" >Descending</option>
        <option value="asc" >Ascending</option>

    </select> */}
</section>
)
};

export default SortBy