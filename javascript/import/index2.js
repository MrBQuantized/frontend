
// We can export the functions after declaration

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
};

// exporting 
export { capitalizeString };

export const foo = "bar";
export const bar = "foo";
