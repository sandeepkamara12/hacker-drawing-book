function pageCount(n, p) {
    let totalStart = 0;
    let totalEnd = 0;

    totalStart = Math.floor(p / 2);
    if (n % 2 == 0) {
        totalEnd = Math.ceil((n - p) / 2);
    }
    else {
        totalEnd = Math.floor((n - p) / 2);
    }
    return Math.min(totalStart, totalEnd);
}
pageCount(5, 4);
