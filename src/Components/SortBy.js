const SortBy = ({setSortBy}) => {

return (
<section>
    <label>Sort By: </label>
    <select name="sortby" id="sortby" defaultValue="choose" onChange={(event) => setSortBy(event.target.value)}>
        <option value="choose" disabled >Choose</option>
        <option value="created_at" >Date Created</option>
        <option value="comment_count" >Comment Count</option>
        <option value="votes">Votes</option>
    </select>
</section>
)
};

export default SortBy