var make_lazy = function (a) {
    return a.bind.apply(a, arguments)
};
