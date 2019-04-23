module.exports = {
    name: 'GenderView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the gender view.\nGender view resource names have the form:\n\n`customers/{customer_id}/genderViews/{ad_group_id}~{criterion_id}`',
        },
    },
    methods: ['get', 'list'],
}
