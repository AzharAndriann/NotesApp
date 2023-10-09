function Sidebar ({notes, onAddNote, onDeleteNote, onClearNote, activeNote, setActiveNote }) {

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);


return <div className="app-sidebar">
    <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button className="add" onClick={onAddNote}>Add</button>
        <button className="clear" onClick={onClearNote}>Clear</button>
    </div>
    <div className="app-sidebar-notes">

        {sortedNotes.map((notes) => (
            
        <div className={`app-sidebar-note ${notes.id === activeNote && "active"}`} onClick={() => setActiveNote(notes.id)}>
            <div className="sidebar-note-title">
                <strong>{notes.title}</strong>
                <button onClick={ () => onDeleteNote(notes.id)}>Delete</button>
            </div>

            <p>{notes.body && notes.body.substr(0, 20) + "..."}</p>


            <small className="note-meta">Last modified {new Date(notes.lastModified).toLocaleDateString("en-GB", {
                hour:"2-digit",
                minute:"2-digit",
                second:"2-digit",
            })} </small>
        </div>
        ))}
    </div>
</div>
};

export default Sidebar;