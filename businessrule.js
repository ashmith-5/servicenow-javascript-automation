(function executeRule(current, previous) {
    if (current.category == 'network') {
        current.assignment_group = 'Network Support';
    }
})();
