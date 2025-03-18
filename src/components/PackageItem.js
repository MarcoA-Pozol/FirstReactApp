import React from "react";

function PackageItem({item_name, is_packed}) {

    return (
        <div>
            <span>{item_name} {is_packed ? "✅" : "❌"}</span>
        </div>
    );
};

export default PackageItem;