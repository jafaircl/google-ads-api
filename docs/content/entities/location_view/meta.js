module.exports = {
    name: 'LocationView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the location view.\nLocation view resource names have the form:\n\n`customers/{customer_id}/locationViews/{campaign_id}~{criterion_id}`',
        },
    },
    methods: ['get', 'list'],
}