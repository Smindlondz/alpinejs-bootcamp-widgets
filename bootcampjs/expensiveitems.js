const itemList = [{ name: 'apples', qty: 10 }, { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 },
{ name: 'apples', qty: 3 },
];
function findItemsOver20(itemList) {
    var results = [];
    for (var i = 0; i < itemList.length; i++) {
        var listItem = itemList[i];

        if (listItem.qty > 20) {
            results.push(listItem);
        };
    };
    return results;
};

function findItemsOver(itemList, threshold) {
    var results2 = [];

    for (var i = 0; i < itemList.length; i++) {
        var listItem = itemList[i];
        if (listItem.qty > threshold) {
            results2.push(listItem);
        };
    };
    return results2;
};