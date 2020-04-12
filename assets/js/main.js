// Wrap tables in a div so that they scroll responsively.
function wrapTable() {
    const tables = Array.from(document.querySelectorAll('table'));
    if (tables.length > 0) {
        tables.forEach((table) => {
            const tableWrapper = document.createElement('div');
            tableWrapper.className = 'table-wrapper';
            table.parentElement.replaceChild(tableWrapper, table);
            tableWrapper.appendChild(table);
        });
    }
}

document.addEventListener('DOMContentReady', wrapTable());
