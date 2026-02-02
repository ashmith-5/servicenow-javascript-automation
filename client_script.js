function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') return;

    var impact = g_form.getValue('impact');
    var urgency = g_form.getValue('urgency');

    if (impact == '1' && urgency == '1') {
        g_form.setValue('priority', '1');
    } else if (impact == '2' && urgency == '2') {
        g_form.setValue('priority', '2');
    } else {
        g_form.setValue('priority', '3');
    }
}
