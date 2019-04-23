module.exports = {
    name: 'CustomerLabel',
    object: {
        label: {
            _type: 'string',
            _description:
                'The resource name of the label assigned to the customer.\n\nNote: the Customer ID portion of the label resource name is not\nvalidated when creating a new CustomerLabel.',
        },
        customer: {
            _type: 'string',
            _description: 'The resource name of the customer to which the label is attached.\nRead only.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'Name of the resource.\nCustomer label resource names have the form:\n`customers/{customer_id}/customerLabels/{label_id}`',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
