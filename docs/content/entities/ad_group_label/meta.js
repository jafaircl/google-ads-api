module.exports = {
    name: 'AdGroupLabel',
    object: {
        label: { _type: 'string', _description: 'The label assigned to the ad group.' },
        ad_group: { _type: 'string', _description: 'The ad group to which the label is attached.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the ad group label.\nAd group label resource names have the form:\n`customers/{customer_id}/adGroupLabels/{ad_group_id}~{label_id}`',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
