module.exports = {
    name: 'SearchTermView',
    object: {
        ad_group: { _type: 'string', _description: 'The ad group the search term served in.' },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ADDED', description: 'Search term is added to targeted keywords.' },
                { s: 'EXCLUDED', description: 'Search term matches a negative keyword.' },
                { s: 'ADDED_EXCLUDED', description: 'Search term has been both added and excluded.' },
                { s: 'NONE', description: 'Search term is neither targeted nor excluded.' },
            ],
            _description: 'Indicates whether the search term is currently one of your\ntargeted or excluded keywords.',
        },
        search_term: { _type: 'string', _description: 'The search term.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the search term view.\nSearch term view resource names have the form:\n\n`customers/{customer_id}/searchTermViews/{campaign_id}~{ad_group_id}~\n{URL-base64 search term}`',
        },
    },
    methods: ['get', 'list'],
}