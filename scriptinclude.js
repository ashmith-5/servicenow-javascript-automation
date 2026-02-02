var IncidentUtils = Class.create();
IncidentUtils.prototype = {
    initialize: function() {},

    calculatePriority: function(impact, urgency) {
        if (impact == 1 && urgency == 1)
            return 1;
        return 3;
    },

    type: 'IncidentUtils'
};
