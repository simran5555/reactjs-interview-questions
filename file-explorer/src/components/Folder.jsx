import React, { useState } from 'react';

const Folder = ({ explorer }) => {
 const [expand, setExpand] = useState(false);

 if (explorer.isFolder) {
    return (
      <div>
        <div style={{display:"flex", width:"40%", justifyContent:"space-between"}}>
        <span onClick={() => setExpand(!expand)}>📁 {explorer.name}</span>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <button>Folder+</button>
          <button>File+</button>
        </div>
      </div>
          
        <div style={{ marginLeft: "10px", display: expand ? "block" : "none" }}>
          {explorer.items.map((item) => {
              return <Folder key={item.id} explorer={item} />;
          })
          }
        </div>
      </div>
    );
 } else {
    return (
      <React.Fragment>
        <span>📄 {explorer.name}</span>
        <br />
      </React.Fragment>
    );
 }
};


export default Folder