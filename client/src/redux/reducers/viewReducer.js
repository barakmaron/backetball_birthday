const initState = {
    failed: false,
    successful: false,
    message: ""
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        default: {
            return { ...initState };
        }
    }
};

export default reducer;