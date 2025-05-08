{
    // Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.
    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
        const result3 = items.filter(item => item.rating >= 4);
        return result3;
    }
    filterByRating([{"title": "Pen", "rating": 3}, {"title": "Pencil", "rating": 4}, {"title": "Book", "rating": 4.1} ]);
}