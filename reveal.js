/**
 * @params items
 * @events onreveal
 * @params offset between 0 and 1
 */

const reveal = (items, onreveal, offset = 0) => {
    const config = {
        threshold: [offset],
    };
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > offset) {
                onreveal(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, config);
    items.length ? items.forEach((item) => observer.observe(item)) : observer.observe(items);
};

export default reveal;